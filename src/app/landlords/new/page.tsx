'use client';

import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Home, MapPin, DollarSign, Image as ImageIcon, CheckCircle, ArrowRight, ArrowLeft, Send } from 'lucide-react';

const steps = [
  { id: 'details', title: 'Property Details', icon: Home },
  { id: 'media', title: 'Media & Pricing', icon: ImageIcon },
  { id: 'review', title: 'Review & Submit', icon: CheckCircle },
];

const detailsSchema = z.object({
  propertyType: z.string().min(1, 'Property type is required'),
  bedrooms: z.coerce.number().min(1, 'At least one bedroom is required'),
  bathrooms: z.coerce.number().min(1, 'At least one bathroom is required'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  amenities: z.array(z.string()).min(1, 'Select at least one amenity'),
  address: z.string().min(5, 'A valid address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
});

const mediaPricingSchema = z.object({
  rent: z.coerce.number().min(1000, 'Rent must be at least ₦1,000'),
  serviceCharge: z.coerce.number().optional(),
  agreementFee: z.coerce.number().optional(),
  cautionFee: z.coerce.number().optional(),
  photos: z.any().refine(files => files?.length > 0, 'At least one photo is required.'),
});

const formSchema = detailsSchema.merge(mediaPricingSchema);

const allAmenities = ["Parking", "24/7 Power", "Security", "Pool", "Gym", "Serviced", "Garden", "Air Conditioning", "Fitted Kitchen"];

const PropertyDetailsForm = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-6">
       <h3 className="text-2xl font-bold font-headline text-foreground">Property & Location</h3>
      <FormField control={control} name="propertyType" render={({ field }) => (
        <FormItem>
          <FormLabel>Property Type</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-secondary/50 rounded-lg h-12"><SelectValue placeholder="Select property type" /></SelectTrigger>
            </FormControl>
            <SelectContent>
              {["Flat/Apartment", "Detached Duplex", "Semi-Detached Duplex", "Terraced Duplex", "Penthouse"].map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )} />
      <div className="grid grid-cols-2 gap-4">
        <FormField control={control} name="bedrooms" render={({ field }) => (
          <FormItem>
            <FormLabel>Bedrooms</FormLabel>
            <FormControl><Input type="number" placeholder="e.g., 3" {...field} className="bg-secondary/50 rounded-lg h-12" /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={control} name="bathrooms" render={({ field }) => (
          <FormItem>
            <FormLabel>Bathrooms</FormLabel>
            <FormControl><Input type="number" placeholder="e.g., 4" {...field} className="bg-secondary/50 rounded-lg h-12" /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
      </div>
      <FormField control={control} name="description" render={({ field }) => (
        <FormItem>
          <FormLabel>Property Description</FormLabel>
          <FormControl><Textarea placeholder="Describe the key features of your property..." {...field} className="bg-secondary/50 rounded-lg min-h-[120px]" /></FormControl>
          <FormMessage />
        </FormItem>
      )} />
       <FormField control={control} name="address" render={({ field }) => (
            <FormItem>
                <FormLabel>Street Address</FormLabel>
                <FormControl><Input placeholder="e.g., 123 Admiralty Way" {...field} className="bg-secondary/50 rounded-lg h-12" /></FormControl>
                <FormMessage />
            </FormItem>
        )} />
        <FormField control={control} name="city" render={({ field }) => (
            <FormItem>
                <FormLabel>City / Area</FormLabel>
                <FormControl><Input placeholder="e.g., Lekki Phase 1" {...field} className="bg-secondary/50 rounded-lg h-12" /></FormControl>
                <FormMessage />
            </FormItem>
        )} />
        <FormField control={control} name="state" render={({ field }) => (
            <FormItem>
                <FormLabel>State</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="bg-secondary/50 rounded-lg h-12"><SelectValue placeholder="Select your state" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {["Lagos", "Abuja", "Rivers", "Ogun", "Oyo"].map(state => (
                            <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>
        )} />
      <FormField control={control} name="amenities" render={() => (
        <FormItem>
          <FormLabel>Amenities</FormLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {allAmenities.map((item) => (
              <FormField key={item} control={control} name="amenities" render={({ field }) => (
                <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...(field.value || []), item])
                          : field.onChange((field.value || []).filter((value: string) => value !== item));
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal text-muted-foreground">{item}</FormLabel>
                </FormItem>
              )} />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )} />
    </div>
  );
};

const MediaPricingForm = () => {
  const { control } = useFormContext();
  const [previews, setPreviews] = useState<string[]>([]);

  return (
    <div className="space-y-6">
        <h3 className="text-2xl font-bold font-headline text-foreground">Pricing & Photos</h3>
        <FormField control={control} name="rent" render={({ field }) => (
            <FormItem>
                <FormLabel>Annual Rent (₦)</FormLabel>
                <FormControl><Input type="number" placeholder="e.g., 5500000" {...field} className="bg-secondary/50 rounded-lg h-12" /></FormControl>
                <FormMessage />
            </FormItem>
        )} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField control={control} name="serviceCharge" render={({ field }) => (
                <FormItem>
                    <FormLabel>Service Charge (₦)</FormLabel>
                    <FormControl><Input type="number" placeholder="Optional" {...field} className="bg-secondary/50 rounded-lg h-12" /></FormControl>
                </FormItem>
            )} />
            <FormField control={control} name="agreementFee" render={({ field }) => (
                <FormItem>
                    <FormLabel>Agreement Fee (₦)</FormLabel>
                    <FormControl><Input type="number" placeholder="Optional" {...field} className="bg-secondary/50 rounded-lg h-12" /></FormControl>
                </FormItem>
            )} />
            <FormField control={control} name="cautionFee" render={({ field }) => (
                <FormItem>
                    <FormLabel>Caution Fee (₦)</FormLabel>
                    <FormControl><Input type="number" placeholder="Optional" {...field} className="bg-secondary/50 rounded-lg h-12" /></FormControl>
                </FormItem>
            )} />
        </div>
        <FormField
            control={control}
            name="photos"
            render={({ field: { onChange, value, ...rest } }) => (
            <FormItem>
                <FormLabel>Property Photos</FormLabel>
                <FormControl>
                <Input
                    type="file"
                    multiple
                    accept="image/*"
                    className="bg-secondary/50 rounded-lg h-12 pt-3"
                    onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                        onChange(files);
                        const newPreviews = Array.from(files).map(file => URL.createObjectURL(file));
                        setPreviews(newPreviews);
                    }
                    }}
                    {...rest}
                />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        {previews.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previews.map((src, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                    <img src={src} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
            </div>
        )}
    </div>
  );
};


const ReviewStep = () => {
    const { getValues } = useFormContext();
    const values = getValues();

    return (
        <div className="space-y-8 text-muted-foreground">
            <h3 className="text-2xl font-bold font-headline text-foreground">Review Your Listing</h3>
            <div className="space-y-2">
                <h4 className="font-headline text-lg font-semibold text-foreground">Property & Location</h4>
                <p><strong>Type:</strong> {values.propertyType}</p>
                <p><strong>Bedrooms:</strong> {values.bedrooms}</p>
                <p><strong>Bathrooms:</strong> {values.bathrooms}</p>
                <p><strong>Location:</strong> {values.address}, {values.city}, {values.state}</p>
                <p><strong>Amenities:</strong> {values.amenities?.join(', ')}</p>
                <p><strong>Description:</strong> {values.description}</p>
            </div>
             <div className="space-y-2">
                <h4 className="font-headline text-lg font-semibold text-foreground">Pricing & Media</h4>
                <p><strong>Annual Rent:</strong> ₦{Number(values.rent || 0).toLocaleString()}</p>
                {values.serviceCharge && <p><strong>Service Charge:</strong> ₦{Number(values.serviceCharge).toLocaleString()}</p>}
                {values.agreementFee && <p><strong>Agreement Fee:</strong> ₦{Number(values.agreementFee).toLocaleString()}</p>}
                {values.cautionFee && <p><strong>Caution Fee:</strong> ₦{Number(values.cautionFee).toLocaleString()}</p>}
                <p><strong>Media:</strong> {values.photos?.length || 0} photos uploaded.</p>
            </div>
        </div>
    );
};


export default function NewListingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const schemas = [detailsSchema, mediaPricingSchema, z.object({})];

  const methods = useForm({
    resolver: zodResolver(schemas[currentStep]),
    mode: 'onChange',
    defaultValues: {
      propertyType: '',
      bedrooms: undefined,
      bathrooms: undefined,
      description: '',
      amenities: [],
      address: '',
      city: '',
      state: '',
      rent: undefined,
      serviceCharge: undefined,
      agreementFee: undefined,
      cautionFee: undefined,
      photos: null,
    },
  });

  const { trigger, handleSubmit } = methods;

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  
  const onSubmit = (data: any) => {
    console.log(data);
    alert('Property submitted successfully!');
    // Here you would typically send data to your backend
  };
  
  const progress = ((currentStep + 1) / steps.length) * 100;
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-4xl py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-headline text-center mb-4">List Your Property</h1>
        <p className="text-muted-foreground text-lg text-center mb-12">Join thousands of landlords finding verified tenants on Propabridge.</p>
        
        <div className="mb-12">
            <Progress value={progress} className="w-full h-2" />
             <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                {steps.map((step, index) => (
                    <div key={step.id} className={cn(
                        "flex flex-col items-center gap-2 transition-colors",
                        index === currentStep ? 'text-primary' : 'text-muted-foreground',
                        index < currentStep ? 'text-primary/80' : ''
                    )}>
                        <div className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors",
                            index === currentStep ? 'bg-primary/10 border-primary' : 'border-border',
                            index < currentStep ? 'bg-primary/10 border-primary' : ''
                        )}>
                            <step.icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold">{step.title}</span>
                    </div>
                ))}
            </div>
        </div>

        <Card className="bg-card/50 border-border/50 rounded-2xl p-8 backdrop-blur-sm">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {currentStep === 0 && <PropertyDetailsForm />}
                    {currentStep === 1 && <MediaPricingForm />}
                    {currentStep === 2 && <ReviewStep />}

                    <div className="mt-10 flex justify-between">
                        <Button type="button" variant="secondary" onClick={prevStep} disabled={currentStep === 0} className="px-8" rounded="full">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>

                        {currentStep < steps.length - 1 ? (
                            <Button type="button" onClick={nextStep} className="px-8 shadow-glow-primary" rounded="full">
                                Next <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button type="submit" className="px-8 shadow-glow-primary" rounded="full">
                                Submit Listing <Send className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </Card>
      </div>
    </div>
  );
}

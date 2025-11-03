'use server';

/**
 * @fileOverview A flow that uses AI to review and suggest improvements to a property listing.
 *
 * @interface AIListingOptimizationInput - The input type for the aiListingOptimization function.
 * @interface AIListingOptimizationOutput - The return type for the aiListingOptimization function.
 * @function aiListingOptimization - A function that handles the property listing optimization process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIListingOptimizationInputSchema = z.object({
  propertyDescription: z
    .string()
    .describe('The current description of the property listing.'),
  propertyType: z.string().describe('The type of the property (e.g., apartment, house).'),
  propertyLocation: z.string().describe('The location of the property.'),
  propertyBedrooms: z.number().describe('The number of bedrooms in the property.'),
  propertyPrice: z.string().describe('The price of the property.'),
  propertyFeatures: z.string().describe('A comma-separated list of features and amenities.'),
});
export type AIListingOptimizationInput = z.infer<typeof AIListingOptimizationInputSchema>;

const AIListingOptimizationOutputSchema = z.object({
  optimizedDescription: z
    .string()
    .describe('An improved description of the property listing.'),
  suggestedKeywords: z
    .string()
    .describe('Keywords to attract more potential renters.'),
  headline: z.string().describe('An attention-grabbing headline for the listing.'),
});
export type AIListingOptimizationOutput = z.infer<typeof AIListingOptimizationOutputSchema>;

export async function aiListingOptimization(
  input: AIListingOptimizationInput
): Promise<AIListingOptimizationOutput> {
  return aiListingOptimizationFlow(input);
}

const aiListingOptimizationPrompt = ai.definePrompt({
  name: 'aiListingOptimizationPrompt',
  input: {schema: AIListingOptimizationInputSchema},
  output: {schema: AIListingOptimizationOutputSchema},
  prompt: `You are an AI real estate expert who can optimize property listings to attract more potential renters.

  Review the provided property details and suggest improvements to the listing description, headline, and keywords.

  Property Type: {{{propertyType}}}
  Property Location: {{{propertyLocation}}}
  Number of Bedrooms: {{{propertyBedrooms}}}
  Property Price: {{{propertyPrice}}}
  Features and Amenities: {{{propertyFeatures}}}
  Current Description: {{{propertyDescription}}}

  Based on the above information, provide an optimized listing description, a catchy headline, and suggested keywords to attract more potential renters.

  Ensure the optimized description is engaging, accurate, and highlights the best aspects of the property.
  The suggested keywords should be relevant to the property and its location, to improve search visibility.
  The headline should be attention grabbing, a summary of the best qualities the property has to offer.

  Output should be a JSON in the following format:
  {
    "optimizedDescription": "",
    "suggestedKeywords": "",
    "headline": ""
  }`,
});

const aiListingOptimizationFlow = ai.defineFlow(
  {
    name: 'aiListingOptimizationFlow',
    inputSchema: AIListingOptimizationInputSchema,
    outputSchema: AIListingOptimizationOutputSchema,
  },
  async input => {
    const {output} = await aiListingOptimizationPrompt(input);
    return output!;
  }
);


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { propertyPlaceholder } from '@/lib/placeholder-data';
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function MyListingsPage() {
    const listings = propertyPlaceholder; // Mock data

    const getStatusVariant = (status: string) => {
        switch(status) {
            case 'Active': return 'default';
            case 'Pending': return 'secondary';
            case 'Rented': return 'outline';
            default: return 'secondary';
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold font-headline">My Listings</h1>
                <Button href="/landlords/new">Create New Listing</Button>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Property</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Views</TableHead>
                            <TableHead>Inquiries</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {listings.map(listing => (
                            <TableRow key={listing.id}>
                                <TableCell>
                                    <div className="font-medium">{listing.type}</div>
                                    <div className="text-sm text-muted-foreground">{listing.location}</div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={getStatusVariant('Active')}>Active</Badge>
                                </TableCell>
                                <TableCell>{listing.price}/yr</TableCell>
                                <TableCell>{(Math.random() * 1000 + 200).toFixed(0)}</TableCell>
                                <TableCell>{(Math.random() * 20).toFixed(0)}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

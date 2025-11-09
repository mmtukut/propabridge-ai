import { NextResponse } from 'next/server';
import { propertyDetails, similarProperties } from '@/lib/placeholder-data';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // In a real application, you would use the `id` to fetch the specific
  // property from your database.
  
  // For this mock, we check if the requested ID matches our placeholder detail ID.
  if (id === propertyDetails.id) {
    return NextResponse.json({
      listing: propertyDetails,
      similar: similarProperties,
    });
  }

  // If no property is found, return a 404 error.
  return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
}

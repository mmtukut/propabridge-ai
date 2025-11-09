import { NextResponse } from 'next/server';
import { propertyPlaceholder } from '@/lib/placeholder-data';

export async function GET(request: Request) {
  // In a real application, you would parse search parameters from the request URL
  // and query your database or search service (like Algolia/Elasticsearch).
  
  // For this mock, we are just returning the placeholder data.
  const results = propertyPlaceholder;

  return NextResponse.json({
    results,
    total: results.length,
    page: 1,
    hasMore: false,
  });
}

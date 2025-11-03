'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing a property listing and providing reasons why it's a good match.
 *
 * - aiSummaryPropertyListing - An async function that takes property details as input and returns an AI-generated summary.
 * - AiSummaryPropertyListingInput - The input type for the aiSummaryPropertyListing function.
 * - AiSummaryPropertyListingOutput - The output type for the aiSummaryPropertyListing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSummaryPropertyListingInputSchema = z.object({
  propertyType: z.string().describe('Type of property e.g. apartment, house, duplex'),
  location: z.string().describe('Location of the property'),
  price: z.string().describe('Price of the property'),
  bedrooms: z.number().describe('Number of bedrooms'),
  bathrooms: z.number().describe('Number of bathrooms'),
  amenities: z.string().describe('A comma separated string of amenities the property has'),
  description: z.string().describe('A detailed description of the property'),
  userRequirements: z.string().describe('The users requirements for a property'),
});
export type AiSummaryPropertyListingInput = z.infer<typeof AiSummaryPropertyListingInputSchema>;

const AiSummaryPropertyListingOutputSchema = z.object({
  summary: z.string().describe('A short summary of the property listing and why it is a good match for the user.'),
});
export type AiSummaryPropertyListingOutput = z.infer<typeof AiSummaryPropertyListingOutputSchema>;

export async function aiSummaryPropertyListing(input: AiSummaryPropertyListingInput): Promise<AiSummaryPropertyListingOutput> {
  return aiSummaryPropertyListingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSummaryPropertyListingPrompt',
  input: {schema: AiSummaryPropertyListingInputSchema},
  output: {schema: AiSummaryPropertyListingOutputSchema},
  prompt: `You are an AI assistant designed to provide summaries of property listings.

Given the following property details and user requirements, create a concise summary (one sentence) of the property and explain why it's a good match for the user. Focus on the most relevant aspects based on the user's needs.

Property Type: {{{propertyType}}}
Location: {{{location}}}
Price: {{{price}}}
Bedrooms: {{{bedrooms}}}
Bathrooms: {{{bathrooms}}}
Amenities: {{{amenities}}}
Description: {{{description}}}
User Requirements: {{{userRequirements}}}

Summary: `,
});

const aiSummaryPropertyListingFlow = ai.defineFlow(
  {
    name: 'aiSummaryPropertyListingFlow',
    inputSchema: AiSummaryPropertyListingInputSchema,
    outputSchema: AiSummaryPropertyListingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';

/**
 * @fileOverview A property search AI agent.
 *
 * - aiPropertySearch - A function that handles the property search process.
 * - AiPropertySearchInput - The input type for the aiPropertySearch function.
 * - AiPropertySearchOutput - The return type for the aiPropertySearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPropertySearchInputSchema = z.object({
  description: z.string().describe('The description of the desired property.'),
});
export type AiPropertySearchInput = z.infer<typeof AiPropertySearchInputSchema>;

const AiPropertySearchOutputSchema = z.object({
  propertyMatches: z
    .string()
    .describe('A summary of the properties matching the description.'),
});
export type AiPropertySearchOutput = z.infer<typeof AiPropertySearchOutputSchema>;

export async function aiPropertySearch(input: AiPropertySearchInput): Promise<AiPropertySearchOutput> {
  return aiPropertySearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPropertySearchPrompt',
  input: {schema: AiPropertySearchInputSchema},
  output: {schema: AiPropertySearchOutputSchema},
  prompt: `You are an AI assistant that helps users find properties based on their description.\n\nUse the following information to find the best property matches.\n\nDescription: {{{description}}}`,
});

const aiPropertySearchFlow = ai.defineFlow(
  {
    name: 'aiPropertySearchFlow',
    inputSchema: AiPropertySearchInputSchema,
    outputSchema: AiPropertySearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

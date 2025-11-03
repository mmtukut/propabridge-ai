'use server';

/**
 * @fileOverview AI-powered market data analysis flow.
 *
 * - analyzeMarketData - A function that analyzes market data for a given location.
 * - MarketDataInput - The input type for the analyzeMarketData function.
 * - MarketDataOutput - The return type for the analyzeMarketData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MarketDataInputSchema = z.object({
  location: z.string().describe('The location to analyze.'),
});
export type MarketDataInput = z.infer<typeof MarketDataInputSchema>;

const MarketDataOutputSchema = z.object({
  averagePrice: z.string().describe('The average property price in the location.'),
  priceTrend: z
    .string()
    .describe('The price trend in the location (e.g., increasing, decreasing, stable).'),
  aiPrediction: z
    .string()
    .describe('AI prediction for property prices in the next 30 days.'),
});
export type MarketDataOutput = z.infer<typeof MarketDataOutputSchema>;

export async function analyzeMarketData(
  input: MarketDataInput
): Promise<MarketDataOutput> {
  return analyzeMarketDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketDataPrompt',
  input: {schema: MarketDataInputSchema},
  output: {schema: MarketDataOutputSchema},
  prompt: `You are an AI real estate market analyst. Analyze the market data for
  the following location and provide insights and predictions for property prices.

Location: {{{location}}}

Provide the average property price, the price trend (increasing, decreasing, or stable), and an AI prediction for property prices in the next 30 days.

Keep it under 200 words.
`,
});

const analyzeMarketDataFlow = ai.defineFlow(
  {
    name: 'analyzeMarketDataFlow',
    inputSchema: MarketDataInputSchema,
    outputSchema: MarketDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

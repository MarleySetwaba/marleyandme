'use server';

import { generateText, streamText, tool } from 'ai';
import { google } from '@ai-sdk/google';
import { createStreamableUI, createStreamableValue } from 'ai/rsc';

import { z } from 'zod';
import React, { ReactNode } from 'react';
import Schedule from "@/components/Schedule";
export interface Message {
  role: 'user' | 'assistant';
  content: string;
  display?: ReactNode;

}

export async function continueConversation(history: Message[]) {

  const stream = createStreamableUI();


    const { text, toolResults } = await generateText({
      model: google('models/gemini-1.5-flash-latest'),
      system:
        "You are a business analyst and programmer bot named Marley. You answer all questions like a business analyst/programmer would. Keep your answers as short as possible, never more than 3 paragraphs.",
      messages: history,
      tools: {
        showSchedule: tool({
          description: "Get my schedule for a specfic day in the format 'YYYY-MM-DD'",
          parameters: z.object({
            day: z.string().describe('The day in YYYY-MM-DD')
          }),
          execute: async ({ day }) => {
            const dateFormat = z.string().date()
            const todayFormat = dateFormat.parse(day)
            stream.done(<Schedule start_date={todayFormat}/>)
            return `Heres Marleys'Schedule for ${day}`
          }
        })
      }
    });



  return {
    messages: [
      ...history,
      {
        role: 'assistant' as const,
        content:
          text || toolResults.map(toolResult => toolResult.result).join(),
        display: stream.value,
      },
    ],
  };

}
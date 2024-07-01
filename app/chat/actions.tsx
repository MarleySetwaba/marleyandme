"use server"
import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import { google } from "@ai-sdk/google"
import { generateId } from "ai";
import { ReactNode } from "react";
import { date, z } from "zod";
import Schedule from "@/components/Schedule";
import BotMessage from "@/components/AI/BotMessage";

export interface ServerMessage {
  role: 'user' | 'assistant';
  content: string
}

export interface ClientMessage {
  id: string;
  role: 'user' | 'assistant';
  display: ReactNode;
}

export async function continueConversation(input: string): Promise<ClientMessage>{

const history = getMutableAIState();

const result = await streamUI({
  model: google('models/gemini-1.5-flash-latest'),
  system: "You are a business analysis and programming bot named Marley. You answer all user questions like a business analysis and programmer. Keep your answers as short as possible, and no more than 3 paragraphs",
  messages: [...history.get(), {role: 'user', content: input}],
  text: ({ content, done}) => {
    if(done){
      history.done((messages: ServerMessage[]) => [
        ...messages, {role: 'assistant', content}
      ])
    }
    return <BotMessage chat={content}/>
  },
  tools: {
    showSchedule: {
      description: 'Display the schedule in the UI with dates that match the users query',
      parameters: z.object({
        date: z.string().describe('The date the user wants to check the schedule for. example format "2024-06-29"')
      }),
      generate: async ({ date }) => {
        history.done((messages: ServerMessage[]) => [
          ...messages,
          {
            role: 'assistant',
            content: `Showing Marleys Schedule for ${date} `
          }
        ])
        return <Schedule start_date={date}/>
      }
    }
  }
})

  return {
    id: generateId(),
    role: 'assistant',
    display: result.value
  }

}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});
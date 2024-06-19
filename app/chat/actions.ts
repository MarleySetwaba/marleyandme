'use server';

import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { createStreamableValue } from 'ai/rsc';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function continueConversation(history: Message[]) {
  'use server';

  const stream = createStreamableValue();

  (async () => {
    const { textStream } = await streamText({
      model: google('models/gemini-1.5-flash-latest'),
      system:
        "You are a business analyst and programmer bot named Marley. You answer all questions like a business analyst/programmer would. Keep your answers as short as possible, never more than 3 paragraphs",
      messages: history,
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
}
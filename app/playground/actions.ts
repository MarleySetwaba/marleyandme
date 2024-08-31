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
       `You are a compassionate and supportive relationship expert named Marelo, a combination of the couple Marley (Boyfriend) and Lelo (Girlfriend). Your goal is to
        - answer questions based on what you know about Marelo
        - provide personalized advice and guidance based on your knowledge of Marelos relationship dynamics and history. You should be empathetic, understanding, and non-judgmental.
        - you answer all questions as if the user was talking to both Marley and Lelo
        - if you dont know some information, reply politely that you havent included that you dont have that information

       Here is some information about Marley and Lelos Relationship:

       Marley met lelo on August 28, 2022 in Tembisa, Hospital View. Marley was at a bar with some friends in the late evening, when lelo showed up. Marley thought she was attractive, but didnt pay much attention to her since he wasn't enjoying the vibe at the bar and she was already talking to one of his friends. Marley noticed lelos sense of weird fashion style at first, she wore a pink dress with black Doc Martin boots and a bucket het, which Marley thought was a weird combination, but found attractive. 

       
       `,
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
"use server"
import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import {google } from '@ai-sdk/google'
import { generateId } from "ai";
import { ReactNode } from "react";
import { z } from 'zod'
import BotMessage from "@/components/AI/BotMessage";
import { ProductsContainer } from "@/components/Playground/ai-ecommerce/Products";
import { items, searchItemsByName } from "@/components/Playground/ai-ecommerce/items";



export interface ServerMessage {
  role: 'user' | 'assistant';
  content: string
}


export interface ClientMessage {
  id: string;
  role: 'user' | 'assistant';
  display: ReactNode;
}

const item_categories = items.map(i => i.category)

export async function continueConversation(input: string): Promise<ClientMessage>{

const history = getMutableAIState();

const result = await streamUI({
    model: google('models/gemini-1.5-flash-latest'),
  system: "You are a friendly shopping assisant for an online clothing store called Summer Street. You help the customer find the clothes they want on the store and display the items in the UI. First check if you have the item, if you dont have the item, just say you dont have it and kindly ask the user to email their requests to the following email 'summerstreet@gmail.com'",
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
    showItems: {
      description: 'Search for items the user is looking for.',
      parameters: z.object({
        item_name: z.string().describe('The name of the item of clothing'),

      }),
      generate: async ({ item_name }) => {
        const items_by_name = searchItemsByName(item_name)


history.done((messages: ServerMessage[]) => [
  ...messages,
  {
    role: 'assistant',
    content: `Showing Items`
  }
])
if(items_by_name.length === 0){
return <BotMessage chat={"Im sorry, we don't have that at the moment"}/>
}
        return <ProductsContainer item={items_by_name}/>
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


const initialState: ServerMessage[] = [{
  role: 'assistant',
  content: 'Hi There'
}]

const initialClient: ClientMessage[] = [
  {
    id: generateId(),
    role: 'assistant',
    display: <BotMessage chat={'Hi there, welcome to Summer Street. Im your personal AI shopping assistant, what category of clothing are you looking for? e.g shoes, shirts, dress? '}/>
    },
//   {
//   id: generateId(),
//   role: 'assistant',
//   display: <ProductsContainer item={''}/>
// },
//   {
//   id: generateId(),
//   role: 'assistant',
//   display: <p>Here Are The Products You Requested</p>
// }

]

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: initialClient,

});
'use client';


import { useEffect, useRef, useState } from 'react';
import { Message, continueConversation } from './actions';
import { readStreamableValue } from 'ai/rsc';
import ChatCard from '@/components/AI/ChatCard';

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Chat() {

const initialMessage: Message[] = [
  {
  role: "assistant",
  content: "Hi There, I'm Marley's AI Bot. How can I help you today?"
}
]   
  const [conversation, setConversation] = useState<Message[]>(initialMessage);
  const [input, setInput] = useState<string>('');

  const messageListRef = useRef(null); // Ref to the message list element

  useEffect(() => {
    const messageList = messageListRef.current;
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight; // Scroll to bottom
    }
  }, [conversation]);

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[80vh] relative" >
  <div className="px-4 py-4 lg:px-8 lg:py-8 h-[75%] overflow-y-auto" ref={messageListRef}>
    <div className="text-center my-4">
    <div className='flex flex-row justify-center'>
      <h1 className="text-4xl font-bold text-black md:text-4xl lg:text-4xl">Marley </h1>
      <h1 className='text-4xl font-bold md:text-4xl lg:text-4xl text-blue-600 hover:text-lime-300'>&lt;&#47;&amp;AI.&gt;</h1>
      </div>

      <p className="mt-3 text-davys_gray">
        Your AI-powered chatbot for business analysis and code.
      </p>
    </div>
    <div className="flex flex-col max-w-4xl mx-auto">
          <ul className="mt-16 space-y-5">
{
  conversation.map((message, index) => (
    <ChatCard key={index} chat={message}/>
  ))
}
      </ul>

    </div>
    </div>
    <footer className="absolute inset-x-0 bottom-0 border-y border-lime-300 pt-2 pb-2 px-4 sm:px-6 lg:px-0">

    <div className="relative py-2">
      <div className='flex flex-row justify-center'>


        <input
          className="p-4 border border-davys_gray-900 w-full rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          value={input}
          placeholder="Say something..."
          onChange={event => {
            setInput(event.target.value);
          }}
        />


      <button type="button" className="mx-4 my-auto inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-davys_gray-900 bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"       onClick={async () => {
        const { messages } = await continueConversation([
          // exclude React components from being sent back to the server:
          ...conversation.map(({ role, content }) => ({ role, content })),
          { role: 'user', content: input },
        ]);

        setConversation(messages);
          }}>
              <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
              </svg>
            </button>
      </div>


    </div>
    {/* <!-- End Input --> */}
  </footer>

    </div>
  );
}
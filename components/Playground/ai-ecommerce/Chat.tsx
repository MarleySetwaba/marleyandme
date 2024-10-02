"use client"

import { ClientMessage } from '@/app/marley/chat/actions';
import { generateId } from 'ai';
import { useChat } from 'ai/react'
import { useActions, useUIState } from 'ai/rsc';
import React, { useEffect, useRef, useState } from 'react'

const Chat = () => {
  
  const [conversation, setConversation] = useUIState();
  const [input, setInput] = useState<string>('');
  const { continueConversation } = useActions()

  const messageListRef = useRef<HTMLUListElement>(null); // Ref to the message list element

  useEffect(() => {
    const messageList = messageListRef.current;
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight; // Scroll to bottom
    }
  }, [conversation]);


  return (

    <main className="h-screen flex flex-col pb-6">
    <section className="h-full flex flex-col justify-center">
      <div className="mt-2 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
<h1 className='text-2xl text-lime-500 tracking-tighter font-semibold'>Summer Street</h1>
      </div>
  
  
      <div className="mt-5 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">

          <input type="text" className="p-4 block w-full border border-lime-500 rounded-full text-sm  disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Ask me anything..."  value={input}      onChange={event => {
            setInput(event.target.value);
          }}/>
          <div className="absolute top-1/2 end-2 -translate-y-1/2">
            {/* <button type="button" className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
            </button> */}
            <button type="button" 
                  onClick={async () => {
                    setConversation((currentConversation: ClientMessage[]) => [
                      ...currentConversation,
                      {id: generateId(), role: 'user', display: input}
                    ]);
                    
                    
                    const message = await continueConversation(input);
                    setInput('')
                    
                    setConversation((currentConversation: ClientMessage[]) => [
                      ...currentConversation,
                      message
                    ])
                          }}
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-lime-500 text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:bg-neutral-800 dark:hover:text-white dark:focus:text-white">
        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
              </svg>            </button>
          </div>

        </div>
      </div>



    <section className="container px-0 flex flex-col flex-grow gap-4 mx-auto max-w-6xl">
        <ul ref={messageListRef} className="h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4">
            {conversation.map(m => (
                <div>
                    {m.role === 'user' ? (
                        <li key={m.id} className="flex flex-row">
                            <div className="rounded-xl p-4 bg-background shadow-md flex">
                                {m.display}
                            </div>
                        </li>
                    ) : (
                        <li key={m.id} className="flex flex-row-reverse">
                            <div className="rounded-xl p-4 bg-background shadow-md flex md:w-3/4 w-full">
                                {m.display}
                            </div>
                        </li>
                    )}
                </div>
            ))}
        </ul >
    </section>
    </section>

  
    <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-xs text-gray-600 dark:text-neutral-500">© 2024 Marley&amp;Me</p>
    </footer>
  </main>

  )
}

export default Chat
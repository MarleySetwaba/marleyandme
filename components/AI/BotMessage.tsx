"use client"
import { useStreamableText } from '@/lib/use-streamable-texts'
import { StreamableValue } from 'ai/rsc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BotMessage = ({chat}: {chat: string | StreamableValue<string>}) => {
    const text = useStreamableText(chat)
  return (
    <div className="flex gap-x-2 ">
        <Image src='/icon1.png' height={30} width={30} className='rounded-full size-5 flex-shrink-0' alt='Logo'/>
      <div className="rounded-lg px-3">
        <div className="mb-1.5 text-sm text-davys_gray">
          <Markdown
          children={text}
          components={
          {
            a(props){
       return (
         <Link href={props.href} className='text-blue-600 font-bold'>{props.children}</Link>
       )
            },
            p(props){
              return (
                <p className="text-sm text-davys_gray pb-3">{props.children}</p>
              )
            },
            ul(props){
              return (
                <ul className='list-decimal p-3'>
                {props.children}
                </ul>
              )
            },
            li(props){
              return(
                <li className='text-sm text-davys_gray'>{props.children}</li>
              )
            },
            code(props){
              return (
                <SyntaxHighlighter language="javascript" style={coldarkDark}>{props.children}</SyntaxHighlighter>
              )
            }

          }
          }
          />
         </div>
    </div>
    </div> 
  )
}

export default BotMessage
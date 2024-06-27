import { Message } from '@/app/chat/actions'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'




const ChatCard = ({chat}: {chat: Message}) => {
const isUser = chat.role === "user"
  return (
    <>
{
    isUser ? (

        <li className="max-w-xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
        <div className="grow text-end space-y-3">
          {/* <!-- Card --> */}
          <div className="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-davys_gray-900">
              {chat.content}
            </p>
          </div>
          {/* <!-- End Card --> */}
        </div>

        <span className="flex-shrink-0 inline-flex items-center justify-center size-[30px] rounded-full bg-davys_gray-600">
          <span className="text-xs font-light text-davys_gray-900 leading-none">You</span>
        </span>
      </li>

        
    ) : (
      <li className="flex gap-x-2 sm:gap-x-4">
      <svg className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M97.8357 54.6682C177.199 59.5311 213.038 52.9891 238.043 52.9891C261.298 52.9891 272.24 129.465 262.683 152.048C253.672 173.341 100.331 174.196 93.1919 165.763C84.9363 156.008 89.7095 115.275 89.7095 101.301" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3318 190.694C-10.6597 291.485 121.25 273.498 148.233 295.083" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3301 190.694C99.7917 213.702 101.164 265.697 100.263 272.898" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M208.308 136.239C208.308 131.959 208.308 127.678 208.308 123.396" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M177.299 137.271C177.035 133.883 177.3 126.121 177.3 123.396" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M203.398 241.72C352.097 239.921 374.881 226.73 312.524 341.851" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M285.55 345.448C196.81 341.85 136.851 374.229 178.223 264.504" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M180.018 345.448C160.77 331.385 139.302 320.213 120.658 304.675" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C219.024 205.562 219.594 220.898 219.594 236.324" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C225.896 202.037 232.97 209.77 241.777 230.327" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M80.1174 119.041C75.5996 120.222 71.0489 119.99 66.4414 120.41" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M59.5935 109.469C59.6539 117.756 59.5918 125.915 58.9102 134.086" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M277.741 115.622C281.155 115.268 284.589 114.823 287.997 114.255" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M291.412 104.682C292.382 110.109 292.095 115.612 292.095 121.093" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M225.768 116.466C203.362 113.993 181.657 115.175 160.124 118.568" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    
        <div className=" rounded-lg p-3 space-y-3">
        <div className="space-y-1.5">
          <div className="mb-1.5 text-sm text-davys_gray">
            <Markdown
            children={chat.content}
            components={
            {
              a(props){
         return (
           <Link href={props.href} className='text-blue-600 font-bold'>{props.children}</Link>
         )
              },
              p(props){
                return (
                  <p className="text-sm text-davys_gray py-3">{props.children}</p>
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
              }

            }
            }
            />
           </div>
           <div className='h-full'>
           {chat.display}
           </div>
              </div>

      </div>
      </li>    )
}
</>
  )
}


export default ChatCard
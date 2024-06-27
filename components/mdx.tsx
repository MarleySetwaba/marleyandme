import type { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image, {ImageProps} from 'next/image'
import Link from 'next/link'

const components = {
    h1: ({ children }) =>   <h1 className="text-2xl font-bold md:text-3xl text-center">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold text-center">{children}</h2>,
    p: ({children}) => <p className="text-lg text-davys_gray py-3">{children}</p>,
    blockquote: ({children}) =>  <blockquote className="text-center p-4 sm:px-7">{children}</blockquote>,
    img: (props) => <Image src={props.src} width={300} height={300} className="w-full object-cover rounded-xl" alt={props.alt}/>,
    a: (props) => <Link href={props.href} className='text-blue-600 font-bold'>{props.children}</Link>

    
}

export function CustomMDX(props){
    return (
        <MDXRemote
          {...props}
          components={{ ...components, ...(props.components || {}) }}
        />
      )
  
}

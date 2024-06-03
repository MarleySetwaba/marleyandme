import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) =>   <h1 className="text-2xl font-bold md:text-3xl text-center ">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold text-center">{children}</h2>,
    p: ({children}) => <p className="text-lg text-davys_gray py-3">{children}</p>,
    blockquote: ({children}) =>  <blockquote className="text-center p-4 sm:px-7">{children}</blockquote>,
    ...components,
  }
}
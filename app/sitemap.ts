import { getBlogPosts } from "./marley/blog/utils"


// export const baseUrl = 'http://localhost:3000'
export const baseUrl = 'https://marleyandme.vercel.app/marley'
// 
export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}

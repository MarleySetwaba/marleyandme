import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { baseUrl } from '@/app/sitemap'
import { formatDate, getBlogPosts } from '@/app/blog/utils'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <div className='max-w-[42rem] px-4 pt-3  pb-12 sm:px-6 lg:px-8 mx-auto overflow-hidden'>
      <h1 className="font-semibold text-2xl tracking-tighter text-center">
        {post.metadata.title}
      </h1>
      <div className=" mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="">
<CustomMDX source={post.content}/>
</article>
</div>
    </section>
  )
}
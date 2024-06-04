import { getBlogPosts, getBlogsByCategory } from "@/app/blog/utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('category')


  if(!query){
    const allBlogs = getBlogPosts()
    console.log(allBlogs)
    return Response.json(allBlogs)
  }

  const categoryBlogs = getBlogsByCategory(query)
  console.log(categoryBlogs)
 return Response.json(categoryBlogs)

}
import Image from "next/image";
import React from "react";
import Tags from "../Tags";
import Link from "next/link";
import { Metadata } from "@/app/blog/utils";
import { BlogArticle } from "./BlogList";
import { profile_img } from "@/lib/constants";


type BlogCardProps = Omit<BlogArticle, 'content'>

const BlogCard = ({ metadata, slug }: BlogCardProps ) => {
  return (
    <Link className="group relative block rounded-xl" href={`/blog/${slug}`}>
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
        <Image
          width={500}
          height={500}
          className="size-full absolute top-0 start-0 object-cover"
          src={metadata.image}
          alt="Image Description"
        />
      </div>

      <div className="absolute top-0 inset-x-0 z-10">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                width={500}
                height={500}
                className="size-[46px] border-2 border-white rounded-full"
                src={profile_img}
                alt="Image Description"
              />
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-seasalt">Malesela Setwaba</h4>
              <p className="text-xs text-seasalt-700">{metadata.publishedAt}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-seasalt group-hover:text-white/80">
            {metadata.title}
          </h3>
          <div className="mt-2 max-h-10 overflow-hidden w-full">
            {/* {article.tags && article.tags.map((i) => <Tags key={i} title={i} />)} */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

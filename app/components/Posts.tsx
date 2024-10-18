import { client, urlFor } from '@/sanity/client';
import { defineQuery } from 'next-sanity';
import { Post } from '../../typing';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const postQuery = defineQuery(`
  *[_type == "post"] {
    _id,
    title,
    author->{
      name,
      image
    },
    description,
    mainImage,
    slug,
    body
  }
`);

export default async function Posts() {
  const posts: Post[] = await client.fetch(postQuery, {}, { next: { revalidate: 60 } });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10 p-2 md:p-6">
      {posts?.map(post => (
        <Link key={post._id} href={`/posts/${post.slug.current}`}>
          <div className="group border rounded-lg overflow-hidden">
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage)?.url() || ''}
                alt={post.title}
                width={500}
                height={500}
                className="w-full object-cover h-60 group-hover:scale-105 transition-transform duration-200 ease-in-out"
              />
            )}
            <div className="flex justify-between items-center p-2">
              <div>
                <p className="text-md font-bold leading-tight mb-3">{post.title}</p>
                <p className="text-sm">
                  {post.description} by{' '}
                  <span className="italic font-semibold">{post.author.name}</span>
                </p>
              </div>
              {post.author.image && (
                <Image
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image)?.url() || ''}
                  alt={post.author.name}
                  height={500}
                  width={500}
                />
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

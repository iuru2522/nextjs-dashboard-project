import BlogPosts from '@/app/ui/blog/posts';
import React from 'react';
import { getBlogPosts } from '@/app/lib/data';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Page() {
  // const query = searchParams?.query || '';
  const blogPosts = await getBlogPosts();
  // console.log(blogPosts);
  return (
    <main>
      <BlogPosts blogPosts={blogPosts} />
    </main>
  );
}

import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { BlogPost } from '@/app/lib/definitions';

export default function BlogPosts({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Blog Posts
      </h1>
      <Search placeholder="Search blog posts..." />
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts?.map((post) => (
          (<div
            key={post.id}
            className="block overflow-hidden rounded-md shadow-md hover:shadow-lg">

            <div className="relative h-64">
              <Image
                src={post.image_url}
                layout="fill"
                objectFit="cover"
                alt={post.title}
              />
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">{post.title}</h2>
              <div className="mt-4 flex items-center">
                <Image
                  src={post.author} // Assuming post.author is the URL of the avatar
                  className="rounded-full"
                  alt={post.author}
                  width={24}
                  height={24}
                />
                <p className="ml-2 text-sm text-gray-700">
                  {post.author}
                </p>
              </div>
            </div>

          </div>)
        ))}
      </div>
    </div>
  );
}

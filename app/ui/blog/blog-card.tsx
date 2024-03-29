import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { BlogPost } from '@/app/lib/definitions';

export default function SingleBlogPost({ blogPosts }: { blogPosts: BlogPost }) {
  return (
    <div className="w-full">


      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="block overflow-hidden rounded-md shadow-md">
              <div className="p-4">
                <Image
                  src={blogPosts.author} // Assuming post.author is the URL of the avatar
                  className="rounded-full"
                  alt={blogPosts.author}
                  width={24}
                  height={24}
                />

                <h2 className="mb-2 text-lg font-semibold">
                  {blogPosts.title}
                </h2>
                <div className="mt-4 flex items-center"></div>
                <p className=" pt-10 text-sm text-gray-700">
                  {blogPosts.content}
                </p>
                <p className=" pt-10 text-sm text-gray-700">
                  {blogPosts.date.toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}




// import Image from 'next/image';
// import { lusitana } from '@/app/ui/fonts';
// import { BlogPost } from '@/app/lib/definitions';

// export default function SingleBlogPost({ blogPosts }: { blogPosts: BlogPost }) {
//   return (
//     <div className="w-full">
//       <div className="mt-6 overflow-hidden rounded-md shadow-md">
//         <div className="p-4">
//           <div className="flex items-center mb-4">
//             <Image
//               src={blogPosts.author} // Assuming post.author is the URL of the avatar
//               className="rounded-full"
//               alt={blogPosts.author}
//               width={24}
//               height={24}
//             />
//             <h2 className="ml-2 text-lg font-semibold">{blogPosts.title}</h2>
//           </div>
//           <p className="text-sm text-gray-700">{blogPosts.date.toString()}</p>
//           <div className="overflow-auto max-h-60">
//             <p className="text-sm text-gray-700 pt-4">{blogPosts.content}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



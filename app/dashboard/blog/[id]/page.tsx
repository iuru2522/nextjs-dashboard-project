// import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchBlogPostById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

// import { blogPosts } from '@/app/lib/placeholder-data';
import SingleBlogPost from '@/app/ui/blog/blog-card';
import BlogPosts from '@/app/ui/blog/posts';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [blogPosts] = await Promise.all([fetchBlogPostById(id)]);
  if (!blogPosts) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Blog', href: '/dashboard/blog' },
          {
            label: 'Post',
            href: `/dashboard/blog/${id}`,
            active: true,
          },
        ]}
      />
      <SingleBlogPost blogPosts={blogPosts} />
    </main>
  );
}

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogPosts from './posts';


import { lusitana } from '@/app/ui/fonts';

// Mock the next/image component since it can't be rendered in tests
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
));

// Mock the next/link component
jest.mock('next/link', () => ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
));

describe('BlogPosts', () => {
  const mockBlogPosts = [
    {
      id: "1",
      title: 'Test Title 1',
      content: 'Test Content 1',
      author: 'https://example.com/avatar1.png',
      date: new Date(),
      image_url: 'https://example.com/image1.png',
    },
    {
      id: "2",
      title: 'Test Title 2',
      content: 'Test Content 2',
      author: 'https://example.com/avatar2.png',
      date: new Date(),
      image_url: 'https://example.com/image2.png',
    },
  ];

  it('renders blog post details correctly', () => {
    const { getByText, getByAltText } = render(<BlogPosts blogPosts={mockBlogPosts} />);

    // Check if blog post titles are rendered
    expect(getByText('Test Title 1')).toBeInTheDocument();
    expect(getByText('Test Title 2')).toBeInTheDocument();

    // Check if author images are rendered with correct alt text
    expect(getByAltText('Test Title 1')).toBeInTheDocument();
    expect(getByAltText('Test Title 2')).toBeInTheDocument();

    // Check if blog post links are rendered
    expect(document.querySelectorAll('a')).toHaveLength(2); // Assuming there are 2 blog posts
  });
});

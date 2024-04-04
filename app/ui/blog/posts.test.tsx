import React from 'react';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import BlogPosts from './posts';

import '@testing-library/jest-dom/extend-expect'; 


// Mock next/navigation module
jest.mock('next/navigation', () => {
  return {
    usePathname: jest.fn(() => '/'),
    useSearchParams: jest.fn(() => new URLSearchParams()),
    useRouter: () => ({
      replace: jest.fn(),
      pathname: '/',
      asPath: '/',
      query: {},
    }),
  };
});

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

describe('BlogPosts', () => {
  it('renders blog post details correctly', () => {
    mockRouter.setCurrentUrl('/'); // Mocking the current URL

    render(<BlogPosts blogPosts={mockBlogPosts} />);

    // Check if blog post titles are rendered
    expect(screen.getByText('Test Title 1')).toBeInTheDocument();
    expect(screen.getByText('Test Title 2')).toBeInTheDocument();

    // Check if links are rendered and have correct href attributes
    const linkElements = document.querySelectorAll('a');
    expect(linkElements).toHaveLength(2); // Assuming there are 2 blog posts
    linkElements.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(`/dashboard/blog/${mockBlogPosts[index].id}`);
    });
  });
});

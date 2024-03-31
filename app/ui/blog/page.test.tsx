import { render } from '@testing-library/react';
import SingleBlogPost from './blog-card';
import '@testing-library/jest-dom/extend-expect'; 

import React from 'react';

describe('SingleBlogPost', () => {
  const mockBlogPosts = {
    id: "1",
    title: 'Test Title',
    content: 'Test Content',
    author: 'https://example.com/avatar.png',
    date: new Date(),
    image_url: 'https://example.com/image.png', // Add any other missing properties
  };

  it('renders blog post details correctly', () => {
    const { getByText, getByAltText } = render(<SingleBlogPost blogPosts={mockBlogPosts} />);
    
    // Check if title is rendered
    expect(getByText('Test Title')).toBeInTheDocument();

    // Check if content is rendered
    expect(getByText('Test Content')).toBeInTheDocument();

    // Check if author image is rendered with correct alt text
    expect(getByAltText('https://example.com/avatar.png')).toBeInTheDocument();

    // Check if date is rendered
    expect(getByText(mockBlogPosts.date.toDateString())).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../navbar';

// Mock the usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navbar Component', () => {
  it('renders the navbar with links', () => {
    render(<Navbar />);
    
    // Check if the navbar contains the expected links
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Research/i)).toBeInTheDocument();
    expect(screen.getByText(/Bookshelf/i)).toBeInTheDocument();
    expect(screen.getByText(/Playground/i)).toBeInTheDocument();
  });

  it('has the correct navigation links', () => {
    render(<Navbar />);
    
    // Check if the links have the correct href attributes
    const homeLink = screen.getByText(/Home/i).closest('a');
    const projectsLink = screen.getByText(/Projects/i).closest('a');
    const researchLink = screen.getByText(/Research/i).closest('a');
    const bookshelfLink = screen.getByText(/Bookshelf/i).closest('a');
    const playgroundLink = screen.getByText(/Playground/i).closest('a');
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(researchLink).toHaveAttribute('href', '/research');
    expect(bookshelfLink).toHaveAttribute('href', '/bookshelf');
    expect(playgroundLink).toHaveAttribute('href', '/playground');
  });
});
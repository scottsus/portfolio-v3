import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer';

describe('Footer Component', () => {
  it('renders the footer with copyright information', () => {
    render(<Footer />);
    
    // Check if the footer contains the copyright text
    expect(screen.getByText(/© 2024 Scott SuS/i)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    
    // Check if social media links are present
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
    
    // Check for specific social media links (assuming they have aria-labels or titles)
    const githubLink = screen.getByLabelText(/github/i) || screen.getByTitle(/github/i);
    const linkedinLink = screen.getByLabelText(/linkedin/i) || screen.getByTitle(/linkedin/i);
    
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });
});
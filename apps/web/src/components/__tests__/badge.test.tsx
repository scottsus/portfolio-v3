import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../badge';

describe('Badge Component', () => {
  it('renders the badge with the provided text', () => {
    render(<Badge>Test Badge</Badge>);
    
    // Check if the badge contains the provided text
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies the correct styling', () => {
    render(<Badge>Test Badge</Badge>);
    
    // Get the badge element
    const badge = screen.getByText('Test Badge');
    
    // Check if the badge has the expected classes for styling
    expect(badge).toHaveClass('inline-flex');
    expect(badge).toHaveClass('items-center');
    expect(badge).toHaveClass('rounded-full');
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import Contactus from './contactus.jsx'; // Replace with the correct import path

describe('Contactus Component', () => {
  it('renders the component', () => {
    render(<Contactus />);
    // You can add more specific test cases here
  });

  it('displays contact information', () => {
    render(<Contactus />);
    const phoneLink = screen.getByText('Phone: (123) 456-7890');
    const emailLink = screen.getByText('Email: info@example.com');
    expect(phoneLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
  });

  // Add more test cases as needed
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile'; // Replace with the correct import path

describe('UserProfile Integrated Test', () => {
  it('renders the UserProfile component with user data', () => {
    // Mock user data for the test
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      gender: 'Male',
      img: 'user-image-url',
      orders: [
        {
          date: '2023-10-31T00:00:00',
          checkoutOrder: {
            items: [{ product: { img: 'product-image-url' } }],
            order_total: 100,
            discount: 10,
            total: 90,
          },
        },
      ],
    };

    render(<UserProfile />);

    // Check if the Profile component renders with user data
    const nameElement = screen.getByText('John Doe');
    const emailElement = screen.getByText('johndoe@example.com');
    const genderElement = screen.getByText('Male');

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(genderElement).toBeInTheDocument();

    // Check if the OrderCard component renders with order data
    const orderTotalElement = screen.getByText('Total Cost');
    const discountElement = screen.getByText('Discount');
    const finalCostElement = screen.getByText('Final Cost');

    expect(orderTotalElement).toBeInTheDocument();
    expect(discountElement).toBeInTheDocument();
    expect(finalCostElement).toBeInTheDocument();
  });

  // Add more test cases as needed
});

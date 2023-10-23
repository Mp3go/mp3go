import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Wishlist from "./Wishlist"; // Replace with the actual path to your component

// Mock Axios requests
jest.mock("../../hooks/useAxios", () => ({
  useAxios: jest.fn(() => ({ data: { someTestData: 'test data' }, error: null })),
}));

// Mock Redux store and useDispatch
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the addWishlistItems action
jest.mock("../../redux/userWishlit", () => ({
  addWishlistItems: jest.fn(),
}));

describe("Wishlist Component", () => {
  beforeEach(() => {
    // Reset the mock state before each test
    jest.clearAllMocks();
  });

  it("renders the component", () => {
    render(<Wishlist />);
    // You can add assertions for the rendered components
    // For example, you can expect the text "My Wishlist" to be present.
    expect(screen.getByText("My Wishlist")).toBeInTheDocument();
  });

  it("fetches and displays wishlist data", async () => {
    render(<Wishlist />);
    await waitFor(() => {
      // You can add assertions to check if the data is displayed correctly.
      // For example, you can expect a specific item to be displayed.
      // Use screen queries to assert the presence of elements.
      expect(screen.getByText("Test Wishlist Item")).toBeInTheDocument();
    });
  });

  it("handles errors", async () => {
    // Mock an error response from Axios
    jest.mock("../../hooks/useAxios", () => ({
      useAxios: jest.fn(() => ({ data: null, error: { response: { status: 409 } } })),
    }));

    render(<Wishlist />);
    await waitFor(() => {
      // You can assert that the error message is displayed correctly.
      expect(screen.getByText("Please Add Items to your Wishlist First")).toBeInTheDocument();
    });
  });

  it("dispatches the addWishlistItems action", async () => {
    render(<Wishlist />);
    await waitFor(() => {
      // You can assert that the addWishlistItems action is called with the expected data.
      expect(require("../../redux/userWishlit").addWishlistItems).toHaveBeenCalledWith({ someTestData: 'test data' });
    });
  });
});

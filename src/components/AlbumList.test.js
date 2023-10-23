// import { render, screen } from "@testing-library/react";
// import AlbumList from "./AlbumList";


// test("on initital render", () => {
//   render(<AlbumList />);
//   // screen.debug();
// });

/*
// AlbumList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import AlbumList from './AlbumList';

// Mock data for testing
const mockAlbums = [
  {
    _id: '1',
    img: 'album1.jpg',
    price: 19.99,
    name: 'Album 1',
    artist: 'Artist 1',
  },
  {
    _id: '2',
    img: 'album2.jpg',
    price: 24.99,
    name: 'Album 2',
    artist: 'Artist 2',
  },
];

test('renders AlbumList component with mock data', () => {
  const { getByText } = render(<AlbumList albums={mockAlbums} />);

  // Check if the AlbumList component renders
  const albumListComponent = getByText(/Album List/i);
  expect(albumListComponent).toBeInTheDocument();

  // Check if the details of each album are rendered
  mockAlbums.forEach((album) => {
    const albumTitle = getByText(album.name);
    const albumArtist = getByText(album.artist);
    const albumPrice = getByText(`$${album.price.toFixed(2)}`);

    expect(albumTitle).toBeInTheDocument();
    expect(albumArtist).toBeInTheDocument();
    expect(albumPrice).toBeInTheDocument();
  });
});

*/
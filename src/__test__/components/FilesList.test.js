// src/__tests__/components/FilesList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { FilesList } from '../../components/FilesList';

test('renders "No results" message when there are no files', () => {
  const initialState = {
    files: {
      rows: [],
      status: 'succeeded', // or any other non-pending status
    },
  };

  render(<FilesList filesState={initialState} />);

  const noResultsText = screen.getByText(/No results/i);
  expect(noResultsText).toBeInTheDocument();
});

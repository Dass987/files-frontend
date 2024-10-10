import React from 'react';
import { render, screen } from '@testing-library/react';
import { FilesList } from '../../components/FilesList'; // Replace with your path
import { Provider } from 'react-redux';

import { store } from '../../app/store';

test('renders table with headers', () => {
  render(
    <Provider store={store}>
      <FilesList />
    </Provider>
  );

  const table = screen.getByRole('table');
  const headerRow = screen.getByRole('row', { name: /file name/i });

  expect(table).toBeInTheDocument();
  expect(headerRow).toBeInTheDocument();
});

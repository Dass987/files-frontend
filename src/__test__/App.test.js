import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

import { Provider } from 'react-redux';

import { store } from '../app/store';

test('renders React App Test title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const h1Element = screen.getByText(/React Test App/i);
  expect(h1Element).toBeInTheDocument();
});

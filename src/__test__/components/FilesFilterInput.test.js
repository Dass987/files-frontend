import React from 'react';
import { render, screen } from '@testing-library/react';

import { FilesFilterInput } from '../../components/FilesFilterInput';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

test('renders input element', () => {
  render(<FilesFilterInput />);

  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});

test('input has correct attributes', () => {
  render(<FilesFilterInput />);

  const input = screen.getByRole('textbox');
  expect(input).toHaveAttribute('aria-label', 'Search');
  expect(input).toHaveAttribute('placeholder', 'Search by file name...');
});

test('renders with expected output', () => {
  const { asFragment } = render(<FilesFilterInput />);
  expect(asFragment()).toMatchSnapshot();
});

import React from 'react'
import {
  render,
  screen,
} from "@testing-library/react";
import App from '../App'

test('renders React App Test title', () => {
  render(<App />)

  const h1Element = screen.getByText(/React App Test/i)
  expect(h1Element).toBeInTheDocument()
})

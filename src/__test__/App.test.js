import { render, screen } from '@testing-library/react';
import App from './__test__/App.test.js';
import React from "react";
import '@testing-library/jest-dom'
/**
 * @jest-environment jsdom
 */

test("renders calculator", () => {
  render (<App />);
  const calculatorElement = screen.getByText(/Suma/i);
  expect(calculatorElement).toBeInTheDocument();
});

import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { getFullWrappedComponent } from '../../utils';

import Navbar from '.';

describe('Navbar', () => {
  render(getFullWrappedComponent(Navbar));
  test('Render component correctly', async () => {
    expect(await screen.findByText('Panel de control Incidencias')).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { signOut } from '@/auth';
import SideNav from './sidenav';

// Mocking the necessary modules
// jest.mock('next/link', () => ({ children }) => children);
jest.mock('./nav-links', () => ({
    __esModule: true,
    default: () => <div data-testid="nav-links">Mock NavLinks</div>
  }));

jest.mock('@/app/ui/acme-logo', () => () => <div data-testid="acme-logo">AcmeLogo</div>);
jest.mock('@heroicons/react/24/outline', () => ({
  PowerIcon: () => <svg data-testid="power-icon"></svg>,
}));
jest.mock('@/auth', () => ({
  signOut: jest.fn(),
}));

describe('SideNav', () => {
  it('renders the AcmeLogo', () => {
    render(<SideNav />);
    const logo = screen.getByTestId('acme-logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the NavLinks', () => {
    render(<SideNav />);
    const navLinks = screen.getByTestId('nav-links');
    expect(navLinks).toBeInTheDocument();
  });

  it('renders the PowerIcon', () => {
    render(<SideNav />);
    const powerIcon = screen.getByTestId('power-icon');
    expect(powerIcon).toBeInTheDocument();
  });

  it('calls signOut when the Sign Out button is clicked', async () => {
    render(<SideNav />);
    const signOutButton = screen.getByRole('button', { name: /sign out/i });
    fireEvent.click(signOutButton);
    expect(signOut).toHaveBeenCalled();
  });
});


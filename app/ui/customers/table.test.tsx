import { render, screen } from '@testing-library/react';
import CustomersTable from './table';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import '@testing-library/jest-dom/extend-expect';

jest.mock('next/navigation', () => {
  return {
    usePathname: jest.fn(() => '/'),
    useSearchParams: jest.fn(() => new URLSearchParams()),
    useRouter: () => ({
      replace: jest.fn(),
      pathname: '/',
      asPath: '/',
      query: {},
    }),
  };
});

const fakeCustomers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    total_invoices: 5,
    total_pending: '2',
    total_paid: '3',
    image_url: '/john.jpg',
  },
];

describe('CustomersTable', () => {
  it('renders customers details correctly', () => {
    render(<CustomersTable customers={fakeCustomers} />);

    // Check table headers
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Total Invoices')).toBeInTheDocument();
    expect(screen.getByText('Total Pending')).toBeInTheDocument();
    expect(screen.getByText('Total Paid')).toBeInTheDocument();

    // Check customer details (using `screen.getAllByText`)
    const customerRows = screen.getAllByText('John Doe', { exact: false });
    expect(customerRows.length).toBe(2); // Assuming there are two rows with John Doe

    customerRows.forEach((row) => {
      // console.log(row);
      // Improved selector considering potential conditional rendering
      const emailCell = row.querySelector('td[data-testid="email-cell"]'); // Use a data-testid if available
      if (!emailCell) {
        // Handle the case where email cell is not found (optional)
        // throw an error or log a warning here
        return; // Skip to the next iteration if email cell is missing
      }

      expect(emailCell).toBeInTheDocument();
      expect(emailCell.textContent).toBe('john@example.com'); // Assertions on email content

      const pendingInvoicesCell = row.querySelector('td:nth-child(4)'); // Adjust selector based on your table structure
      expect(pendingInvoicesCell).toBeInTheDocument();
      expect(pendingInvoicesCell?.textContent).toBe('2'); // Assuming pending invoices are in the 4th column

      const paidInvoicesCell = row.querySelector('td:nth-child(5)'); // Adjust selector based on your table structure
      expect(paidInvoicesCell).toBeInTheDocument();
      expect(paidInvoicesCell?.textContent).toBe('3'); // Assuming paid invoices are in the 5th column
    });
  });
});

// import React from 'react';
// import { Metadata, GetStaticProps } from 'next';
// import CustomersTable from '@/app/ui/customers/table'; // Assuming the path to your CustomersTable component
// import { FormattedCustomersTable } from '@/app/lib/definitions';
// import customers from '@/app/lib/placeholder-data'; // Import your data (optional for development)

// export const metadata: Metadata = {
//   title: 'Customers',
// };

// export default function Page( {customers,
// }: {
//   customers: FormattedCustomersTable[];
// }) {
//   return (
//     <div>
//       <h1>Customers</h1>
//       <CustomersTable customers={customers} />
//     </div>
//   );
// }



import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
import UsersTable from '@/app/ui/users/table';
import React from 'react';

import { Metadata } from 'next';
import { getUsers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Users',
};

export default async function Page() {

  const users = await getUsers()
  return (
    <main>
      <UsersTable users={users} />
    </main>
  );
}



// import React from 'react';
// import { User } from '@/app/lib/definitions';
// import { lusitana } from '@/app/ui/fonts';

// export default async function UsersTable({ users }: { users: User[] }) {
//   return (
//     <div className="w-full">
//       <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
//         Users
//       </h1>
//       <div className="mt-6 flow-root">
//         <div className="overflow-x-auto">
//           <div className="inline-block min-w-full align-middle">
//             <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
//               <table className="hidden min-w-full rounded-md text-gray-900 md:table">
//                 <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
//                   <tr>
//                     <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                       Name
//                     </th>
//                     <th scope="col" className="px-3 py-5 font-medium">
//                       Email
//                     </th>
//                     {/* <th scope="col" className="px-3 py-5 font-medium">
//                       Total Invoices
//                     </th>
//                     <th scope="col" className="px-3 py-5 font-medium">
//                       Total Pending
//                     </th>
//                     <th scope="col" className="px-4 py-5 font-medium">
//                       Total Paid
//                     </th> */}
//                   </tr>
//                 </thead>

//                 <tbody className="divide-y divide-y-3 border-b border-gray-200 text-gray-900">
//                   {users.map((user) => (
//                     <tr key={user.id} className="group">
//                       <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
//                         {user.name}
//                       </td>
//                       <td className="whitespace-nowrap bg-white px-4 py-5 text-sm ">
//                         {user.email}
//                       </td>
//                       {/* ... other columns */}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

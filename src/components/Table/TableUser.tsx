// "use client";
// import React, { useState } from "react";
// const UserTable = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <div className="flex-column flex flex-wrap items-center justify-between space-y-4 bg-white py-4 dark:bg-gray-900 md:flex-row md:space-y-0">
//         {/* Dropdown Button */}       <div>
//           <button
//             id="dropdownActionButton"
//             data-dropdown-toggle="dropdownAction"
//             className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//             type="button"
//           >
//             <span className="sr-only">Action button</span>
//             Action
//           </button>
//           <div className="relative inline-block">
//             {/* Dropdown button */}
//             <button
//               onClick={toggleDropdown}
//               className="flex items-center space-x-1 focus:outline-none"
//               aria-haspopup="true"
//               aria-expanded={isOpen}
//             >
//               <svg
//                 className="h-4 w-4 text-gray-500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>

//             {/* Dropdown menu */}
//             {isOpen && (
//               <div className="absolute right-1/2 mt-2 w-44 translate-x-1/2 transform divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
//                 {/* Dropdown menu items */}
//                 <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Reward
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Promote
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Activate account
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Delete User
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//         <label htmlFor="table-search" className="sr-only">
//           Search
//         </label>
//         <div className="relative">
//           <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
//             <svg
//               className="h-4 w-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <input
//             type="text"
//             id="table-search-users"
//             className="block w-80 rounded-lg border border-gray-300 bg-gray-50 ps-10 pt-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
//             placeholder="Search For users"
//           />
//         </div>
//       </div>
//       <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
//         <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-all-search"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                 />
//                 <label htmlFor="checkbox-all-search" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Name
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Position
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Status
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Action
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//             <td className="w-4 p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-table-search-1"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                 />
//                 <label htmlFor="checkbox-table-search-1" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </td>
//             <th
//               scope="row"
//               className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
//             >
//               <img
//                 className="h-10 w-10 rounded-full"
//                 src="/images/blog/Pyramids.jpg"
//                 alt="Jese image"
//               />
//               <div className="ps-3">
//                 <div className="text-base font-semibold">Neil Sims</div>
//                 <div className="font-normal text-gray-500">
//                   neil.sims@flowbite.com
//                 </div>
//               </div>
//             </th>
//             <td className="px-6 py-4">React Developer</td>
//             <td className="px-6 py-4">
//               <div className="flex items-center">
//                 <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>{" "}
//                 Online
//               </div>
//             </td>
//             <td className="px-6 py-4">
//               {/* <!-- Modal toggle --> */}
//               <a
//                 href="#"
//                 type="button"
//                 data-modal-target="editUserModal"
//                 data-modal-show="editUserModal"
//                 className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 Edit user
//               </a>
//             </td>
//           </tr>
//           <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//             <td className="w-4 p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-table-search-2"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                 />
//                 <label htmlFor="checkbox-table-search-2" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </td>
//             <th
//               scope="row"
//               className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
//             >
//               <img
//                 className="h-10 w-10 rounded-full"
//                 src="/images/blog/Pyramids.jpg"
//                 alt="Jese image"
//               />
//               <div className="ps-3">
//                 <div className="text-base font-semibold">Bonnie Green</div>
//                 <div className="font-normal text-gray-500">
//                   bonnie@flowbite.com
//                 </div>
//               </div>
//             </th>
//             <td className="px-6 py-4">Designer</td>
//             <td className="px-6 py-4">
//               <div className="flex items-center">
//                 <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>{" "}
//                 Online
//               </div>
//             </td>
//             <td className="px-6 py-4">
//               {/* <!-- Modal toggle --> */}
//               <a
//                 href="#"
//                 type="button"
//                 data-modal-show="editUserModal"
//                 className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 Edit user
//               </a>
//             </td>
//           </tr>
//           <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//             <td className="w-4 p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-table-search-2"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                 />
//                 <label htmlFor="checkbox-table-search-2" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </td>
//             <th
//               scope="row"
//               className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
//             >
//               <img
//                 className="h-10 w-10 rounded-full"
//                 src="/images/blog/Pyramids.jpg"
//                 alt="Jese image"
//               />
//               <div className="ps-3">
//                 <div className="text-base font-semibold">Jese Leos</div>
//                 <div className="font-normal text-gray-500">
//                   jese@flowbite.com
//                 </div>
//               </div>
//             </th>
//             <td className="px-6 py-4">Vue JS Developer</td>
//             <td className="px-6 py-4">
//               <div className="flex items-center">
//                 <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>{" "}
//                 Online
//               </div>
//             </td>
//             <td className="px-6 py-4">
//               {/* <!-- Modal toggle --> */}
//               <a
//                 href="#"
//                 type="button"
//                 data-modal-show="editUserModal"
//                 className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 Edit user
//               </a>
//             </td>
//           </tr>
//           <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//             <td className="w-4 p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-table-search-2"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                 />
//                 <label htmlFor="checkbox-table-search-2" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </td>
//             <th
//               scope="row"
//               className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
//             >
//               <img
//                 className="h-10 w-10 rounded-full"
//                 src="/images/blog/Pyramids.jpg"
//                 alt="Jese image"
//               />
//               <div className="ps-3">
//                 <div className="text-base font-semibold">Thomas Lean</div>
//                 <div className="font-normal text-gray-500">
//                   thomes@flowbite.com
//                 </div>
//               </div>
//             </th>
//             <td className="px-6 py-4">UI/UX Engineer</td>
//             <td className="px-6 py-4">
//               <div className="flex items-center">
//                 <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>{" "}
//                 Online
//               </div>
//             </td>
//             <td className="px-6 py-4">
//               {/* <!-- Modal toggle --> */}
//               <a
//                 href="#"
//                 type="button"
//                 data-modal-show="editUserModal"
//                 className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 Edit user
//               </a>
//             </td>
//           </tr>
//           <tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
//             <td className="w-4 p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-table-search-3"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                 />
//                 <label htmlFor="checkbox-table-search-3" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </td>
//             <th
//               scope="row"
//               className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
//             >
//               <img
//                 className="h-10 w-10 rounded-full"
//                 src="/images/blog/Pyramids.jpg"
//                 alt="Jese image"
//               />
//               <div className="ps-3">
//                 <div className="text-base font-semibold">Leslie Livingston</div>
//                 <div className="font-normal text-gray-500">
//                   leslie@flowbite.com
//                 </div>
//               </div>
//             </th>
//             <td className="px-6 py-4">SEO Specialist</td>
//             <td className="px-6 py-4">
//               <div className="flex items-center">
//                 <div className="me-2 h-2.5 w-2.5 rounded-full bg-red-500"></div>{" "}
//                 Offline
//               </div>
//             </td>
//             <td className="px-6 py-4">
//               {/* <!-- Modal toggle --> */}
//               <a
//                 href="#"
//                 type="button"
//                 data-modal-show="editUserModal"
//                 className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 Edit user
//               </a>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       {/* <!-- Edit user modal --> */}
//       <div
//         id="editUserModal"
//         aria-hidden="true"
//         className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0"
//       >
//         <div className="relative max-h-full w-full max-w-2xl">
//           {/* <!-- Modal content --> */}
//           <form className="relative rounded-lg bg-white shadow dark:bg-gray-700">
//             {/* Modal header */}
//             <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 Edit user
//               </h3>
//               <button
//                 type="button"
//                 className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
//                 data-modal-hide="editUserModal"
//               >
//                 <svg
//                   className="h-3 w-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//               </button>
//             </div>
//             {/* Modal body */}
//             <div className="space-y-6 p-6">
//               <div className="grid grid-cols-6 gap-6">
//                 <div className="col-span-6 sm:col-span-3">
//                   <label
//                     htmlFor="first-name"
//                     className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="first-name"
//                     id="first-name"
//                     className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
//                     placeholder="Bonnie"
//                     required
//                   />
//                 </div>
//                 {/* Add other input fields here */}
//               </div>
//             </div>
//             {/* Modal footer */}
//             <div className="flex items-center space-x-3 rounded-b border-t border-gray-200 p-6 dark:border-gray-600 rtl:space-x-reverse">
//               <button
//                 type="submit"
//                 className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Save all
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default UserTable;

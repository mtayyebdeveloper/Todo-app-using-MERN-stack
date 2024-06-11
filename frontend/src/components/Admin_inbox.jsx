import React from "react";
import { useAuth } from "../store/Store";

function Admin_inbox() {
  const { deletecontactsfromAdmin, allcontacts } = useAuth();

  return (
    <>
      <div className="data-list w-full mx-auto mt-5">
        <div className="text-2xl font-bold mb-3">Contacts</div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Full Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Email
                </th>
                <th scope="col" className="px-3 py-3">
                  Message
                </th>
                <th scope="col" className="px-3 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {allcontacts.map((contact, index) => (
                <tr className="bg-white border-b" key={index}>
                  <td className="px-3 py-4">{contact.fullName}</td>
                  <td className="px-3 py-4">{contact.email}</td>
                  <td className="px-3 py-4">{contact.message}</td>
                  <td className="px-3 py-4">
                    <div
                      className="font-medium cursor-pointer text-blue-600 hover:underline"
                      onClick={() => deletecontactsfromAdmin(contact._id)}
                    >
                      Delete
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin_inbox;

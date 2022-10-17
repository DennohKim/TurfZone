import React from "react";
import { useStateContext } from "../../context/ContextProvider";

const TurfRow = ({ turf }) => {

  const { name, location } = turf;
  const { id } = bookings

  return (
    <>
      <tbody className="bg-white">
        <tr className="bg-gray-50">
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {location}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            
          </td>
          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <button onClick={handleDeleteClick} className="text-indigo-600 hover:text-indigo-900">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TurfRow;

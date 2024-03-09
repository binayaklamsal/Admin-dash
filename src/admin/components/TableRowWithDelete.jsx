import { useMutation } from "@tanstack/react-query";
import React from "react";

const TableRowWithDelete = ({
  name,
  gender,
  date,
  time,
  handleDelete,
  id,
  email,
  specialization,
}) => {
  return (
    <tr className="border-b border-gray-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-black-900 whitespace-nowrap bg-[#DBDFF0]"
      >
        {name}
      </th>
      <td className="px-6 py-4">{gender}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{specialization}</td>
      {handleDelete ? (
        <td className="px-6 py-4 bg-[#DBDFF0] flex flex-row text-blue gap-4 cursor-pointer">
          <p
            className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md"
            onClick={() => handleDelete(id)}
          >
            Delete
          </p>
        </td>
      ) : null}
    </tr>
  );
};

export { TableRowWithDelete };

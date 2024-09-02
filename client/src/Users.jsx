import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=' bg-white rounded-md overflow-hidden'>
      <div className='flex justify-between p-6 bg-blue-500'>
        <h1 className='text-xl font-bold text-white'>All Users</h1>
        <Link
          to='/create'
          className='bg-white rounded-md px-4'>
          Create User
        </Link>
      </div>
      <table className='table-auto'>
        <thead>
          <tr className='border-b'>
            <th className='py-3'>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr
                key={user.id}
                className='border-b'>
                <td className='py-3 px-5'> {user.name} </td>
                <td className='px-5'> {user.email} </td>
                <td className='px-5'> {user.age} </td>
                <td className='py-3 px-5 flex gap-2 items-center justify-center'>
                  <Link
                    to={`/update/${user._id}`}
                    className='bg-green-700 text-white rounded-md py-1 px-2'>
                    Edit
                  </Link>
                  <button
                    className='bg-red-700 text-white rounded-md py-1 px-2'
                    onClick={(e) => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

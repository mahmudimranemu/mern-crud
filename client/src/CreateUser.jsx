import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createUser", { name, email, age })
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className=' bg-white rounded-md overflow-hidden'>
      <div className='flex justify-between p-6 bg-blue-500'>
        <h1 className='text-xl font-bold text-white'>Add New User</h1>
      </div>
      <form
        className='flex flex-col p-6 gap-3'
        onSubmit={Submit}>
        <input
          type='text'
          placeholder='Name'
          className='border p-3 rounded-md'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-md'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='Age'
          className='border p-3 rounded-md'
          onChange={(e) => setAge(e.target.value)}
        />
        <button className='bg-green-700 text-white py-4 px-6 rounded-md'>
          Submit
        </button>
      </form>
    </div>
  );
}

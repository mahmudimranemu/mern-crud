import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/updateUser/" + id, { name, email, age })
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className=' bg-white rounded-md overflow-hidden'>
      <div className='flex justify-between p-6 bg-blue-500'>
        <h1 className='text-xl font-bold text-white'>Update User</h1>
      </div>
      <form
        className='flex flex-col p-6 gap-3'
        onSubmit={Update}>
        <input
          type='text'
          placeholder='Name'
          className='border p-3 rounded-md'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-md'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='Age'
          className='border p-3 rounded-md'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button className='bg-green-700 text-white py-4 px-6 rounded-md'>
          Update
        </button>
      </form>
    </div>
  );
}

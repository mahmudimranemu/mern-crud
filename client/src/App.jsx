import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

export default function App() {
  return (
    <div className='flex h-screen justify-center items-center bg-slate-900'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Users />}
          />
          <Route
            path='/create'
            element={<CreateUser />}
          />
          <Route
            path='/update/:id'
            element={<UpdateUser />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

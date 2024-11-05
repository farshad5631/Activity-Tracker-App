// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { saveUser } from '../../utils/LocalStorageHelper';
// import Input from '../atoms/Input';
// import Button from '../atoms/Button';

// function RegisterPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     saveUser(email, password);
//     navigate('/');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen font-primaryRegular">
//       <h2 className='font-primaryBold text-5xl my-4'>Register</h2>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
//         <Input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <Input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <Button type="submit" text="Register" />
//       </form>
//     </div>
//   );
// }

// export default RegisterPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { saveUser } from "../../utils/LocalStorageHelper";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function RegisterPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    saveUser(data.email, data.password);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primaryRegular">
      <h2 className="font-primaryBold text-5xl my-4">Register</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <div className="mb-4">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <Input type="email" placeholder="Email" {...field} />
                <p className="text-red-500">{errors.email?.message}</p>
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <>
                <Input type="password" placeholder="Password" {...field} />
                <p className="text-red-500">{errors.password?.message}</p>
              </>
            )}
          />
        </div>
        <Button type="submit" text="Register" />
      </form>
    </div>
  );
}

export default RegisterPage;

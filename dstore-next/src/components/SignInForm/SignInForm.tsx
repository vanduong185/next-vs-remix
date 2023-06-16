"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

type FormValues = {
  username: string;
  password: string;
};

export default function SignInForm() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="mx-auto container">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-2xl font-semibold mb-10">SIGN IN</p>
        <TextInput {...register("username")} label="Username" />
        <TextInput {...register("password")} label="Password" type="password" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

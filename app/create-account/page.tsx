"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { createAccount } from "./action";
import { useActionState } from "react";

export default function CreateAccount() {
  const [state, formAction] = useActionState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 p-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">
          Fill in the form below to create your account.
        </h2>
      </div>
      <form action={formAction} className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="Username"
          required
          name="username"
          errors={state?.errors?.username}
          minLength={3}
          maxLength={10}
        />
        <Input
          type="email"
          placeholder="Email"
          required
          name="email"
          errors={state?.errors?.email}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          name="password"
          errors={state?.errors?.password}
          minLength={10}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          required
          name="confirmPassword"
          errors={state?.errors?.confirmPassword}
          minLength={10}
        />
        <Button text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <SocialLogin />
    </div>
  );
}

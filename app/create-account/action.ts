"use server";

import { z } from "zod";

const usernameSchema = z.string().min(5).max(10);
const emailSchema = z.string().email();
const passwordSchema = z.string().min(8);

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  usernameSchema.parse(data.username);
  emailSchema.parse(data.email);
  passwordSchema.parse(data.password);

  console.log(data);
}

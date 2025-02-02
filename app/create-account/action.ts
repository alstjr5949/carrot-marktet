"use server";

import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

const checkUsername = (username: string) => {
  return !username.includes("potato");
};

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "3자 이상 입력해주세요")
      .max(10, "10자 이하로 입력해주세요")
      .toLowerCase()
      .trim()
      .transform((username) => `transform ${username}`)
      .refine(checkUsername, "No potatoes allowed!"),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(10, "10자 이상 입력해주세요")
      .regex(passwordRegex, "영문, 숫자, 특수문자를 포함해주세요"),
    confirmPassword: z.string().min(10, "10자 이상 입력해주세요"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const validationResult = formSchema.safeParse(data);

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }
}

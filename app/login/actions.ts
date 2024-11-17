"use server";

import { redirect } from "next/navigation";

export async function handleFormSubmit(prevState: any, formData: FormData) {
  console.log(formData.get("email"), formData.get("password"));
  console.log("prevState", prevState);
  // redirect("/");

  return { errors: ["로그인 실패"] };
}

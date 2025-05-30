"use server";

export async function sendMessage(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const content = `
**New Message**
Name: ${name}
Email: ${email}
Message: ${message}
  `;
  
  await fetch(process.env.NEXT_PUBLIC_API_URL!, {
    method: "POST",
    body: JSON.stringify({ content }),
  });

  return;
}

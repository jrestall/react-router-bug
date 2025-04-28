import type { Route } from "./+types/login";
import { Form, useActionData } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const username = formData.get("username");

  if (username === "admin") {
    return { success: true };
  } else {
    throw new Error("Unexpected System Error");
  }
}

export default function Home() {
  const data = useActionData<typeof action>();
  return (
    <Form method="post" action="/login">
      <div>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <input type="submit" value="Submit" />
      <div>{data?.success && "Success!"}</div>
    </Form>
  );
}

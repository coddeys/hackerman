import { Handlers } from "$fresh/server.ts";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const kv = await Deno.openKv();

export const handler: Handlers<User | null> = {
  async POST(req, _ctx) {
    const user = (await req.json()) as User;
    const userKey = ["user", user.id];
    const ok = await kv.atomic().set(userKey, user).commit();
    if (!ok) throw new Error("Something went wrong");
    return new Response(JSON.stringify(user));
  },
};

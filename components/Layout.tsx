import { Head } from "$fresh/runtime.ts";
import type { ComponentChildren } from "preact";

type LayoutProps = {
  children: ComponentChildren;
  title?: string;
  session?: string;
};

export default function Layout(props: LayoutProps) {
  const loginLink = props.session
    ? { href: "/logout", name: "Logout" }
    : { href: "/login", name: "Login" };
  return (
    <>
        <nav class="flex flex-grow-0">
          <a href={loginLink.href} class="ml-4">{loginLink.name}</a>
        </nav>
      <main class="ml-5 mr-5">
        {props.children}
      </main>
    </>
  );
}

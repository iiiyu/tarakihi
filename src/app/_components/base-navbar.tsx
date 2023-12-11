import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";

export default async function BaseNavbar() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Tarakihi</a>
      </div>

      <div className="navbar-end">
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="btn"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </div>
  );
}

// import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";
import Link from "next/link";
import BaseNavbar from "./_components/base-navbar";

export default function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main className="container">
      <BaseNavbar />

      {/* Hero Home */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="w-auto">
            <h1 className="text-5xl font-bold">
              Breaking Barriers, Building Bridges: Your Gateway to Global
              Communication.
            </h1>
            <p className="py-6">
              Experience the Future of Translation with Our AI Translator Agent
              System – Where Language Knows No Limits.
            </p>
            <Link href="/dashboard" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Home */}
      {/* <h1 className="py-6 text-center text-4xl text-slate-50">
        An AI translator system.
      </h1>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white">
          {hello ? hello.greeting : "Loading tRPC query..."}
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
        </div>
      </div> */}
    </main>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }

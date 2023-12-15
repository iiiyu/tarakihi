"use client";
// import { LoadingPage } from "~/app/_components/loading";
import { trpc } from "~/trpc/react";
import Article from "../_components/article";

export default function Page({ params }: { params: { slug: string } }) {
  // const { data, isLoading } = api.task.tryTest.useQuery();
  // const { data, isLoading } = api.post.hello.useQuery({ text: "world" });

  // if (isLoading) {
  //   return <LoadingPage />;
  // }
  // console.log(data);

  const testClick = async () => {
    console.log("test click");
    const result = await trpc.task.tryTest.query();
    console.log(result);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full flex-row justify-between gap-4">
        <div className="w-1/2">
          <Article id={params.slug} />
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="w-1/2">T A</div>
      </div>
      <div className="divider">OR</div>
      <div>
        <div> T A List</div>
        <button className="btn" onClick={() => testClick()}>
          Add
        </button>
      </div>
    </div>
  );
}

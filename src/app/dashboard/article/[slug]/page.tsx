"use client";

import { LoadingPage } from "~/app/_components/loading";
import { api } from "~/trpc/react";

export default function Page({ params }: { params: { slug: string } }) {
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
        <button>Add </button>
      </div>
      {/* <h1>Article slug</h1> */}
    </div>
  );
}

const Article = ({ id }: { id: string }) => {
  const { data, isLoading } = api.article.getArticleById.useQuery({
    id: id,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="flex flex-col gap-2">
      <div>
        <div>Title:</div>
        <div>{data?.title}</div>
      </div>
      <div>
        <div>Language:</div>
        <div>{data?.language}</div>
      </div>
      <div>
        <div>Content:</div>
        <p>{data?.content}</p>
      </div>
    </div>
  );
};

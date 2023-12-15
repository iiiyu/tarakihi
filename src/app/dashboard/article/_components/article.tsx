"use client";
import { LoadingPage } from "~/app/_components/loading";
import { api } from "~/trpc/react";
export default function Article({ id }: { id: string }) {
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
}

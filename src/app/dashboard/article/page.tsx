"use client";

import { Article } from "@prisma/client";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingPage } from "~/app/_components/loading";
import { api } from "~/trpc/react";

// Pagination component
const Pagination = ({
  current,
  total,
  limit,
  onChangePage,
  onChangeLimit,
}: {
  current: number;
  total: number;
  limit: number;
  onChangePage: (page: number) => void;
  onChangeLimit: (limit: number) => void;
}) => {
  const pages = Math.ceil(total / limit);
  const [size, setSize] = useState(limit);
  const clickSize = (size: number) => {
    setSize(size);
    onChangeLimit(size);
  };
  return (
    <div className="flex flex-row items-center justify-between gap-4">
      <div className="join">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            className={`btn join-item ${i + 1 === current ? "btn-active" : ""}`}
            onClick={() => onChangePage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div>
        <span>Items per page </span>
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn m-1">
            {size}
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <button onClick={() => clickSize(5)}>5</button>
            </li>
            <li>
              <button onClick={() => clickSize(10)}>10</button>
            </li>
            <li>
              <button onClick={() => clickSize(50)}>50</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ArticleList = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const router = useRouter();
  const { data, isLoading: listLoading } =
    api.article.getArticlesByUser.useQuery({ page, limit });

  if (listLoading) {
    return <LoadingPage />;
  }

  // console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Language</th>
              <th>Created</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {data?.articles &&
              Array.isArray(data.articles) &&
              data.articles.map((article: Article) => (
                <tr key={article.id}>
                  <th>{article.id}</th>
                  <td>{article.title}</td>
                  <td>{article.language}</td>
                  <td>{moment(article.createdAt).format("MMM Do YY")}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        router.push(`/dashboard/article/${article.id}`)
                      }
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        current={page}
        total={data?.total ?? 0}
        onChangePage={setPage}
        limit={limit}
        onChangeLimit={setLimit}
      />
    </div>
  );
};

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div>
        <button
          className="btn btn-primary"
          onClick={() => router.push("/dashboard/article/create")}
        >
          Create New Article
        </button>
      </div>
      <ArticleList />
    </div>
  );
}

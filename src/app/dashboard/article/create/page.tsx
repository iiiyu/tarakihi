"use client";

import { TRPCClientError } from "@trpc/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { set } from "zod";
import { api } from "~/trpc/react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const languages = [
    "English",
    "Chinese",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Russian",
    "Arabic",
    "Japanese",
  ];

  // const mutation = api.article.create.useMutation();

  const { mutate, isLoading: isCreating } = api.article.create.useMutation({
    onSuccess: () => {
      // redirect to article page
      setTitle("");
      setLanguage("");
      setContent("");
      toast.success("Article created!");
      router.push("/dashboard/article");
    },
    onSettled(data, error, variables, context) {},
    onError: (e) => {
      // show error
      // if (e typeof TRPCClientError) {
      // } else {
      //   toast.error("Failed to create article! Please try again.");
      // }
      // console.log("$$");
      // console.log(e);
      const fieldErrors = e.data?.zodError?.fieldErrors;
      for (const key in fieldErrors) {
        const array = fieldErrors[key];
        if (array) {
          for (const element of array) {
            // console.log(element);
            toast.error("This " + key + element);
            return;
          }
        }
      }
      // console.log("##");
      // console.log(errorMessage);
      // toast.error("Failed to create article! Please try again.");
      // if (fieldErrors && Array.isArray(fieldErrors)) {
      //   fieldErrors.forEach((fieldError: any) => {
      //     toast.error(fieldError.message);
      //   });
      // } else {
      //   toast.error("Failed to create article! Please try again.");
      // }
    },
  });

  return (
    <div className="flex w-full flex-col gap-2">
      <h1 className="text-3xl">Create</h1>
      <div className="">
        <div>Title:</div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <div>Language:</div>
        <select
          className="select select-bordered w-full max-w-xs"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option disabled value="">
            Select a language
          </option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div>Content:</div>
        <textarea
          className="textarea textarea-bordered "
          placeholder="Bio"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button
          className="btn btn-primary"
          disabled={isCreating}
          onClick={() =>
            mutate({ title: title, language: language, content: content })
          }
        >
          Create
        </button>
      </div>
    </div>
  );
}

import markdownStyles from "./markdown-styles.module.css";
import React from "react";

type Props = {
  content: string;
  tags?: string[];
};

export function PostBody({ content ,tags}: Props) {
  return (
    <div className="max-w-3xl mx-auto bg-white p-10 znc">
        <ul className="flex gap-x-2 !pl-0">
          {tags?.map((tag) => (
            <li key={tag} className="cursor-pointer block text-sm font-medium text-blue-700 hover:bg-blue-200 hover:shadow-sm font-bold mb-12  px-3 py-1 border border-blue-300 rounded-full"><a href={`/tags/${tag}`}
            >#{tag}</a></li>
))}
        </ul>
      <div
        className={markdownStyles["markdown"]} 
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

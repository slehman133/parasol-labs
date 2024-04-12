import React from "react";
import { client } from "@/sanity/lib/client";
import PostPreview from "@/components/Blog/PostPreview";

export default async function NewsSection() {
  const res = await client.fetch(
    `*[_type == "post"] `,
    {},
    { cache: "no-store" }
  );
  const postPreviews = res.map((post: any) => (
    <PostPreview key={post.slug?.current} {...post} />
  ));
  return (
    <>
      <div className="flex flex-col md:p-24">
        <div className="grid grid-cols-2 gap-12">{postPreviews}</div>
      </div>
    </>
  );
}

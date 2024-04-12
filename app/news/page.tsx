import React, { useEffect } from "react";
import getPostMetadata from "../components/Blog/getPostMetadata";
import PostPreview from "../components/Blog/PostPreview";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Divider } from "@nextui-org/react";
//developed, using integrated components, see component files for integrations
//Written by Nicholas Whitehorn

export async function generateMetadata() {
  return {
    title: "News About Parasol Labs",
  };
}

const NewsPage = async () => {
  const res = await client.fetch(
    `*[_type == "post"]`,
    {},
    { cache: "no-store" }
  );
  const postPreviews = res.map((post: any) => (
    <PostPreview key={post.slug?.current} {...post} />
  ));

  return (
    <>
      <div className="flex flex-col md:p-24">
        <div>
          <h1 className=" font-bold text-4xl text-center ">Parasol News</h1>
          <Divider
            orientation="horizontal"
            className="w-1/2 bg-white mx-auto"
          />
          <p className="text-center font-light text-xl my-5">
            The latest updates on our journey. For you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-12 gap-12">
          { postPreviews}
        </div>
      </div>
    </>
  );
};

export default NewsPage;

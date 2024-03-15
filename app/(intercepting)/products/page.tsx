import LinkWithIcon from "@/components/LinkWIthIcon/page";
import PageCard from "@/components/PageCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <PageCard
      title="Products"
      description="點擊連結前往子層資料夾"
      path="app/(intercepting)/products/page.tsx"
      url="/products"
      data={data}
    >
      <div className="flex flex-col gap-1">
        <div className="flex gap-6 flex-wrap gap-y-2">
          <LinkWithIcon
            title="Go to clothing 體驗 (..)"
            path="/products/clothing"
          />

          <LinkWithIcon
            title="Go to electronics 體驗 (.) 及 (...)"
            path="/products/electronics"
          />
          <LinkWithIcon title="Go to foods" path="/products/foods" />
        </div>
      </div>
    </PageCard>
  );
};

const data = [
  {
    title: "products",
    children: [
      {
        title: "clothing",
        isFolder: true,
      },
      {
        title: "electronics",
        isFolder: true,
      },
      {
        title: "foods",
        isFolder: true,
      },
    ],
  },
];

export default Page;

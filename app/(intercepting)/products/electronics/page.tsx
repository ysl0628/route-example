import LinkWithIcon from "@/components/LinkWIthIcon";
import PageCard from "@/components/PageCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <PageCard
      title="Electronics"
      path="app/(intercepting)/products/electronics/page.tsx"
      url="/products/electronics"
      data={data}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-6 gap-y-1">
          <LinkWithIcon
            title="點擊連結前往攔截的 Phones 頁面 - (.)"
            path="/products/electronics/phones"
          />
          <LinkWithIcon
            title="Go to computers 體驗 (...)"
            path="/products/electronics/computers"
          />
        </div>
        <div className="flex flex-wrap gap-6 gap-y-1">
          <Link href="/products" className="underline-offset-2 underline">
            回到 Products Page
          </Link>
          <Link href="/" className="underline-offset-2 underline">
            回到首頁
          </Link>
        </div>
      </div>
    </PageCard>
  );
};

const data = [
  {
    title: "electronics",
    children: [
      {
        title: "phones",
        isFolder: true,
      },
      {
        title: "(.)phones",
        isFolder: true,
      },
      {
        title: "computers",
        isFolder: true,
      },
    ],
  },
];

export default Page;

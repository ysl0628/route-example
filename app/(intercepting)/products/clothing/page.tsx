import LinkWithIcon from "@/components/LinkWIthIcon/page";
import PageCard from "@/components/PageCard";
import TreeView from "@/components/TreeView";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <PageCard
      title="Clothing"
      path="app/(intercepting)/products/clothing/page.tsx"
      url="/products/clothing"
      data={data}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-6 gap-y-3">
          <LinkWithIcon
            title="Go to shirts 體驗 (..)"
            path="/products/clothing/shirts"
          />
        </div>
      </div>
    </PageCard>
  );
};

const data = [
  {
    title: "clothing",
    children: [
      {
        title: "shirts",
        isFolder: true,
      },
      {
        title: "dresses",
        isFolder: true,
      },
    ],
  },
];

export default Page;

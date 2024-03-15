import LinkWithIcon from "@/components/LinkWIthIcon/page";
import PageCard from "@/components/PageCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <PageCard
      title="Products"
      path="app/(intercepting)/products/page.tsx"
      url="/products"
    >
      <div className="flex flex-col gap-3">
        <div>Products Page</div>
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

export default Page;

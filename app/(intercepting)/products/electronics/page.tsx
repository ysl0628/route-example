import LinkWithIcon from "@/components/LinkWIthIcon/page";
import PageCard from "@/components/PageCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <PageCard
      title="Electronics"
      path="app/(intercepting)/products/electronics/page.tsx"
      url="/products/electronics"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-6 gap-y-3">
          <LinkWithIcon
            title="點擊連結前往攔截的 Phones 頁面"
            path="/products/electronics/phones"
          />
          <LinkWithIcon
            title="Go to computers"
            path="/products/electronics/computers"
          />
        </div>

        <Link href="/products" className="underline-offset-2 underline">
          回到 Products
        </Link>
      </div>
    </PageCard>
  );
};

export default Page;

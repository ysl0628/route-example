import LinkWithIcon from "@/components/LinkWIthIcon/page";
import PageCard from "@/components/PageCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <PageCard
      title="Shirts"
      path="app/(intercepting)/products/clothing/shirts/page.tsx"
      url="/products/clothing/shirts"
    >
      <div className="flex flex-col gap-3">
        <LinkWithIcon
          title="點擊連結前往攔截的 Dresses 頁面"
          path="/products/clothing/dresses"
        />
        <div className="flex flex-wrap gap-6">
          <Link
            href="/products/clothing"
            className="underline-offset-2 underline"
          >
            回到 Clothing
          </Link>
          <Link href="/products" className="underline-offset-2 underline">
            回到 Products
          </Link>
        </div>
      </div>
    </PageCard>
  );
};

export default Page;

import LinkWithIcon from "@/components/LinkWIthIcon/page";
import PageCard from "@/components/PageCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <PageCard
      title="Clothing"
      path="app/(intercepting)/products/clothing/page.tsx"
      url="/products/clothing"
    >
      <div className="flex flex-wrap gap-6 gap-y-3">
        <LinkWithIcon title="Go to shirts" path="/products/clothing/shirts" />
      </div>
    </PageCard>
  );
};

export default Page;

"use client";

import { usePathname, useSearchParams } from "next/navigation";

import Link from "next/link";
import PageCard from "@/components/PageCard";
import LinkWithIcon from "@/components/LinkWIthIcon";

const Page = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <PageCard
      title="useSearchParams"
      path="app/(navigation)/search-params/page.tsx"
      url="/search-params"
    >
      <div className="flex flex-col gap-2">
        {searchParams.size === 0 ? (
          <LinkWithIcon
            title="點擊取得 searchParams"
            path="/search-params?q=helloworld"
          />
        ) : (
          <LinkWithIcon title="去除 searchParams" path="/search-params" />
        )}
        <div>
          <div>pathname: {pathname}</div>
          <div>searchParams: {searchParams.get("q")}</div>
        </div>

        <div className="flex gap-5">
          <Link href="/" className="underline-offset-2 underline">
            回到首頁
          </Link>
        </div>
      </div>
    </PageCard>
  );
};

export default Page;

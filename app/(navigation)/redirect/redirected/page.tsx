"use client";

import { usePathname, useSearchParams } from "next/navigation";

import Link from "next/link";
import PageCard from "@/components/PageCard";
import LinkWithIcon from "@/components/LinkWIthIcon";
import Button from "@/components/Button";
import axios from "axios";

const Page = () => {
  return (
    <PageCard
      title="redirected"
      path="app/(navigation)/redirect/redirected/page.tsx"
      url="/redirect/redirected"
      description="重新導向了"
    >
      <div className="flex flex-col gap-2">
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

// redirectApi

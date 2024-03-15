"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import PageCard from "@/components/PageCard";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const refreshPage = () => {
    window.location.reload();
  };
  //回到上一頁且不重新整理
  const goBack = () => {
    router.back();
  };

  return (
    <PageCard
      title="(...)orders - 攔截成功的 Orders Page"
      path="app/(intercepting)/products/electronics/computers/(..)orders/page.tsx"
      url="/orders"
    >
      <div className="flex flex-col gap-5">
        <div>攔截成功！</div>
        <div className="flex gap-4 items-center">
          <Button label="回到上一頁(原始 Computers Page)" action={goBack} />
          <Button
            label="重新整理頁面(前往原始 Orders Page)"
            action={refreshPage}
          />
        </div>
        <Link href="/" className="underline-offset-2 underline">
          回到首頁
        </Link>
      </div>
    </PageCard>
  );
};

export default Page;

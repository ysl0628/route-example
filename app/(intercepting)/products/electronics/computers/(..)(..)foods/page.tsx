"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import PageCard from "@/components/PageCard";

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
      title="(..)(..)foods - 攔截成功的 Foods Page"
      path="app/(intercepting)/products/electronics/computers/(..)(..)foods/page.tsx"
      url="/products/foods"
    >
      <div className="flex flex-col gap-5">
        <div>攔截成功！</div>
        <div className="flex gap-4 items-center">
          <Button label="回到上一頁(原始 Computers Page)" action={goBack} />
          <Button
            label="重新整理頁面(前往原始 Foods Page)"
            action={refreshPage}
          />
        </div>
      </div>
    </PageCard>
  );
};

export default Page;

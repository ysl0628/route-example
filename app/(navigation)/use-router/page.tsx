"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import PageCard from "@/components/PageCard";
import Button from "@/components/Button";

const Page = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleRefresh = () => {
    router.refresh();
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <PageCard
      title="useRouter"
      path="app/(navigation)/use-router/page.tsx"
      url="/use-router"
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <div>
            <label
              htmlFor="small-inputValue"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              輸入文字
            </label>
            <input
              value={inputValue}
              onChange={handleChanges}
              type="text"
              id="small-inputValue"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className=" w-2/3">
          <Button
            label="router.refresh() - 點擊後上面的輸入內容不會消失"
            action={handleRefresh}
          />
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

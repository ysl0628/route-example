"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageCard from "@/components/PageCard";
import Dialog from "@/components/Dialog";

const Page = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const refreshPage = () => {
    window.location.reload();
  };
  //回到上一頁且不重新整理
  const goBack = () => {
    router.back();
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Dialog
      open={true}
      onConfirm={refreshPage}
      onClose={goBack}
      confirmText="重新整理頁面(前往原始 Form Page)"
      cancelText="回到上一頁(Intercepting-modal Page)"
    >
      <PageCard
        title="(.)form - 攔截成功的 Form Page"
        path="app/intercepting-modal/(.)form/page.tsx"
        url="/intercepting-modal/form"
      >
        <div className="flex flex-col gap-5">
          <div>攔截成功！</div>
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
        </div>
      </PageCard>
    </Dialog>
  );
};

export default Page;

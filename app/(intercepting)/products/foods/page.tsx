import Link from "next/link";
import PageCard from "@/components/PageCard";

const Page = () => {
  return (
    <PageCard
      title="foods - 原始的 Foods Page"
      path="app/(intercepting)/products/foods/page.tsx"
      url="/products/foods"
    >
      <div className="flex flex-col gap-2">
        <div>
          我被攔截了，你看到我是因為透過網址來了
          <br />
          或是在 (..)foods 中重新整理頁面
        </div>
        <Link href="/products" className="underline-offset-2 underline">
          回到 Products
        </Link>
      </div>
    </PageCard>
  );
};

export default Page;

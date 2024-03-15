import Link from "next/link";
import PageCard from "@/components/PageCard";

const Page = () => {
  return (
    <PageCard
      title="form - 原始的 Form Page"
      path="app/intercepting-modal/form/page.tsx"
      url="/intercepting-modal/form"
    >
      <div className="flex flex-col gap-2">
        <div>
          我被攔截了，
          <br />
          你看到我是因為透過網址來或是在 (.)form 中重新整理頁面
        </div>
        <Link
          href="/intercepting-modal"
          className="underline-offset-2 underline"
        >
          回到 Intercepting modal Page
        </Link>
        <Link href="/" className="underline-offset-2 underline">
          回到首頁
        </Link>
      </div>
    </PageCard>
  );
};

export default Page;

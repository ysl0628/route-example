import Link from "next/link";
import PageCard from "@/components/PageCard";
import LinkWithIcon from "@/components/LinkWIthIcon";

const Page = () => {
  return (
    <PageCard
      title="orders - 原始的 Orders Page"
      path="app/(intercepting)/orders/page.tsx"
      url="/orders"
    >
      <div className="flex flex-col gap-2">
        <div>
          我被攔截了，
          <br />
          你看到我是因為透過網址、首頁來或是在 (...)orders 中重新整理頁面
        </div>
        {/* <LinkWithIcon
          title="點擊連結跳出 form modal 畫面 - by (.)"
          path="/orders/form"
        /> */}
        <div className="flex gap-5">
          <Link href="/products" className="underline-offset-2 underline">
            回到 Products Page
          </Link>
          <Link href="/" className="underline-offset-2 underline">
            回到首頁
          </Link>
        </div>
      </div>
    </PageCard>
  );
};

export default Page;

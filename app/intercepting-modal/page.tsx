import Link from "next/link";
import PageCard from "@/components/PageCard";
import LinkWithIcon from "@/components/LinkWIthIcon/page";

const Page = () => {
  return (
    <PageCard
      title="Intercepting modal"
      path="app/intercepting-modal/page.tsx"
      url="/intercepting-modal"
    >
      <div className="flex flex-col gap-2">
        <LinkWithIcon
          title="點擊連結跳出 form modal 畫面 - by (.)"
          path="/intercepting-modal/form"
        />
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

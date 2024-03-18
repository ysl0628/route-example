import Link from "next/link";
import PageCard from "@/components/PageCard";
import LinkWithIcon from "@/components/LinkWIthIcon/page";

const Page = () => {
  return (
    <PageCard
      title="navigation demo"
      path="app/navigation-demo/page.tsx"
      url="/navigation-demo"
      description="這是一個 navigation 的範例頁面"
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-5">
          <Link href="/" className="underline-offset-2 underline">
            回到首頁
          </Link>
          <Link href="/link" className="underline-offset-2 underline">
            回到 Link Page
          </Link>
        </div>
      </div>
    </PageCard>
  );
};

export default Page;

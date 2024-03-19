import Link from "next/link";
import PageCard from "@/components/PageCard";
import LinkWithIcon from "@/components/LinkWIthIcon/page";
import Button from "@/components/Button";
import axios from "axios";

const Page = () => {
  return (
    <PageCard
      title="redirect"
      path="app/(navigation)/redirect/page.tsx"
      url="/redirect"
    >
      <div className="flex flex-col gap-2">
        <LinkWithIcon
          title="點擊 redirect/trigger?q=helloworld 重新導向至 redirect/redirected"
          path="/redirect/trigger?q=helloworld"
        />

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

import Link from "next/link";
import PageCard from "@/components/PageCard";
import LinkWithIcon from "@/components/LinkWIthIcon/page";

const Page = () => {
  return (
    <PageCard title="Link" path="app/link/page.tsx" url="/link">
      <div className="flex flex-col gap-2">
        <LinkWithIcon title="Next.js Link component" path="/navigation-demo" />
        <a
          className="inline-flex items-center font-medium text-green-600 dark:text-green-500 hover:underline"
          href="/navigation-demo"
        >
          &lt;a&gt; tags (點擊後會重新整理頁面才導向新頁面)
          <svg
            className="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
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

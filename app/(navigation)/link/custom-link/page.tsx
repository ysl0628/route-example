import LinkWithIcon from "@/components/LinkWIthIcon/page";
import PageCard from "@/components/PageCard";
import Link from "next/link";
import React from "react";

const MyButton = React.forwardRef<
  HTMLAnchorElement,
  { onClick?: React.MouseEventHandler<HTMLAnchorElement>; href?: string }
>(({ onClick, href }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      Custom a tag component in Link (使用 passHref 和 legacyBehavior 屬性)
    </a>
  );
});

const Page = () => {
  return (
    <PageCard
      title="custom link"
      path="app/link/custom-link/page.tsx"
      url="/link/custom-link"
    >
      <div className="flex flex-col gap-2">
        <Link href="/navigation-demo" passHref legacyBehavior>
          <MyButton />
        </Link>

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

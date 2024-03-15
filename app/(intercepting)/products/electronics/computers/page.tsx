import Link from "next/link";
import PageCard from "@/components/PageCard";
import LinkWithIcon from "@/components/LinkWIthIcon/page";

const Page = () => {
  return (
    <PageCard
      title="computers"
      path="app/(intercepting)/products/electronics/computers/page.tsx"
      url="/products/electronics/computers"
    >
      <div className="flex flex-col gap-3">
        <LinkWithIcon
          title="點擊連結前往攔截的 Foods 頁面 - (..)(..) 目前有 bug"
          path="/products/foods"
        />
        <LinkWithIcon
          title="點擊連結前往攔截的 Orders 頁面 - (...)"
          path="/orders"
        />
        <div className="flex flex-wrap gap-6">
          <Link
            href="/products/electronics"
            className="underline-offset-2 underline"
          >
            回到 Electronics
          </Link>
          <Link href="/products" className="underline-offset-2 underline">
            回到 Products
          </Link>
        </div>
      </div>
    </PageCard>
  );
};

export default Page;

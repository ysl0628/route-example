import Link from "next/link";
import PageCard from "@/components/PageCard";
import LinkWithIcon from "@/components/LinkWIthIcon";

const Page = () => {
  return (
    <PageCard
      title="computers"
      path="app/(intercepting)/products/electronics/computers/page.tsx"
      url="/products/electronics/computers"
      data={data}
    >
      <div className="flex flex-col gap-2">
        <LinkWithIcon
          title="點擊連結前往攔截的 Orders 頁面 - (...)"
          path="/orders"
        />
        <LinkWithIcon
          title="點擊連結前往攔截的 Foods 頁面 - (..)(..) 目前有 bug"
          path="/products/foods"
        />

        <div className="flex flex-wrap gap-6">
          <Link
            href="/products/electronics"
            className="underline-offset-2 underline"
          >
            回到 Electronics Page
          </Link>
          <Link href="/products" className="underline-offset-2 underline">
            回到 Products Page
          </Link>
        </div>
      </div>
    </PageCard>
  );
};

const data = [
  {
    title: "computers",
    children: [
      {
        title: "(...)orders",
        isFolder: true,
      },
      {
        title: "(..)(..)foods",
        isFolder: true,
      },
    ],
  },
];

export default Page;

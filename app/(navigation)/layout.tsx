import LayoutCard from "@/components/LayoutCard";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex m-auto justify-center h-[100dvh]">
      <div className=" mt-10">
        <LayoutCard
          title="Navigation Layout"
          path="app/(navigation)/layout.tsx"
        >
          <div className="flex gap-3 mb-2">
            <Link
              href="/link"
              className="underline-offset-2 underline font-medium text-rose-500"
            >
              前往 Link page
            </Link>
            <Link
              href="/use-router"
              className="underline-offset-2 underline font-medium text-rose-500"
            >
              前往 useRouter page
            </Link>
            <Link
              href="/search-params"
              className="underline-offset-2 underline font-medium text-rose-500"
            >
              前往 useSearchParams page
            </Link>
            <Link
              href="/redirect"
              className="underline-offset-2 underline font-medium text-rose-500"
            >
              前往 redirect page
            </Link>
          </div>
          <div className="flex flex-col w-[660px] gap-6">{children}</div>
        </LayoutCard>
      </div>
    </div>
  );
}

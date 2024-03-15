import LayoutCard from "@/components/LayoutCard";

type Props = {
  children: React.ReactNode;
  auth: React.ReactNode;
};

export default function Layout({ children, auth }: Props) {
  return (
    <LayoutCard title="Cart Layout" path="app/(intercepting)/cart/layout.tsx">
      <div className="flex flex-col w-full gap-6">
        {children}
        {auth}
      </div>
    </LayoutCard>
  );
}

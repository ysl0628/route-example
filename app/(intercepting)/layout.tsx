import LayoutCard from "@/components/LayoutCard";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex m-auto justify-center h-[100dvh]">
      <div className=" mt-10">
        <LayoutCard
          title="Intercepting Layout"
          path="app/(intercepting)/layout.tsx"
        >
          <div className="flex flex-col w-[660px] gap-6">{children}</div>
        </LayoutCard>
      </div>
    </div>
  );
}

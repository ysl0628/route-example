import LayoutCard from "@/components/LayoutCard";

type Props = {
  children: React.ReactNode;
  cart: React.ReactNode;
};

export default function Layout({ children, cart }: Props) {
  return (
    <div className="flex m-auto justify-center h-[100dvh]">
      <div className=" mt-10">
        <LayoutCard
          title="Intercepting modal Layout"
          path="app/intercepting-modal/layout.tsx"
        >
          <div className="flex flex-col w-[660px] gap-6">
            {children}
            {cart}
          </div>
        </LayoutCard>
      </div>
    </div>
  );
}

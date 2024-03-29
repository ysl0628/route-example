import LayoutCard from "@/components/LayoutCard";

type Props = {
  setup: React.ReactNode;
  preview: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ setup, preview, children }: Props) {
  return (
    <div className="flex m-auto justify-center h-[100dvh]">
      <div className=" mt-10">
        <LayoutCard title="Parallel Layout" path="app/parallel/layout.tsx">
          <div className="flex flex-col w-[660px] gap-6">
            <div className="flex gap-4">
              <div className="w-1/2">{setup}</div>
              <div className="w-1/2">{preview}</div>
            </div>
            {children}
          </div>
        </LayoutCard>
      </div>
    </div>
  );
}

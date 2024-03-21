import LayoutCard from '@/components/LayoutCard'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <LayoutCard
      title="Products Layout"
      path="app/(intercepting)/products/layout.tsx"
    >
      <div className="flex flex-col gap-6">{children}</div>
    </LayoutCard>
  )
}

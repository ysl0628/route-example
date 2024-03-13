import LayoutCard from '@/components/LayoutCard'
import { type PropsWithChildren } from 'react'

type Props = {
  parallelA: React.ReactNode
  parallelB: React.ReactNode
  children: React.ReactNode
}

export default function Layout({ parallelA, parallelB, children }: Props) {
  return (
    <div className="flex m-auto justify-center h-[100dvh]">
      <div className=" mt-10">
        <LayoutCard title="Parallel Layout" path="app/parallel/layout.tsx">
          <div className="flex flex-col w-[600px] gap-6">
            <div className="flex gap-4">
              <div className="w-1/2">{parallelA}</div>
              <div className="w-1/2">{parallelB}</div>
            </div>
            {children}
          </div>
        </LayoutCard>
      </div>
    </div>
  )
}

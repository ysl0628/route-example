"use client";

import Button from "@/components/Button";
import LayoutCard from "@/components/LayoutCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  admin: React.ReactNode;
  login: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ admin, login, children }: Props) {
  const route = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => setIsLogin((prev) => !prev);
  const handleBackToParallel = () => route.push("/parallel");

  return (
    <LayoutCard
      title="Parallel with Group Layout"
      path="app/parallel/parallel-with-group/layout.tsx"
    >
      <div className="flex flex-col w-full mb-6 gap-6">
        <div className="flex gap-4">
          <Button
            label={isLogin ? "Back to login" : "Login"}
            action={handleLogin}
          />
        </div>
        <div className="w-full">{isLogin ? admin : login}</div>
        {children}
      </div>

      <Button label={"Back to page parallel"} action={handleBackToParallel} />
    </LayoutCard>
  );
}

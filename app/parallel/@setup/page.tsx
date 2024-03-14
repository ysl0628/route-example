"use client";

import PageCard from "@/components/PageCard";
import React, { Suspense, useEffect, useState } from "react";

async function Main() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <PageCard title="@setup" path="app/parallel/@setup/page.tsx" />;
}

const Page = async () => {
  return (
    <Suspense fallback="Loading...">
      <Main />
    </Suspense>
  );
};

export default Page;

import React from "react";

type PageCardProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

const PageCard = ({ title, path, children }: PageCardProps) => {
  return (
    <div className="group rounded-lg border px-5 py-4 w-full transition-colors border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-800/30">
      <h2 className={`mb-3 text-xl font-semibold`}>{title}</h2>
      <p className="text-gray-500">📍: {path}</p>
      <div className=" mt-4">{children}</div>
    </div>
  );
};

export default PageCard;

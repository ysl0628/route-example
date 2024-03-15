import React from "react";
import TreeView from "../TreeView";

type PageCardProps = {
  title: string;
  path: string;
  url?: string;
  description?: string;
  data?: any;
  children?: React.ReactNode;
};

const PageCard = ({
  title,
  path,
  url,
  description,
  data,
  children,
}: PageCardProps) => {
  return (
    <div className="group rounded-lg border px-5 py-4 w-full transition-colors border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-800/30">
      <div className="flex justify-between w-full gap-y-6">
        <div className={"w-full"}>
          <h2 className={`mb-3 text-xl font-semibold`}>{title}</h2>
          <p className="text-gray-500">📍: {path}</p>
          {url && <p className="text-gray-500">🔗: {url}</p>}
          {description && <p className="text-gray-600">{description}</p>}
          <div className=" mt-4">{children}</div>
        </div>
        {data && (
          <div className="text-gray-500 self-center flex">
            {/* <div>🌳:</div> */}
            <TreeView data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageCard;

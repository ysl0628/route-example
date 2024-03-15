// TreeView.js
import React from "react";
// import FileIcon from "../Icons/FileIcon";
// import FolderIcon from "../Icons/FolderIIcon";

type Data = {
  title: string;
  isFolder?: boolean;
  children?: Data[];
};

type TreeViewProps = {
  data: Data[];
};

const TreeView = ({ data }: TreeViewProps) => {
  return (
    <ul className="list-none pl-5">
      {data.map((item, index) => {
        const isFolder =
          (item.children && item.children.length > 0) || item.isFolder;
        return (
          <li key={item.title + index || index}>
            <div className="flex gap-1">
              {isFolder ? "📁" : "📄"}
              <span>{item.title}</span>
            </div>
            {isFolder && item.children && <TreeView data={item.children} />}
          </li>
        );
      })}
    </ul>
  );
};

export default TreeView;

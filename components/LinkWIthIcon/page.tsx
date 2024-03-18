import Link, { LinkProps } from "next/link";

type LinkWithIconProps = {
  title: string;
  path: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Partial<LinkProps>;

const LinkWithIcon = ({ title, path, ...props }: LinkWithIconProps) => {
  return (
    <Link
      {...props}
      className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
      href={path}
    >
      {title}
      <svg
        className="w-4 h-4 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
};

export default LinkWithIcon;

import Link from 'next/link';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  as: string;
  href: string;
  children: React.ReactNode;
}

export function CustomLink({
  as,
  href,
  children,
  ...restProps
}: CustomLinkProps) {
  return (
    <Link as={as} href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a target="_blank" rel="noreferrer noopener" {...restProps}>
        {children}
      </a>
    </Link>
  );
}

export default CustomLink;

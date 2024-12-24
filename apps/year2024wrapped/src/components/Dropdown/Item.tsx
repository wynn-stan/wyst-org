import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Item({ children, ...rest }: Props) {
  return <div {...rest}>{children}</div>;
}

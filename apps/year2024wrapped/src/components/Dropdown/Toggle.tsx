import { Dropdown } from '@restart/ui';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  role?: string;
  withToggleIcon?: boolean;
}

export default function Toggle({
  children,
  withToggleIcon,
  className,
  ...containerProps
}: Props) {
  return (
    <Dropdown.Toggle>
      {(props, { show }) => (
        <button
          className={clsx('flex gap-2 items-center', className)}
          {...props}
          {...containerProps}
        >
          <div>{children}</div>
          {withToggleIcon ? show ? <ChevronUpIcon /> : <ChevronDownIcon /> : ''}
        </button>
      )}
    </Dropdown.Toggle>
  );
}

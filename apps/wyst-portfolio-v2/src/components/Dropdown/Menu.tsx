import { useDropdownMenu, UseDropdownMenuOptions } from '@restart/ui';
import clsx from 'clsx';
import { HTMLAttributes, useLayoutEffect } from 'react';

interface Props extends UseDropdownMenuOptions {
  children: React.ReactNode;
  role?: string;
  className?: string;
}

export default function Menu({
  children,
  role,
  className,
  offset,
  flip = true,
  ...rest
}: Props) {
  /**
   * Hooks
   */
  const [menuProps, { show, toggle, popper }] = useDropdownMenu({
    flip: flip,
    offset: offset || [0, 8],
  });

  /**
   * Effect
   */
  useLayoutEffect(() => {
    if (show) popper?.update();
  }, [show]);

  return (
    <div
      role={role}
      {...menuProps}
      {...rest}
      onClick={() => toggle?.(false)}
      className={clsx(
        show ? 'block' : 'hidden',
        'flex flex-col gap-3',
        'z-50',
        'px-3 py-5 rounded-xl shadow-md bg-white',
        className
      )}
    >
      {children}
    </div>
  );
}

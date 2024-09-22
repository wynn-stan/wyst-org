'use client';

import { Dropdown as RestartDropdown } from '@restart/ui';
import Item from './Item';
import Menu from './Menu';
import Toggle from './Toggle';

interface Props {
  children: React.ReactNode;
}

function LocalDropdown({ children }: Props) {
  return <RestartDropdown>{children}</RestartDropdown>;
}

export default Object.assign(LocalDropdown, { Item, Menu, Toggle });

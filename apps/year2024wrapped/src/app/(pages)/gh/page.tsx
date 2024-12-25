'use client';

import { Events, Persons, Tools } from './_sections';

export default function Page() {
  return (
    <div className="flex-grow flex flex-col ">
      <Events />
      <Persons />
      <Tools />
    </div>
  );
}

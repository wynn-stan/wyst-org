import { HTMLAttributes } from 'react';

import FadeInFromBelow from './FadeInFromBelow';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default Object.assign({}, { FadeInFromBelow });

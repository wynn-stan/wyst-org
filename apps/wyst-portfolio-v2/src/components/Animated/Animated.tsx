import { HTMLAttributes } from 'react';

import FadeInFromBelow from './FadeInFromBelow';
import FadeInFromBelowInView from './FadeInFromBelowInView';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default Object.assign({}, { FadeInFromBelow, FadeInFromBelowInView });

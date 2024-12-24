import { redirect } from 'next/navigation';
import { routes } from '../routes';

export default function Index() {
  redirect(routes.ghana_in_review.index);
}

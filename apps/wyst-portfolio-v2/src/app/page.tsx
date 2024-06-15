import { redirect } from 'next/navigation';
import routes from '../routes';

export default function Index() {
  //redirect to the latest home page
  redirect(routes.latest.home);
  return <></>;
}

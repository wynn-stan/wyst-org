import { Metadata } from 'next';
import { AppProvider } from '../../providers';
import { RootNavigation } from '../../components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <RootNavigation>{children}</RootNavigation>
    </AppProvider>
  );
}

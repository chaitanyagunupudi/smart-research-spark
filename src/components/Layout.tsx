import { Navigation } from './Navigation';
import { NetworkBackground } from './NetworkBackground';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './navbar';
import { Navbar2 } from './navbar2';

export function GlobalNavbar() {
  const pathname = usePathname();
  
  // Conditionally render the light theme navbar on the about page
  if (pathname === '/about') {
    return <Navbar2 />;
  }
  
  return <Navbar />;
}

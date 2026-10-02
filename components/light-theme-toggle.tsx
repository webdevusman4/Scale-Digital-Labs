'use client';

import { useEffect } from 'react';

/**
 * Adds the `light-theme` class to <body> on mount and removes it on unmount.
 * Drop this component into any page that should render in light mode.
 */
export function LightThemeToggle() {
  useEffect(() => {
    document.body.classList.add('light-theme');
    return () => {
      document.body.classList.remove('light-theme');
    };
  }, []);

  return null;
}

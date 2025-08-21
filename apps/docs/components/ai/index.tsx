'use client';
import { type ButtonHTMLAttributes } from 'react';
import { useAISidebar } from '@/context/AISidebarContext';

/**
 * The trigger component for AI search dialog.
 *
 * Use it like a normal button component.
 */
export function AISearchTrigger(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { setIsAISidebarOpen } = useAISidebar();

  return (
    <>
      <button {...props} onClick={() => setIsAISidebarOpen(true)} />
    </>
  );
}

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'relative overflow-hidden rounded-2xl border border-glass-border',
          'bg-glass backdrop-blur-md shadow-lg transition-all duration-300',
          hoverEffect && 'hover:border-glass-highlight hover:shadow-[0_0_30px_-5px_var(--color-accent-purple)] hover:-translate-y-1',
          className
        )
      )}
    >
      {/* Glossy gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
      
      {children}
    </div>
  );
}

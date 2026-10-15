'use client';

import React from 'react';

interface MemberProfileBadgeProps {
  name: string;
  role?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const colorMap: Record<string, string> = {
  mahi: 'from-blue-500 to-indigo-600 border-blue-400/30 text-blue-100',
  prachurja: 'from-emerald-500 to-teal-600 border-emerald-400/30 text-emerald-100',
  tahsin: 'from-violet-500 to-purple-600 border-violet-400/30 text-violet-100',
  shuvo: 'from-amber-500 to-orange-600 border-amber-400/30 text-amber-100',
  sajid: 'from-rose-500 to-pink-600 border-rose-400/30 text-rose-100',
  angkit: 'from-cyan-500 to-sky-600 border-cyan-400/30 text-cyan-100',
  aungkit: 'from-cyan-500 to-sky-600 border-cyan-400/30 text-cyan-100',
  shahriar: 'from-fuchsia-500 to-pink-600 border-fuchsia-400/30 text-fuchsia-100',
  nafeez: 'from-slate-500 to-zinc-600 border-slate-400/30 text-slate-100',
};

export const MemberProfileBadge: React.FC<MemberProfileBadgeProps> = ({
  name,
  role,
  size = 'md',
  className = '',
}) => {
  const key = name.toLowerCase().trim();
  const theme = colorMap[key] || 'from-slate-600 to-slate-700 border-slate-500/30 text-slate-100';
  const initial = name.charAt(0).toUpperCase();

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm font-semibold',
    lg: 'w-10 h-10 text-base font-bold',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className={`${sizeClasses} rounded-full bg-gradient-to-tr ${theme} flex items-center justify-center shadow-sm border`}
      >
        {initial}
      </div>
      <div>
        <div className="font-medium text-slate-200 text-sm leading-tight">{name}</div>
        {role && <div className="text-[11px] text-slate-400 leading-tight">{role}</div>}
      </div>
    </div>
  );
};

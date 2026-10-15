'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: string;
  accentColor?: 'emerald' | 'blue' | 'purple' | 'amber' | 'rose' | 'cyan';
  onClick?: () => void;
}

const colorVariants = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    iconBg: 'bg-emerald-500/20 text-emerald-300',
    glow: 'hover:border-emerald-500/40',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    iconBg: 'bg-blue-500/20 text-blue-300',
    glow: 'hover:border-blue-500/40',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    iconBg: 'bg-purple-500/20 text-purple-300',
    glow: 'hover:border-purple-500/40',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
    iconBg: 'bg-amber-500/20 text-amber-300',
    glow: 'hover:border-amber-500/40',
  },
  rose: {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    text: 'text-rose-400',
    iconBg: 'bg-rose-500/20 text-rose-300',
    glow: 'hover:border-rose-500/40',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    iconBg: 'bg-cyan-500/20 text-cyan-300',
    glow: 'hover:border-cyan-500/40',
  },
};

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  accentColor = 'emerald',
  onClick,
}) => {
  const c = colorVariants[accentColor];

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl border ${c.border} ${c.bg} p-5 backdrop-blur-xl transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:-translate-y-1 ' + c.glow : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium tracking-wide uppercase text-slate-400">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold tracking-tight text-white">{value}</h3>
            {trend && <span className="text-xs font-semibold text-emerald-400">{trend}</span>}
          </div>
          {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-xl ${c.iconBg} shadow-inner`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/[0.03] pointer-events-none blur-xl" />
    </div>
  );
};

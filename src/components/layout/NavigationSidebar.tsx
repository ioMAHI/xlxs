'use client';

import React from 'react';
import { useBachelor } from '@/context/BachelorContext';
import {
  LayoutDashboard,
  ShoppingBag,
  UtensilsCrossed,
  Zap,
  Wrench,
  Home,
  ShieldCheck,
  Scale,
  Download,
  RotateCcw,
  Users,
  FileSpreadsheet,
} from 'lucide-react';
import { MemberProfileBadge } from '@/components/common/MemberProfileBadge';

export const NavigationSidebar: React.FC = () => {
  const {
    state,
    activeTab,
    setActiveTab,
    selectedMember,
    setSelectedMember,
    exportToExcel,
    resetToDefaults,
  } = useBachelor();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard & Net Balances', icon: LayoutDashboard, badge: 'Overview' },
    { id: 'groceries', label: 'Groceries & Bazaar', icon: ShoppingBag, count: state.groceries.items.length },
    { id: 'meals', label: 'Meal Attendance Matrix', icon: UtensilsCrossed, badge: `${state.groceries.totalMeals} meals` },
    { id: 'utilities', label: 'Utilities & Bills', icon: Zap, badge: '৳4,670' },
    { id: 'setup', label: 'Flat Setup & Appliances', icon: Wrench, badge: '৳59,058' },
    { id: 'rent', label: 'Monthly Rent Tracker', icon: Home, badge: '৳37,000' },
    { id: 'advance', label: 'Advance & Shifting', icon: ShieldCheck, badge: 'Closed' },
    { id: 'settlement', label: 'Settlement Matrix', icon: Scale, badge: 'Smart' },
  ];

  return (
    <aside className="w-72 shrink-0 border-r border-slate-800/80 bg-slate-950/70 backdrop-blur-2xl flex flex-col h-screen sticky top-0 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/70 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-slate-950 font-black text-lg">
            PB
          </div>
          <div>
            <h1 className="font-extrabold text-sm tracking-wide text-white flex items-center gap-1.5">
              PARIBARIK BACHELOR
            </h1>
            <p className="text-[11px] text-emerald-400 font-medium">Mess & Expense Manager</p>
          </div>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Navigation
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}
                >
                  {item.badge}
                </span>
              )}
              {item.count !== undefined && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                  {item.count}
                </span>
              )}
            </button>
          );
        })}

        {/* Roommates Filter Section */}
        <div className="pt-6">
          <div className="px-3 pb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <span className="flex items-center gap-1.5">
              <Users className="w-3 h-3" /> Flatmates ({state.members.length})
            </span>
            {selectedMember && (
              <button
                onClick={() => setSelectedMember(null)}
                className="text-emerald-400 hover:underline text-[10px] normal-case font-semibold"
              >
                Clear Filter
              </button>
            )}
          </div>
          <div className="space-y-1">
            {state.members.slice(0, 6).map((m) => {
              const isSelected = selectedMember === m.name;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMember(isSelected ? null : m.name)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                    isSelected
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <MemberProfileBadge name={m.name} size="sm" />
                  <span className="text-[10px] text-slate-500">{m.role?.split('&')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer System Quick Actions */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/90 space-y-2">
        <button
          onClick={exportToExcel}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-emerald-500/20 hover:scale-[1.01]"
        >
          <Download className="w-3.5 h-3.5" />
          Export to Excel (.xlsx)
        </button>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={resetToDefaults}
            title="Reset all data back to original Excel file"
            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-slate-900 hover:bg-rose-950/40 hover:text-rose-400 border border-slate-800 text-slate-400 text-[11px] font-medium transition"
          >
            <RotateCcw className="w-3 h-3" />
            Reset Defaults
          </button>
        </div>
      </div>
    </aside>
  );
};

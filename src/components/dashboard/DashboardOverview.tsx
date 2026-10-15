'use client';

import React from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { StatCard } from '@/components/common/StatCard';
import { SummarySettlementCard } from '@/components/dashboard/SummarySettlementCard';
import { DebtSettlementGraph } from '@/components/settlement/DebtSettlementGraph';
import { formatBDT } from '@/utils/settlementCalculator';
import {
  Wrench,
  Home,
  ShoppingBag,
  Utensils,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  PieChart as PieIcon,
  Sparkles,
} from 'lucide-react';

export const DashboardOverview: React.FC = () => {
  const { state, setActiveTab } = useBachelor();

  // Categories spending breakdown
  const setupTotal = state.setupCost.totalSetupCost;
  const groceryTotal = state.groceries.totalCost;
  const utilityTotal = state.utilities.totalUtilityCost;
  const rentTotal = state.rent.monthlyRentTotal;
  const grandTotal = setupTotal + groceryTotal + utilityTotal + 3022; // shifting

  const categories = [
    { name: 'Setup & Appliances', amount: setupTotal, color: 'bg-emerald-500', tab: 'setup' },
    { name: 'Monthly Rent', amount: rentTotal, color: 'bg-blue-500', tab: 'rent' },
    { name: 'October Groceries', amount: groceryTotal, color: 'bg-amber-500', tab: 'groceries' },
    { name: 'October Utilities', amount: utilityTotal, color: 'bg-purple-500', tab: 'utilities' },
    { name: 'Shifting Logistics', amount: 3022, color: 'bg-rose-500', tab: 'advance' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/30 p-5 sm:p-7 shadow-2xl backdrop-blur-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bachelor Mess Live Financial Dashboard</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Flat Financial Overview & Roommate Balances
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Real-time synchronization across Setup Costs, Monthly Rent, Daily Groceries, Meal Attendance, and Utility Bills for all roommates.
            </p>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <button
              onClick={() => setActiveTab('groceries')}
              className="flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-1.5"
            >
              <span>Daily Groceries</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('meals')}
              className="flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition border border-slate-700 flex items-center justify-center gap-1.5"
            >
              <span>Meal Matrix</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Setup & Appliances"
          value={formatBDT(state.setupCost.totalSetupCost)}
          subtitle={`Per person: ${formatBDT(state.setupCost.perPersonShare)}`}
          icon={Wrench}
          accentColor="emerald"
          onClick={() => setActiveTab('setup')}
        />
        <StatCard
          title="October Groceries"
          value={formatBDT(state.groceries.totalCost)}
          subtitle={`${state.groceries.items.length} items logged`}
          icon={ShoppingBag}
          accentColor="amber"
          onClick={() => setActiveTab('groceries')}
        />
        <StatCard
          title="Dynamic Meal Rate"
          value={`৳${state.groceries.mealRate}`}
          subtitle={`${state.groceries.totalMeals} total meals consumed`}
          icon={Utensils}
          accentColor="cyan"
          trend="Live Rate"
          onClick={() => setActiveTab('meals')}
        />
        <StatCard
          title="October Utilities"
          value={formatBDT(state.utilities.totalUtilityCost)}
          subtitle={`Per person: ${formatBDT(state.utilities.perPersonShare)}`}
          icon={Zap}
          accentColor="purple"
          onClick={() => setActiveTab('utilities')}
        />
      </div>

      {/* Spending Breakdown Visual Progress Bar */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <PieIcon className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Expense Distribution by Category</h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            Total Living & Assets: <strong className="text-white">{formatBDT(grandTotal)}</strong>
          </span>
        </div>

        {/* Stacked Progress Bar */}
        <div className="h-4 w-full rounded-full bg-slate-950 overflow-hidden flex my-5 p-0.5 border border-slate-800">
          {categories.map((c) => {
            const pct = Math.max(2, (c.amount / (grandTotal + rentTotal)) * 100);
            return (
              <div
                key={c.name}
                style={{ width: `${pct}%` }}
                className={`${c.color} h-full rounded-sm transition-all duration-500`}
                title={`${c.name}: ${formatBDT(c.amount)} (${pct.toFixed(1)}%)`}
              />
            );
          })}
        </div>

        {/* Category Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((c) => (
            <button
              key={c.name}
              onClick={() => setActiveTab(c.tab)}
              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-800/50 transition text-left"
            >
              <span className={`w-3 h-3 rounded-full ${c.color} shrink-0`} />
              <div>
                <p className="text-[11px] text-slate-400 font-medium leading-tight">{c.name}</p>
                <p className="text-xs font-bold text-slate-200">{formatBDT(c.amount)}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Roommates Net Balances Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Roommates Net Due & Balance Ledger</h3>
            <p className="text-xs text-slate-400">
              Aggregated from Setup Costs, Utilities, Groceries & Advance from the Excel sheet.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('settlement')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
          >
            <span>Open Settlement Matrix</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {state.summaryBalances.map((bal) => (
            <SummarySettlementCard key={bal.name} balance={bal} />
          ))}
        </div>
      </div>

      {/* Smart Settlement Matrix */}
      <DebtSettlementGraph />
    </div>
  );
};

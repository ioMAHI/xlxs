'use client';

import React, { useState } from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { MemberProfileBadge } from '@/components/common/MemberProfileBadge';
import { formatBDT } from '@/utils/settlementCalculator';
import { Wrench, Plus, CheckCircle2, History, Layers } from 'lucide-react';
import { AddExpenseModal } from '@/components/common/AddExpenseModal';

export const SetupCostView: React.FC = () => {
  const { state } = useBachelor();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Appliance',
    'Kitchen',
    'Network',
    'Utility Fixture',
    'Maintenance',
    'Other',
  ];

  const filteredItems = state.setupCost.items.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
              Total Setup & Appliances
            </span>
            <Wrench className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-black text-white mt-2">
            {formatBDT(state.setupCost.totalSetupCost)}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {state.setupCost.items.length} permanent assets & fittings
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Per Person Share
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold">
              6 Flatmates
            </span>
          </div>
          <h3 className="text-2xl font-black text-white mt-2">
            {formatBDT(state.setupCost.perPersonShare)}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Formula: ৳59,058 ÷ 6 (rounded)
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/10 backdrop-blur-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              New Appliance
            </span>
            <Plus className="w-5 h-5 text-amber-400" />
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Bought new furniture, tools, or kitchen equipment?
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-3 w-full py-2 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Setup Item</span>
          </button>
        </div>
      </div>

      {/* Individual Summary Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white">Setup Cost Roommate Contributions</h3>
            <p className="text-xs text-slate-400">
              Who funded the setup upfront vs pending dues owed to Mahi.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
            Setup Balance Ledger
          </span>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-3 font-semibold">Flatmate</th>
                <th className="pb-3 font-semibold text-right">Contributed (৳)</th>
                <th className="pb-3 font-semibold text-right">Pending Due (৳)</th>
                <th className="pb-3 font-semibold text-right">Surplus Credit (৳)</th>
                <th className="pb-3 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {state.setupCost.memberSummaries.map((m) => {
                const isOverpaid = m.balance > 0.05;
                const isDue = m.due > 0.05;
                return (
                  <tr key={m.name} className="hover:bg-slate-800/30 transition">
                    <td className="py-3">
                      <MemberProfileBadge name={m.name} size="sm" />
                    </td>
                    <td className="py-3 text-right font-medium text-slate-200">
                      {formatBDT(m.paid)}
                    </td>
                    <td className="py-3 text-right">
                      {isDue ? (
                        <span className="font-extrabold text-rose-400">
                          {formatBDT(m.due)}
                        </span>
                      ) : (
                        <span className="text-slate-500 font-mono">৳0.00</span>
                      )}
                    </td>
                    <td className="py-3 text-right">
                      {isOverpaid ? (
                        <span className="font-extrabold text-emerald-400">
                          +{formatBDT(m.balance)}
                        </span>
                      ) : (
                        <span className="text-slate-500 font-mono">৳0.00</span>
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {isOverpaid ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-[10px]">
                          Lead Contributor
                        </span>
                      ) : isDue ? (
                        <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold text-[10px]">
                          Pending
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px]">
                          Settled
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid: 25 Setup Items vs 40+ Payment Ledger Entries */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Setup Inventory Items (2 columns) */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Apartment Inventory & Assets</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Showing {filteredItems.length} items
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === c
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 max-h-[500px] overflow-y-auto pr-1">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/60 flex items-center justify-between hover:border-slate-700 transition"
              >
                <div>
                  <h4 className="text-xs font-bold text-white">{item.item}</h4>
                  <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
                    {item.category}
                  </span>
                </div>
                <span className="text-sm font-extrabold text-emerald-400 font-mono">
                  {formatBDT(item.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Payments & Clearance Ledger (1 column) */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <History className="w-4 h-4 text-amber-400" />
              <span>Payment & Transfer Log</span>
            </h3>
            <span className="text-xs text-slate-400">
              {state.setupCost.payments.length} entries
            </span>
          </div>

          <div className="divide-y divide-slate-800/60 mt-3 max-h-[500px] overflow-y-auto pr-1">
            {state.setupCost.payments.map((p) => (
              <div key={p.id} className="py-2.5 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-200">{p.name}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        p.amount < 0
                          ? 'bg-rose-500/10 text-rose-400 font-bold'
                          : 'bg-emerald-500/10 text-emerald-400 font-bold'
                      }`}
                    >
                      {p.amount > 0 ? `+৳${p.amount}` : `-৳${Math.abs(p.amount)}`}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{p.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultType="setup"
      />
    </div>
  );
};

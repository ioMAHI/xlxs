'use client';

import React, { useState } from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { MemberProfileBadge } from '@/components/common/MemberProfileBadge';
import { formatBDT } from '@/utils/settlementCalculator';
import { Zap, Plus, Calendar, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { AddExpenseModal } from '@/components/common/AddExpenseModal';

export const UtilitiesExpenseView: React.FC = () => {
  const { state } = useBachelor();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-400">
              Total Utility Costs
            </span>
            <Zap className="w-5 h-5 text-purple-400" />
          </div>
          <h3 className="text-2xl font-black text-white mt-2">
            {formatBDT(state.utilities.totalUtilityCost)}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Electricity, Gas, Wifi, and Cleaning
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
            {formatBDT(state.utilities.perPersonShare)}
          </h3>
          <p className="text-xs text-slate-400 mt-1">Equal split across 6 members</p>
        </div>

        <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
              Actions
            </span>
            <Plus className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Record next month utility bill or clearance payment.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-3 w-full py-2 px-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 text-xs font-bold transition shadow-md shadow-purple-500/20 flex items-center justify-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Utility Bill</span>
          </button>
        </div>
      </div>

      {/* Roommates Individual Paid & Due Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white">Individual Paid & Due Summary</h3>
            <p className="text-xs text-slate-400">
              Target per roommate: {formatBDT(state.utilities.perPersonShare)}
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
            Utility Balance Ledger
          </span>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-3 font-semibold">Flatmate</th>
                <th className="pb-3 font-semibold text-right">Total Paid (৳)</th>
                <th className="pb-3 font-semibold text-right">Pending Due (৳)</th>
                <th className="pb-3 font-semibold text-right">Credit Balance (৳)</th>
                <th className="pb-3 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {state.utilities.memberSummaries.map((m) => {
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
                          Surplus Payer
                        </span>
                      ) : isDue ? (
                        <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold text-[10px]">
                          Due
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

      {/* Two columns: Utility Bills vs Payment Log */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bills list */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span>October Utility Bills</span>
            </h3>
            <span className="text-xs text-slate-400">{state.utilities.bills.length} bills</span>
          </div>

          <div className="divide-y divide-slate-800/60 mt-3">
            {state.utilities.bills.map((b) => (
              <div key={b.id} className="py-3 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{b.domain}</h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{b.date}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-emerald-400 font-medium">{b.status}</span>
                  </div>
                </div>
                <span className="text-sm font-extrabold text-white">{formatBDT(b.amount)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payments ledger */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Paid By & Transfer History</span>
            </h3>
            <span className="text-xs text-slate-400">{state.utilities.payments.length} entries</span>
          </div>

          <div className="divide-y divide-slate-800/60 mt-3 max-h-72 overflow-y-auto pr-1">
            {state.utilities.payments.map((p) => (
              <div key={p.id} className="py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <MemberProfileBadge name={p.name} size="sm" />
                  <span className="text-slate-300 font-medium">{p.reason}</span>
                </div>
                <span
                  className={`font-mono font-bold ${
                    p.amount < 0 ? 'text-rose-400' : 'text-slate-200'
                  }`}
                >
                  {p.amount > 0 ? `+${formatBDT(p.amount)}` : formatBDT(p.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultType="utility"
      />
    </div>
  );
};

'use client';

import React from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { MemberProfileBadge } from '@/components/common/MemberProfileBadge';
import { formatBDT } from '@/utils/settlementCalculator';
import { ShieldCheck, Truck, CheckCircle2, History, AlertCircle } from 'lucide-react';

export const AdvanceShiftingView: React.FC = () => {
  const { state } = useBachelor();
  const adv = state.advanceShifting;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
        <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
              Apartment Advance Deposit
            </span>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-black text-white mt-2">
            {formatBDT(adv.totalPaid)}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Status: <strong className="text-emerald-400">{adv.status}</strong> (Paid to Landlord)
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              Shifting Expenses
            </span>
            <Truck className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-2xl font-black text-white mt-2">
            ৳3,022.00
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Per person share: ৳604.40 (5 roommates)
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Settlement Status
            </span>
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            All Dues Cleared
          </h3>
          <p className="text-xs text-slate-400">
            Shifting accounts are 100% balanced and marked CLOSED in original sheet.
          </p>
        </div>
      </div>

      {/* Advance Security Deposit Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5 overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white">Flat Security Advance Deposit</h3>
            <p className="text-xs text-slate-400">
              Breakdown of security deposit paid by each roommate when moving into the flat.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Status: CLOSED
          </span>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-3 font-semibold">Flatmate</th>
                <th className="pb-3 font-semibold text-right">Asked Amount (৳)</th>
                <th className="pb-3 font-semibold text-right">Paid Amount (৳)</th>
                <th className="pb-3 font-semibold text-right">Due / Overpaid (৳)</th>
                <th className="pb-3 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {adv.deposits.map((dep) => (
                <tr key={dep.id} className="hover:bg-slate-800/30 transition">
                  <td className="py-3">
                    <MemberProfileBadge name={dep.name} size="sm" />
                  </td>
                  <td className="py-3 text-right font-medium text-slate-300">
                    {formatBDT(dep.asked)}
                  </td>
                  <td className="py-3 text-right font-bold text-white">
                    {formatBDT(dep.paid)}
                  </td>
                  <td className="py-3 text-right">
                    {dep.diff > 0 ? (
                      <span className="font-extrabold text-emerald-400">
                        +{formatBDT(dep.diff)}
                      </span>
                    ) : dep.diff < 0 ? (
                      <span className="font-extrabold text-rose-400">
                        {formatBDT(dep.diff)}
                      </span>
                    ) : (
                      <span className="text-slate-400 font-mono">৳0.00</span>
                    )}
                  </td>
                  <td className="py-3 text-center">
                    {dep.diff > 0 ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-[10px]">
                        Overpaid (+10k)
                      </span>
                    ) : dep.diff < 0 ? (
                      <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold text-[10px]">
                        Adjusted in Setup
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px]">
                        Settled
                      </span>
                    )}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-slate-700 bg-slate-950/60 font-bold">
                <td className="py-3 text-white uppercase text-xs">Total Advance</td>
                <td className="py-3 text-right font-extrabold text-slate-200">
                  {formatBDT(adv.totalAsked)}
                </td>
                <td className="py-3 text-right font-black text-emerald-400">
                  {formatBDT(adv.totalPaid)}
                </td>
                <td className="py-3 text-right text-slate-400">৳0.00</td>
                <td className="py-3 text-center text-emerald-400 text-[11px]">CLOSED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Shifting logistics & payments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shifting Costs breakdown */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Shifting Logistics & Tips</span>
            </h3>
            <span className="text-xs text-slate-400">Total: ৳3,022.00</span>
          </div>

          <div className="divide-y divide-slate-800/60 mt-3">
            {adv.shiftingExpenses.map((exp) => (
              <div key={exp.id} className="py-3 flex items-center justify-between text-xs">
                <span className="text-slate-200 font-medium">{exp.domain}</span>
                <span className="font-mono font-bold text-white">{formatBDT(exp.amount)}</span>
              </div>
            ))}
            <div className="pt-3 flex items-center justify-between text-xs font-bold text-amber-400">
              <span>Per Person (5 people)</span>
              <span>৳604.40</span>
            </div>
          </div>
        </div>

        {/* Shifting payment ledger */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <History className="w-4 h-4 text-blue-400" />
              <span>Shifting Settlement History</span>
            </h3>
            <span className="text-xs text-slate-400">All Reimbursed</span>
          </div>

          <div className="divide-y divide-slate-800/60 mt-3 max-h-64 overflow-y-auto pr-1">
            {adv.shiftingPayments.map((p) => (
              <div key={p.id} className="py-2.5 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-200">{p.name}</span>
                  <p className="text-[11px] text-slate-400">{p.note}</p>
                </div>
                <span
                  className={`font-mono font-bold ${
                    p.amount < 0 ? 'text-rose-400' : 'text-slate-200'
                  }`}
                >
                  {p.amount > 0 ? `+৳${p.amount}` : `-৳${Math.abs(p.amount)}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

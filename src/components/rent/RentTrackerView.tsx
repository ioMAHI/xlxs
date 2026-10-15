'use client';

import React, { useState } from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { MemberProfileBadge } from '@/components/common/MemberProfileBadge';
import { formatBDT } from '@/utils/settlementCalculator';
import { Home, CheckCircle2, Clock, Calendar, AlertTriangle } from 'lucide-react';

export const RentTrackerView: React.FC = () => {
  const { state, toggleRentStatus } = useBachelor();
  const [selectedMonthKey, setSelectedMonthKey] = useState<string>('2026-10-26');

  const selectedRecord =
    state.rent.records.find((r) => r.monthKey === selectedMonthKey) || state.rent.records[0];

  const totalCollected = selectedRecord ? selectedRecord.totalCollected : 0;
  const totalTarget = state.rent.monthlyRentTotal;
  const collectionPct = Math.round((totalCollected / totalTarget) * 100);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Total Flat Rent
            </span>
            <Home className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-2xl font-black text-white mt-2">
            {formatBDT(state.rent.monthlyRentTotal)}
          </h3>
          <p className="text-xs text-slate-400 mt-1">Due on 26th of each month</p>
        </div>

        <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
              Selected Month Collection
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
              {collectionPct}%
            </span>
          </div>
          <h3 className="text-2xl font-black text-white mt-2">
            {formatBDT(totalCollected)}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Target: {formatBDT(totalTarget)} ({selectedRecord?.label})
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
            Select Billing Month
          </span>
          <div className="flex items-center gap-2 mt-2">
            {state.rent.records.map((r) => (
              <button
                key={r.monthKey}
                onClick={() => setSelectedMonthKey(r.monthKey)}
                className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedMonthKey === r.monthKey
                    ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {r.label.split(' ')[0]}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            Cycle: 26th to 25th of month
          </p>
        </div>
      </div>

      {/* Collection Progress Bar */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-slate-300">
            {selectedRecord?.label} Payment Progress
          </span>
          <span className="font-bold text-emerald-400">
            {formatBDT(totalCollected)} / {formatBDT(totalTarget)}
          </span>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-950 overflow-hidden border border-slate-800">
          <div
            style={{ width: `${collectionPct}%` }}
            className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-500 rounded-full"
          />
        </div>
      </div>

      {/* Roommates Rent Breakdown Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5 overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white">Monthly Rent Split per Room</h3>
            <p className="text-xs text-slate-400">
              Click status button to toggle between Paid, Partial, or Due.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
            {selectedRecord?.label}
          </span>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-3 font-semibold">Flatmate</th>
                <th className="pb-3 font-semibold">Room Assignment</th>
                <th className="pb-3 font-semibold text-right">Rent Share (৳)</th>
                <th className="pb-3 font-semibold text-center">Status</th>
                <th className="pb-3 font-semibold text-center w-28">Quick Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {state.rent.shares.map((share) => {
                const status = selectedRecord?.statuses[share.name] || 'Due';
                return (
                  <tr key={share.name} className="hover:bg-slate-800/30 transition">
                    <td className="py-3">
                      <MemberProfileBadge name={share.name} size="sm" />
                    </td>
                    <td className="py-3 text-slate-400 font-medium">
                      {share.roomType || 'Standard'}
                    </td>
                    <td className="py-3 text-right font-extrabold text-white font-mono">
                      {formatBDT(share.monthlyAmount)}
                    </td>
                    <td className="py-3 text-center">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          status === 'Paid'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : status === 'Partial'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        {status === 'Paid' ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        <span>{status}</span>
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <button
                        onClick={() => {
                          const nextStatus =
                            status === 'Paid' ? 'Due' : status === 'Due' ? 'Paid' : 'Due';
                          toggleRentStatus(selectedMonthKey, share.name, nextStatus);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-semibold transition"
                      >
                        Toggle Status
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

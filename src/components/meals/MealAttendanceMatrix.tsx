'use client';

import React, { useState } from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { MemberProfileBadge } from '@/components/common/MemberProfileBadge';
import { Utensils, Plus, Calendar, Sparkles, Edit2 } from 'lucide-react';
import { AddMealEntryModal } from '@/components/common/AddMealEntryModal';
import { formatBDT } from '@/utils/settlementCalculator';

export const MealAttendanceMatrix: React.FC = () => {
  const { state, updateMealCount } = useBachelor();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCell, setEditingCell] = useState<{ member: string; date: string } | null>(null);

  const dates = state.meals.dates;
  const records = state.meals.records;

  // Calculate daily totals across members
  const dailyTotals = dates.map((d) => {
    return records.reduce((sum, r) => sum + (r.mealsByDate[d] || 0), 0);
  });

  const grandTotalMeals = records.reduce((sum, r) => sum + r.totalMeals, 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Info Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">Daily Meal Attendance Matrix</h2>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
              October Mess
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Click on any date cell to modify meal counts. Dynamic meal rate updates automatically!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Meal Rate</span>
            <span className="text-base font-extrabold text-cyan-400">৳{state.groceries.mealRate}</span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-amber-500/20"
          >
            <Plus className="w-4 h-4" />
            <span>Record Meals</span>
          </button>
        </div>
      </div>

      {/* Calendar Matrix Grid */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-3.5 sm:p-5 overflow-hidden">
        {/* Mobile Swipe Hint */}
        <div className="lg:hidden flex items-center justify-between text-[11px] text-slate-400 mb-3 px-1">
          <span className="flex items-center gap-1.5 text-amber-300">
            <span>↔️</span> Swipe table horizontally for all dates
          </span>
          <span className="text-[10px] text-slate-500">Oct 12 - 31</span>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-thin">
          <table className="w-full text-center text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-3 text-left font-semibold sticky left-0 bg-[#0f172a] z-20 pr-3 min-w-[130px] sm:min-w-[140px] border-r border-slate-800/80 shadow-[2px_0_5px_rgba(0,0,0,0.3)]">
                  Roommate
                </th>
                {dates.map((d) => {
                  const dayNum = d.split('-')[2];
                  const hasMeals = records.some((r) => (r.mealsByDate[d] || 0) > 0);
                  return (
                    <th
                      key={d}
                      className={`pb-3 px-2 font-medium min-w-[46px] ${
                        hasMeals ? 'text-amber-400 font-bold' : 'text-slate-500'
                      }`}
                    >
                      <div className="text-[10px] uppercase text-slate-400">Oct</div>
                      <div className="text-xs">{dayNum}</div>
                    </th>
                  );
                })}
                <th className="pb-3 font-bold text-white px-3 sticky right-0 bg-slate-900/90 z-10 min-w-[80px]">
                  Total Meals
                </th>
                <th className="pb-3 font-bold text-cyan-400 px-3 min-w-[90px]">
                  Total Cost
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60">
              {records.map((r) => {
                const totalCost = Math.round(r.totalMeals * state.groceries.mealRate * 100) / 100;
                return (
                  <tr key={r.name} className="hover:bg-slate-800/30 transition">
                    <td className="py-3 text-left sticky left-0 bg-[#0f172a] z-20 pr-3 border-r border-slate-800/80 shadow-[2px_0_5px_rgba(0,0,0,0.3)]">
                      <MemberProfileBadge name={r.name} size="sm" />
                    </td>

                    {dates.map((d) => {
                      const count = r.mealsByDate[d] !== undefined ? r.mealsByDate[d] : 0;
                      const isEditing =
                        editingCell?.member === r.name && editingCell?.date === d;

                      return (
                        <td key={d} className="py-2 px-1">
                          {isEditing ? (
                            <select
                              autoFocus
                              value={count}
                              onChange={(e) => {
                                updateMealCount(r.name, d, Number(e.target.value));
                                setEditingCell(null);
                              }}
                              onBlur={() => setEditingCell(null)}
                              className="w-10 py-1 text-center bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
                            >
                              {[0, 1, 2, 3, 4].map((n) => (
                                <option key={n} value={n}>
                                  {n}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <button
                              onClick={() => setEditingCell({ member: r.name, date: d })}
                              className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
                                count > 0
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500 hover:text-slate-950 shadow-sm'
                                  : 'text-slate-600 hover:text-slate-400 hover:bg-slate-800/60'
                              }`}
                              title={`Edit: ${r.name} on ${d}`}
                            >
                              {count > 0 ? count : '-'}
                            </button>
                          )}
                        </td>
                      );
                    })}

                    <td className="py-3 font-extrabold text-white sticky right-0 bg-slate-900/90 z-10 px-3">
                      <span className="px-2 py-1 rounded-md bg-slate-800 text-amber-300">
                        {r.totalMeals}
                      </span>
                    </td>

                    <td className="py-3 font-bold text-cyan-400 px-3">
                      {formatBDT(totalCost)}
                    </td>
                  </tr>
                );
              })}

              {/* Total Daily Summary Row */}
              <tr className="border-t-2 border-slate-700 bg-slate-950/60 font-bold">
                <td className="py-3 text-left uppercase tracking-wider text-xs text-slate-300 sticky left-0 bg-[#0b1120] z-20 pr-3 border-r border-slate-800/80 shadow-[2px_0_5px_rgba(0,0,0,0.3)]">
                  Daily Totals
                </td>
                {dailyTotals.map((tot, idx) => (
                  <td
                    key={idx}
                    className={`py-3 px-1 text-xs ${
                      tot > 0 ? 'text-amber-400 font-extrabold' : 'text-slate-600'
                    }`}
                  >
                    {tot > 0 ? tot : '-'}
                  </td>
                ))}
                <td className="py-3 sticky right-0 bg-slate-950 z-10 px-3 text-emerald-400 text-sm font-black">
                  {grandTotalMeals}
                </td>
                <td className="py-3 px-3 text-cyan-400 text-sm font-black">
                  {formatBDT(state.groceries.totalCost)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span>Active meal counts recorded</span>
          </div>
          <span>Tip: Click any number or dash in the grid to change meal count</span>
        </div>
      </div>

      <AddMealEntryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

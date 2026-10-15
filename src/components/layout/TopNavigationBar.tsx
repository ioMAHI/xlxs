'use client';

import React, { useState } from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { Search, Plus, Utensils, Download, Filter, Sparkles } from 'lucide-react';
import { AddExpenseModal } from '@/components/common/AddExpenseModal';
import { AddMealEntryModal } from '@/components/common/AddMealEntryModal';
import { formatBDT } from '@/utils/settlementCalculator';

export const TopNavigationBar: React.FC = () => {
  const {
    state,
    searchQuery,
    setSearchQuery,
    selectedMember,
    setSelectedMember,
    exportToExcel,
  } = useBachelor();

  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isMealModalOpen, setIsMealModalOpen] = useState(false);

  // Compute Grand Total non-rent expenditure (Setup + Groceries + Utilities + Shifting)
  const grandTotalExpenditure =
    state.setupCost.totalSetupCost +
    state.groceries.totalCost +
    state.utilities.totalUtilityCost +
    3022; // shifting total

  return (
    <>
      <header className="h-16 px-6 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-2xl flex items-center justify-between sticky top-0 z-30">
        {/* Search Bar */}
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search groceries, appliances, utilities, or roommate payments..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {selectedMember && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold whitespace-nowrap">
              <Filter className="w-3 h-3" />
              <span>{selectedMember}</span>
              <button
                onClick={() => setSelectedMember(null)}
                className="ml-1 hover:text-white text-emerald-300"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Flat Budget Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">Total Setup & Living:</span>
            <span className="font-bold text-white">{formatBDT(grandTotalExpenditure)}</span>
          </div>

          <button
            onClick={() => setIsMealModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold transition shadow-sm"
          >
            <Utensils className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Record Meal</span>
          </button>

          <button
            onClick={() => setIsExpenseModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
          >
            <Plus className="w-4 h-4" />
            <span>Add Expense</span>
          </button>
        </div>
      </header>

      {/* Modals */}
      <AddExpenseModal
        isOpen={isExpenseModalOpen}
        onClose={() => setIsExpenseModalOpen(false)}
      />
      <AddMealEntryModal
        isOpen={isMealModalOpen}
        onClose={() => setIsMealModalOpen(false)}
      />
    </>
  );
};

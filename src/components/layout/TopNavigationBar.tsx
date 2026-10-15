'use client';

import React, { useState } from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { Search, Plus, Utensils, Filter, Menu, Sparkles } from 'lucide-react';
import { AddExpenseModal } from '@/components/common/AddExpenseModal';
import { AddMealEntryModal } from '@/components/common/AddMealEntryModal';
import { formatBDT } from '@/utils/settlementCalculator';

interface TopNavigationBarProps {
  onOpenMobileMenu?: () => void;
}

export const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ onOpenMobileMenu }) => {
  const {
    state,
    searchQuery,
    setSearchQuery,
    selectedMember,
    setSelectedMember,
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
      <header className="h-16 px-4 sm:px-6 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-2xl flex items-center justify-between sticky top-0 z-30 gap-2 sm:gap-4">
        {/* Mobile Hamburger & Logo for small screens */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenMobileMenu}
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 active:scale-95 transition"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-slate-950 text-xs sm:hidden">
            PB
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 flex-1 max-w-xs sm:max-w-md">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {selectedMember && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold whitespace-nowrap">
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
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Flat Budget Badge (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">Total Setup & Living:</span>
            <span className="font-bold text-white">{formatBDT(grandTotalExpenditure)}</span>
          </div>

          <button
            onClick={() => setIsMealModalOpen(true)}
            title="Record Meal"
            className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold transition shadow-sm"
          >
            <Utensils className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Record Meal</span>
          </button>

          <button
            onClick={() => setIsExpenseModalOpen(true)}
            title="Add Expense"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Expense</span>
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

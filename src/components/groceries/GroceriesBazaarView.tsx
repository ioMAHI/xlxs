'use client';

import React, { useState } from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { MemberProfileBadge } from '@/components/common/MemberProfileBadge';
import { formatBDT } from '@/utils/settlementCalculator';
import {
  ShoppingBag,
  Plus,
  Trash2,
  Calendar,
  Utensils,
  Search,
  Filter,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { AddExpenseModal } from '@/components/common/AddExpenseModal';

export const GroceriesBazaarView: React.FC = () => {
  const {
    state,
    deleteGroceryItem,
    searchQuery,
    selectedMember,
    setSelectedMember,
  } = useBachelor();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Poultry & Meat',
    'Rice & Grains',
    'Dairy & Eggs',
    'Spices',
    'Oil & Condiments',
    'Vegetables',
    'Other',
  ];

  // Filter grocery items
  const filteredItems = state.groceries.items.filter((it) => {
    const matchesSearch =
      searchQuery === '' ||
      it.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      it.paidBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      it.quantity.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || it.category === selectedCategory;

    const matchesMember =
      !selectedMember || it.paidBy.toLowerCase() === selectedMember.toLowerCase();

    return matchesSearch && matchesCategory && matchesMember;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Header & Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              Total Grocery Expense
            </span>
            <ShoppingBag className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-2xl font-black text-white mt-2">
            {formatBDT(state.groceries.totalCost)}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {state.groceries.items.length} items purchased for mess
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
              Per Meal Cost (Rate)
            </span>
            <Utensils className="w-5 h-5 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-black text-white mt-2">
            ৳{state.groceries.mealRate}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Formula: Total Cost ÷ Total Meals ({state.groceries.totalMeals} meals)
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
              Quick Action
            </span>
            <Plus className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Record market shopping to auto-update meal rate & individual splits.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-3 w-full py-2 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Grocery Item</span>
          </button>
        </div>
      </div>

      {/* Roommate Meal Cost Allocation Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5 overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white">Meal Cost Split & Summary</h3>
            <p className="text-xs text-slate-400">
              Comparing what each roommate paid for groceries vs their meals eaten.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
            October Mess Ledger
          </span>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-3 font-semibold">Roommate</th>
                <th className="pb-3 font-semibold text-right">Grocery Paid</th>
                <th className="pb-3 font-semibold text-center">Meals Eaten</th>
                <th className="pb-3 font-semibold text-right">Meal Cost (To Pay)</th>
                <th className="pb-3 font-semibold text-right">Net Due / Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {state.groceries.memberSummaries.map((m) => {
                const isOverpaid = m.netBalance > 0.05;
                const isDue = m.netDue > 0.05;
                return (
                  <tr key={m.name} className="hover:bg-slate-800/30 transition">
                    <td className="py-3">
                      <MemberProfileBadge name={m.name} size="sm" />
                    </td>
                    <td className="py-3 text-right font-medium text-slate-200">
                      {formatBDT(m.totalGroceryPaid)}
                    </td>
                    <td className="py-3 text-center">
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-200 font-bold">
                        {m.mealCount}
                      </span>
                    </td>
                    <td className="py-3 text-right font-medium text-slate-300">
                      {formatBDT(m.toBePaid)}
                    </td>
                    <td className="py-3 text-right">
                      {isOverpaid ? (
                        <span className="font-extrabold text-emerald-400">
                          +{formatBDT(m.netBalance)}
                        </span>
                      ) : isDue ? (
                        <span className="font-extrabold text-rose-400">
                          -{formatBDT(m.netDue)}
                        </span>
                      ) : (
                        <span className="text-slate-400 font-medium">Settled</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Itemized Groceries Log */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white">Daily Shopping Items Ledger</h3>
            <p className="text-xs text-slate-400">
              Showing {filteredItems.length} of {state.groceries.items.length} items
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Table of items */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-3 font-semibold">Item & Details</th>
                <th className="pb-3 font-semibold">Category</th>
                <th className="pb-3 font-semibold">Quantity</th>
                <th className="pb-3 font-semibold">Purchased By</th>
                <th className="pb-3 font-semibold">Date</th>
                <th className="pb-3 font-semibold text-right">Cost (৳)</th>
                <th className="pb-3 font-semibold text-center w-12">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/30 transition group">
                  <td className="py-3 font-medium text-slate-100">
                    {item.domain}
                  </td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-medium border border-slate-700/60">
                      {item.category || 'Other'}
                    </span>
                  </td>
                  <td className="py-3 text-slate-400 font-mono">
                    {item.quantity || '-'}
                  </td>
                  <td className="py-3">
                    <MemberProfileBadge name={item.paidBy} size="sm" />
                  </td>
                  <td className="py-3 text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{item.date}</span>
                  </td>
                  <td className="py-3 text-right font-extrabold text-amber-300">
                    {formatBDT(item.amount)}
                  </td>
                  <td className="py-3 text-center">
                    <button
                      onClick={() => deleteGroceryItem(item.id)}
                      title="Delete item"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 opacity-0 group-hover:opacity-100 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-xs">
              No grocery items match the search or filter criteria.
            </div>
          )}
        </div>
      </div>

      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultType="grocery"
      />
    </div>
  );
};

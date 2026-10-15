'use client';

import React, { useState } from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { X, Utensils } from 'lucide-react';

interface AddMealEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddMealEntryModal: React.FC<AddMealEntryModalProps> = ({ isOpen, onClose }) => {
  const { state, updateMealCount } = useBachelor();

  const [member, setMember] = useState('Prachurja');
  const [date, setDate] = useState('2026-10-16');
  const [meals, setMeals] = useState<number>(2);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMealCount(member, date, Number(meals));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-700/60 bg-slate-900/95 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Record Daily Meals</h3>
              <p className="text-xs text-slate-400">Updates attendance matrix & dynamically recalculates meal rate</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Select Roommate / Member</label>
            <select
              value={member}
              onChange={(e) => setMember(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:border-amber-500 text-sm"
            >
              {state.meals.records.map((r) => (
                <option key={r.name} value={r.name}>
                  {r.name} (Current total: {r.totalMeals} meals)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:border-amber-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Number of Meals (Lunch + Dinner / Guests)</label>
            <div className="flex items-center gap-3">
              {[0, 1, 2, 3, 4].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setMeals(num)}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all border ${
                    meals === num
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              Save Meal Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

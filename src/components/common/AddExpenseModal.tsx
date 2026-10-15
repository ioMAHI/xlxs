'use client';

import React, { useState } from 'react';
import { useBachelor } from '@/context/BachelorContext';
import { X, ShoppingBag, Zap, Wrench } from 'lucide-react';

interface AddExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'grocery' | 'utility' | 'setup';
}

export const AddExpenseModal: React.FC<AddExpenseModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'grocery',
}) => {
  const { state, addGroceryItem, addUtilityBill, addSetupItem } = useBachelor();

  const [type, setType] = useState<'grocery' | 'utility' | 'setup'>(defaultType);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [payer, setPayer] = useState('Mahi');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [category, setCategory] = useState<any>('Other');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (!title.trim() || isNaN(numAmount) || numAmount <= 0) return;

    if (type === 'grocery') {
      addGroceryItem({
        domain: title.trim(),
        quantity: quantity.trim() || '1 item',
        amount: numAmount,
        paidBy: payer,
        date: date,
        category: category,
      });
    } else if (type === 'utility') {
      addUtilityBill({
        domain: title.trim(),
        amount: numAmount,
        date: date,
        status: 'Paid',
      });
    } else {
      addSetupItem({
        item: title.trim(),
        amount: numAmount,
        category: category,
      });
    }

    // Reset and close
    setTitle('');
    setAmount('');
    setQuantity('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-700/60 bg-slate-900/95 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {type === 'grocery' ? <ShoppingBag className="w-5 h-5" /> : type === 'utility' ? <Zap className="w-5 h-5" /> : <Wrench className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Record New Expense</h3>
              <p className="text-xs text-slate-400">Updates live database, recalculates meal rate & splits</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="grid grid-cols-3 gap-2 my-5 p-1 rounded-xl bg-slate-950/60 border border-slate-800">
          <button
            type="button"
            onClick={() => setType('grocery')}
            className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
              type === 'grocery'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Daily Grocery
          </button>
          <button
            type="button"
            onClick={() => setType('utility')}
            className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
              type === 'utility'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Utility Bill
          </button>
          <button
            type="button"
            onClick={() => setType('setup')}
            className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
              type === 'setup'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Setup / Appliance
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {type === 'grocery' ? 'Item Name (e.g. Rice 5kg, Chicken, Eggs)' : type === 'utility' ? 'Bill Domain (e.g. Electricity, Gas, Wifi)' : 'Fixture / Appliance Name'}
            </label>
            <input
              type="text"
              required
              placeholder={type === 'grocery' ? 'e.g. Miniket Rice' : type === 'utility' ? 'e.g. Gas Cylinder Refill' : 'e.g. Microwave'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Amount (৳ BDT)</label>
              <input
                type="number"
                step="any"
                required
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>
            {type === 'grocery' ? (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Quantity / Spec</label>
                <input
                  type="text"
                  placeholder="e.g. 2 Kg, 12 pcs"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>
            ) : (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>
            )}
          </div>

          {type === 'grocery' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Paid By</label>
                <select
                  value={payer}
                  onChange={(e) => setPayer(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
                >
                  {state.members.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
                >
                  <option value="Rice & Grains">Rice & Grains</option>
                  <option value="Poultry & Meat">Poultry & Meat</option>
                  <option value="Dairy & Eggs">Dairy & Eggs</option>
                  <option value="Oil & Condiments">Oil & Condiments</option>
                  <option value="Spices">Spices</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          )}

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
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
            >
              Save & Recalculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

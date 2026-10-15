'use client';

import React, { useState } from 'react';
import { SummaryBalance } from '@/types';
import { MemberProfileBadge } from '@/components/common/MemberProfileBadge';
import { formatBDT } from '@/utils/settlementCalculator';
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle2 } from 'lucide-react';

interface SummarySettlementCardProps {
  balance: SummaryBalance;
}

export const SummarySettlementCard: React.FC<SummarySettlementCardProps> = ({ balance }) => {
  const [expanded, setExpanded] = useState(false);

  const isDebtor = balance.due > 0.05;
  const isCreditor = balance.balance > 0.05;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-5 hover:border-slate-700 transition-all duration-300">
      <div className="flex items-center justify-between">
        <MemberProfileBadge name={balance.name} size="md" />

        <div className="text-right">
          {isDebtor ? (
            <div>
              <span className="text-[11px] uppercase tracking-wider text-rose-400 font-semibold block">
                Total Due
              </span>
              <span className="text-xl font-extrabold text-rose-400">
                {formatBDT(balance.due)}
              </span>
            </div>
          ) : isCreditor ? (
            <div>
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">
                Net Receivable
              </span>
              <span className="text-xl font-extrabold text-emerald-400">
                +{formatBDT(balance.balance)}
              </span>
            </div>
          ) : (
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                Status
              </span>
              <span className="text-base font-bold text-slate-300 flex items-center gap-1 justify-end">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Settled
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Mini status bar */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {isDebtor ? (
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium">
              <AlertCircle className="w-3 h-3" /> Needs Settlement
            </span>
          ) : isCreditor ? (
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              <CheckCircle2 className="w-3 h-3" /> Surplus Contributor
            </span>
          ) : (
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-medium">
              Balanced
            </span>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium transition"
        >
          {expanded ? 'Hide Details' : 'View Breakdown'}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expanded Breakdown */}
      {expanded && (
        <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 text-xs animate-in fade-in duration-200">
          <div className="flex justify-between py-1 text-slate-400">
            <span>Setup & Appliance Share</span>
            <span className="font-semibold text-slate-200">
              {balance.breakdown.setupCostDue > 0
                ? `Due: ${formatBDT(balance.breakdown.setupCostDue)}`
                : balance.breakdown.setupCostBalance > 0
                ? `Overpaid: +${formatBDT(balance.breakdown.setupCostBalance)}`
                : 'Settled'}
            </span>
          </div>

          <div className="flex justify-between py-1 text-slate-400">
            <span>Utilities (Gas, Wifi, Power)</span>
            <span className="font-semibold text-slate-200">
              {balance.breakdown.utilitiesDue > 0
                ? `Due: ${formatBDT(balance.breakdown.utilitiesDue)}`
                : balance.breakdown.utilitiesBalance > 0
                ? `Overpaid: +${formatBDT(balance.breakdown.utilitiesBalance)}`
                : 'Settled'}
            </span>
          </div>

          {balance.breakdown.groceriesDue !== undefined && (
            <div className="flex justify-between py-1 text-slate-400">
              <span>Groceries & Mess Meals</span>
              <span className="font-semibold text-slate-200">
                {balance.breakdown.groceriesDue > 0
                  ? `Due: ${formatBDT(balance.breakdown.groceriesDue)}`
                  : balance.breakdown.groceriesBalance && balance.breakdown.groceriesBalance > 0
                  ? `Overpaid: +${formatBDT(balance.breakdown.groceriesBalance)}`
                  : 'Settled'}
              </span>
            </div>
          )}

          <div className="flex justify-between py-1 text-slate-400">
            <span>Advance & Shifting Deposit</span>
            <span className="font-semibold text-slate-200">
              {balance.breakdown.advanceShiftingDue > 0
                ? `Due: ${formatBDT(balance.breakdown.advanceShiftingDue)}`
                : balance.breakdown.advanceShiftingBalance > 0
                ? `Overpaid: +${formatBDT(balance.breakdown.advanceShiftingBalance)}`
                : 'Settled (Closed)'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

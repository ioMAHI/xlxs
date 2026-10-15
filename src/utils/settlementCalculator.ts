export interface PeerTransfer {
  from: string;
  to: string;
  amount: number;
}

/**
 * Calculates optimal peer-to-peer debt settlement using a greedy balancing algorithm.
 * Takes net balances where positive = owed money (creditor), negative = owes money (debtor).
 */
export function calculateSettlements(
  balances: { name: string; net: number }[]
): PeerTransfer[] {
  // Deep clone to prevent mutations
  const creditors: { name: string; amount: number }[] = [];
  const debtors: { name: string; amount: number }[] = [];

  for (const b of balances) {
    const rounded = Math.round(b.net * 100) / 100;
    if (rounded > 0.01) {
      creditors.push({ name: b.name, amount: rounded });
    } else if (rounded < -0.01) {
      debtors.push({ name: b.name, amount: Math.abs(rounded) });
    }
  }

  creditors.sort((a, b) => b.amount - a.amount);
  debtors.sort((a, b) => b.amount - a.amount);

  const transfers: PeerTransfer[] = [];
  let cIdx = 0;
  let dIdx = 0;

  while (cIdx < creditors.length && dIdx < debtors.length) {
    const creditor = creditors[cIdx];
    const debtor = debtors[dIdx];

    const settleAmount = Math.min(creditor.amount, debtor.amount);
    if (settleAmount > 0.01) {
      transfers.push({
        from: debtor.name,
        to: creditor.name,
        amount: Math.round(settleAmount * 100) / 100,
      });
    }

    creditor.amount -= settleAmount;
    debtor.amount -= settleAmount;

    if (creditor.amount < 0.01) cIdx++;
    if (debtor.amount < 0.01) dIdx++;
  }

  return transfers;
}

export function formatBDT(amount: number): string {
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
    .format(amount)
    .replace('BDT', '৳');
}

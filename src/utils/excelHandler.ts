import * as XLSX from 'xlsx';
import { BachelorState } from '@/types';

export function exportBachelorExcel(state: BachelorState) {
  const wb = XLSX.utils.book_new();

  // 1. Advance+Shifting Sheet
  const advRows: any[] = [
    ['Advance', null, null, null, null, 'Total/Balance/Due'],
    ['Name', 'Paid', 'Asked', 'Due(-)/Balance(+)', null, 'Expense', 'Amount', null, 'Paid by', 'Amount', null, 'Balance/Due', 'Total Paid', 'Due', 'Balance']
  ];
  state.advanceShifting.deposits.forEach((dep) => {
    advRows.push([dep.name, dep.paid, dep.asked, dep.diff]);
  });
  advRows.push(['TOTAL', state.advanceShifting.totalPaid, state.advanceShifting.totalAsked, 0]);
  advRows.push([state.advanceShifting.status]);
  const wsAdv = XLSX.utils.aoa_to_sheet(advRows);
  XLSX.utils.book_append_sheet(wb, wsAdv, 'Advance+Shifting');

  // 2. Rent Sheet
  const rentHeaders = ['Name', 'Amount', ...state.rent.records.map(r => r.monthKey)];
  const rentRows: any[] = [['RENT'], rentHeaders];
  state.rent.shares.forEach((share) => {
    const row = [share.name, share.monthlyAmount];
    state.rent.records.forEach((rec) => {
      row.push(rec.statuses[share.name] || 'Due');
    });
    rentRows.push(row);
  });
  const wsRent = XLSX.utils.aoa_to_sheet(rentRows);
  XLSX.utils.book_append_sheet(wb, wsRent, 'Rent');

  // 3. Setup Cost Sheet
  const setupRows: any[] = [
    ['Setup', 'Amount', 'Summary', 'Total', null, null, 'PAID By', 'Amount', 'Reason', null, 'Individual Paid & Due', 'Paid', 'Due', 'Balance'],
    ['TOTAL', null, null, state.setupCost.totalSetupCost],
    ['Per Person', null, null, state.setupCost.perPersonShare]
  ];
  state.setupCost.items.forEach((item, idx) => {
    const pay = state.setupCost.payments[idx];
    const sum = state.setupCost.memberSummaries[idx];
    setupRows.push([
      item.item,
      item.amount,
      null,
      null,
      null,
      null,
      pay ? pay.name : null,
      pay ? pay.amount : null,
      pay ? pay.reason : null,
      null,
      sum ? sum.name : null,
      sum ? sum.paid : null,
      sum ? sum.due : null,
      sum ? sum.balance : null
    ]);
  });
  const wsSetup = XLSX.utils.aoa_to_sheet(setupRows);
  XLSX.utils.book_append_sheet(wb, wsSetup, 'Setup Cost');

  // 4. October Groceries Sheet
  const grocRows: any[] = [
    ['Expenses', null, null, null, null, null, 'Meal Cost'],
    ['Domain', 'Quantity', 'Amount', 'Name', 'Date(mm/dd/yy)', null, 'Name', 'Total', 'No of meal', 'To be paid']
  ];
  const maxGroc = Math.max(state.groceries.items.length, state.groceries.memberSummaries.length);
  for (let i = 0; i < maxGroc; i++) {
    const item = state.groceries.items[i];
    const sum = state.groceries.memberSummaries[i];
    grocRows.push([
      item ? item.domain : null,
      item ? item.quantity : null,
      item ? item.amount : null,
      item ? item.paidBy : null,
      item ? item.date : null,
      null,
      sum ? sum.name : null,
      sum ? sum.totalGroceryPaid : null,
      sum ? sum.mealCount : null,
      sum ? sum.toBePaid : null
    ]);
  }
  grocRows.push([null, null, null, null, null, null, 'Total', state.groceries.totalCost]);
  grocRows.push([null, null, null, null, null, null, 'Per Meal Cost', state.groceries.mealRate, 'No of Meal', state.groceries.totalMeals]);
  const wsGroc = XLSX.utils.aoa_to_sheet(grocRows);
  XLSX.utils.book_append_sheet(wb, wsGroc, 'October Groceries');

  // 5. October Utilities Sheet
  const utilRows: any[] = [
    ['UTILITIES'],
    ['Expenses', null, null, null, 'Paid by', null, null, null, 'Individual Paid & Due (Total)'],
    ['Domain', 'Amount', 'Date', null, 'Name', 'Amount', 'Reason', null, 'Name', 'Paid', 'Due', 'Balance']
  ];
  const maxUtil = Math.max(state.utilities.bills.length, state.utilities.payments.length, state.utilities.memberSummaries.length);
  for (let i = 0; i < maxUtil; i++) {
    const bill = state.utilities.bills[i];
    const pay = state.utilities.payments[i];
    const sum = state.utilities.memberSummaries[i];
    utilRows.push([
      bill ? bill.domain : null,
      bill ? bill.amount : null,
      bill ? bill.date : null,
      null,
      pay ? pay.name : null,
      pay ? pay.amount : null,
      pay ? pay.reason : null,
      null,
      sum ? sum.name : null,
      sum ? sum.paid : null,
      sum ? sum.due : null,
      sum ? sum.balance : null
    ]);
  }
  utilRows.push(['Total', state.utilities.totalUtilityCost]);
  utilRows.push(['Per person', state.utilities.perPersonShare]);
  const wsUtil = XLSX.utils.aoa_to_sheet(utilRows);
  XLSX.utils.book_append_sheet(wb, wsUtil, 'October Utilities');

  // 6. October meal Sheet
  const mealHeaders = ['Name', ...state.meals.dates, 'Individual Total'];
  const mealRows: any[] = [
    ['October Meal'],
    [],
    mealHeaders
  ];
  state.meals.records.forEach((rec) => {
    const row: any[] = [rec.name];
    state.meals.dates.forEach((d) => {
      row.push(rec.mealsByDate[d] !== undefined ? rec.mealsByDate[d] : null);
    });
    row.push(rec.totalMeals);
    mealRows.push(row);
  });
  const wsMeal = XLSX.utils.aoa_to_sheet(mealRows);
  XLSX.utils.book_append_sheet(wb, wsMeal, 'October meal');

  // 7. Summary Sheet
  const sumRows: any[] = [
    ['EXCEPT RENT'],
    [],
    ['SUMMARY DUE/BALANCE'],
    [],
    ['Name', 'Due', 'Balance']
  ];
  state.summaryBalances.forEach((b) => {
    sumRows.push([b.name, b.due, b.balance]);
  });
  const wsSum = XLSX.utils.aoa_to_sheet(sumRows);
  XLSX.utils.book_append_sheet(wb, wsSum, 'Summary');

  // Download trigger
  const fileName = `PARIBARIK_BACHELOR_Updated_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

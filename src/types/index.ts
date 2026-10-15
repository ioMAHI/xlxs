export interface Member {
  id: string;
  name: string;
  role?: string;
  phone?: string;
  avatarColor: string;
  room?: string;
}

export interface SummaryBalance {
  name: string;
  due: number;
  balance: number;
  breakdown: {
    advanceShiftingDue: number;
    advanceShiftingBalance: number;
    setupCostDue: number;
    setupCostBalance: number;
    utilitiesDue: number;
    utilitiesBalance: number;
    groceriesDue?: number;
    groceriesBalance?: number;
  };
}

export interface AdvanceDeposit {
  id: string;
  name: string;
  paid: number;
  asked: number;
  diff: number;
  status: 'settled' | 'overpaid' | 'due';
}

export interface ShiftingExpenseItem {
  id: string;
  domain: string;
  amount: number;
}

export interface ShiftingPaymentLog {
  id: string;
  name: string;
  amount: number;
  note: string;
}

export interface ShiftingMemberTotal {
  name: string;
  totalPaid: number;
  due: number;
  balance: number;
}

export interface RentMemberShare {
  name: string;
  monthlyAmount: number;
  roomType?: string;
}

export interface RentMonthRecord {
  monthKey: string; // e.g. '2026-10-26'
  label: string; // 'October 2026'
  statuses: Record<string, 'Paid' | 'Due' | 'Partial'>;
  totalCollected: number;
  totalTarget: number;
}

export interface SetupCostItem {
  id: string;
  item: string;
  amount: number;
  category: 'Appliance' | 'Kitchen' | 'Network' | 'Maintenance' | 'Utility Fixture' | 'Other';
}

export interface SetupPaymentLog {
  id: string;
  name: string;
  amount: number;
  reason: string;
  date?: string;
}

export interface SetupMemberSummary {
  name: string;
  paid: number;
  due: number;
  balance: number;
}

export interface GroceryItem {
  id: string;
  domain: string;
  quantity: string;
  amount: number;
  paidBy: string;
  date: string;
  category?: 'Poultry & Meat' | 'Rice & Grains' | 'Spices' | 'Oil & Condiments' | 'Vegetables' | 'Dairy & Eggs' | 'Other';
}

export interface GroceryMemberSummary {
  name: string;
  totalGroceryPaid: number;
  mealCount: number;
  toBePaid: number;
  netDue: number;
  netBalance: number;
}

export interface UtilityBill {
  id: string;
  domain: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending';
}

export interface UtilityPaymentLog {
  id: string;
  name: string;
  amount: number;
  reason: string;
  date?: string;
}

export interface UtilityMemberSummary {
  name: string;
  paid: number;
  due: number;
  balance: number;
}

export interface DailyMealEntry {
  name: string;
  mealsByDate: Record<string, number>; // date 'YYYY-MM-DD' -> count
  totalMeals: number;
}

export interface BachelorState {
  members: Member[];
  advanceShifting: {
    status: 'CLOSED' | 'ACTIVE';
    totalAsked: number;
    totalPaid: number;
    deposits: AdvanceDeposit[];
    shiftingExpenses: ShiftingExpenseItem[];
    shiftingPerPerson: number;
    shiftingPayments: ShiftingPaymentLog[];
    shiftingMemberTotals: ShiftingMemberTotal[];
  };
  rent: {
    monthlyRentTotal: number;
    shares: RentMemberShare[];
    records: RentMonthRecord[];
  };
  setupCost: {
    totalSetupCost: number;
    perPersonShare: number;
    items: SetupCostItem[];
    payments: SetupPaymentLog[];
    memberSummaries: SetupMemberSummary[];
  };
  groceries: {
    items: GroceryItem[];
    totalCost: number;
    mealRate: number;
    totalMeals: number;
    memberSummaries: GroceryMemberSummary[];
  };
  utilities: {
    totalUtilityCost: number;
    perPersonShare: number;
    bills: UtilityBill[];
    payments: UtilityPaymentLog[];
    memberSummaries: UtilityMemberSummary[];
  };
  meals: {
    dates: string[];
    records: DailyMealEntry[];
  };
  summaryBalances: SummaryBalance[];
}

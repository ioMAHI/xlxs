'use client';

import React from 'react';
import { BachelorProvider, useBachelor } from '@/context/BachelorContext';
import { NavigationSidebar } from '@/components/layout/NavigationSidebar';
import { TopNavigationBar } from '@/components/layout/TopNavigationBar';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { GroceriesBazaarView } from '@/components/groceries/GroceriesBazaarView';
import { MealAttendanceMatrix } from '@/components/meals/MealAttendanceMatrix';
import { UtilitiesExpenseView } from '@/components/utilities/UtilitiesExpenseView';
import { SetupCostView } from '@/components/setup/SetupCostView';
import { RentTrackerView } from '@/components/rent/RentTrackerView';
import { AdvanceShiftingView } from '@/components/advance/AdvanceShiftingView';
import { DebtSettlementGraph } from '@/components/settlement/DebtSettlementGraph';
import { SummarySettlementCard } from '@/components/dashboard/SummarySettlementCard';

function MainAppShell() {
  const { activeTab, state } = useBachelor();

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'groceries':
        return <GroceriesBazaarView />;
      case 'meals':
        return <MealAttendanceMatrix />;
      case 'utilities':
        return <UtilitiesExpenseView />;
      case 'setup':
        return <SetupCostView />;
      case 'rent':
        return <RentTrackerView />;
      case 'advance':
        return <AdvanceShiftingView />;
      case 'settlement':
        return (
          <div className="space-y-6">
            <DebtSettlementGraph />
            <div className="space-y-4 mt-8">
              <h3 className="text-base font-bold text-white">Full Roommates Summary Balances</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {state.summaryBalances.map((bal) => (
                  <SummarySettlementCard key={bal.name} balance={bal} />
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#090d16] text-slate-100 font-sans">
      <NavigationSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNavigationBar />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <BachelorProvider>
      <MainAppShell />
    </BachelorProvider>
  );
}

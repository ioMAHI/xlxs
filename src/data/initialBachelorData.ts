import { BachelorState } from '@/types';

export const initialBachelorData: BachelorState = {
  "members": [
    {
      "id": "prachurja",
      "name": "Prachurja",
      "role": "Flatmate",
      "room": "Master Bedroom",
      "avatarColor": "from-emerald-500 to-teal-600"
    },
    {
      "id": "mahi",
      "name": "Mahi",
      "role": "Treasurer & Lead Payer",
      "room": "Bedroom 2",
      "avatarColor": "from-blue-500 to-indigo-600"
    },
    {
      "id": "tahsin",
      "name": "Tahsin",
      "role": "Flatmate",
      "room": "Bedroom 3",
      "avatarColor": "from-violet-500 to-purple-600"
    },
    {
      "id": "shuvo",
      "name": "Shuvo",
      "role": "Flatmate",
      "room": "Bedroom 4",
      "avatarColor": "from-amber-500 to-orange-600"
    },
    {
      "id": "sajid",
      "name": "Sajid",
      "role": "Flatmate",
      "room": "Bedroom 5",
      "avatarColor": "from-rose-500 to-pink-600"
    },
    {
      "id": "angkit",
      "name": "Angkit",
      "role": "Flatmate",
      "room": "Bedroom 6",
      "avatarColor": "from-cyan-500 to-sky-600"
    },
    {
      "id": "shahriar",
      "name": "Shahriar",
      "role": "Meal Member",
      "room": "External / Guest",
      "avatarColor": "from-fuchsia-500 to-pink-600"
    },
    {
      "id": "nafeez",
      "name": "Nafeez",
      "role": "Sublet / Room Share",
      "room": "Room Share",
      "avatarColor": "from-slate-500 to-zinc-600"
    }
  ],
  "advanceShifting": {
    "status": "CLOSED",
    "totalAsked": 64000,
    "totalPaid": 64000,
    "deposits": [
      {
        "id": "adv-1",
        "name": "Mahi",
        "paid": 21000,
        "asked": 11000,
        "diff": 10000,
        "status": "overpaid"
      },
      {
        "id": "adv-2",
        "name": "Prachurja",
        "paid": 11000,
        "asked": 11000,
        "diff": 0,
        "status": "settled"
      },
      {
        "id": "adv-3",
        "name": "Tahsin",
        "paid": 11000,
        "asked": 11000,
        "diff": 0,
        "status": "settled"
      },
      {
        "id": "adv-4",
        "name": "Shuvo",
        "paid": 11000,
        "asked": 11000,
        "diff": 0,
        "status": "settled"
      },
      {
        "id": "adv-5",
        "name": "Sajid",
        "paid": 0,
        "asked": 10000,
        "diff": -10000,
        "status": "due"
      },
      {
        "id": "adv-6",
        "name": "Angkit",
        "paid": 10000,
        "asked": 10000,
        "diff": 0,
        "status": "settled"
      }
    ],
    "shiftingExpenses": [
      {
        "id": "shift-exp-1",
        "domain": "Tools (wrench+pliers+Tester)",
        "amount": 600
      },
      {
        "id": "shift-exp-2",
        "domain": "Truck",
        "amount": 802
      },
      {
        "id": "shift-exp-3",
        "domain": "Mama (Notun Basha tips)",
        "amount": 100
      },
      {
        "id": "shift-exp-4",
        "domain": "Mama 1 (Puran Basha tips)",
        "amount": 500
      },
      {
        "id": "shift-exp-5",
        "domain": "Mama 2 (Puran Basha tips)",
        "amount": 500
      },
      {
        "id": "shift-exp-6",
        "domain": "Rickshaw (Combined trips)",
        "amount": 520
      }
    ],
    "shiftingPerPerson": 604.4,
    "shiftingPayments": [
      {
        "id": "sp-1",
        "name": "Mahi",
        "amount": 530,
        "note": "Truck advance"
      },
      {
        "id": "sp-2",
        "name": "Tahsin",
        "amount": 70,
        "note": "Rickshaw"
      },
      {
        "id": "sp-3",
        "name": "Tahsin",
        "amount": 500,
        "note": "Mama 1 (Puran Basha)"
      },
      {
        "id": "sp-4",
        "name": "Mahi",
        "amount": 302,
        "note": "Truck final"
      },
      {
        "id": "sp-5",
        "name": "Sajid",
        "amount": 150,
        "note": "Rickshaw"
      },
      {
        "id": "sp-6",
        "name": "Sajid",
        "amount": 100,
        "note": "Mama tips"
      },
      {
        "id": "sp-7",
        "name": "Mahi",
        "amount": 370,
        "note": "Rickshaw fare"
      },
      {
        "id": "sp-8",
        "name": "Mahi",
        "amount": 1000,
        "note": "Direct expense coverage"
      },
      {
        "id": "sp-9",
        "name": "Prachurja",
        "amount": 604.4,
        "note": "Settlement to Mahi"
      },
      {
        "id": "sp-10",
        "name": "Mahi",
        "amount": -604.4,
        "note": "Received from Prachurja"
      },
      {
        "id": "sp-11",
        "name": "Tahsin",
        "amount": 34.4,
        "note": "Settlement to Mahi"
      },
      {
        "id": "sp-12",
        "name": "Mahi",
        "amount": -34.4,
        "note": "Received from Tahsin"
      },
      {
        "id": "sp-13",
        "name": "Shuvo",
        "amount": 604.4,
        "note": "Settlement to Mahi"
      },
      {
        "id": "sp-14",
        "name": "Mahi",
        "amount": -604.4,
        "note": "Received from Shuvo"
      },
      {
        "id": "sp-15",
        "name": "Sajid",
        "amount": 354.4,
        "note": "Settlement to Mahi"
      },
      {
        "id": "sp-16",
        "name": "Mahi",
        "amount": -354.4,
        "note": "Received from Sajid"
      }
    ],
    "shiftingMemberTotals": [
      {
        "name": "Prachurja",
        "totalPaid": 604.4,
        "due": 0,
        "balance": 0
      },
      {
        "name": "Mahi",
        "totalPaid": 604.4,
        "due": 0,
        "balance": 0
      },
      {
        "name": "Tahsin",
        "totalPaid": 604.4,
        "due": 0,
        "balance": 0
      },
      {
        "name": "Sajid",
        "totalPaid": 604.4,
        "due": 0,
        "balance": 0
      },
      {
        "name": "Shuvo",
        "totalPaid": 604.4,
        "due": 0,
        "balance": 0
      }
    ]
  },
  "rent": {
    "monthlyRentTotal": 37000,
    "shares": [
      {
        "name": "Mahi",
        "monthlyAmount": 6417,
        "roomType": "Standard Room A"
      },
      {
        "name": "Prachurja",
        "monthlyAmount": 6417,
        "roomType": "Standard Room B"
      },
      {
        "name": "Tahsin",
        "monthlyAmount": 6417,
        "roomType": "Standard Room C"
      },
      {
        "name": "Shuvo",
        "monthlyAmount": 6250,
        "roomType": "Balcony Attached Room"
      },
      {
        "name": "Sajid",
        "monthlyAmount": 5500,
        "roomType": "Shared Medium Room 1"
      },
      {
        "name": "Aungkit",
        "monthlyAmount": 5500,
        "roomType": "Shared Medium Room 2"
      },
      {
        "name": "Nafeez",
        "monthlyAmount": 499,
        "roomType": "Utility / Partial room sublet"
      }
    ],
    "records": [
      {
        "monthKey": "2026-10-26",
        "label": "October 2026",
        "statuses": {
          "Mahi": "Paid",
          "Prachurja": "Paid",
          "Tahsin": "Paid",
          "Shuvo": "Paid",
          "Sajid": "Paid",
          "Aungkit": "Paid",
          "Nafeez": "Paid"
        },
        "totalCollected": 37000,
        "totalTarget": 37000
      },
      {
        "monthKey": "2026-11-26",
        "label": "November 2026",
        "statuses": {
          "Mahi": "Due",
          "Prachurja": "Due",
          "Tahsin": "Due",
          "Shuvo": "Due",
          "Sajid": "Due",
          "Aungkit": "Due",
          "Nafeez": "Due"
        },
        "totalCollected": 0,
        "totalTarget": 37000
      },
      {
        "monthKey": "2026-12-26",
        "label": "December 2026",
        "statuses": {
          "Mahi": "Due",
          "Prachurja": "Due",
          "Tahsin": "Due",
          "Shuvo": "Due",
          "Sajid": "Due",
          "Aungkit": "Due",
          "Nafeez": "Due"
        },
        "totalCollected": 0,
        "totalTarget": 37000
      }
    ]
  },
  "setupCost": {
    "totalSetupCost": 59058,
    "perPersonShare": 9843,
    "items": [
      {
        "id": "setup-1",
        "item": "Fridge",
        "amount": 20000,
        "category": "Appliance"
      },
      {
        "id": "setup-2",
        "item": "Rice Cooker",
        "amount": 3600,
        "category": "Appliance"
      },
      {
        "id": "setup-3",
        "item": "Filter",
        "amount": 15500,
        "category": "Appliance"
      },
      {
        "id": "setup-4",
        "item": "Stove",
        "amount": 6200,
        "category": "Appliance"
      },
      {
        "id": "setup-5",
        "item": "Gas Cylinder",
        "amount": 1100,
        "category": "Utility Fixture"
      },
      {
        "id": "setup-6",
        "item": "Router",
        "amount": 2650,
        "category": "Network"
      },
      {
        "id": "setup-7",
        "item": "Blender",
        "amount": 2550,
        "category": "Appliance"
      },
      {
        "id": "setup-8",
        "item": "Fry pan+Khunti",
        "amount": 1470,
        "category": "Kitchen"
      },
      {
        "id": "setup-9",
        "item": "Knife",
        "amount": 220,
        "category": "Kitchen"
      },
      {
        "id": "setup-10",
        "item": "Kitchen Light",
        "amount": 150,
        "category": "Utility Fixture"
      },
      {
        "id": "setup-11",
        "item": "Lock",
        "amount": 800,
        "category": "Maintenance"
      },
      {
        "id": "setup-12",
        "item": "Filter Socket+cable",
        "amount": 600,
        "category": "Utility Fixture"
      },
      {
        "id": "setup-13",
        "item": "Wifi setup",
        "amount": 1000,
        "category": "Network"
      },
      {
        "id": "setup-14",
        "item": "Gas pipe",
        "amount": 45,
        "category": "Utility Fixture"
      },
      {
        "id": "setup-15",
        "item": "Filter pipe",
        "amount": 425,
        "category": "Utility Fixture"
      },
      {
        "id": "setup-16",
        "item": "Filter connector",
        "amount": 150,
        "category": "Utility Fixture"
      },
      {
        "id": "setup-17",
        "item": "Silicon Tube (Basin Repair)",
        "amount": 200,
        "category": "Maintenance"
      },
      {
        "id": "setup-18",
        "item": "Stove Setup",
        "amount": 280,
        "category": "Utility Fixture"
      },
      {
        "id": "setup-19",
        "item": "Gas valve",
        "amount": 460,
        "category": "Utility Fixture"
      },
      {
        "id": "setup-20",
        "item": "Rickshaw",
        "amount": 130,
        "category": "Other"
      },
      {
        "id": "setup-21",
        "item": "Dustbin",
        "amount": 250,
        "category": "Kitchen"
      },
      {
        "id": "setup-22",
        "item": "Rice and daal container RFL",
        "amount": 400,
        "category": "Kitchen"
      },
      {
        "id": "setup-23",
        "item": "Garbage Poly",
        "amount": 178,
        "category": "Kitchen"
      },
      {
        "id": "setup-24",
        "item": "RFL Kitchen Stool",
        "amount": 200,
        "category": "Kitchen"
      },
      {
        "id": "setup-25",
        "item": "RFL Cleaning Mop",
        "amount": 500,
        "category": "Kitchen"
      }
    ],
    "payments": [
      {
        "id": "setup-pay-1",
        "name": "Mahi",
        "amount": 18000.0,
        "reason": "Fridge"
      },
      {
        "id": "setup-pay-2",
        "name": "Sajid",
        "amount": 2000.0,
        "reason": "Fridge"
      },
      {
        "id": "setup-pay-3",
        "name": "Prachurja",
        "amount": 1000.0,
        "reason": "Fridge"
      },
      {
        "id": "setup-pay-4",
        "name": "Mahi",
        "amount": -1000.0,
        "reason": "(from Prachurja)"
      },
      {
        "id": "setup-pay-5",
        "name": "Prachurja",
        "amount": 3520.0,
        "reason": "Fridge"
      },
      {
        "id": "setup-pay-6",
        "name": "Mahi",
        "amount": -3520.0,
        "reason": "(from Prachurja)"
      },
      {
        "id": "setup-pay-7",
        "name": "Tahsin",
        "amount": 3970.0,
        "reason": "Fridge"
      },
      {
        "id": "setup-pay-8",
        "name": "Mahi",
        "amount": -3970.0,
        "reason": "(from Tashsin)"
      },
      {
        "id": "setup-pay-9",
        "name": "Shuvo",
        "amount": 1000.0,
        "reason": "Fridge"
      },
      {
        "id": "setup-pay-10",
        "name": "Mahi",
        "amount": -1000.0,
        "reason": "(from Shuvo)"
      },
      {
        "id": "setup-pay-11",
        "name": "Angkit",
        "amount": 1000.0,
        "reason": "Fridge"
      },
      {
        "id": "setup-pay-12",
        "name": "Mahi",
        "amount": -1000.0,
        "reason": "(from Aungkit)"
      },
      {
        "id": "setup-pay-13",
        "name": "Mahi",
        "amount": 800.0,
        "reason": "Lock"
      },
      {
        "id": "setup-pay-14",
        "name": "Mahi",
        "amount": 600.0,
        "reason": "Wifi Setup"
      },
      {
        "id": "setup-pay-15",
        "name": "Prachurja",
        "amount": 400.0,
        "reason": "Wifi Setup"
      },
      {
        "id": "setup-pay-16",
        "name": "Sajid",
        "amount": 1000.0,
        "reason": "(Bkash)"
      },
      {
        "id": "setup-pay-17",
        "name": "Sajid",
        "amount": -354.0,
        "reason": "(from Aungkit)"
      },
      {
        "id": "setup-pay-18",
        "name": "Mahi",
        "amount": -646.0,
        "reason": "(from Aungkit)"
      },
      {
        "id": "setup-pay-19",
        "name": "Shuvo",
        "amount": 2400.0,
        "reason": "Filter"
      },
      {
        "id": "setup-pay-20",
        "name": "Prachurja",
        "amount": 4000.0,
        "reason": "Filter"
      },
      {
        "id": "setup-pay-21",
        "name": "Mahi",
        "amount": 9100.0,
        "reason": "Filter"
      },
      {
        "id": "setup-pay-22",
        "name": "Mahi",
        "amount": 600.0,
        "reason": "Filter Cable"
      },
      {
        "id": "setup-pay-23",
        "name": "Mahi",
        "amount": 6670.0,
        "reason": "Stove+filter pipe"
      },
      {
        "id": "setup-pay-24",
        "name": "Angkit",
        "amount": 3500.0,
        "reason": "Fridge"
      },
      {
        "id": "setup-pay-25",
        "name": "Mahi",
        "amount": -3500.0,
        "reason": "(from Aungkit)"
      },
      {
        "id": "setup-pay-26",
        "name": "Mahi",
        "amount": 150.0,
        "reason": "Filter connector"
      },
      {
        "id": "setup-pay-27",
        "name": "Mahi",
        "amount": 200.0,
        "reason": "Silicon"
      },
      {
        "id": "setup-pay-28",
        "name": "Shuvo",
        "amount": 4000.0,
        "reason": "Filter"
      },
      {
        "id": "setup-pay-29",
        "name": "Mahi",
        "amount": -4000.0,
        "reason": "(from Aungkit)"
      },
      {
        "id": "setup-pay-30",
        "name": "Mahi",
        "amount": 1100.0,
        "reason": "Gas Cylinder"
      },
      {
        "id": "setup-pay-31",
        "name": "Mahi",
        "amount": 150.0,
        "reason": "Kitchen Light"
      },
      {
        "id": "setup-pay-32",
        "name": "Mahi",
        "amount": 210.0,
        "reason": "Stove setup"
      },
      {
        "id": "setup-pay-33",
        "name": "Prachurja",
        "amount": 70.0,
        "reason": "Stove Setup"
      },
      {
        "id": "setup-pay-34",
        "name": "Mahi",
        "amount": 2600.0,
        "reason": "Rice Cooker"
      },
      {
        "id": "setup-pay-35",
        "name": "Shuvo",
        "amount": 1000.0,
        "reason": "Rice Cooker"
      },
      {
        "id": "setup-pay-36",
        "name": "Tahsin",
        "amount": 5000.0,
        "reason": "(Due clearance)"
      },
      {
        "id": "setup-pay-37",
        "name": "Mahi",
        "amount": -5000.0,
        "reason": "(from Tashsin)"
      },
      {
        "id": "setup-pay-38",
        "name": "Shuvo",
        "amount": 270.0,
        "reason": "Gas valve"
      },
      {
        "id": "setup-pay-39",
        "name": "Prachurja",
        "amount": 190.0,
        "reason": "Gas valve"
      },
      {
        "id": "setup-pay-40",
        "name": "Angkit",
        "amount": 3500.0,
        "reason": "(Due clearance)"
      },
      {
        "id": "setup-pay-41",
        "name": "Mahi",
        "amount": -3500.0,
        "reason": "(from Aungkit)"
      },
      {
        "id": "setup-pay-42",
        "name": "Mahi",
        "amount": 1470.0,
        "reason": "Fry pan"
      },
      {
        "id": "setup-pay-43",
        "name": "Mahi",
        "amount": 2550.0,
        "reason": "Blender"
      },
      {
        "id": "setup-pay-44",
        "name": "Mahi",
        "amount": 220.0,
        "reason": "Knife"
      },
      {
        "id": "setup-pay-45",
        "name": "Mahi",
        "amount": 50.0,
        "reason": "Rickshaw"
      },
      {
        "id": "setup-pay-46",
        "name": "Prachurja",
        "amount": 80.0,
        "reason": "Rickshaw"
      },
      {
        "id": "setup-pay-47",
        "name": "Prachurja",
        "amount": 80.0,
        "reason": "(Due clearance)"
      },
      {
        "id": "setup-pay-48",
        "name": "Mahi",
        "amount": -80.0,
        "reason": "(from Prachurja)"
      },
      {
        "id": "setup-pay-49",
        "name": "Mahi",
        "amount": 828.0,
        "reason": "Dustbin+poly+Container"
      },
      {
        "id": "setup-pay-50",
        "name": "Prachurja",
        "amount": 100.0,
        "reason": "(Due clearance)"
      },
      {
        "id": "setup-pay-51",
        "name": "Mahi",
        "amount": -100.0,
        "reason": "(from Prachurja)"
      },
      {
        "id": "setup-pay-52",
        "name": "Mahi",
        "amount": 2650.0,
        "reason": "Router"
      },
      {
        "id": "setup-pay-53",
        "name": "Prachurja",
        "amount": 107.0,
        "reason": "Balance Adjust from utilities"
      },
      {
        "id": "setup-pay-54",
        "name": "Mahi",
        "amount": -107.0,
        "reason": "(from Prachurja)"
      },
      {
        "id": "setup-pay-55",
        "name": "Angkit",
        "amount": 900.0,
        "reason": "Due Clearance"
      },
      {
        "id": "setup-pay-56",
        "name": "Mahi",
        "amount": -900.0,
        "reason": "(from Aungkit)"
      },
      {
        "id": "setup-pay-57",
        "name": "Mahi",
        "amount": 700.0,
        "reason": "Kitchen Stool+Mop"
      }
    ],
    "memberSummaries": [
      {
        "name": "Prachurja",
        "paid": 9547,
        "due": 296,
        "balance": 0
      },
      {
        "name": "Mahi",
        "paid": 20325,
        "due": 0,
        "balance": 10482
      },
      {
        "name": "Tahsin",
        "paid": 8970,
        "due": 873,
        "balance": 0
      },
      {
        "name": "Sajid",
        "paid": 2646,
        "due": 7197,
        "balance": 0
      },
      {
        "name": "Shuvo",
        "paid": 8670,
        "due": 1173,
        "balance": 0
      },
      {
        "name": "Angkit",
        "paid": 8900,
        "due": 943,
        "balance": 0
      }
    ]
  },
  "groceries": {
    "items": [
      {
        "id": "groc-1",
        "domain": "Egg",
        "quantity": "12 piece",
        "amount": 156.0,
        "paidBy": "Prachurja",
        "date": "2026-10-09",
        "category": "Dairy & Eggs"
      },
      {
        "id": "groc-2",
        "domain": "Rice(Nazirshail-Sampa katari)",
        "quantity": "1 kg",
        "amount": 90.0,
        "paidBy": "Prachurja",
        "date": "2026-10-09",
        "category": "Rice & Grains"
      },
      {
        "id": "groc-3",
        "domain": "Soyabin Oil",
        "quantity": "1 Litre",
        "amount": 204.0,
        "paidBy": "Prachurja",
        "date": "2026-10-09",
        "category": "Oil & Condiments"
      },
      {
        "id": "groc-4",
        "domain": "Suger",
        "quantity": "1 kg",
        "amount": 110.0,
        "paidBy": "Prachurja",
        "date": "2026-10-09",
        "category": "Oil & Condiments"
      },
      {
        "id": "groc-5",
        "domain": "Salt",
        "quantity": "2 Kg",
        "amount": 84.0,
        "paidBy": "Mahi",
        "date": "2026-10-10",
        "category": "Oil & Condiments"
      },
      {
        "id": "groc-6",
        "domain": "Rice (Miniket)",
        "quantity": "1kg",
        "amount": 67.0,
        "paidBy": "Tahsin",
        "date": "2026-10-11",
        "category": "Rice & Grains"
      },
      {
        "id": "groc-7",
        "domain": "Radhuni Chili Powder",
        "quantity": "200gm",
        "amount": 160.0,
        "paidBy": "Mahi",
        "date": "2026-10-11",
        "category": "Spices"
      },
      {
        "id": "groc-8",
        "domain": "Radhuni Mastered Oil",
        "quantity": "250ml",
        "amount": 105.0,
        "paidBy": "Mahi",
        "date": "2026-10-11",
        "category": "Oil & Condiments"
      },
      {
        "id": "groc-9",
        "domain": "Radhuni Holud Gura",
        "quantity": "200gm",
        "amount": 140.0,
        "paidBy": "Mahi",
        "date": "2026-10-11",
        "category": "Spices"
      },
      {
        "id": "groc-10",
        "domain": "Dry Chilli",
        "quantity": "100gm",
        "amount": 76.0,
        "paidBy": "Mahi",
        "date": "2026-10-11",
        "category": "Other"
      },
      {
        "id": "groc-11",
        "domain": "ACI Jira Gura",
        "quantity": "200gm",
        "amount": 330.0,
        "paidBy": "Mahi",
        "date": "2026-10-11",
        "category": "Spices"
      },
      {
        "id": "groc-12",
        "domain": "Tejpata",
        "quantity": "100gm",
        "amount": 52.0,
        "paidBy": "Mahi",
        "date": "2026-10-11",
        "category": "Spices"
      },
      {
        "id": "groc-13",
        "domain": "Elachi",
        "quantity": "25gm",
        "amount": 125.0,
        "paidBy": "Mahi",
        "date": "2026-10-11",
        "category": "Spices"
      },
      {
        "id": "groc-14",
        "domain": "Darchini",
        "quantity": "100gm",
        "amount": 55.0,
        "paidBy": "Mahi",
        "date": "2026-10-11",
        "category": "Spices"
      },
      {
        "id": "groc-15",
        "domain": "Alu",
        "quantity": "2Kg",
        "amount": 60.0,
        "paidBy": "Prachurja",
        "date": "2026-10-11",
        "category": "Vegetables"
      },
      {
        "id": "groc-16",
        "domain": "Roshun",
        "quantity": "1Kg",
        "amount": 180.0,
        "paidBy": "Prachurja",
        "date": "2026-10-11",
        "category": "Vegetables"
      },
      {
        "id": "groc-17",
        "domain": "Onion",
        "quantity": "2Kg",
        "amount": 110.0,
        "paidBy": "Prachurja",
        "date": "2026-10-11",
        "category": "Vegetables"
      },
      {
        "id": "groc-18",
        "domain": "Ada",
        "quantity": "500gm",
        "amount": 90.0,
        "paidBy": "Prachurja",
        "date": "2026-10-11",
        "category": "Vegetables"
      },
      {
        "id": "groc-19",
        "domain": "Chicken (pandamart)+delivery charge",
        "quantity": "1Kg",
        "amount": 377.0,
        "paidBy": "Mahi",
        "date": "2026-10-12",
        "category": "Poultry & Meat"
      },
      {
        "id": "groc-20",
        "domain": "Moshur Dal",
        "quantity": "1kg",
        "amount": 98.0,
        "paidBy": "Tahsin",
        "date": "2026-10-12",
        "category": "Rice & Grains"
      },
      {
        "id": "groc-21",
        "domain": "Rice(Nazirshail-paijam)",
        "quantity": "2Kg",
        "amount": 130.0,
        "paidBy": "Tahsin",
        "date": "2026-10-12",
        "category": "Rice & Grains"
      },
      {
        "id": "groc-22",
        "domain": "Radhuni Garam Masala",
        "quantity": "40gm",
        "amount": 95.0,
        "paidBy": "Tahsin",
        "date": "2026-10-12",
        "category": "Spices"
      },
      {
        "id": "groc-23",
        "domain": "Chicken (pandamart)",
        "quantity": "2Kg",
        "amount": 630.0,
        "paidBy": "Mahi",
        "date": "2026-10-13",
        "category": "Poultry & Meat"
      },
      {
        "id": "groc-24",
        "domain": "Rice (Katari Nazirshail)",
        "quantity": "1Kg",
        "amount": 95.0,
        "paidBy": "Mahi",
        "date": "2026-10-13",
        "category": "Rice & Grains"
      },
      {
        "id": "groc-25",
        "domain": "Egg",
        "quantity": "12piece",
        "amount": 155.0,
        "paidBy": "Mahi",
        "date": "2026-10-13",
        "category": "Dairy & Eggs"
      },
      {
        "id": "groc-26",
        "domain": "Chicken Liver",
        "quantity": "500gm",
        "amount": 90.0,
        "paidBy": "Mahi",
        "date": "2026-10-13",
        "category": "Poultry & Meat"
      },
      {
        "id": "groc-27",
        "domain": "Rice (Pran miniket)",
        "quantity": "1kg",
        "amount": 75.0,
        "paidBy": "Shuvo",
        "date": "2026-10-14",
        "category": "Rice & Grains"
      },
      {
        "id": "groc-28",
        "domain": "Rice (Pran Banglamoti)",
        "quantity": "5kg",
        "amount": 540.0,
        "paidBy": "Mahi",
        "date": "2026-10-15",
        "category": "Rice & Grains"
      },
      {
        "id": "groc-29",
        "domain": "Soyabin Oil (Rupchada)",
        "quantity": "1 Liter",
        "amount": 204.0,
        "paidBy": "Mahi",
        "date": "2026-10-15",
        "category": "Oil & Condiments"
      },
      {
        "id": "groc-30",
        "domain": "Jira (Daily Shopping)",
        "quantity": "50gm",
        "amount": 70.0,
        "paidBy": "Mahi",
        "date": "2026-10-15",
        "category": "Spices"
      },
      {
        "id": "groc-31",
        "domain": "Pachforon (Daily Shopping)",
        "quantity": "100gm",
        "amount": 60.0,
        "paidBy": "Mahi",
        "date": "2026-10-15",
        "category": "Spices"
      }
    ],
    "totalCost": 4813,
    "mealRate": 145.85,
    "totalMeals": 33,
    "memberSummaries": [
      {
        "name": "Prachurja",
        "totalGroceryPaid": 1000,
        "mealCount": 7,
        "toBePaid": 1020.94,
        "netDue": 20.94,
        "netBalance": 0
      },
      {
        "name": "Mahi",
        "totalGroceryPaid": 3348,
        "mealCount": 8,
        "toBePaid": 1166.79,
        "netDue": 0,
        "netBalance": 2181.21
      },
      {
        "name": "Tahsin",
        "totalGroceryPaid": 390,
        "mealCount": 3,
        "toBePaid": 437.55,
        "netDue": 47.55,
        "netBalance": 0
      },
      {
        "name": "Shuvo",
        "totalGroceryPaid": 75,
        "mealCount": 5,
        "toBePaid": 729.24,
        "netDue": 654.24,
        "netBalance": 0
      },
      {
        "name": "Angkit",
        "totalGroceryPaid": 0,
        "mealCount": 4,
        "toBePaid": 583.39,
        "netDue": 583.39,
        "netBalance": 0
      },
      {
        "name": "Shahriar",
        "totalGroceryPaid": 0,
        "mealCount": 6,
        "toBePaid": 875.09,
        "netDue": 875.09,
        "netBalance": 0
      }
    ]
  },
  "utilities": {
    "totalUtilityCost": 4670,
    "perPersonShare": 778.33,
    "bills": [
      {
        "id": "util-1",
        "domain": "ELECTRICITY BILL",
        "amount": 1000,
        "date": "2026-10-06",
        "status": "Paid"
      },
      {
        "id": "util-2",
        "domain": "Gas",
        "amount": 2400,
        "date": "2026-10-08",
        "status": "Paid"
      },
      {
        "id": "util-3",
        "domain": "Wifi",
        "amount": 1050,
        "date": "2026-10-10",
        "status": "Paid"
      },
      {
        "id": "util-4",
        "domain": "Vim Liq.",
        "amount": 140,
        "date": "2026-10-10",
        "status": "Paid"
      },
      {
        "id": "util-5",
        "domain": "Tiles Cleaner",
        "amount": 80,
        "date": "2026-10-11",
        "status": "Paid"
      }
    ],
    "payments": [
      {
        "id": "util-pay-1",
        "name": "Mahi",
        "amount": 860.0,
        "reason": "Electricity"
      },
      {
        "id": "util-pay-2",
        "name": "Shuvo",
        "amount": 140.0,
        "reason": "Electricity"
      },
      {
        "id": "util-pay-3",
        "name": "Mahi",
        "amount": 2400.0,
        "reason": "Gas Cylinder"
      },
      {
        "id": "util-pay-4",
        "name": "Mahi",
        "amount": 305.0,
        "reason": "Wifi"
      },
      {
        "id": "util-pay-5",
        "name": "Prachurja",
        "amount": 745.0,
        "reason": "Wifi"
      },
      {
        "id": "util-pay-6",
        "name": "Prachurja",
        "amount": 140.0,
        "reason": "Vim Liq."
      },
      {
        "id": "util-pay-7",
        "name": "Tahsin",
        "amount": 80.0,
        "reason": "Tiles Cleaner"
      },
      {
        "id": "util-pay-8",
        "name": "Tahsin",
        "amount": 100.0,
        "reason": "Due Clearance"
      },
      {
        "id": "util-pay-9",
        "name": "Mahi",
        "amount": -100.0,
        "reason": "(from Tahsin)"
      },
      {
        "id": "util-pay-10",
        "name": "Prachurja",
        "amount": -107.0,
        "reason": "Balance Adjust"
      },
      {
        "id": "util-pay-11",
        "name": "Mahi",
        "amount": 107.0,
        "reason": "(Prachurja Balance Adjust)"
      }
    ],
    "memberSummaries": [
      {
        "name": "Prachurja",
        "paid": 778,
        "due": 0.33,
        "balance": 0
      },
      {
        "name": "Mahi",
        "paid": 3572,
        "due": 0,
        "balance": 2793.67
      },
      {
        "name": "Tahsin",
        "paid": 180,
        "due": 598.33,
        "balance": 0
      },
      {
        "name": "Sajid",
        "paid": 0,
        "due": 778.33,
        "balance": 0
      },
      {
        "name": "Shuvo",
        "paid": 140,
        "due": 638.33,
        "balance": 0
      },
      {
        "name": "Angkit",
        "paid": 0,
        "due": 778.33,
        "balance": 0
      }
    ]
  },
  "meals": {
    "dates": [
      "2026-10-12",
      "2026-10-13",
      "2026-10-14",
      "2026-10-15",
      "2026-10-16",
      "2026-10-17",
      "2026-10-18",
      "2026-10-19",
      "2026-10-20",
      "2026-10-21",
      "2026-10-22",
      "2026-10-23",
      "2026-10-24",
      "2026-10-25",
      "2026-10-26",
      "2026-10-27",
      "2026-10-28",
      "2026-10-29",
      "2026-10-30",
      "2026-10-31"
    ],
    "records": [
      {
        "name": "Prachurja",
        "mealsByDate": {
          "2026-10-12": 2,
          "2026-10-13": 2,
          "2026-10-14": 1,
          "2026-10-15": 2
        },
        "totalMeals": 7
      },
      {
        "name": "Mahi",
        "mealsByDate": {
          "2026-10-12": 2,
          "2026-10-13": 2,
          "2026-10-14": 2,
          "2026-10-15": 2
        },
        "totalMeals": 8
      },
      {
        "name": "Tahsin",
        "mealsByDate": {
          "2026-10-12": 1,
          "2026-10-13": 1,
          "2026-10-14": 1,
          "2026-10-15": 0
        },
        "totalMeals": 3
      },
      {
        "name": "Shuvo",
        "mealsByDate": {
          "2026-10-12": 1,
          "2026-10-13": 2,
          "2026-10-14": 2,
          "2026-10-15": 0
        },
        "totalMeals": 5
      },
      {
        "name": "Shahriar",
        "mealsByDate": {
          "2026-10-12": 2,
          "2026-10-13": 1,
          "2026-10-14": 0,
          "2026-10-15": 1
        },
        "totalMeals": 4
      },
      {
        "name": "Angkit",
        "mealsByDate": {
          "2026-10-12": 1,
          "2026-10-13": 2,
          "2026-10-14": 1,
          "2026-10-15": 2
        },
        "totalMeals": 6
      }
    ]
  },
  "summaryBalances": [
    {
      "name": "Prachurja",
      "due": 296.33,
      "balance": 0,
      "breakdown": {
        "advanceShiftingDue": 0,
        "advanceShiftingBalance": 0,
        "setupCostDue": 296,
        "setupCostBalance": 0,
        "utilitiesDue": 0.33,
        "utilitiesBalance": 0,
        "groceriesDue": 20.94,
        "groceriesBalance": 0
      }
    },
    {
      "name": "Mahi",
      "due": 0,
      "balance": 13275.67,
      "breakdown": {
        "advanceShiftingDue": 0,
        "advanceShiftingBalance": 0,
        "setupCostDue": 0,
        "setupCostBalance": 10482,
        "utilitiesDue": 0,
        "utilitiesBalance": 2793.67,
        "groceriesDue": 0,
        "groceriesBalance": 2181.21
      }
    },
    {
      "name": "Tahsin",
      "due": 1471.33,
      "balance": 0,
      "breakdown": {
        "advanceShiftingDue": 0,
        "advanceShiftingBalance": 0,
        "setupCostDue": 873,
        "setupCostBalance": 0,
        "utilitiesDue": 598.33,
        "utilitiesBalance": 0,
        "groceriesDue": 47.55,
        "groceriesBalance": 0
      }
    },
    {
      "name": "Sajid",
      "due": 7197.0,
      "balance": 0,
      "breakdown": {
        "advanceShiftingDue": 0,
        "advanceShiftingBalance": 0,
        "setupCostDue": 7197,
        "setupCostBalance": 0,
        "utilitiesDue": 778.33,
        "utilitiesBalance": 0,
        "groceriesDue": 0,
        "groceriesBalance": 0
      }
    },
    {
      "name": "Shuvo",
      "due": 1811.33,
      "balance": 0,
      "breakdown": {
        "advanceShiftingDue": 0,
        "advanceShiftingBalance": 0,
        "setupCostDue": 1173,
        "setupCostBalance": 0,
        "utilitiesDue": 638.33,
        "utilitiesBalance": 0,
        "groceriesDue": 654.24,
        "groceriesBalance": 0
      }
    },
    {
      "name": "Angkit",
      "due": 1721.33,
      "balance": 0,
      "breakdown": {
        "advanceShiftingDue": 0,
        "advanceShiftingBalance": 0,
        "setupCostDue": 943,
        "setupCostBalance": 0,
        "utilitiesDue": 778.33,
        "utilitiesBalance": 0,
        "groceriesDue": 583.39,
        "groceriesBalance": 0
      }
    }
  ]
};

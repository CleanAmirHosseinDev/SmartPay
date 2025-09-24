// Mock data for populating dashboards until a real API is connected.

// Data for Merchant Dashboard KPIs
export const kpiData = {
  totalRevenue: 25450.75,
  totalSales: 820,
  newCustomers: 72,
  refunds: 150.0,
};

// Data for a sales trend chart (e.g., Line or Bar chart)
// Represents sales over the last 7 days
export const salesTrendData = [
  { date: "May 1", sales: 2200 },
  { date: "May 2", sales: 3100 },
  { date: "May 3", sales: 2800 },
  { date: "May 4", sales: 3500 },
  { date: "May 5", sales: 4100 },
  { date: "May 6", sales: 3800 },
  { date: "May 7", sales: 4500 },
];

// Data for sales distribution by currency (for Pie Chart)
export const salesDistributionData = [
  { name: "USD", value: 18630.54 },
  { name: "BTC", value: 2830.54 },
  { name: "ETH", value: 1283.54 },
  { name: "BNB", value: 983.54 },
  { name: "USDT", value: 883.54 },
  { name: "USDC", value: 583.54 },
  { name: "SOL", value: 255.54 },
];

// Data for a recent transactions table
export const transactionsData = [
  {
    id: "TXN72384",
    date: "2024-05-07",
    customer: "Alex Carter",
    amount: 200.0,
    currency: "USD",
    method: "Credit Card",
    status: "Confirmed",
  },
  {
    id: "TXN72383",
    date: "2024-05-07",
    customer: "Jordan Lee",
    amount: 0.05,
    currency: "BTC",
    method: "Crypto",
    status: "Confirmed",
  },
  {
    id: "TXN72382",
    date: "2024-05-06",
    customer: "Emma Reed",
    amount: 150.0,
    currency: "USD",
    method: "Bank Transfer",
    status: "Refunded",
  },
  {
    id: "TXN72381",
    date: "2024-05-06",
    customer: "Mia Blake",
    amount: 75.0,
    currency: "USD",
    method: "Credit Card",
    status: "Confirmed",
  },
    {
    id: "TXN72380",
    date: "2024-05-05",
    customer: "Sam Rivera",
    amount: 1.2,
    currency: "ETH",
    method: "Crypto",
    status: "Pending",
  },
];

import { DollarSign, ShoppingCart, Users } from "lucide-react";
import StatCard from "../../components/dashboard/StatCard";
import SalesChart from "../../components/dashboard/SalesChart";
import ReusableTable from "../../components/common/ReusableTable";
import {
  kpiData,
  salesTrendData,
  transactionsData,
} from "../../lib/mockData";
import { FaCheckCircle, FaExclamationCircle, FaUndo } from "react-icons/fa";


const statusConfig = {
    Confirmed: { icon: <FaCheckCircle className="text-green-400" />, color: "text-green-400" },
    Pending: { icon: <FaExclamationCircle className="text-yellow-400" />, color: "text-yellow-400" },
    Refunded: { icon: <FaUndo className="text-blue-400" />, color: "text-blue-400" },
};

export default function MerchantDashboard() {
    const transactionColumns = [
        { header: 'Transaction ID', accessor: 'id', cell: row => <span className="font-medium text-gray-200">{row.id}</span> },
        { header: 'Date', accessor: 'date' },
        { header: 'Customer', accessor: 'customer' },
        { header: 'Amount', accessor: 'amount', cell: row => `${row.amount.toFixed(2)} ${row.currency}` },
        { header: 'Status', accessor: 'status', cell: row => {
            const config = statusConfig[row.status];
            return <div className="flex items-center">{config.icon}<span className={`ml-2 ${config.color}`}>{row.status}</span></div>;
        }},
    ];

  return (
    <div className="h-full text-white p-6 space-y-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white">Merchant Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Revenue"
          value={`$${kpiData.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          change="+5.2%"
          changeType="positive"
        />
        <StatCard
          title="Total Sales"
          value={kpiData.totalSales.toLocaleString()}
          icon={ShoppingCart}
          change="+8.1%"
          changeType="positive"
        />
        <StatCard
          title="New Customers"
          value={kpiData.newCustomers.toLocaleString()}
          icon={Users}
          change="-1.5%"
          changeType="negative"
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-3">
          <SalesChart data={salesTrendData} />
        </div>

        {/* Recent Activity or other info can go here */}
        <div className="lg:col-span-2 space-y-6">
            {/* This space can be used for other components like sales distribution pie chart, etc. */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2 text-cyan-400">
                    <li><a href="#" className="hover:underline">View Payouts</a></li>
                    <li><a href="#" className="hover:underline">Manage Products</a></li>
                    <li><a href="#" className="hover:underline">Customer Support</a></li>
                </ul>
            </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div>
        <ReusableTable title="Recent Transactions" columns={transactionColumns} data={transactionsData} />
      </div>
    </div>
  );
}
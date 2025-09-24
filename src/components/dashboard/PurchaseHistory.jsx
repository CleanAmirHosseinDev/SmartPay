import React from "react";
import ReusableTable from "../common/ReusableTable";
import { transactionsData } from "../../lib/mockData";
import { FaCheckCircle, FaExclamationCircle, FaUndo } from "react-icons/fa";

const statusConfig = {
  Confirmed: {
    icon: <FaCheckCircle className="text-green-400" />,
    color: "text-green-400",
  },
  Pending: {
    icon: <FaExclamationCircle className="text-yellow-400" />,
    color: "text-yellow-400",
  },
  Refunded: {
    icon: <FaUndo className="text-blue-400" />,
    color: "text-blue-400",
  },
};

export default function PurchaseHistory() {
  const columns = [
    {
      header: "Transaction ID",
      accessor: "id",
      cell: (row) => <span className="font-medium text-gray-200">{row.id}</span>,
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Amount",
      accessor: "amount",
      cell: (row) => `${row.amount.toFixed(2)} ${row.currency}`,
    },
    {
      header: "Payment Method",
      accessor: "method",
    },
    {
      header: "Status",
      accessor: "status",
      cell: (row) => {
        const config = statusConfig[row.status];
        return (
          <div className="flex items-center">
            {config.icon}
            <span className={`ml-2 ${config.color}`}>{row.status}</span>
          </div>
        );
      },
    },
  ];

  return (
    <ReusableTable
      title="Purchase History"
      columns={columns}
      data={transactionsData}
    />
  );
}

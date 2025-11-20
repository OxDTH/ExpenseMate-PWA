import React from 'react';
import { ShoppingBag, Coffee, Utensils, Car, Home, MoreHorizontal } from 'lucide-react';

export interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  icon: string;
}

interface TransactionsListProps {
  transactions: Transaction[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  shopping: <ShoppingBag className="w-5 h-5" />,
  coffee: <Coffee className="w-5 h-5" />,
  food: <Utensils className="w-5 h-5" />,
  transport: <Car className="w-5 h-5" />,
  home: <Home className="w-5 h-5" />,
  other: <MoreHorizontal className="w-5 h-5" />,
};

export default function TransactionsList({ transactions }: TransactionsListProps) {
  if (transactions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <MoreHorizontal className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">No Transactions Yet</h3>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Recent Transactions</h3>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${
                  transaction.type === 'income' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                }`}>
                  {iconMap[transaction.icon] || iconMap.other}
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {transaction.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {transaction.category}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className={`font-bold ${
                  transaction.type === 'income' 
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}₹{Math.abs(transaction.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {transaction.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

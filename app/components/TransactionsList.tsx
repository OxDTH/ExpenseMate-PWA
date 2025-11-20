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
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm p-8 text-center transition-all duration-500">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-500">
          <MoreHorizontal className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-500">No Transactions Yet</h3>
      </div>
    );
  }

  return (
    <div className="space-y-1 transition-all duration-500">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900 transition-colors duration-500 mb-3 px-2">Recent Transactions</h3>
      
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="px-2 py-3 rounded-lg transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg transition-all duration-500 ${
                transaction.type === 'income' 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              }`}>
                {iconMap[transaction.icon] || iconMap.other}
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-900 transition-colors duration-500">
                  {transaction.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-600 transition-colors duration-500">
                  {transaction.category}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className={`font-bold transition-colors duration-500 ${
                transaction.type === 'income' 
                  ? 'text-green-600 dark:text-green-800'
                  : 'text-red-600 dark:text-red-800'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}₹{Math.abs(transaction.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-900 transition-colors duration-500">
                {transaction.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

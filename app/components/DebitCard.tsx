import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface DebitCardProps {
  totalBalance: number;
  income: number;
  expenses: number;
}

export default function DebitCard({ totalBalance, income, expenses }: DebitCardProps) {
  return (
    <div className="relative w-full h-56 bg-linear-to-br from-slate-800 via-slate-900 to-black rounded-2xl shadow-2xl p-6 text-white overflow-hidden">
      {/* Metallic gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent"></div>
      
      <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-white/60 tracking-wider uppercase">All in One Diamond Card</p>
          </div>
          {/* EMV Chip */}
          <div className="w-12 h-10 bg-linear-to-br from-amber-300 to-amber-500 rounded-md relative overflow-hidden">
            <div className="absolute inset-1 grid grid-cols-3 grid-rows-3 gap-0.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-amber-600/40 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-white/60 mb-1 tracking-wide">TOTAL BALANCE</p>
          <h2 className="text-3xl font-bold tracking-wider">
            ₹{totalBalance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <ArrowUp className="w-3 h-3 text-green-400" />
              <div>
                <p className="text-[10px] text-white/50">Income</p>
                <p className="text-xs font-semibold">₹{income.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <ArrowDown className="w-3 h-3 text-red-400" />
              <div>
                <p className="text-[10px] text-white/50">Expenses</p>
                <p className="text-xs font-semibold">₹{expenses.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center relative h-8">
            <div className="w-7 h-7 bg-red-500 rounded-full opacity-90"></div>
            <div className="w-7 h-7 bg-amber-500 rounded-full opacity-90 -ml-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
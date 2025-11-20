'use client';

import { useState } from "react";
import { Menu, Bell, Plus, HomeIcon, BarChart3, Wallet, User } from 'lucide-react';
import DebitCard from './components/DebitCard';
import TransactionsList, { Transaction } from './components/TransactionsList';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  // Sample data - replace with real data later
  const totalBalance = 5420.50;
  const income = 8500.00;
  const expenses = 3079.50;

  const sampleTransactions: Transaction[] = [
    {
      id: '1',
      title: 'Grocery Shopping',
      category: 'Food & Drinks',
      amount: 125.50,
      type: 'expense',
      date: 'Today',
      icon: 'shopping'
    },
    {
      id: '2',
      title: 'Salary Deposit',
      category: 'Income',
      amount: 3500.00,
      type: 'income',
      date: 'Yesterday',
      icon: 'home'
    },
    {
      id: '3',
      title: 'Coffee Shop',
      category: 'Food & Drinks',
      amount: 12.50,
      type: 'expense',
      date: 'Yesterday',
      icon: 'coffee'
    },
    {
      id: '4',
      title: 'Restaurant',
      category: 'Food & Drinks',
      amount: 85.00,
      type: 'expense',
      date: '2 days ago',
      icon: 'food'
    },
    {
      id: '5',
      title: 'Uber Ride',
      category: 'Transportation',
      amount: 24.50,
      type: 'expense',
      date: '3 days ago',
      icon: 'transport'
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-sm">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>

        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
          XpenseMate
        </h1>

        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
          <span className="inline-block animate-pulse">
            <Bell className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Debit Card */}
          <DebitCard 
            totalBalance={totalBalance}
            income={income}
            expenses={expenses}
          />

          {/* Transactions List */}
          <TransactionsList transactions={sampleTransactions} />
        </div>
      </main>

      <nav className="relative">

        {/* Floating Add Button (Smaller) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-20">
          <button className="flex items-center justify-center w-14 h-14 mt-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95">
            <Plus className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Deeper cut-out bottom nav */}
        <div
          className="
            bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg
            h-20 flex items-center justify-around px-4 relative
          "
          style={{
            WebkitMask:
              "radial-gradient(circle 45px at 50% -0px, transparent 98%, black 100%)",
            mask:
              "radial-gradient(circle 45px at 50% -0px, transparent 98%, black 100%)"
          }}
        >
          {/* Home */}
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center w-16 ${
              activeTab === 'home' ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <span className={`inline-block transform transition-all duration-200 ${
              activeTab === 'home' ? 'scale-110 -translate-y-1' : 'scale-100'
            }`}>
              <HomeIcon className="w-6 h-6" />
            </span>
            <span className="text-xs mt-1">Home</span>
          </button>

          {/* Overview */}
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex flex-col items-center w-16 ${
              activeTab === 'overview' ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <span className={`inline-block transform transition-all duration-200 ${
              activeTab === 'overview' ? 'scale-110 -translate-y-1' : 'scale-100'
            }`}>
              <BarChart3 className="w-6 h-6" />
            </span>
            <span className="text-xs mt-1">Overview</span>
          </button>

          <div className="w-16"></div>

          {/* Wallet */}
          <button
            onClick={() => setActiveTab('wallet')}
            className={`flex flex-col items-center w-16 ${
              activeTab === 'wallet' ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <span className={`inline-block transform transition-all duration-200 ${
              activeTab === 'wallet' ? 'scale-110 -translate-y-1' : 'scale-100'
            }`}>
              <Wallet className="w-6 h-6" />
            </span>
            <span className="text-xs mt-1">Wallet</span>
          </button>

          {/* Account */}
          <button
            onClick={() => setActiveTab('account')}
            className={`flex flex-col items-center w-16 ${
              activeTab === 'account' ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <span className={`inline-block transform transition-all duration-200 ${
              activeTab === 'account' ? 'scale-110 -translate-y-1' : 'scale-100'
            }`}>
              <User className="w-6 h-6" />
            </span>
            <span className="text-xs mt-1">Account</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

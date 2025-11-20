'use client';

import { useState } from "react";
import { Menu, Bell, Plus, HomeIcon, BarChart3, Wallet, User, Sun, Moon } from 'lucide-react';
import DebitCard from './components/DebitCard';
import TransactionsList, { Transaction } from './components/TransactionsList';
import MobileMenuBar from './components/MobileMenuBar';
import { useTheme } from './context/ThemeContext';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <div className="flex flex-col h-screen transition-colors duration-500" style={{ backgroundColor: 'var(--background)' }}>
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm transition-colors duration-500">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-900 dark:text-gray-100" />
        </button>

        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
          XpenseMate
        </h1>

        <div className="flex items-center gap-2">
          {/* Theme Toggle - Desktop Only */}
          <button 
            onClick={toggleTheme}
            className="hidden md:flex p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            ) : (
              <Sun className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            )}
          </button>

          <button className="p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-lg transition-colors relative">
            <span className="inline-block animate-pulse">
              <Bell className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            </span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenuBar 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 overflow-y-auto p-6 transition-colors duration-500">
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
          <button className="flex items-center justify-center w-14 h-14 mt-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95">
            <Plus className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Deeper cut-out bottom nav */}
        <div
          className="
            bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-gray-300 dark:border-gray-700 shadow-lg
            h-20 flex items-center justify-around px-4 relative transition-colors duration-500
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
            className={`flex flex-col items-center w-16 transition-colors duration-300 ${
              activeTab === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
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
            className={`flex flex-col items-center w-16 transition-colors duration-300 ${
              activeTab === 'overview' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
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
            className={`flex flex-col items-center w-16 transition-colors duration-300 ${
              activeTab === 'wallet' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
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
            className={`flex flex-col items-center w-16 transition-colors duration-300 ${
              activeTab === 'account' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
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

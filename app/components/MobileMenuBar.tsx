'use client';

import React from 'react';
import { X, Sun, Moon } from 'lucide-react';

interface MobileMenuBarProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function MobileMenuBar({ isOpen, onClose, theme, onToggleTheme }: MobileMenuBarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className="fixed top-0 left-0 h-screen w-64 shadow-xl z-50 transform transition-all duration-300 ease-out"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="flex flex-col h-screen">
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300 dark:border-gray-700 transition-colors duration-500">
            <h2 className="text-xl font-bold text-neutral-600 dark:text-gray-100 transition-colors duration-500">Menu</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-neutral-600 dark:text-gray-100" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 px-4 py-6 space-y-2">
            {/* Theme Toggle */}
            <button
              onClick={() => {
                onToggleTheme();
                onClose();
              }}
              className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300"
            >
              <span className="text-sm text-neutral-600 dark:text-gray-100 transition-colors duration-500">
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
              </span>
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-neutral-600 dark:text-gray-100" />
              ) : (
                <Sun className="w-5 h-5 text-neutral-600 dark:text-gray-100" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// app/brokers/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Calendar,
  CreditCard,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  PieChart,
  Settings,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function BrokersPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-screen bg-white text-gray-800">
        {/* Sidebar for desktop */}
        <aside className="hidden w-64 flex-col border-r border-gray-200 bg-white md:flex">
          <div className="flex h-20 items-center border-b border-gray-200 px-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <span>Algo Tradex Mind</span>
            </Link>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            <Link
              href="/dashboard"
              className="flex items-center rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Home className="mr-3 h-5 w-5 text-blue-600" />
              Dashboard
            </Link>
            <Link
              href="/brokers"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <BarChart3 className="mr-3 h-5 w-5 text-gray-500" />
              Brokers
            </Link>
            <Link
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <PieChart className="mr-3 h-5 w-5 text-gray-500" />
              Strategies
            </Link>
            <Link
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <Calendar className="mr-3 h-5 w-5 text-gray-500" />
              Backtest
            </Link>
            <Link
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <MessageSquare className="mr-3 h-5 w-5 text-gray-500" />
              Report
            </Link>
            {/* <Link
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <CreditCard className="mr-3 h-5 w-5 text-gray-500" />
            Billing
          </Link>
          <Link
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Settings className="mr-3 h-5 w-5 text-gray-500" />
            Settings
          </Link> */}
          </nav>
          <div className="border-t border-gray-200 p-4">
            <Link
              href="/"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <LogOut className="mr-3 h-5 w-5 text-gray-500" />
              Logout
            </Link>
          </div>
        </aside>

        {/* Mobile sidebar */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="flex md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="border-r border-gray-200 bg-white p-0">
            <div className="flex h-20 items-center border-b border-gray-200 px-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <span>Algo Tradex Mind</span>
              </Link>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
              <Link
                href="/dashboard"
                className="flex items-center rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                onClick={() => setIsSidebarOpen(false)}>
                <Home className="mr-3 h-5 w-5 text-blue-600" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsSidebarOpen(false)}>
                <BarChart3 className="mr-3 h-5 w-5 text-gray-500" />
                Analytics
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsSidebarOpen(false)}>
                <PieChart className="mr-3 h-5 w-5 text-gray-500" />
                Strategies
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsSidebarOpen(false)}>
                <Calendar className="mr-3 h-5 w-5 text-gray-500" />
                Calendar
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsSidebarOpen(false)}>
                <MessageSquare className="mr-3 h-5 w-5 text-gray-500" />
                Messages
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsSidebarOpen(false)}>
                <CreditCard className="mr-3 h-5 w-5 text-gray-500" />
                Billing
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsSidebarOpen(false)}>
                <Settings className="mr-3 h-5 w-5 text-gray-500" />
                Settings
              </Link>
            </nav>
            <div className="border-t border-gray-200 p-4">
              <Link
                href="/"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsSidebarOpen(false)}>
                <LogOut className="mr-3 h-5 w-5 text-gray-500" />
                Logout
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <div className="w-full">
          <h1 className="text-2xl px-4 font-bold text-blue-900 mb-6 self-start mt-24">
            Brokers
          </h1>

          <div className="flex flex-col items-center justify-center w-full">
            <img
              src="/image/broker.svg"
              alt="No Brokers"
              className="w-80 h-80 object-contain"
            />

            <p className="mt-2 text-gray-500 text-xs font-medium">
              No Brokers found. Please Add brokers!
            </p>

            <Link href={'/brokerservice'} className="mt-8 px-2 py-2 text-xs border border-dashed border-blue-800 text-blue-800 font-bold rounded-md hover:bg-blue-50 transition-all">
              + Add Broker
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

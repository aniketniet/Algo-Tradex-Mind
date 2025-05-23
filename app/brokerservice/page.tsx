"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bell,
  Calendar,
  ChevronDown,
  CreditCard,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  PieChart,
  Search,
  Settings,
  TrendingUp,
  User,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DashboardChart } from "@/components/dashboard-chart";
import { DashboardPieChart } from "@/components/dashboard-pie-chart";

const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const brokers = [
    {
      name: "STOXXART",
      image: "/image/blue-stoxkart.png",
    },
    {
      name: "Upstox",
      image: "/image/upstox_logo.png",
    },
    {
      name: "FINVASIA",
      image: "/image/NorenLogoLS.png",
    },
    {
      name: "FYERS",
      image: "/image/Fyers_Logo.png",
    },
    {
      name: "XTS",
      image: "/image/dropdown-xts.png",
    },
    {
      name: "Dhan",
      image: "/image/dhan_logo.png",
    },
    {
      name: "IIFL",
      image: "/image/iiflLogo.png",
    },
    {
      name: "Zerodha",
      image: "/image/broker_ZRLogo.png",
    },
    {
      name: "Alice",
      image: "/image/broker_ABLogo.png",
    },
    {
      name: "Angel",
      image: "/image/angelLogo.jpeg",
    },
    {
      name: "Master Trust",
      image: "/image/broker_MTlogo.png",
    },
  ];
  return (
    <>
      <div className="flex min-h-screen  bg-white text-gray-800">
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
        {/* find broker section */}
        <div className="flex-1 px-6 py-6">
          <div className="flex items-center gap-4 mb-4">
            <ArrowLeft size={20} />
            <h1 className="text-lg font-bold">Find your broker</h1>
          </div>

          <div className="flex justify-left">
            <div className="flex items-center w-[70%] max-w-3xl px-4 py-4 border border-gray-300 rounded-lg shadow-sm">
              <Search className="h-5 w-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search Brokers"
                className="w-full outline-none bg-transparent placeholder-gray-500 text-sm"
              />
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-bold mb-6">Popular Brokers</h2>

            {/* Upper Row - 6 brokers */}
            <div className="flex flex-row items-left justify-left gap-12  mb-6">
              {brokers.slice(0, 6).map((broker, index) => (
                <div
                  key={`upper-${index}`}
                  className="p-2 flex flex-col gap-3 items-left">
                  <div className="border-[3.5px] border-gray-400 h-[60px] w-[60px] p-1 rounded-full">
                    <img
                      src={broker.image}
                      alt={broker.name}
                      height={100}
                      width={100}
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-sm text-center mx-auto font-semibold">
                    {broker.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Lower Row - 5 brokers */}
            <div className="flex flex-row items-left justify-left gap-12">
              {brokers.slice(6).map((broker, index) => (
                <div
                  key={`lower-${index}`}
                  className="p-2 flex flex-col gap-3 items-left">
                  <div className="border-[3.5px] border-gray-400 h-[60px] w-[60px] p-1 rounded-full flex items-center">
                    <img
                      src={broker.image}
                      alt={broker.name}
                      height={100}
                      width={100}
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-sm text-center mx-auto font-semibold">
                    {broker.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
       
       {/* select broker section */}

       <div className=" mx-auto p-6 bg-white rounded-lg shadow-md"> {/* Changed from max-w-md to max-w-2xl */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Please select a broker</h2>
      
      <div className="p-4 border border-gray-300 rounded bg-gray-50">
        <p className="text-gray-500 italic">No broker selected at the moment</p>
      </div>
      
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Select Broker
        </button>
      </div>
    </div>


      </div>
    </>
  );
};

export default page;

"use client"

import { useState } from "react"
import Link from "next/link"
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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { DashboardChart } from "@/components/dashboard-chart"
import { DashboardPieChart } from "@/components/dashboard-pie-chart"

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col border-r border-gray-200 bg-white md:flex">
        <div className="flex h-20 items-center border-b border-gray-200 px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <span>Algo Tradex Mind</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 px-2 py-4">
          <Link
            href="/dashboard"
            className="flex items-center rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
          >
            <Home className="mr-3 h-5 w-5 text-blue-600" />
            Dashboard
          </Link>
          <Link
            href="/brokers"
            className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <BarChart3 className="mr-3 h-5 w-5 text-gray-500" />
            Brokers
          </Link>
          <Link
            href={'/strategies'}
            className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <PieChart className="mr-3 h-5 w-5 text-gray-500" />
            Strategies
          </Link>
          <Link
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Calendar className="mr-3 h-5 w-5 text-gray-500" />
            Backtest
          </Link>
          <Link
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
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
            className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
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
        <SheetContent side="left" className="border-r border-gray-200 bg-white p-0">
          <div className="flex h-20 items-center border-b border-gray-200 px-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <span>Algo Tradex Mind</span>
            </Link>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            <Link
              href="/dashboard"
              className="flex items-center rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Home className="mr-3 h-5 w-5 text-blue-600" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(false)}
            >
              <BarChart3 className="mr-3 h-5 w-5 text-gray-500" />
              Analytics
            </Link>
            <Link
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(false)}
            >
              <PieChart className="mr-3 h-5 w-5 text-gray-500" />
              Strategies
            </Link>
            <Link
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Calendar className="mr-3 h-5 w-5 text-gray-500" />
              Calendar
            </Link>
            <Link
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(false)}
            >
              <MessageSquare className="mr-3 h-5 w-5 text-gray-500" />
              Messages
            </Link>
            <Link
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(false)}
            >
              <CreditCard className="mr-3 h-5 w-5 text-gray-500" />
              Billing
            </Link>
            <Link
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Settings className="mr-3 h-5 w-5 text-gray-500" />
              Settings
            </Link>
          </nav>
          <div className="border-t border-gray-200 p-4">
            <Link
              href="/"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(false)}
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-500" />
              Logout
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top navigation */}
        <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-4 md:px-6">
          <div className="relative ml-4 hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-md border border-gray-300 bg-white py-2 pl-8 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-4 md:ml-auto">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 text-sm font-medium text-gray-800">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="hidden md:inline-block">John Doe</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white text-gray-800">
                <DropdownMenuItem className="hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-6 text-2xl font-bold md:text-3xl">Dashboard</h1>

            {/* KPI Cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-gray-200 bg-white text-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Today&apos;s Profit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">$1,294.57</div>
                    <div className="ml-2 flex items-center text-sm text-green-600">
                      <ArrowUp className="mr-1 h-4 w-4" />
                      24.3%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white text-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Trades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">142</div>
                    <div className="ml-2 flex items-center text-sm text-green-600">
                      <ArrowUp className="mr-1 h-4 w-4" />
                      12.5%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white text-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Win Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">78.3%</div>
                    <div className="ml-2 flex items-center text-sm text-green-600">
                      <ArrowUp className="mr-1 h-4 w-4" />
                      3.2%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white text-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Active Algorithms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">12</div>
                    <div className="ml-2 flex items-center text-sm text-red-600">
                      <ArrowDown className="mr-1 h-4 w-4" />2
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="mb-8 grid gap-6 lg:grid-cols-3">
              <Card className="col-span-2 border-gray-200 bg-white text-gray-800">
                <CardHeader>
                  <CardTitle>Profit Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <DashboardChart />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white text-gray-800">
                <CardHeader>
                  <CardTitle>Strategy Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <DashboardPieChart />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trade Logs */}
            <Card className="border-gray-200 bg-white text-gray-800">
              <CardHeader>
                <CardTitle>Recent Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="mb-4 bg-gray-100">
                    <TabsTrigger value="all" className="data-[state=active]:bg-white">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="buy" className="data-[state=active]:bg-white">
                      Buy
                    </TabsTrigger>
                    <TabsTrigger value="sell" className="data-[state=active]:bg-white">
                      Sell
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="m-0">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Strategy</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Symbol</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Type</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Price</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Quantity</th>
                            <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Profit/Loss</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">10:42 AM</td>
                            <td className="px-4 py-3 text-sm">Momentum</td>
                            <td className="px-4 py-3 text-sm">AAPL</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">Buy</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$187.42</td>
                            <td className="px-4 py-3 text-sm">50</td>
                            <td className="px-4 py-3 text-right text-sm text-green-600">+$243.50</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">10:31 AM</td>
                            <td className="px-4 py-3 text-sm">Mean Reversion</td>
                            <td className="px-4 py-3 text-sm">MSFT</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-600">Sell</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$412.65</td>
                            <td className="px-4 py-3 text-sm">25</td>
                            <td className="px-4 py-3 text-right text-sm text-green-600">+$187.25</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">10:15 AM</td>
                            <td className="px-4 py-3 text-sm">Breakout</td>
                            <td className="px-4 py-3 text-sm">TSLA</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">Buy</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$245.87</td>
                            <td className="px-4 py-3 text-sm">30</td>
                            <td className="px-4 py-3 text-right text-sm text-green-600">+$312.60</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">10:02 AM</td>
                            <td className="px-4 py-3 text-sm">Trend Following</td>
                            <td className="px-4 py-3 text-sm">AMZN</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-600">Sell</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$178.32</td>
                            <td className="px-4 py-3 text-sm">40</td>
                            <td className="px-4 py-3 text-right text-sm text-red-600">-$87.20</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">09:54 AM</td>
                            <td className="px-4 py-3 text-sm">Momentum</td>
                            <td className="px-4 py-3 text-sm">NVDA</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">Buy</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$124.56</td>
                            <td className="px-4 py-3 text-sm">60</td>
                            <td className="px-4 py-3 text-right text-sm text-green-600">+$432.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  <TabsContent value="buy" className="m-0">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Strategy</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Symbol</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Type</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Price</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Quantity</th>
                            <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Profit/Loss</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">10:42 AM</td>
                            <td className="px-4 py-3 text-sm">Momentum</td>
                            <td className="px-4 py-3 text-sm">AAPL</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">Buy</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$187.42</td>
                            <td className="px-4 py-3 text-sm">50</td>
                            <td className="px-4 py-3 text-right text-sm text-green-600">+$243.50</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">10:15 AM</td>
                            <td className="px-4 py-3 text-sm">Breakout</td>
                            <td className="px-4 py-3 text-sm">TSLA</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">Buy</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$245.87</td>
                            <td className="px-4 py-3 text-sm">30</td>
                            <td className="px-4 py-3 text-right text-sm text-green-600">+$312.60</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">09:54 AM</td>
                            <td className="px-4 py-3 text-sm">Momentum</td>
                            <td className="px-4 py-3 text-sm">NVDA</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">Buy</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$124.56</td>
                            <td className="px-4 py-3 text-sm">60</td>
                            <td className="px-4 py-3 text-right text-sm text-green-600">+$432.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  <TabsContent value="sell" className="m-0">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Strategy</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Symbol</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Type</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Price</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Quantity</th>
                            <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Profit/Loss</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">10:31 AM</td>
                            <td className="px-4 py-3 text-sm">Mean Reversion</td>
                            <td className="px-4 py-3 text-sm">MSFT</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-600">Sell</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$412.65</td>
                            <td className="px-4 py-3 text-sm">25</td>
                            <td className="px-4 py-3 text-right text-sm text-green-600">+$187.25</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm">10:02 AM</td>
                            <td className="px-4 py-3 text-sm">Trend Following</td>
                            <td className="px-4 py-3 text-sm">AMZN</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-600">Sell</span>
                            </td>
                            <td className="px-4 py-3 text-sm">$178.32</td>
                            <td className="px-4 py-3 text-sm">40</td>
                            <td className="px-4 py-3 text-right text-sm text-red-600">-$87.20</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

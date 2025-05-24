"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  SquareArrowOutUpRight,
  CirclePlus,
} from "lucide-react";

const page = () => {
  const [selectedOption, setSelectedOption] = useState<"time" | "indicator">(
    "time"
  );

  const [orderType, setOrderType] = useState("MIS");
  const [startTime, setStartTime] = useState("09:16");
  const [squareOff, setSquareOff] = useState("15:15");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  // const [profitAmount, setProfitAmount] = useState("");
  // const [lossAmount, setLossAmount] = useState("");
  // const [noTradeTime, setNoTradeTime] = useState("15:15");

  const [profitTrailingType, setProfitTrailingType] = useState<string | null>(
    "Lock Fix Profit"
  );
  const [lockProfitValue, setLockProfitValue] = useState("");

  const handleOptionChange = (option: string) => {
    setProfitTrailingType(option);
    // Clear the input when switching to options that don't need it
    if (option !== "Lock Fix Profit" && option !== "Lock and Trail") {
      setLockProfitValue("");
    }
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <nav className="flex items-center justify-between ">
          <div className="flex space-x-1">
            <Link
              href="/create-strategy"
              className={`px-4 text-xs py-2 rounded-md font-bold transition-colors ${
                isActive("/create-strategy")
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
              }`}>
              Create Strategy
            </Link>
            <Link
              href="/my-strategies"
              className={`px-4 py-2 text-xs rounded-md font-bold transition-colors ${
                isActive("/my-strategies")
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
              }`}>
              My Strategies
            </Link>
            <Link
              href="/deployed-strategies"
              className={`px-4 py-2 text-xs rounded-md font-bold transition-colors ${
                isActive("/deployed-strategies")
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
              }`}>
              Deployed Strategies
            </Link>
            <Link
              href="/strategy-template"
              className={`px-4 py-2 text-xs rounded-md font-bold transition-colors ${
                isActive("/strategy-template")
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
              }`}>
              Strategy Template
            </Link>
            <Link
              href="/my-portfolio"
              className={`px-4 py-2 text-xs rounded-md font-bold transition-colors ${
                isActive("/my-portfolio")
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
              }`}>
              My Portfolio
            </Link>
          </div>
        </nav>

        <div className="flex flex-col gap-2 max-w-[13.12rem]">
          {" "}
          {/* Adjusted width container */}
          <label className="text-lg font-bold text-gray-600">
            Strategy Type
          </label>
          <div className="flex flex-row items-left border  rounded-xl overflow-hidden  mt-3">
            {" "}
            {/* Fixed height */}
            <button
              className={` py-2 px-3 text-xs font-bold text-center ${
                selectedOption === "time"
                  ? "bg-blue-200 text-blue-900"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedOption("time")}>
              Time Based
            </button>
            <button
              className={` py-2 px-3 text-xs font-bold text-center ${
                selectedOption === "indicator"
                  ? "bg-blue-200 text-blue-900"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedOption("indicator")}>
              Indicator Based
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-xs ">
          <label className="text-lg font-bold text-gray-600 mt-2">
            Select Instruments
          </label>
          <div className="flex items-center gap-4">
            {/* Large + Button with Dashed Border */}
            <button
              className="
            flex flex-col items-center gap-2 justify-center 
            w-[130px] h-[120px]  /* Fixed 500x500 size */
            border-1 border-dashed border-blue-800  /* Dashed border */
            rounded-lg  /* Slightly rounded corners */
            bg-white hover:bg-gray-100  /* Light bg + hover effect */
            text-gray-500 hover:text-gray-700  /* Text color changes on hover */
            transition-all  /* Smooth transitions */
            text-6xl  /* */
          ">
              <span className="text-4xl font-normal text-blue-900">+</span>
              <span className="text-xs font-bold text-blue-900 mb-2">
                Add Instruments.
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <hr className="" />
          <div className="flex flex-row gap-4 p-4 bg-white max-w-full rounded-lg my-4">
            {/* First Row - Order Type */}
            <div className="flex items-center gap-6">
              <div className="relative flex items-center gap-2 border w-[250px] px-4 py-3  rounded-xl hover:border-gray-500 transition-all duration-300">
                <span className="absolute top-0 left-2 text-sm px-2 text-gray-700 mt-[-7px] text-xs bg-white ">
                  Order Type
                </span>
                <div className="flex gap-6 mx-auto">
                  {["MIS", "CNC", "BTST"].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={orderType === type}
                        onChange={() => setOrderType(type)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Second Column - Start Time */}
              <div className="relative flex items-center border border-gray-300 rounded-lg bg-white px-3 py-2 hover:border-gray-500 transition-all duration-300 ">
                <span className="absolute top-0 left-3 px-1 bg-white text-xs text-gray-700 -mt-2 z-10">
                  Start time
                </span>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="text-base w-25 outline-none"
                />
              </div>

              {/* Third Column - Square Off */}
              <div className="relative flex items-center border border-gray-300 rounded-lg bg-white px-3 py-2 hover:border-gray-500 transition-all duration-300 ">
                <span className="absolute top-0 left-3 px-1 bg-white text-xs text-gray-700 -mt-2 z-10">
                  Square off
                </span>
                <input
                  type="time"
                  value={squareOff}
                  onChange={(e) => setSquareOff(e.target.value)}
                  className="text-base w-25 outline-none"
                />
                {/* <button className="text-gray-400 hover:text-gray-600 text-sm">❌</button> */}
              </div>
            </div>

            {/* Second Row - Days Selection */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                  {["MON", "TUE", "WED", "THU", "FRI"].map(
                    (day, index, arr) => (
                      <button
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`
            px-4 py-3 text-xs font-medium 
            ${
              selectedDays.includes(day)
                ? "bg-white text-gray-700"
                : " bg-blue-200  text-blue-900"
            }
            ${index !== arr.length - 1 ? "border-r border-blue-300" : ""}
          `}>
                        {day}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Templates Section */}
          <div className="flex flex-row items-center cursor-pointer gap-2 w-fit p-2 mb-10 hover:bg-blue-50 w-50 rounded-lg">
            <span className="text-lg font-bold text-blue-900">
              Readymade Templates
            </span>
            <button className="text-[#2a4365]">
              <SquareArrowOutUpRight />
            </button>
          </div>

          <hr className="" />
        </div>

        <div className="relative h-24 flex flex-row justify-between">
          <h1 className="absolute left-10 text-lg font-bold text-gray-600 mt-2">
            Order Legs
          </h1>

          <button
            type="button"
            className="absolute right-10 bottom-0 flex flex-row items-center justify-center rounded-lg text-xs font-semibold gap-2 bg-blue-900 text-white px-4 py-2">
            <CirclePlus size={20} />
            <span>ADD LEG</span>
          </button>
        </div>

        <hr />

        <div className="relative h-40 w-full">
          <h1 className="  text-lg font-bold text-gray-600 mt-2">
            Risk management
          </h1>
          <div className="">
            <div className="flex flex-row gap-6">
              {/* Input 1 */}
              <div className="relative w-[350px]">
                <input
                  type="text"
                  placeholder=""
                  className="peer w-full  outline-none border text-sm rounded-xl pt-5 pb-2 px-3 border-gray-300 focus:border-blue-500"
                />
                <span
                  className="absolute left-3 top-3.5 text-sm text-gray-400 transition-all duration-300 pointer-events-none px-2 
                         peer-focus:top-0 peer-focus:mt-[-8px] peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white z-10">
                  Exit When Over All Profit In Amount (INR)
                </span>
              </div>

              {/* Input 2 */}
              <div className="relative w-[350px]">
                <input
                  type="text"
                  placeholder=""
                  className="peer w-full  outline-none border text-sm rounded-xl pt-5 pb-2 px-3 border-gray-300 focus:border-blue-500"
                />
                <span
                  className="absolute left-3 top-3.5 text-sm text-gray-400 transition-all duration-300 pointer-events-none px-2 
                         peer-focus:top-0 peer-focus:mt-[-8px] peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white z-10">
                  Exit When Over All Loss In Amount (INR)
                </span>
              </div>

              <div className="relative flex items-center border border-gray-300 rounded-lg bg-white px-3 py-2 hover:border-gray-500 transition-all duration-300 ">
                <span className="absolute top-0 left-3 px-1 bg-white text-xs text-gray-700 -mt-2 z-10">
                  Square off
                </span>
                <input
                  type="time"
                  value={squareOff}
                  onChange={(e) => setSquareOff(e.target.value)}
                  className="text-base w-25 outline-none"
                />
                {/* <button className="text-gray-400 hover:text-gray-600 text-sm">❌</button> */}
              </div>
            </div>

            <div className="max-w-full p-4">
              <h2 className="text-xl font-semibold mb-3">Profit Trailing</h2>

              <div className="flex flex-wrap gap-6 mb-4">
                {/* No Trailing */}
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="noTrailing"
                      name="profitOption"
                      checked={profitTrailingType === "No Trailing"}
                      onChange={() => handleOptionChange("No Trailing")}
                      className="mr-2"
                    />
                    <label htmlFor="noTrailing">No Trailing</label>
                  </div>
                </div>

                {/* Lock Fix Profit */}
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="lockFixProfit"
                      name="profitOption"
                      checked={profitTrailingType === "Lock Fix Profit"}
                      onChange={() => handleOptionChange("Lock Fix Profit")}
                      className="mr-2"
                    />
                    <label htmlFor="lockFixProfit">Lock Fix Profit</label>
                  </div>
                  {(profitTrailingType === "Lock Fix Profit" ||
                    profitTrailingType === "Lock and Trail") && (
                    <div className="flex mt-2 max-w-full">
                      <span className="mb-1 text-sm">If Profit Reaches</span>
                      <input
                        type="text"
                        value={lockProfitValue}
                        onChange={(e) => setLockProfitValue(e.target.value)}
                        placeholder="Lock Profit at"
                        className="px-3 py-2 border rounded w-full"
                      />
                      <input
                        type="text"
                        value={lockProfitValue}
                        onChange={(e) => setLockProfitValue(e.target.value)}
                        placeholder="Lock Profit at"
                        className="px-3 py-2 border rounded w-full"
                      />
                    </div>
                  )}
                </div>

                {/* Trail Profit */}
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="trailProfit"
                      name="profitOption"
                      checked={profitTrailingType === "Trail Profit"}
                      onChange={() => handleOptionChange("Trail Profit")}
                      className="mr-2"
                    />
                    <label htmlFor="trailProfit">Trail Profit</label>
                  </div>
                </div>

                {/* Lock and Trail */}
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="lockAndTrail"
                      name="profitOption"
                      checked={profitTrailingType === "Lock and Trail"}
                      onChange={() => handleOptionChange("Lock and Trail")}
                      className="mr-2"
                    />
                    <label htmlFor="lockAndTrail">Lock and Trail</label>
                  </div>
                </div>
              </div>

              <hr className="my-4 border-t border-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

"use client";

import { Card, Button } from "@/app/components/ui";
import Link from "next/link";
import { useState } from "react";

export default function LoginHistoryPage() {
  // Sample login history data
  const [loginHistory, setLoginHistory] = useState([
    {
      id: 1,
      device: "Chrome on Windows 10",
      location: "Lagos, Nigeria",
      ip: "192.168.1.101",
      timestamp: "Today, 10:30 AM",
      status: "Success",
    },
    {
      id: 2,
      device: "Safari on macOS",
      location: "Lagos, Nigeria",
      ip: "192.168.1.102",
      timestamp: "Yesterday, 3:45 PM",
      status: "Success",
    },
    {
      id: 3,
      device: "Chrome on Android",
      location: "Abuja, Nigeria",
      ip: "192.168.1.103",
      timestamp: "June 10, 2023, 12:15 PM",
      status: "Failed",
    },
    {
      id: 4,
      device: "Firefox on Windows 10",
      location: "Lagos, Nigeria",
      ip: "192.168.1.104",
      timestamp: "June 9, 2023, 9:00 AM",
      status: "Success",
    },
    {
      id: 5,
      device: "Safari on iOS",
      location: "Lagos, Nigeria",
      ip: "192.168.1.105",
      timestamp: "June 8, 2023, 6:20 PM",
      status: "Success",
    },
    {
      id: 6,
      device: "Chrome on macOS",
      location: "Abuja, Nigeria",
      ip: "192.168.1.106",
      timestamp: "June 7, 2023, 11:10 AM",
      status: "Success",
    },
    {
      id: 7,
      device: "Edge on Windows 10",
      location: "Lagos, Nigeria",
      ip: "192.168.1.107",
      timestamp: "June 6, 2023, 2:30 PM",
      status: "Failed",
    },
  ]);

  // Time periods for filtering
  const timePeriods = [
    { value: "all", label: "All Time" },
    { value: "today", label: "Today" },
    { value: "week", label: "This Week" },
    { value: "month", label: "This Month" },
  ];

  // Status options for filtering
  const statusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "success", label: "Success" },
    { value: "failed", label: "Failed" },
  ];

  // State for filters
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Apply filters
  const filteredHistory = loginHistory.filter((item) => {
    // Filter by status
    if (
      selectedStatus !== "all" &&
      item.status.toLowerCase() !== selectedStatus
    ) {
      return false;
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        item.device.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.ip.toLowerCase().includes(query)
      );
    }

    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Login & Access History
          </h1>
          <p className="text-foreground/70 mt-1">
            View all login attempts and access events for your account
          </p>
        </div>
        <Button
          variant="outline"
          className="border-seance/20 text-foreground self-start sm:self-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          Export Log
        </Button>
      </div>

      <Card className="border border-seance/20 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by device, location, or IP..."
                className="w-full pl-10 pr-4 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart focus:border-purpleHeart"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedTimePeriod}
              onChange={(e) => setSelectedTimePeriod(e.target.value)}
              className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
            >
              {timePeriods.map((period) => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Device & Browser
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  IP Address
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              {filteredHistory.map((login) => (
                <tr key={login.id}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purpleHeart mr-2"
                      >
                        <rect
                          width="14"
                          height="20"
                          x="5"
                          y="2"
                          rx="2"
                          ry="2"
                        />
                        <path d="M12 18h.01" />
                      </svg>
                      <span className="text-sm font-medium text-foreground">
                        {login.device}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {login.location}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {login.ip}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {login.timestamp}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        login.status === "Success"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {login.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredHistory.length === 0 && (
          <div className="text-center py-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-foreground/30 mb-3"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
            <p className="text-foreground/70">No login history found.</p>
          </div>
        )}

        {filteredHistory.length > 0 && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-foreground/70">
              Showing {filteredHistory.length} of {loginHistory.length} login
              events
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="border-seance/20 text-foreground p-2 h-8 w-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button
                variant="outline"
                className="border-seance/20 bg-purpleHeart/10 text-foreground p-2 h-8 w-8"
              >
                1
              </Button>
              <Button
                variant="outline"
                className="border-seance/20 text-foreground p-2 h-8 w-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        )}
      </Card>

      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Login Activity Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-medium text-foreground mb-3">
              Device Distribution
            </h3>
            <div className="bg-seance/5 rounded-lg h-56 flex items-center justify-center">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto text-seance/40 mb-2"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
                <p className="text-foreground/70 text-sm">
                  Login distribution by device type
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-foreground mb-3">
              Login Locations
            </h3>
            <div className="bg-seance/5 rounded-lg h-56 flex items-center justify-center">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto text-seance/40 mb-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <p className="text-foreground/70 text-sm">
                  Map of login locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border border-seance/20 p-6 bg-seance/5">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-background border border-seance/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purpleHeart"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Security Tips
            </h3>
            <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
              <li>
                If you notice any suspicious login attempts, change your
                password immediately.
              </li>
              <li>
                For additional security, enable two-factor authentication in
                your account settings.
              </li>
              <li>
                Regularly review your login history to monitor access to your
                account.
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/account/security">
                <Button className="bg-purpleHeart hover:bg-purpleHeart/90 text-white">
                  Security Settings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button, Card } from "@/app/components/ui";
import Link from "next/link";

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  // Activity data
  const activities = [
    {
      id: 1,
      type: "login",
      description: "Login from Chrome on macOS",
      ipAddress: "192.168.1.1",
      date: "2023-06-12T10:30:00Z",
      product: null,
      location: "San Francisco, CA",
      success: true,
    },
    {
      id: 2,
      type: "product",
      description: "Created a new document in PDFx",
      ipAddress: "192.168.1.1",
      date: "2023-06-12T11:45:00Z",
      product: "PDFx",
      success: true,
    },
    {
      id: 3,
      type: "product",
      description: "Generated AI response in Binx AI",
      ipAddress: "192.168.1.1",
      date: "2023-06-12T13:20:00Z",
      product: "Binx AI",
      success: true,
    },
    {
      id: 4,
      type: "login",
      description: "Login from iPhone on iOS 16",
      ipAddress: "192.168.10.5",
      date: "2023-06-10T09:15:00Z",
      product: null,
      location: "San Francisco, CA",
      success: true,
    },
    {
      id: 5,
      type: "profile",
      description: "Updated profile information",
      ipAddress: "192.168.10.5",
      date: "2023-06-10T09:30:00Z",
      product: null,
      success: true,
    },
    {
      id: 6,
      type: "product",
      description: "Created a new student record in CAMPUX",
      ipAddress: "192.168.10.5",
      date: "2023-06-10T15:10:00Z",
      product: "CAMPUX",
      success: true,
    },
    {
      id: 7,
      type: "product",
      description: "Processed PDF extraction in PDFx",
      ipAddress: "192.168.1.1",
      date: "2023-06-09T14:30:00Z",
      product: "PDFx",
      success: true,
    },
    {
      id: 8,
      type: "login",
      description: "Failed login attempt",
      ipAddress: "203.0.113.1",
      date: "2023-06-09T03:25:00Z",
      product: null,
      location: "Unknown",
      success: false,
    },
    {
      id: 9,
      type: "billing",
      description: "Updated payment method",
      ipAddress: "192.168.1.1",
      date: "2023-06-08T11:20:00Z",
      product: null,
      success: true,
    },
    {
      id: 10,
      type: "product",
      description: "Generated semester report in CAMPUX",
      ipAddress: "192.168.1.1",
      date: "2023-06-07T16:45:00Z",
      product: "CAMPUX",
      success: true,
    },
    {
      id: 11,
      type: "login",
      description: "Login from Firefox on Windows",
      ipAddress: "198.51.100.1",
      date: "2023-06-05T08:30:00Z",
      product: null,
      location: "Los Angeles, CA",
      success: true,
    },
    {
      id: 12,
      type: "product",
      description: "Shared document in PDFx",
      ipAddress: "198.51.100.1",
      date: "2023-06-05T09:15:00Z",
      product: "PDFx",
      success: true,
    },
  ];

  // Filter activities based on active tab and date filter
  const filteredActivities = activities.filter((activity) => {
    // Filter by type
    if (activeTab !== "all" && activeTab !== activity.type) {
      return false;
    }

    // Filter by date
    if (dateFilter !== "all") {
      const activityDate = new Date(activity.date);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      // Reset hours to compare just the date
      today.setHours(0, 0, 0, 0);
      yesterday.setHours(0, 0, 0, 0);
      const activityDay = new Date(activityDate);
      activityDay.setHours(0, 0, 0, 0);

      if (dateFilter === "today" && activityDay.getTime() !== today.getTime()) {
        return false;
      }

      if (
        dateFilter === "yesterday" &&
        activityDay.getTime() !== yesterday.getTime()
      ) {
        return false;
      }

      if (dateFilter === "week") {
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        if (activityDate < weekAgo) {
          return false;
        }
      }
    }

    return true;
  });

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Group activities by date
  const groupedActivities = filteredActivities.reduce((groups, activity) => {
    const date = new Date(activity.date);
    const dateKey = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }

    groups[dateKey].push(activity);
    return groups;
  }, {});

  // Get icon based on activity type
  const getIcon = (activity) => {
    switch (activity.type) {
      case "login":
        return (
          <div
            className={`p-2 rounded-full ${
              activity.success ? "bg-purpleHeart/10" : "bg-red-100"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={activity.success ? "text-purpleHeart" : "text-red-500"}
            >
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
              <path d="M18 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2" />
              <path d="M6 21v-2" />
              <path d="M18 21v-2" />
            </svg>
          </div>
        );
      case "product":
        return (
          <div className="p-2 rounded-full bg-seance/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-seance"
            >
              <path d="m16 6 4 14" />
              <path d="M12 6v14" />
              <path d="M8 8v12" />
              <path d="M4 4v16" />
            </svg>
          </div>
        );
      case "profile":
        return (
          <div className="p-2 rounded-full bg-purpleHeart/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purpleHeart"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        );
      case "billing":
        return (
          <div className="p-2 rounded-full bg-seance/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-seance"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="p-2 rounded-full bg-foreground/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground/70"
            >
              <path d="m16 6 4 14" />
              <path d="M12 6v14" />
              <path d="M8 8v12" />
              <path d="M4 4v16" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Activity Log
        </h1>
        <p className="text-foreground/70 mt-1">
          Track your account activity and product usage
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeTab === "all" ? "default" : "outline"}
            className={
              activeTab === "all"
                ? "bg-purpleHeart text-white"
                : "border-seance/20 text-foreground"
            }
            onClick={() => setActiveTab("all")}
          >
            All Activity
          </Button>
          <Button
            variant={activeTab === "login" ? "default" : "outline"}
            className={
              activeTab === "login"
                ? "bg-purpleHeart text-white"
                : "border-seance/20 text-foreground"
            }
            onClick={() => setActiveTab("login")}
          >
            Login History
          </Button>
          <Button
            variant={activeTab === "product" ? "default" : "outline"}
            className={
              activeTab === "product"
                ? "bg-purpleHeart text-white"
                : "border-seance/20 text-foreground"
            }
            onClick={() => setActiveTab("product")}
          >
            Product Actions
          </Button>
        </div>

        <div className="flex gap-2">
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">This Week</option>
          </select>

          <Button
            variant="outline"
            className="border-seance/20 text-foreground"
          >
            Export
          </Button>
        </div>
      </div>

      <Card className="border border-seance/20 p-0">
        {filteredActivities.length === 0 ? (
          <div className="p-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-foreground/30 mb-4"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            <h3 className="text-lg font-medium text-foreground mb-1">
              No activity found
            </h3>
            <p className="text-foreground/70 text-sm">
              There is no activity for the current filters.
            </p>
          </div>
        ) : (
          <div>
            {Object.keys(groupedActivities).map((dateKey) => (
              <div key={dateKey}>
                <div className="px-6 py-3 bg-seance/5 border-b border-seance/10">
                  <h3 className="text-sm font-medium text-foreground">
                    {dateKey}
                  </h3>
                </div>
                <div className="divide-y divide-seance/10">
                  {groupedActivities[dateKey].map((activity) => (
                    <div key={activity.id} className="p-4 md:p-6 flex gap-4">
                      <div className="shrink-0 mt-1">{getIcon(activity)}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between gap-2 mb-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base font-medium text-foreground">
                              {activity.description}
                            </h3>
                            {activity.success === false && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                                Failed
                              </span>
                            )}
                            {activity.product && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purpleHeart/10 text-purpleHeart">
                                {activity.product}
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-foreground/60">
                            {new Date(activity.date).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/60">
                          <div>IP: {activity.ipAddress}</div>
                          {activity.location && (
                            <div>Location: {activity.location}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {filteredActivities.length > 0 && (
        <div className="flex justify-between items-center">
          <div className="text-sm text-foreground/70">
            Showing {filteredActivities.length} of {activities.length}{" "}
            activities
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-seance/20 text-foreground"
            >
              Load More
            </Button>
          </div>
        </div>
      )}

      <div className="bg-background border border-seance/20 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Activity Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-seance/5 rounded-lg p-4">
            <h3 className="text-lg font-medium text-foreground mb-2">
              Most Active Product
            </h3>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-purpleHeart/10">
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
                  className="text-purpleHeart"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-medium">PDFx</p>
                <p className="text-sm text-foreground/70">
                  3 activities this week
                </p>
              </div>
            </div>
          </div>

          <div className="bg-seance/5 rounded-lg p-4">
            <h3 className="text-lg font-medium text-foreground mb-2">
              Login Locations
            </h3>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-purpleHeart/10">
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
                  className="text-purpleHeart"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-medium">2 Locations</p>
                <p className="text-sm text-foreground/70">
                  Primarily San Francisco
                </p>
              </div>
            </div>
          </div>

          <div className="bg-seance/5 rounded-lg p-4">
            <h3 className="text-lg font-medium text-foreground mb-2">
              Unusual Activity
            </h3>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-red-100">
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
                  className="text-red-500"
                >
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" x2="12" y1="9" y2="13" />
                  <line x1="12" x2="12.01" y1="17" y2="17" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-medium">1 Failed Login</p>
                <p className="text-sm text-foreground/70">
                  From unknown location
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/account/security">
            <Button
              variant="outline"
              className="border-seance/20 text-foreground"
            >
              Review Security Settings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

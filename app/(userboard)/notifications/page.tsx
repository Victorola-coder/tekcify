"use client";

import { useState } from "react";
import { Card, Button } from "@/app/components/ui";
import Link from "next/link";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Notifications data
  const notifications = [
    {
      id: 1,
      title: "Scheduled Maintenance",
      message:
        "We will be performing scheduled maintenance on June 15th from 2:00 AM to 4:00 AM UTC. Some services may be temporarily unavailable during this time.",
      date: "2023-06-12T10:30:00Z",
      read: false,
      type: "system",
      product: null,
    },
    {
      id: 2,
      title: "New Binx AI Feature Released",
      message:
        "We're excited to announce the release of our new document summarization feature for Binx AI. Try it out today!",
      date: "2023-06-10T14:45:00Z",
      read: true,
      type: "update",
      product: "Binx AI",
    },
    {
      id: 3,
      title: "Your PDFx Storage is Almost Full",
      message:
        "You have used 80% of your PDFx storage allocation. Consider upgrading your plan or removing unused documents.",
      date: "2023-06-09T08:15:00Z",
      read: false,
      type: "system",
      product: "PDFx",
    },
    {
      id: 4,
      title: "CAMPUX Security Update",
      message:
        "We have released an important security update for CAMPUX. This update improves data encryption and strengthens user authentication.",
      date: "2023-06-07T16:20:00Z",
      read: true,
      type: "update",
      product: "CAMPUX",
    },
    {
      id: 5,
      title: "Summer Promotion: 20% Off All Plans",
      message:
        "For a limited time, get 20% off all subscription plans when you upgrade or renew. Use code SUMMER20 at checkout.",
      date: "2023-06-05T09:00:00Z",
      read: true,
      type: "announcement",
      product: null,
    },
    {
      id: 6,
      title: "New Payment Method Added",
      message:
        "A new payment method (Visa ending in 4242) has been added to your account.",
      date: "2023-06-03T11:10:00Z",
      read: true,
      type: "system",
      product: null,
    },
    {
      id: 7,
      title: "PDFx Integration with Google Drive Now Available",
      message:
        "You can now directly import and export documents between PDFx and Google Drive. Check out the new integration in your PDFx dashboard.",
      date: "2023-06-01T15:30:00Z",
      read: false,
      type: "update",
      product: "PDFx",
    },
    {
      id: 8,
      title: "Join Our Upcoming Webinar",
      message:
        "Learn how to maximize productivity with Tekcify products in our free webinar on June 20th at 10:00 AM PST.",
      date: "2023-05-28T13:45:00Z",
      read: true,
      type: "announcement",
      product: null,
    },
  ];

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !notification.read;
    return notification.type === activeTab;
  });

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  };

  // Get icon based on notification type
  const getIcon = (type: string, read: boolean) => {
    const opacity = read ? "text-foreground/50" : "text-foreground";

    switch (type) {
      case "system":
        return (
          <div
            className={`p-2 rounded-full ${
              read ? "bg-seance/5" : "bg-seance/10"
            }`}
          >
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
              className={read ? "text-seance/50" : "text-seance"}
            >
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" x2="12" y1="9" y2="13" />
              <line x1="12" x2="12.01" y1="17" y2="17" />
            </svg>
          </div>
        );
      case "update":
        return (
          <div
            className={`p-2 rounded-full ${
              read ? "bg-purpleHeart/5" : "bg-purpleHeart/10"
            }`}
          >
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
              className={read ? "text-purpleHeart/50" : "text-purpleHeart"}
            >
              <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9L10 5.5" />
            </svg>
          </div>
        );
      case "announcement":
        return (
          <div
            className={`p-2 rounded-full ${
              read ? "bg-seance/5" : "bg-seance/10"
            }`}
          >
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
              className={read ? "text-seance/50" : "text-seance"}
            >
              <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
              <path d="m6 9 6 3 6-3" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Notifications
        </h1>
        <p className="text-foreground/70 mt-1">
          Stay up to date with system alerts, product updates, and announcements
        </p>
      </div>

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
          All Notifications
        </Button>
        <Button
          variant={activeTab === "unread" ? "default" : "outline"}
          className={
            activeTab === "unread"
              ? "bg-purpleHeart text-white"
              : "border-seance/20 text-foreground"
          }
          onClick={() => setActiveTab("unread")}
        >
          Unread
          {notifications.filter((n) => !n.read).length > 0 && (
            <span className="ml-2 bg-seance/20 text-seance text-xs px-1.5 py-0.5 rounded-full">
              {notifications.filter((n) => !n.read).length}
            </span>
          )}
        </Button>
        <Button
          variant={activeTab === "system" ? "default" : "outline"}
          className={
            activeTab === "system"
              ? "bg-purpleHeart text-white"
              : "border-seance/20 text-foreground"
          }
          onClick={() => setActiveTab("system")}
        >
          System Alerts
        </Button>
        <Button
          variant={activeTab === "update" ? "default" : "outline"}
          className={
            activeTab === "update"
              ? "bg-purpleHeart text-white"
              : "border-seance/20 text-foreground"
          }
          onClick={() => setActiveTab("update")}
        >
          Product Updates
        </Button>
        <Button
          variant={activeTab === "announcement" ? "default" : "outline"}
          className={
            activeTab === "announcement"
              ? "bg-purpleHeart text-white"
              : "border-seance/20 text-foreground"
          }
          onClick={() => setActiveTab("announcement")}
        >
          Announcements
        </Button>
      </div>

      <div className="bg-background border border-seance/20 rounded-lg">
        {filteredNotifications.length === 0 ? (
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
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <h3 className="text-lg font-medium text-foreground mb-1">
              No notifications found
            </h3>
            <p className="text-foreground/70 text-sm">
              There are no{" "}
              {activeTab !== "all" && activeTab !== "unread" ? activeTab : ""}{" "}
              notifications
              {activeTab === "unread" && " that are unread"} at this time.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-seance/10">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 md:p-6 flex gap-4 ${
                  !notification.read ? "bg-seance/5" : ""
                }`}
              >
                <div className="shrink-0 mt-1">
                  {getIcon(notification.type, notification.read)}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <h3
                      className={`text-base font-medium ${
                        notification.read
                          ? "text-foreground/80"
                          : "text-foreground"
                      }`}
                    >
                      {notification.title}
                    </h3>
                    <span className="text-sm text-foreground/60">
                      {formatDate(notification.date)}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      notification.read
                        ? "text-foreground/60"
                        : "text-foreground/80"
                    } mb-2`}
                  >
                    {notification.message}
                  </p>
                  {notification.product && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purpleHeart/10 text-purpleHeart">
                      {notification.product}
                    </span>
                  )}
                  <div className="flex mt-3 gap-3">
                    <button className="text-xs text-purpleHeart hover:text-purpleHeart/80">
                      {notification.read ? "Mark as unread" : "Mark as read"}
                    </button>
                    <span className="text-foreground/30">|</span>
                    <button className="text-xs text-foreground/70 hover:text-foreground/90">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-foreground/70">
          Showing {filteredNotifications.length} of {notifications.length}{" "}
          notifications
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-seance/20 text-foreground"
          >
            Mark all as read
          </Button>
          <Button className="bg-purpleHeart hover:bg-purpleHeart/90 text-white">
            Notification Settings
          </Button>
        </div>
      </div>
    </div>
  );
}

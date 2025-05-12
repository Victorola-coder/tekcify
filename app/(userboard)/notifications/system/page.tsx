"use client";

import { useState } from "react";
import { Button, Card } from "@/app/components/ui";

export default function SystemAlertsPage() {
  // Filter state
  const [filter, setFilter] = useState("all");

  // Alerts data with different types
  const alerts = [
    {
      id: "alert-1",
      title: "Scheduled Maintenance",
      message:
        "We will be performing scheduled maintenance on our servers on July 15, 2023, from 2:00 AM to 4:00 AM UTC. During this time, there may be brief service interruptions.",
      type: "maintenance",
      severity: "info",
      date: "Jul 10, 2023",
      isRead: false,
      affectedProducts: ["All Products"],
    },
    {
      id: "alert-2",
      title: "API Rate Limits Updated",
      message:
        "We've updated our API rate limits for all products. Please review the updated documentation to ensure your integration continues to work smoothly.",
      type: "update",
      severity: "warning",
      date: "Jul 05, 2023",
      isRead: true,
      affectedProducts: ["Binx AI", "PDFx"],
    },
    {
      id: "alert-3",
      title: "Security Alert: Password Reset Required",
      message:
        "For enhanced security, we require all users to reset their passwords within the next 7 days. This is a precautionary measure and not in response to any security breach.",
      type: "security",
      severity: "critical",
      date: "Jun 30, 2023",
      isRead: false,
      affectedProducts: ["All Products"],
    },
    {
      id: "alert-4",
      title: "PDFx Service Degradation Resolved",
      message:
        "The performance issues affecting PDFx document processing have been resolved. All services are now operating at normal capacity.",
      type: "incident",
      severity: "resolved",
      date: "Jun 25, 2023",
      isRead: true,
      affectedProducts: ["PDFx"],
    },
    {
      id: "alert-5",
      title: "New IP Address Range for Webhooks",
      message:
        "We're updating the IP address range used for webhook deliveries. Please update your firewall rules to ensure continued webhook delivery.",
      type: "update",
      severity: "info",
      date: "Jun 20, 2023",
      isRead: true,
      affectedProducts: ["Binx AI", "CAMPUX", "PDFx"],
    },
    {
      id: "alert-6",
      title: "Data Center Migration Complete",
      message:
        "We've successfully completed our data center migration to improve service reliability and performance. No action is required from your side.",
      type: "maintenance",
      severity: "info",
      date: "Jun 15, 2023",
      isRead: true,
      affectedProducts: ["All Products"],
    },
    {
      id: "alert-7",
      title: "Authentication System Maintenance",
      message:
        "Our authentication system will undergo maintenance on July 20, 2023. You may experience brief login issues during this time.",
      type: "maintenance",
      severity: "warning",
      date: "Jul 12, 2023",
      isRead: false,
      affectedProducts: ["All Products"],
    },
  ];

  // Filter alerts
  const filteredAlerts = alerts.filter((alert) => {
    if (filter === "all") return true;
    if (filter === "unread") return !alert.isRead;
    return alert.type === filter;
  });

  // Mark alert as read
  const markAsRead = (id: string) => {
    // In a real app, you'd make an API call to update the alert status
    console.log(`Marking alert ${id} as read`);
  };

  // Get severity badge style
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get alert icon
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "security":
        return (
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
            className="text-red-500"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "maintenance":
        return (
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
            className="text-blue-500"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case "update":
        return (
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
            className="text-purple-500"
          >
            <path d="M21 2v6h-6" />
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M3 22v-6h6" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
        );
      case "incident":
        return (
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
            className="text-orange-500"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
        );
      default:
        return (
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
            className="text-gray-500"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="16" y2="12" />
            <line x1="12" x2="12.01" y1="8" y2="8" />
          </svg>
        );
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          System Alerts
        </h1>
        <p className="text-foreground/70 mt-1">
          Important system notifications and maintenance updates
        </p>
      </div>

      <div className="flex overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-seance/20 scrollbar-track-transparent">
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "all"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("all")}
        >
          All Alerts
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "unread"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("unread")}
        >
          Unread
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "security"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("security")}
        >
          Security
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "maintenance"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("maintenance")}
        >
          Maintenance
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "update"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("update")}
        >
          Updates
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "incident"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("incident")}
        >
          Incidents
        </button>
      </div>

      <div className="space-y-4">
        {filteredAlerts.length === 0 ? (
          <Card className="border border-seance/20 p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seance/10 text-purpleHeart mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              No alerts found
            </h2>
            <p className="text-foreground/70">
              There are no alerts matching your current filter.
            </p>
          </Card>
        ) : (
          filteredAlerts.map((alert) => (
            <Card
              key={alert.id}
              className={`border ${
                alert.isRead ? "border-seance/20" : "border-purpleHeart"
              } p-6 ${alert.isRead ? "" : "bg-seance/5"}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{getAlertIcon(alert.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium text-foreground">
                      {alert.title}
                    </h3>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getSeverityBadge(
                        alert.severity
                      )}`}
                    >
                      {alert.severity.charAt(0).toUpperCase() +
                        alert.severity.slice(1)}
                    </span>
                    {!alert.isRead && (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purpleHeart/10 text-purpleHeart">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/70 mb-4">{alert.message}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60">
                    <span>Date: {alert.date}</span>
                    <span>Affected: {alert.affectedProducts.join(", ")}</span>
                    <span>
                      Type:{" "}
                      {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col gap-2">
                  {!alert.isRead && (
                    <Button
                      variant="outline"
                      className="border-seance/20 text-foreground text-sm px-2 py-1 h-auto"
                      onClick={() => markAsRead(alert.id)}
                    >
                      Mark as Read
                    </Button>
                  )}
                  {alert.type === "maintenance" && (
                    <Button
                      variant="outline"
                      className="border-seance/20 text-foreground text-sm px-2 py-1 h-auto"
                    >
                      Add to Calendar
                    </Button>
                  )}
                  {alert.severity === "critical" && (
                    <Button className="bg-purpleHeart hover:bg-purpleHeart/90 text-white text-sm px-2 py-1 h-auto">
                      Take Action
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Alert Status
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Unread Alerts</span>
              <span className="text-sm font-medium text-foreground bg-seance/10 px-2.5 py-0.5 rounded-full">
                {alerts.filter((a) => !a.isRead).length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Critical Alerts</span>
              <span className="text-sm font-medium text-foreground bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full">
                {alerts.filter((a) => a.severity === "critical").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">
                Upcoming Maintenance
              </span>
              <span className="text-sm font-medium text-foreground bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                {
                  alerts.filter(
                    (a) =>
                      a.type === "maintenance" && new Date(a.date) > new Date()
                  ).length
                }
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Active Incidents</span>
              <span className="text-sm font-medium text-foreground bg-orange-100 text-orange-800 px-2.5 py-0.5 rounded-full">
                {
                  alerts.filter(
                    (a) => a.type === "incident" && a.severity !== "resolved"
                  ).length
                }
              </span>
            </div>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            System Status
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-foreground">Binx AI</span>
                <span className="text-sm font-medium text-green-500">
                  Operational
                </span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-foreground">CAMPUX</span>
                <span className="text-sm font-medium text-green-500">
                  Operational
                </span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-foreground">PDFx</span>
                <span className="text-sm font-medium text-green-500">
                  Operational
                </span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-foreground">API Services</span>
                <span className="text-sm font-medium text-yellow-500">
                  Degraded
                </span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-seance/20">
            <a
              href="/status"
              className="text-sm text-purpleHeart hover:text-purpleHeart/80"
            >
              View detailed system status →
            </a>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Notification Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-foreground">
                <p className="font-medium">Email Notifications</p>
                <p className="text-foreground/70 text-xs">
                  Receive system alerts via email
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={() => {}}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-foreground">
                <p className="font-medium">Push Notifications</p>
                <p className="text-foreground/70 text-xs">
                  Receive system alerts in your browser
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={() => {}}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-foreground">
                <p className="font-medium">Security Alerts Only</p>
                <p className="text-foreground/70 text-xs">
                  Only receive critical security alerts
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => {}}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-seance/20">
            <Button
              variant="outline"
              className="w-full border-seance/20 text-foreground"
              onClick={() => (window.location.href = "/account/notifications")}
            >
              Manage All Notification Settings
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

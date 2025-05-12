"use client";

import { Card, Button } from "@/app/components/ui";
import { useState } from "react";

export default function ApiServicesPage() {
  // Sample service status data
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Binx AI API",
      status: "Operational",
      uptime: "99.98%",
      lastIncident: "None",
      endpoints: [
        "Text Completion",
        "Model Training",
        "Model Deployment",
        "Embeddings",
      ],
    },
    {
      id: 2,
      name: "CAMPUX API",
      status: "Operational",
      uptime: "99.95%",
      lastIncident: "1 day ago",
      endpoints: ["Users", "Courses", "Enrollment", "Analytics"],
    },
    {
      id: 3,
      name: "PDFx API",
      status: "Partial Outage",
      uptime: "98.76%",
      lastIncident: "12 hours ago",
      endpoints: ["Document Processing", "OCR", "Data Extraction", "Sharing"],
    },
    {
      id: 4,
      name: "Authentication API",
      status: "Operational",
      uptime: "99.99%",
      lastIncident: "7 days ago",
      endpoints: ["Login", "Registration", "Token Refresh", "MFA"],
    },
    {
      id: 5,
      name: "Storage API",
      status: "Operational",
      uptime: "99.89%",
      lastIncident: "3 days ago",
      endpoints: ["File Upload", "File Download", "File Management"],
    },
  ]);

  // Sample incident data
  const incidents = [
    {
      id: 1,
      service: "PDFx API",
      title: "Document Processing Delays",
      status: "Investigating",
      time: "12 hours ago",
      description:
        "We're investigating reports of delays in document processing. This may affect OCR and data extraction results.",
    },
    {
      id: 2,
      service: "CAMPUX API",
      title: "Intermittent Course Creation Failures",
      status: "Resolved",
      time: "1 day ago",
      description:
        "Some users experienced issues when creating new courses. The problem has been identified and fixed.",
    },
    {
      id: 3,
      service: "Authentication API",
      title: "Login Slowdowns",
      status: "Resolved",
      time: "7 days ago",
      description:
        "Login requests experienced increased latency due to database performance issues. The issue has been resolved.",
    },
  ];

  // Sample API usage data for the chart
  const apiUsageData = [
    { date: "Mon", requests: 1243 },
    { date: "Tue", requests: 1567 },
    { date: "Wed", requests: 1343 },
    { date: "Thu", requests: 1783 },
    { date: "Fri", requests: 2043 },
    { date: "Sat", requests: 1543 },
    { date: "Sun", requests: 1283 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            API Services
          </h1>
          <p className="text-foreground/70 mt-1">
            Monitor the health and status of Tekcify API services
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-seance/20 text-foreground"
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
              <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
              <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
              <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
              <line x1="2" x2="22" y1="2" y2="22" />
            </svg>
            Subscribe to Updates
          </Button>
          <Button className="bg-purpleHeart hover:bg-purpleHeart/90 text-white">
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
              <path d="M4 4v16" />
              <path d="M20 4v16" />
              <path d="M4 12h16" />
              <path d="M11 4h2" />
              <path d="M11 20h2" />
              <path d="M11 8h2" />
              <path d="M11 16h2" />
            </svg>
            View API Docs
          </Button>
        </div>
      </div>

      {/* System Status Overview */}
      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          System Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-seance/5 p-4 rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">
                Total Services
              </p>
              <span className="text-xl font-semibold text-foreground">
                {services.length}
              </span>
            </div>
          </div>
          <div className="bg-green-100 dark:bg-green-950/30 p-4 rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-green-800 dark:text-green-400">
                Operational
              </p>
              <span className="text-xl font-semibold text-green-800 dark:text-green-400">
                {services.filter((s) => s.status === "Operational").length}
              </span>
            </div>
          </div>
          <div
            className={`${
              services.some((s) => s.status !== "Operational")
                ? "bg-orange-100 dark:bg-orange-950/30"
                : "bg-green-100 dark:bg-green-950/30"
            } p-4 rounded-md`}
          >
            <div className="flex items-center justify-between">
              <p
                className={`text-sm font-medium ${
                  services.some((s) => s.status !== "Operational")
                    ? "text-orange-800 dark:text-orange-400"
                    : "text-green-800 dark:text-green-400"
                }`}
              >
                System Status
              </p>
              <span
                className={`text-sm font-semibold ${
                  services.some((s) => s.status !== "Operational")
                    ? "text-orange-800 dark:text-orange-400"
                    : "text-green-800 dark:text-green-400"
                }`}
              >
                {services.some(
                  (s) =>
                    s.status === "Partial Outage" || s.status === "Major Outage"
                )
                  ? "Partial System Outage"
                  : "All Systems Operational"}
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Uptime
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Last Incident
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Endpoints
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-foreground">
                      {service.name}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        service.status === "Operational"
                          ? "bg-green-100 text-green-800"
                          : service.status === "Partial Outage"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {service.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {service.uptime}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {service.lastIncident}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {service.endpoints.map((endpoint, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-md bg-seance/10 text-seance"
                        >
                          {endpoint}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Current Incidents */}
      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Current Incidents
        </h2>
        {incidents.filter((i) => i.status === "Investigating").length > 0 ? (
          <div className="space-y-4">
            {incidents
              .filter((i) => i.status === "Investigating")
              .map((incident) => (
                <div
                  key={incident.id}
                  className="border border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900/50 p-4 rounded-md"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-orange-800 dark:text-orange-400">
                        {incident.title}
                      </h3>
                      <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                        {incident.service} - {incident.time}
                      </p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-200 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">
                      {incident.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-orange-700 dark:text-orange-300">
                    {incident.description}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          <div className="border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900/50 p-4 rounded-md text-center">
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
              className="mx-auto text-green-500 mb-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-green-800 dark:text-green-400 font-medium">
              No active incidents
            </p>
          </div>
        )}

        {/* Recent Incidents */}
        {incidents.filter((i) => i.status === "Resolved").length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Recently Resolved
            </h3>
            <div className="space-y-4">
              {incidents
                .filter((i) => i.status === "Resolved")
                .map((incident) => (
                  <div
                    key={incident.id}
                    className="border border-seance/20 p-4 rounded-md"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-foreground">
                          {incident.title}
                        </h3>
                        <p className="text-sm text-foreground/70 mt-1">
                          {incident.service} - {incident.time}
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        {incident.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-foreground/70">
                      {incident.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* API Usage Chart */}
        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            API Request Volume
          </h2>
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end justify-between px-2">
              {apiUsageData.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-12 bg-purpleHeart rounded-t-sm"
                    style={{
                      height: `${(data.requests / 2100) * 100}%`,
                    }}
                  ></div>
                  <div className="text-xs text-foreground/70 mt-2">
                    {data.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div>
              <p className="text-foreground/70 text-sm">Weekly Requests</p>
              <p className="text-lg font-medium text-foreground">10.8k</p>
            </div>
            <div>
              <p className="text-foreground/70 text-sm">Avg. Daily</p>
              <p className="text-lg font-medium text-foreground">1.5k</p>
            </div>
            <div>
              <p className="text-foreground/70 text-sm">Peak Hour</p>
              <p className="text-lg font-medium text-foreground">2-3 PM</p>
            </div>
          </div>
        </Card>

        {/* API Response Times */}
        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            API Response Times
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1 items-center">
                <span className="text-sm font-medium text-foreground">
                  Binx AI API
                </span>
                <span className="text-sm text-foreground/70">245ms</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "24.5%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 items-center">
                <span className="text-sm font-medium text-foreground">
                  CAMPUX API
                </span>
                <span className="text-sm text-foreground/70">187ms</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "18.7%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 items-center">
                <span className="text-sm font-medium text-foreground">
                  PDFx API
                </span>
                <span className="text-sm text-foreground/70">780ms</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 items-center">
                <span className="text-sm font-medium text-foreground">
                  Authentication API
                </span>
                <span className="text-sm text-foreground/70">134ms</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "13.4%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 items-center">
                <span className="text-sm font-medium text-foreground">
                  Storage API
                </span>
                <span className="text-sm text-foreground/70">312ms</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "31.2%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-seance/20 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/70">
                Average Response Time
              </span>
              <span className="text-base font-medium text-foreground">
                331.6ms
              </span>
            </div>
          </div>
        </Card>
      </div>

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
              <path d="M4 4v16" />
              <path d="M20 4v16" />
              <path d="M4 12h16" />
              <path d="M11 4h2" />
              <path d="M11 20h2" />
              <path d="M11 8h2" />
              <path d="M11 16h2" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              API Status Updates
            </h3>
            <p className="text-sm text-foreground/70">
              Get notified about API service status changes and incidents.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <input
                  id="email-notifications"
                  type="checkbox"
                  className="h-4 w-4 text-purpleHeart rounded focus:ring-purpleHeart"
                />
                <label
                  htmlFor="email-notifications"
                  className="ml-2 text-sm text-foreground"
                >
                  Email Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="slack-notifications"
                  type="checkbox"
                  className="h-4 w-4 text-purpleHeart rounded focus:ring-purpleHeart"
                />
                <label
                  htmlFor="slack-notifications"
                  className="ml-2 text-sm text-foreground"
                >
                  Slack Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="webhook-notifications"
                  type="checkbox"
                  className="h-4 w-4 text-purpleHeart rounded focus:ring-purpleHeart"
                />
                <label
                  htmlFor="webhook-notifications"
                  className="ml-2 text-sm text-foreground"
                >
                  Webhook Notifications
                </label>
              </div>
            </div>
            <div className="mt-4">
              <Button className="bg-purpleHeart hover:bg-purpleHeart/90 text-white">
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

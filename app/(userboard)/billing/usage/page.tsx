"use client";

import { useState } from "react";
import { Button, Card } from "@/app/components/ui";

export default function UsageSummaryPage() {
  // Date range state
  const [dateRange, setDateRange] = useState("30days");

  // Billing cycle
  const billingCycle = {
    start: "June 1, 2023",
    end: "June 30, 2023",
  };

  // Product usage data
  const productUsage = [
    {
      id: "binx-ai",
      name: "Binx AI",
      usage: 78,
      limit: 100,
      unit: "API hours",
      metrics: [
        { name: "API Calls", value: "15,420", change: "+12.3%", trend: "up" },
        {
          name: "Processing Time",
          value: "78 hrs",
          change: "-5.2%",
          trend: "down",
        },
        { name: "Models Used", value: "4", change: "+1", trend: "up" },
      ],
    },
    {
      id: "campux",
      name: "CAMPUX",
      usage: 42,
      limit: 100,
      unit: "GB Storage",
      metrics: [
        { name: "Active Students", value: "156", change: "+23", trend: "up" },
        { name: "Storage Used", value: "42 GB", change: "+8.7%", trend: "up" },
        { name: "Courses", value: "12", change: "+2", trend: "up" },
      ],
    },
    {
      id: "pdfx",
      name: "PDFx",
      usage: 65,
      limit: 100,
      unit: "GB Processed",
      metrics: [
        {
          name: "Documents Processed",
          value: "342",
          change: "+15.3%",
          trend: "up",
        },
        { name: "Storage Used", value: "65 GB", change: "+5.1%", trend: "up" },
        { name: "OCR Pages", value: "1,245", change: "+10.2%", trend: "up" },
      ],
    },
  ];

  // Sample usage history data (for chart)
  const usageHistory = [
    { date: "May 1", binx: 45, campux: 30, pdfx: 50 },
    { date: "May 8", binx: 50, campux: 32, pdfx: 53 },
    { date: "May 15", binx: 60, campux: 35, pdfx: 55 },
    { date: "May 22", binx: 65, campux: 38, pdfx: 58 },
    { date: "May 29", binx: 70, campux: 40, pdfx: 60 },
    { date: "Jun 5", binx: 73, campux: 41, pdfx: 62 },
    { date: "Jun 12", binx: 75, campux: 42, pdfx: 63 },
    { date: "Jun 19", binx: 78, campux: 42, pdfx: 65 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Usage Summary
          </h1>
          <p className="text-foreground/70 mt-1">
            Monitor your product usage and billing data
          </p>
        </div>
        <div className="flex gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
          >
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="6months">Last 6 Months</option>
            <option value="12months">Last 12 Months</option>
          </select>
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Export Data
          </Button>
        </div>
      </div>

      <Card className="border border-seance/20 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">
            Current Billing Cycle
          </h2>
          <div className="text-sm text-foreground/70">
            {billingCycle.start} - {billingCycle.end}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productUsage.map((product) => (
            <div key={product.id} className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-foreground">{product.name}</h3>
                <span className="text-sm text-foreground/70">
                  {product.usage}% of {product.limit} {product.unit}
                </span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    product.usage > 90
                      ? "bg-red-500"
                      : product.usage > 75
                      ? "bg-orange-500"
                      : "bg-purpleHeart"
                  }`}
                  style={{ width: `${product.usage}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                {product.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xs text-foreground/70">{metric.name}</p>
                    <p className="text-base font-medium text-foreground">
                      {metric.value}
                    </p>
                    <p
                      className={`text-xs ${
                        metric.trend === "up"
                          ? metric.name === "Processing Time"
                            ? "text-red-500"
                            : "text-green-500"
                          : metric.name === "Processing Time"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {metric.change}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="border border-seance/20 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Usage Trends
            </h2>
            <div className="h-80 relative">
              {/* This is a placeholder for a chart - in a real app, you'd use a charting library */}
              <div className="absolute inset-0 bg-seance/5 rounded-lg flex items-center justify-center">
                <div className="space-y-6 w-full px-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purpleHeart mr-2"></div>
                      <span className="text-sm text-foreground">Binx AI</span>
                    </div>
                    <div className="w-full bg-seance/10 rounded-full h-2">
                      <div
                        className="bg-purpleHeart h-2 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-seance mr-2"></div>
                      <span className="text-sm text-foreground">CAMPUX</span>
                    </div>
                    <div className="w-full bg-seance/10 rounded-full h-2">
                      <div
                        className="bg-seance h-2 rounded-full"
                        style={{ width: "42%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm text-foreground">PDFx</span>
                    </div>
                    <div className="w-full bg-seance/10 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-seance/20">
              <div className="text-sm text-foreground/70">
                {usageHistory[0].date} -{" "}
                {usageHistory[usageHistory.length - 1].date}
              </div>
              <div className="flex gap-2">
                <button className="text-sm text-foreground/70 hover:text-foreground font-medium">
                  Daily
                </button>
                <button className="text-sm text-foreground font-medium">
                  Weekly
                </button>
                <button className="text-sm text-foreground/70 hover:text-foreground font-medium">
                  Monthly
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="border border-seance/20 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Current Plan
            </h2>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-lg font-semibold text-foreground">
                  Pro Plan
                </p>
                <p className="text-sm text-foreground/70">$29 / month</p>
              </div>
              <Button
                variant="outline"
                className="border-seance/20 text-foreground text-sm"
                onClick={() => (window.location.href = "/billing/plans")}
              >
                Change
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-foreground/70">
                    Next billing date
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    July 1, 2023
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-foreground/70">
                    Current bill estimate
                  </p>
                  <p className="text-sm font-medium text-foreground">$29.00</p>
                </div>
                <div className="text-xs text-foreground/70">
                  No additional usage charges for current period
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-seance/20">
              <Button
                className="w-full bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                onClick={() => (window.location.href = "/billing/invoices")}
              >
                View Billing History
              </Button>
            </div>
          </Card>

          <Card className="border border-seance/20 p-6 mt-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Usage Tips
            </h2>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
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
                  className="text-purpleHeart mt-0.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                <span>
                  You're approaching your storage limit on PDFx. Consider
                  deleting unused documents.
                </span>
              </li>
              <li className="flex items-start gap-2">
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
                  className="text-purpleHeart mt-0.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                <span>
                  Set up usage alerts to get notified when you're approaching
                  your limits.
                </span>
              </li>
              <li className="flex items-start gap-2">
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
                  className="text-purpleHeart mt-0.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                <span>
                  Consider upgrading to the Enterprise plan for unlimited API
                  usage.
                </span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-seance/20">
              <Button
                variant="outline"
                className="w-full border-seance/20 text-foreground"
                onClick={() => (window.location.href = "/support/help")}
              >
                View Usage Best Practices
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          API Usage Details
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Endpoint
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Requests
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Average Time
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purpleHeart mr-2"></div>
                    <span className="text-sm font-medium text-foreground">
                      Binx AI
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  /api/completions
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  8,240
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  245ms
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Healthy
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purpleHeart mr-2"></div>
                    <span className="text-sm font-medium text-foreground">
                      Binx AI
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  /api/embeddings
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  4,320
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  120ms
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Healthy
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-seance mr-2"></div>
                    <span className="text-sm font-medium text-foreground">
                      CAMPUX
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  /api/courses
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  1,560
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  187ms
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Healthy
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm font-medium text-foreground">
                      PDFx
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  /api/document-process
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  3,120
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                  780ms
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Degraded
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-right">
          <a
            href="/api/services"
            className="text-purpleHeart hover:text-purpleHeart/80"
          >
            View API Services Status →
          </a>
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Need to add team members?
            </h3>
            <p className="text-sm text-foreground/70">
              Upgrade to a team plan to add additional users and manage
              permissions across your organization.
            </p>
            <Button
              className="mt-4 bg-purpleHeart hover:bg-purpleHeart/90 text-white"
              onClick={() => (window.location.href = "/billing/plans")}
            >
              Explore Team Plans
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

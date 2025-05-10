"use client";

import { Card, Button } from "@/app/components/ui";
import Link from "next/link";

export default function UsageSummaryPage() {
  // Product usage data
  const products = [
    {
      name: "Binx AI",
      metrics: [
        {
          name: "API Tokens",
          used: 780000,
          limit: 1000000,
          percentage: 78,
          resetDate: "July 22, 2023",
        },
        {
          name: "Storage",
          used: 2.8,
          limit: 5,
          unit: "GB",
          percentage: 56,
          resetDate: "July 22, 2023",
        },
      ],
    },
    {
      name: "CAMPUX",
      metrics: [
        {
          name: "Active Users",
          used: 45,
          limit: 50,
          percentage: 90,
          resetDate: "N/A",
        },
        {
          name: "Storage",
          used: 18.5,
          limit: 25,
          unit: "GB",
          percentage: 74,
          resetDate: "N/A",
        },
      ],
    },
    {
      name: "PDFx",
      metrics: [
        {
          name: "Documents",
          used: 342,
          limit: 500,
          percentage: 68,
          resetDate: "N/A",
        },
        {
          name: "Storage",
          used: 4.2,
          limit: 10,
          unit: "GB",
          percentage: 42,
          resetDate: "N/A",
        },
        {
          name: "OCR Processing",
          used: 156,
          limit: 200,
          unit: "pages",
          percentage: 78,
          resetDate: "July 22, 2023",
        },
      ],
    },
  ];

  // Usage history data for chart
  const usageHistory = [
    { month: "Jan", binx: 45, campux: 62, pdfx: 38 },
    { month: "Feb", binx: 52, campux: 58, pdfx: 42 },
    { month: "Mar", binx: 48, campux: 65, pdfx: 50 },
    { month: "Apr", binx: 61, campux: 68, pdfx: 55 },
    { month: "May", binx: 65, campux: 72, pdfx: 60 },
    { month: "Jun", binx: 78, campux: 90, pdfx: 68 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Usage Summary
          </h1>
          <p className="text-foreground/70 mt-1">
            Monitor your resource usage across all products
          </p>
        </div>
        <div className="flex gap-3">
          <select className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent">
            <option>Current Billing Cycle</option>
            <option>Last Billing Cycle</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
          </select>
          <Button
            variant="outline"
            className="border-seance/20 text-foreground hidden sm:flex"
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

      {/* Usage Overview Chart */}
      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Usage Overview
        </h2>

        {/* Placeholder for chart */}
        <div className="bg-seance/5 rounded-lg h-72 flex items-center justify-center">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-seance/40 mb-2"
            >
              <line x1="12" x2="12" y1="20" y2="10" />
              <line x1="18" x2="18" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="16" />
            </svg>
            <p className="text-foreground/70 text-sm">
              Monthly usage across all products
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {usageHistory.length > 0 && (
            <>
              <div>
                <p className="text-foreground/70 text-sm">Binx AI</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-purpleHeart"></div>
                  <p className="text-lg font-medium text-foreground">
                    {usageHistory[usageHistory.length - 1].binx}%
                  </p>
                </div>
              </div>
              <div>
                <p className="text-foreground/70 text-sm">CAMPUX</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-seance"></div>
                  <p className="text-lg font-medium text-foreground">
                    {usageHistory[usageHistory.length - 1].campux}%
                  </p>
                </div>
              </div>
              <div>
                <p className="text-foreground/70 text-sm">PDFx</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="text-lg font-medium text-foreground">
                    {usageHistory[usageHistory.length - 1].pdfx}%
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>

      {/* Product Usage */}
      <div className="space-y-6">
        {products.map((product, productIndex) => (
          <Card key={productIndex} className="border border-seance/20 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                {product.name}
              </h2>
              <Link
                href={`/billing/usage/${product.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="text-sm text-purpleHeart hover:text-purpleHeart/80 flex items-center gap-1"
              >
                View Details
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
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.metrics.map((metric, metricIndex) => (
                <div key={metricIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">
                      {metric.name}
                    </span>
                    <span className="text-sm text-foreground/70">
                      {metric.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-seance/10 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        metric.percentage > 85
                          ? "bg-red-500"
                          : metric.percentage > 70
                          ? "bg-yellow-500"
                          : "bg-purpleHeart"
                      }`}
                      style={{ width: `${metric.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-foreground/70">
                    <span>
                      {metric.used.toLocaleString()}{" "}
                      {metric.unit ? metric.unit : ""} /{" "}
                      {metric.limit.toLocaleString()}{" "}
                      {metric.unit ? metric.unit : ""}
                    </span>
                    {metric.resetDate !== "N/A" && (
                      <span>Resets on {metric.resetDate}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-seance/20 pt-4">
              <div className="flex flex-wrap justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    Current Plan
                  </p>
                  <p className="text-sm text-foreground/70">
                    {product.name === "Binx AI"
                      ? "Pro Plan - $29.99/month"
                      : product.name === "CAMPUX"
                      ? "Business Plan - $99.99/month"
                      : "Basic Plan - $9.99/month"}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground mt-2 sm:mt-0"
                >
                  Upgrade Plan
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Historical Data */}
      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Historical Usage
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Month
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Binx AI
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  CAMPUX
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  PDFx
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Total Usage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              {usageHistory.map((month, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                    {month.month} 2023
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purpleHeart mr-2"></div>
                      {month.binx}%
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-seance mr-2"></div>
                      {month.campux}%
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      {month.pdfx}%
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {((month.binx + month.campux + month.pdfx) / 3).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Resource Usage Optimization Tips */}
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
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Optimize Your Usage
            </h3>
            <p className="text-sm text-foreground/70 mb-4">
              Here are some tips to help you optimize your resource usage and
              avoid additional charges:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
              <li>
                Use Binx AI's compression feature to reduce token consumption
              </li>
              <li>
                Archive older CAMPUX courses that are no longer active to free
                up storage
              </li>
              <li>
                Configure PDFx to use lower resolution for documents that don't
                require high quality
              </li>
              <li>
                Set up usage alerts to be notified when approaching limits
              </li>
            </ul>
            <div className="mt-4">
              <Button className="bg-purpleHeart hover:bg-purpleHeart/90 text-white">
                Set Usage Alerts
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

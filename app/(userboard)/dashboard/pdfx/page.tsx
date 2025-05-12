"use client";

import { Card, Button } from "@/app/components/ui";
import Link from "next/link";

export default function PDFxDashboardPage() {
  // Sample document metrics data
  const documentMetrics = [
    { name: "Total Documents", value: "342", change: "+15.3%", trend: "up" },
    { name: "Storage Used", value: "4.2 GB", change: "+8.1%", trend: "up" },
    { name: "Processing Time", value: "1.2s", change: "-10.5%", trend: "down" },
    { name: "OCR Success Rate", value: "98.5%", change: "+1.2%", trend: "up" },
  ];

  // Sample recent documents data
  const recentDocuments = [
    {
      name: "Q2 Financial Report.pdf",
      size: "2.3 MB",
      uploadedBy: "Victor Olaiya",
      uploadedAt: "Today, 10:30 AM",
      status: "Processed",
    },
    {
      name: "Product Specifications.pdf",
      size: "4.7 MB",
      uploadedBy: "Victor Olaiya",
      uploadedAt: "Yesterday, 3:45 PM",
      status: "Processed",
    },
    {
      name: "Client Contract Draft.pdf",
      size: "1.8 MB",
      uploadedBy: "Victor Olaiya",
      uploadedAt: "June 10, 2023",
      status: "Processing",
    },
    {
      name: "Meeting Notes.pdf",
      size: "0.5 MB",
      uploadedBy: "Victor Olaiya",
      uploadedAt: "June 8, 2023",
      status: "Processed",
    },
  ];

  // Sample document categories
  const documentCategories = [
    { name: "Reports", count: 56, color: "bg-purpleHeart" },
    { name: "Contracts", count: 32, color: "bg-seance" },
    { name: "Invoices", count: 84, color: "bg-blue-500" },
    { name: "Presentations", count: 18, color: "bg-green-500" },
    { name: "Other", count: 23, color: "bg-gray-500" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            PDFx Dashboard
          </h1>
          <p className="text-foreground/70 mt-1">
            Manage and process your PDF documents
          </p>
        </div>
        <div className="flex gap-3">
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
            Export Documents
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
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Upload New PDF
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {documentMetrics.map((metric, index) => (
          <Card
            key={index}
            className="p-6 border border-seance/20 hover:border-seance/30 transition-colors"
          >
            <h3 className="text-sm font-medium text-foreground/70">
              {metric.name}
            </h3>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-semibold text-foreground">
                {metric.value}
              </p>
              <div
                className={`flex items-center text-sm font-medium ${
                  metric.trend === "up"
                    ? "text-green-500"
                    : metric.trend === "down" &&
                      metric.name === "Processing Time"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {metric.trend === "up" ? (
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
                    className="mr-1"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                ) : (
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
                    className="mr-1"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
                {metric.change}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border border-seance/20 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Recent Documents
              </h2>
              <div className="flex items-center gap-2">
                <select className="text-sm border border-seance/20 rounded-md bg-background text-foreground p-1">
                  <option>All Documents</option>
                  <option>Reports</option>
                  <option>Contracts</option>
                  <option>Invoices</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-seance/20">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Document
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Uploaded By
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Uploaded At
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-seance/20">
                  {recentDocuments.map((doc, index) => (
                    <tr key={index}>
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
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span className="text-sm font-medium text-foreground">
                            {doc.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                        {doc.size}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                        {doc.uploadedBy}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                        {doc.uploadedAt}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            doc.status === "Processed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {doc.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-purpleHeart hover:text-purpleHeart/80 mr-3">
                          View
                        </button>
                        <button className="text-foreground/70 hover:text-foreground mr-3">
                          Download
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-foreground/70">
                Showing 4 of 213 documents
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
                  2
                </Button>
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground p-2 h-8 w-8"
                >
                  3
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
          </Card>

          <div className="mt-6">
            <Card className="border border-seance/20 p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Document Processing Activity
              </h2>

              {/* Placeholder for chart */}
              <div className="bg-seance/5 rounded-lg h-64 flex items-center justify-center">
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
                    Daily document processing activity
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-foreground/70 text-sm">Uploads</p>
                  <p className="text-lg font-medium text-foreground">127</p>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm">Processing</p>
                  <p className="text-lg font-medium text-foreground">98</p>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm">Downloads</p>
                  <p className="text-lg font-medium text-foreground">245</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border border-seance/20 p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Document Categories
            </h2>
            <div className="space-y-4">
              {documentCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="ml-2 text-sm text-foreground">
                      {category.name}
                    </span>
                  </div>
                  <span className="text-sm text-foreground/70">
                    {category.count} files
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-seance/20">
              <div className="bg-seance/5 rounded-lg h-40 flex items-center justify-center">
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
                  <p className="text-foreground/70 text-xs">
                    Document distribution by category
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border border-seance/20 p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Storage Usage
            </h2>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">
                  Used Space
                </span>
                <span className="text-sm text-foreground/70">42%</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "42%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-foreground/70">
                <span>4.2 GB / 10 GB</span>
                <span>Basic Plan</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-seance/20">
              <h3 className="text-sm font-medium text-foreground mb-3">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground"
                >
                  Free Up Space
                </Button>
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground"
                >
                  Upgrade Plan
                </Button>
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Need Help?
                </h3>
                <p className="text-sm text-foreground/70">
                  Check out our documentation to learn more about PDFx features
                  and how to optimize your document processing.
                </p>
                <Button className="mt-4 bg-purpleHeart hover:bg-purpleHeart/90 text-white">
                  View Documentation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Card, Button } from "@/app/components/ui";
import { useState } from "react";

export default function ProductActionsLogPage() {
  // Sample product actions data
  const [productActions, setProductActions] = useState([
    {
      id: 1,
      action: "Document Processed",
      product: "PDFx",
      resource: "Q2 Financial Report.pdf",
      user: "Victor Olaiya",
      timestamp: "Today, 10:30 AM",
    },
    {
      id: 2,
      action: "API Key Created",
      product: "Binx AI",
      resource: "Development API Key",
      user: "Victor Olaiya",
      timestamp: "Yesterday, 3:45 PM",
    },
    {
      id: 3,
      action: "Student Added",
      product: "CAMPUX",
      resource: "John Doe",
      user: "Victor Olaiya",
      timestamp: "June 10, 2023, 12:15 PM",
    },
    {
      id: 4,
      action: "Course Created",
      product: "CAMPUX",
      resource: "Introduction to Computer Science",
      user: "Victor Olaiya",
      timestamp: "June 9, 2023, 9:00 AM",
    },
    {
      id: 5,
      action: "Document Deleted",
      product: "PDFx",
      resource: "Old Contract.pdf",
      user: "Victor Olaiya",
      timestamp: "June 8, 2023, 6:20 PM",
    },
    {
      id: 6,
      action: "API Request",
      product: "Binx AI",
      resource: "Text Completion",
      user: "System",
      timestamp: "June 7, 2023, 11:10 AM",
    },
    {
      id: 7,
      action: "User Invited",
      product: "CAMPUX",
      resource: "Jane Smith",
      user: "Victor Olaiya",
      timestamp: "June 6, 2023, 2:30 PM",
    },
    {
      id: 8,
      action: "Document Shared",
      product: "PDFx",
      resource: "Client Contract Draft.pdf",
      user: "Victor Olaiya",
      timestamp: "June 5, 2023, 10:15 AM",
    },
    {
      id: 9,
      action: "Model Fine-tuned",
      product: "Binx AI",
      resource: "Custom AI Model v2",
      user: "System",
      timestamp: "June 4, 2023, 8:45 PM",
    },
  ]);

  // Product filter options
  const productOptions = [
    { value: "all", label: "All Products" },
    { value: "binx", label: "Binx AI" },
    { value: "campux", label: "CAMPUX" },
    { value: "pdfx", label: "PDFx" },
  ];

  // Action type options
  const actionOptions = [
    { value: "all", label: "All Actions" },
    { value: "create", label: "Create" },
    { value: "update", label: "Update" },
    { value: "delete", label: "Delete" },
    { value: "process", label: "Process" },
    { value: "share", label: "Share" },
  ];

  // State for filters
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [selectedAction, setSelectedAction] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("all"); // 'all', 'today', 'week', 'month'

  // Apply filters
  const filteredActions = productActions.filter((item) => {
    // Filter by product
    if (
      selectedProduct !== "all" &&
      !item.product.toLowerCase().includes(selectedProduct.toLowerCase())
    ) {
      return false;
    }

    // Filter by action
    if (selectedAction !== "all") {
      const actionLower = item.action.toLowerCase();
      const selectedActionLower = selectedAction.toLowerCase();

      if (!actionLower.includes(selectedActionLower)) {
        return false;
      }
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        item.action.toLowerCase().includes(query) ||
        item.resource.toLowerCase().includes(query) ||
        item.user.toLowerCase().includes(query) ||
        item.product.toLowerCase().includes(query)
      );
    }

    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Product Actions Log
          </h1>
          <p className="text-foreground/70 mt-1">
            Monitor all activity across your Tekcify products
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
          Export Activity Log
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
                placeholder="Search actions, resources..."
                className="w-full pl-10 pr-4 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart focus:border-purpleHeart"
              />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart min-w-[150px]"
            >
              {productOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              value={selectedAction}
              onChange={(e) => setSelectedAction(e.target.value)}
              className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart min-w-[150px]"
            >
              {actionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart min-w-[150px]"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Resource
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              {filteredActions.map((action) => (
                <tr key={action.id}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="p-1.5 rounded-full bg-purpleHeart/10 mr-2">
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
                          className="text-purpleHeart"
                        >
                          {action.action.includes("Create") ? (
                            <>
                              <path d="M12 5v14" />
                              <path d="M5 12h14" />
                            </>
                          ) : action.action.includes("Delete") ? (
                            <>
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            </>
                          ) : action.action.includes("Process") ? (
                            <>
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </>
                          ) : action.action.includes("Share") ? (
                            <>
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                              <polyline points="16 6 12 2 8 6" />
                              <line x1="12" x2="12" y1="2" y2="15" />
                            </>
                          ) : (
                            <>
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 16v-4" />
                              <path d="M12 8h.01" />
                            </>
                          )}
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {action.action}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-md ${
                        action.product === "Binx AI"
                          ? "bg-purpleHeart/10 text-purpleHeart"
                          : action.product === "CAMPUX"
                          ? "bg-seance/10 text-seance"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {action.product}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    <div className="max-w-xs truncate">{action.resource}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {action.user}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {action.timestamp}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <button className="text-purpleHeart hover:text-purpleHeart/80">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredActions.length === 0 && (
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
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            <p className="text-foreground/70">No activity logs found.</p>
          </div>
        )}

        {filteredActions.length > 0 && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-foreground/70">
              Showing {filteredActions.length} of {productActions.length}{" "}
              activity logs
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Activity by Product
          </h2>
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
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
                <path d="M9 3v18" />
                <path d="M15 3v18" />
              </svg>
              <p className="text-foreground/70 text-sm">
                Activity distribution by product
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-3 h-3 rounded-full bg-purpleHeart mx-auto mb-1"></div>
              <p className="text-xs text-foreground/70">Binx AI</p>
              <p className="text-sm font-medium text-foreground">33%</p>
            </div>
            <div>
              <div className="w-3 h-3 rounded-full bg-seance mx-auto mb-1"></div>
              <p className="text-xs text-foreground/70">CAMPUX</p>
              <p className="text-sm font-medium text-foreground">33%</p>
            </div>
            <div>
              <div className="w-3 h-3 rounded-full bg-blue-500 mx-auto mb-1"></div>
              <p className="text-xs text-foreground/70">PDFx</p>
              <p className="text-sm font-medium text-foreground">33%</p>
            </div>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Activity Over Time
          </h2>
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
                Activity trend over the last 30 days
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/70">Today</span>
              <div className="w-64 bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-foreground">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/70">Yesterday</span>
              <div className="w-64 bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "8%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-foreground">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/70">This week</span>
              <div className="w-64 bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-foreground">6</span>
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Activity Monitoring
            </h3>
            <p className="text-sm text-foreground/70">
              Activity logs help you track and audit changes across your Tekcify
              products. You can use this data to:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground/70 mt-2 space-y-1">
              <li>Monitor for suspicious activity</li>
              <li>Audit user actions</li>
              <li>Track usage patterns</li>
              <li>Troubleshoot issues</li>
            </ul>
            <p className="text-sm text-foreground/70 mt-2">
              Activity logs are retained for 30 days. Export logs if you need to
              keep them for longer.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

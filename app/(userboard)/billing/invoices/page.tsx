"use client";

import { useState } from "react";
import { Button, Card } from "@/app/components/ui";

export default function InvoicesPage() {
  // Invoice filter state
  const [filter, setFilter] = useState("all");
  const [year, setYear] = useState("2023");

  // Payment methods
  const paymentMethods = [
    {
      id: "visa-1234",
      type: "visa",
      name: "Visa ending in 1234",
      expiry: "09/25",
      default: true,
    },
    {
      id: "mastercard-5678",
      type: "mastercard",
      name: "Mastercard ending in 5678",
      expiry: "12/24",
      default: false,
    },
  ];

  // Invoice data
  const invoices = [
    {
      id: "INV-2023-001",
      date: "Jun 01, 2023",
      amount: "$29.00",
      status: "paid",
      plan: "Pro Plan (Monthly)",
      paymentMethod: "Visa ending in 1234",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-002",
      date: "May 01, 2023",
      amount: "$29.00",
      status: "paid",
      plan: "Pro Plan (Monthly)",
      paymentMethod: "Visa ending in 1234",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-003",
      date: "Apr 01, 2023",
      amount: "$29.00",
      status: "paid",
      plan: "Pro Plan (Monthly)",
      paymentMethod: "Mastercard ending in 5678",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-004",
      date: "Mar 01, 2023",
      amount: "$29.00",
      status: "paid",
      plan: "Pro Plan (Monthly)",
      paymentMethod: "Mastercard ending in 5678",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-005",
      date: "Feb 01, 2023",
      amount: "$19.00",
      status: "paid",
      plan: "Basic Plan (Monthly)",
      paymentMethod: "Mastercard ending in 5678",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-006",
      date: "Jan 01, 2023",
      amount: "$19.00",
      status: "paid",
      plan: "Basic Plan (Monthly)",
      paymentMethod: "Mastercard ending in 5678",
      downloadUrl: "#",
    },
  ];

  // Filter invoices
  const filteredInvoices = invoices.filter((invoice) => {
    if (filter === "all") return true;
    return invoice.status === filter;
  });

  // Toggle payment default
  const setDefaultPayment = (id: string) => {
    // In a real application, this would make an API call
    console.log(`Setting payment method ${id} as default`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Invoices & Payments
        </h1>
        <p className="text-foreground/70 mt-1">
          Manage your payment methods and view invoice history
        </p>
      </div>

      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Payment Methods
        </h2>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`border ${
                method.default ? "border-purpleHeart/50" : "border-seance/20"
              } rounded-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
                method.default ? "bg-seance/5" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 flex items-center justify-center bg-background rounded border border-seance/20">
                  {method.type === "visa" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="10"
                      viewBox="0 0 32 10"
                      className="text-blue-600"
                    >
                      <path
                        fill="currentColor"
                        d="M11.551 1.051L7.65 9H5.15L3.251 2.436c-.115-.452-.217-.617-.57-.808C2.134 1.343 1.253 1.05 0.5 1v-.25h3.536c.45 0 .855.301.95.802L6.045 7.3 8.649.75h2.902zM16.899.75L14.5 9h-2.75l2.399-8.25h2.75zM24.8 6.1l.75-2.05.45 2.05H24.8zM28.45.75h-2.05c-.45 0-.85.3-.95.75l-3.35 7.5h2.75L25.6 7.3h2.8l.25 1.7h2.4L28.45.75zM13.35 3c0-1.1-.85-2.25-3-2.25-1.65 0-3.5.6-3.5 2.7 0 2.7 3.7 2.9 3.7.9 0-.35-.4-.55-.95-.55-.751 0-1.65.25-2.15.65l.4-1.9c.5-.25 1.3-.45 2.15-.45 1.1 0 1.6.35 1.6 1.05 0 1.75-3.9 1.5-3.9 4.45 0 .9.6 1.65 2.4 1.65 1.2 0 1.85-.25 2.3-.5l.4-1.9c-.55.3-1.3.55-2.15.55-.85 0-1.1-.3-1.1-.6.001-.95 3.8-.95 3.8-3.7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="24"
                      viewBox="0 0 30 24"
                      className="scale-75"
                    >
                      <g fill="none">
                        <rect
                          width="30"
                          height="24"
                          fill="#252525"
                          rx="3"
                        ></rect>
                        <circle cx="11" cy="12" r="7" fill="#eb001b"></circle>
                        <circle cx="19" cy="12" r="7" fill="#f79e1b"></circle>
                        <path
                          fill="#ff5f00"
                          fillRule="evenodd"
                          d="M15 17a7 7 0 0 1 0-10 7 7 0 0 1 0 10Z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">{method.name}</p>
                  <p className="text-sm text-foreground/70">
                    Expires {method.expiry}{" "}
                    {method.default && (
                      <span className="text-xs bg-purpleHeart/10 text-purpleHeart font-medium py-0.5 px-2 rounded ml-2">
                        Default
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {!method.default && (
                  <Button
                    variant="outline"
                    className="border-seance/20 text-foreground text-sm"
                    onClick={() => setDefaultPayment(method.id)}
                  >
                    Set as Default
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground text-sm"
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50 text-sm"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
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
            Add Payment Method
          </Button>
        </div>
      </Card>

      <Card className="border border-seance/20 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-xl font-semibold text-foreground">
            Invoice History
          </h2>
          <div className="flex flex-wrap gap-3">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
            >
              <option value="all">All Invoices</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
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
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Invoice ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-4 py-3 text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                    {invoice.id}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {invoice.date}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {invoice.amount}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        invoice.status === "paid"
                          ? "bg-green-100 text-green-800"
                          : invoice.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {invoice.status.charAt(0).toUpperCase() +
                        invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {invoice.plan}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {invoice.paymentMethod}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                    <a
                      href={invoice.downloadUrl}
                      className="text-purpleHeart hover:text-purpleHeart/80 inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredInvoices.length === 0 && (
          <div className="text-center py-8">
            <p className="text-foreground/70">No invoices found</p>
          </div>
        )}
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border border-seance/20 p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Next Invoice
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-foreground/70">Due Date</p>
              <p className="text-lg font-medium text-foreground">
                Jul 01, 2023
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground/70">Amount</p>
              <p className="text-lg font-medium text-foreground">$29.00</p>
            </div>
            <div>
              <p className="text-sm text-foreground/70">Status</p>
              <p className="text-base">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Upcoming
                </span>
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Billing Address
          </h3>
          <div className="text-sm text-foreground mb-4">
            <p>Victor Smith</p>
            <p>Tekcify Inc.</p>
            <p>123 Tech Street</p>
            <p>San Francisco, CA 94107</p>
            <p>United States</p>
          </div>
          <Button
            variant="outline"
            className="border-seance/20 text-foreground text-sm w-full"
          >
            Update Address
          </Button>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Billing Settings
          </h3>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="text-sm text-foreground">
                <p className="font-medium">Auto Payment</p>
                <p className="text-foreground/70">
                  Automatically charge your default payment method
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
                <p className="font-medium">Invoice Emails</p>
                <p className="text-foreground/70">
                  Receive invoice emails when payments are processed
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
                <p className="font-medium">Usage Alerts</p>
                <p className="text-foreground/70">
                  Get notified when approaching usage limits
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
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Need Help with Billing?
            </h3>
            <p className="text-sm text-foreground/70">
              If you have any questions about your billing, invoices, or payment
              methods, our support team is here to help.
            </p>
            <Button
              className="mt-4 bg-purpleHeart hover:bg-purpleHeart/90 text-white"
              onClick={() => (window.location.href = "/support/ticket")}
            >
              Contact Billing Support
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

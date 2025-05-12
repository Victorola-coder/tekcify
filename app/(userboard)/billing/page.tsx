"use client";

import { Card } from "@/app/components/ui";
import Link from "next/link";

export default function BillingPage() {
  // Billing categories
  const billingCategories = [
    {
      title: "Active Plans",
      description: "View and manage your current subscription plans",
      href: "/billing/plans",
      icon: (
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
          <path d="m16 6 4 14" />
          <path d="M12 6v14" />
          <path d="M8 8v12" />
          <path d="M4 4v16" />
        </svg>
      ),
    },
    {
      title: "Usage Summary",
      description: "Monitor your resource usage across all products",
      href: "/billing/usage",
      icon: (
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
          className="text-seance"
        >
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="m4.93 4.93 2.83 2.83" />
          <path d="m16.24 16.24 2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="m4.93 19.07 2.83-2.83" />
          <path d="m16.24 7.76 2.83-2.83" />
        </svg>
      ),
    },
    {
      title: "Invoices & Payment History",
      description: "Access and download your past invoices",
      href: "/billing/invoices",
      icon: (
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
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      ),
    },
    {
      title: "Payment Methods",
      description: "Add or update your payment information",
      href: "/billing/methods",
      icon: (
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
          className="text-seance"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      ),
    },
  ];

  // Active plans data
  const activePlans = [
    {
      product: "Binx AI",
      plan: "Pro Plan",
      price: "$29.99",
      billing: "Monthly",
      nextBilling: "June 15, 2023",
      status: "Active",
    },
    {
      product: "CAMPUX",
      plan: "Business Plan",
      price: "$99.99",
      billing: "Monthly",
      nextBilling: "June 15, 2023",
      status: "Active",
    },
    {
      product: "PDFx",
      plan: "Basic Plan",
      price: "$9.99",
      billing: "Monthly",
      nextBilling: "June 15, 2023",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Billing & Payments
        </h1>
        <p className="text-foreground/70 mt-1">
          Manage your subscriptions, payment methods, and billing history
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {billingCategories.map((category, index) => (
          <Link href={category.href} key={index}>
            <Card className="p-6 border border-seance/20 hover:border-seance/30 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-background border border-seance/20">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {category.description}
                  </p>
                </div>
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
                  className="text-foreground/50 self-center"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-background border border-seance/20 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            Active Plans
          </h2>
          <Link
            href="/billing/plans"
            className="text-sm text-purpleHeart hover:text-purpleHeart/80 font-medium flex items-center gap-1"
          >
            View all plans
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

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Billing
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Next Billing
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              {activePlans.map((plan, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                    {plan.product}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {plan.plan}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {plan.price}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {plan.billing}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {plan.nextBilling}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {plan.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    <div className="flex items-center gap-2">
                      <button className="text-purpleHeart hover:text-purpleHeart/80">
                        Manage
                      </button>
                      <span className="text-foreground/30">|</span>
                      <button className="text-red-500 hover:text-red-600">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-background border border-seance/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Billing Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-foreground/70">Current Billing Cycle</span>
              <span className="text-foreground">May 15 - June 15, 2023</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/70">Next Payment</span>
              <span className="text-foreground">June 15, 2023</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/70">Payment Method</span>
              <span className="text-foreground">Visa ending in 4242</span>
            </div>
            <div className="pt-4 border-t border-seance/20">
              <div className="flex justify-between font-medium">
                <span className="text-foreground">Total Monthly</span>
                <span className="text-foreground">$139.97</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background border border-seance/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Current Usage
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">
                  Binx AI Tokens
                </span>
                <span className="text-sm text-foreground/70">75%</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs">
                <span className="text-foreground/70">75,000 / 100,000</span>
                <Link href="/billing/usage" className="text-purpleHeart">
                  Details
                </Link>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">
                  PDFx Storage
                </span>
                <span className="text-sm text-foreground/70">40%</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-seance h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs">
                <span className="text-foreground/70">2GB / 5GB</span>
                <Link href="/billing/usage" className="text-purpleHeart">
                  Details
                </Link>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">
                  CAMPUX Users
                </span>
                <span className="text-sm text-foreground/70">90%</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs">
                <span className="text-foreground/70">45 / 50 users</span>
                <Link href="/billing/usage" className="text-purpleHeart">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

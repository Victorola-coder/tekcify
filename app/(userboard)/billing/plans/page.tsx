"use client";

import { useState } from "react";
import { Button, Card } from "@/app/components/ui";

export default function ActivePlansPage() {
  // Active plan data
  const [currentPlan, setCurrentPlan] = useState({
    name: "Pro",
    price: "$29",
    billingCycle: "monthly",
    nextBillingDate: "July 15, 2023",
    autoRenew: true,
  });

  // Available plans
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: { monthly: "$9", annual: "$90" },
      features: [
        "1 Product Access",
        "5 GB Storage",
        "Basic API Access",
        "Email Support",
      ],
      popular: false,
      cta: "Downgrade",
    },
    {
      id: "pro",
      name: "Pro",
      price: { monthly: "$29", annual: "$290" },
      features: [
        "All Products Access",
        "25 GB Storage",
        "Advanced API Access",
        "Priority Email Support",
        "Basic Analytics",
      ],
      popular: true,
      cta: "Current Plan",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: { monthly: "$99", annual: "$990" },
      features: [
        "All Products Access",
        "100 GB Storage",
        "Complete API Access",
        "24/7 Phone Support",
        "Advanced Analytics",
        "Custom Integrations",
        "Dedicated Account Manager",
      ],
      popular: false,
      cta: "Upgrade",
    },
  ];

  // Toggle auto-renew
  const toggleAutoRenew = () => {
    setCurrentPlan({
      ...currentPlan,
      autoRenew: !currentPlan.autoRenew,
    });
  };

  // Handle plan change (in a real app would open modal/checkout)
  const handlePlanChange = (planId: string) => {
    console.log(`Changing to plan: ${planId}`);
    // Would typically open a confirmation modal or checkout flow
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Active Plans
        </h1>
        <p className="text-foreground/70 mt-1">
          Manage your subscription plans and billing
        </p>
      </div>

      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Current Subscription
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <div className="flex items-center">
              <span className="text-lg font-medium text-foreground mr-2">
                {currentPlan.name} Plan
              </span>
              <span className="bg-purpleHeart/10 text-purpleHeart text-xs font-medium py-1 px-2 rounded">
                Active
              </span>
            </div>
            <p className="text-foreground/70 text-sm mt-1">
              {currentPlan.price} /{" "}
              {currentPlan.billingCycle === "monthly" ? "month" : "year"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="border-seance/20 text-foreground"
              onClick={() => (window.location.href = "/billing/methods")}
            >
              Update Payment Method
            </Button>
            <Button
              className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
              onClick={() => (window.location.href = "#available-plans")}
            >
              Change Plan
            </Button>
          </div>
        </div>

        <div className="mt-6 border-t border-seance/20 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-foreground/70">Next billing date</p>
              <p className="text-sm font-medium text-foreground mt-1">
                {currentPlan.nextBillingDate}
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground/70">Billing cycle</p>
              <p className="text-sm font-medium text-foreground mt-1 capitalize">
                {currentPlan.billingCycle}
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground/70">Auto-renew</p>
              <div className="flex items-center mt-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentPlan.autoRenew}
                    onChange={toggleAutoRenew}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purpleHeart"></div>
                </label>
                <span className="ml-2 text-sm text-foreground">
                  {currentPlan.autoRenew ? "On" : "Off"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div id="available-plans" className="pt-4">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Available Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`border ${
                plan.popular ? "border-purpleHeart" : "border-seance/20"
              } p-6 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purpleHeart text-white text-xs font-semibold py-1 px-3 rounded-full">
                  Current Plan
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex justify-center items-baseline">
                  <span className="text-2xl font-bold text-foreground">
                    {plan.price.monthly}
                  </span>
                  <span className="text-foreground/70 text-sm ml-1">
                    /month
                  </span>
                </div>
                <p className="text-xs text-foreground/70 mt-1">
                  or {plan.price.annual} billed annually
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
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
                      className="text-purpleHeart mr-2"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.cta === "Current Plan"
                    ? "bg-foreground/10 text-foreground cursor-default"
                    : plan.cta === "Upgrade"
                    ? "bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                    : "border border-seance/20 bg-transparent text-foreground hover:bg-foreground/5"
                }`}
                disabled={plan.cta === "Current Plan"}
                onClick={() => handlePlanChange(plan.id)}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Plan Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Basic
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Pro
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              <tr>
                <td className="px-4 py-3 text-sm text-foreground">
                  Product Access
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  1 Product
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  All Products
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  All Products
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-foreground">Storage</td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  5 GB
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  25 GB
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  100 GB
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-foreground">
                  API Requests
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  10,000 / month
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  50,000 / month
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  Unlimited
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-foreground">Support</td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  Email
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  Priority Email
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  24/7 Phone
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-foreground">Analytics</td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
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
                    className="text-red-500 mx-auto"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  Basic
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  Advanced
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-foreground">
                  Custom Integrations
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
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
                    className="text-red-500 mx-auto"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
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
                    className="text-red-500 mx-auto"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
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
                    className="text-green-500 mx-auto"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
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
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Need Help Choosing a Plan?
            </h3>
            <p className="text-sm text-foreground/70">
              Our team can help you select the right plan for your needs. Book a
              consultation with our product specialists.
            </p>
            <Button
              className="mt-4 bg-purpleHeart hover:bg-purpleHeart/90 text-white"
              onClick={() => (window.location.href = "/support/ticket")}
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

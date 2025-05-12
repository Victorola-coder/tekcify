"use client";

import { useState } from "react";
import { Card, Button } from "@/app/components/ui";
import Link from "next/link";

export default function APIPage() {
  // API sections data
  const apiSections = [
    {
      title: "API Keys",
      description: "Manage your API keys for secure access to Tekcify services",
      href: "/api/keys",
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
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      ),
    },
    {
      title: "Webhooks",
      description:
        "Configure webhooks to receive real-time event notifications",
      href: "/api/webhooks",
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
          <path d="M12 16V6" />
          <path d="M8 12H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4" />
          <path d="M12 16a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        </svg>
      ),
    },
    {
      title: "Connected Services",
      description: "Manage integrations with third-party applications",
      href: "/api/services",
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
          <path d="M17 6H3" />
          <path d="M21 12H8" />
          <path d="M21 18H8" />
          <path d="M3 12v6" />
          <circle cx="3" cy="18" r="2" />
          <circle cx="3" cy="6" r="2" />
        </svg>
      ),
    },
  ];

  // API keys data
  const apiKeys = [
    {
      id: "key_1a2b3c4d5e",
      name: "Production API Key",
      product: "All Products",
      created: "May 15, 2023",
      lastUsed: "June 12, 2023",
      expiresAt: "May 15, 2024",
      status: "Active",
    },
    {
      id: "key_6f7g8h9i0j",
      name: "Development API Key",
      product: "Binx AI",
      created: "June 1, 2023",
      lastUsed: "June 10, 2023",
      expiresAt: "June 1, 2024",
      status: "Active",
    },
    {
      id: "key_klmn0pq3rs",
      name: "Testing API Key",
      product: "PDFx",
      created: "April 20, 2023",
      lastUsed: "June 5, 2023",
      expiresAt: "April 20, 2024",
      status: "Active",
    },
  ];

  // Connected services data
  const connectedServices = [
    {
      id: 1,
      name: "Google Drive",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M8.267 1.333H15.2l7.466 13.334H15.733L8.267 1.333zm-1.334 0l7.467 13.334H0L7.467 1.333h-.534zm.534 13.334l7.466 13.333H7.467L0 14.667h7.467z"
          />
        </svg>
      ),
      connectedOn: "June 2, 2023",
      status: "Active",
      integrates: ["PDFx", "CAMPUX"],
    },
    {
      id: 2,
      name: "Microsoft 365",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          className="text-red-500"
        >
          <path
            fill="currentColor"
            d="M11 2v9h11v-9h-11zm0 20h11v-9h-11v9zm-9-20v9h7v-9h-7zm0 20h7v-9h-7v9z"
          />
        </svg>
      ),
      connectedOn: "May 20, 2023",
      status: "Active",
      integrates: ["Binx AI", "PDFx"],
    },
    {
      id: 3,
      name: "Slack",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          className="text-purple-500"
        >
          <path
            fill="currentColor"
            d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.528 2.528 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.123a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.312z"
          />
        </svg>
      ),
      connectedOn: "June 10, 2023",
      status: "Active",
      integrates: ["Binx AI", "CAMPUX"],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          API & Integrations
        </h1>
        <p className="text-foreground/70 mt-1">
          Connect your applications and services with Tekcify products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apiSections.map((section, index) => (
          <Link href={section.href} key={index}>
            <Card className="p-6 border border-seance/20 hover:border-seance/30 transition-all duration-200">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-background border border-seance/20">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {section.description}
                  </p>
                </div>
                <Button className="bg-purpleHeart hover:bg-purpleHeart/90 text-white mt-2">
                  Manage
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-background border border-seance/20 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            Your API Keys
          </h2>
          <Link href="/api/keys">
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
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Create New API Key
            </Button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Last Used
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Expires
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
              {apiKeys.map((key) => (
                <tr key={key.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                    {key.name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {key.product}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {key.created}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {key.lastUsed}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {key.expiresAt}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {key.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    <div className="flex items-center gap-2">
                      <button className="text-purpleHeart hover:text-purpleHeart/80">
                        View
                      </button>
                      <span className="text-foreground/30">|</span>
                      <button className="text-foreground/70 hover:text-foreground">
                        Revoke
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-background border border-seance/20 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              Connected Services
            </h2>
            <Link href="/api/services">
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
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Connect Service
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {connectedServices.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between border border-seance/20 rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-seance/10">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {service.name}
                    </h3>
                    <p className="text-xs text-foreground/70">
                      Connected on {service.connectedOn}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-xs text-foreground/70">
                      Integrates with:
                    </span>
                    <div className="flex gap-1 mt-1">
                      {service.integrates.map((product, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purpleHeart/10 text-purpleHeart"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="text-red-500 hover:text-red-600 text-sm">
                    Disconnect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background border border-seance/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            API Usage & Limits
          </h2>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">
                  API Requests (This Month)
                </span>
                <span className="text-sm text-foreground/70">45%</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-foreground/70">
                <span>45,000 / 100,000 requests</span>
                <span>Resets in 15 days</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">
                  Rate Limits (Requests per minute)
                </span>
                <span className="text-sm text-foreground/70">20%</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-seance h-2 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-foreground/70">
                <span>20 / 100 requests per minute</span>
                <span>Current Plan</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-base font-medium text-foreground mb-3">
              Recent API Errors
            </h3>
            <div className="space-y-3">
              <div className="border border-seance/20 rounded-lg p-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Rate limit exceeded
                  </span>
                  <span className="text-xs text-foreground/70">
                    Today, 10:45 AM
                  </span>
                </div>
                <p className="text-xs text-foreground/70 mt-1">
                  Your API request exceeded the rate limit. Consider upgrading
                  your plan for higher limits.
                </p>
              </div>
              <div className="border border-seance/20 rounded-lg p-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Invalid API key
                  </span>
                  <span className="text-xs text-foreground/70">
                    Yesterday, 3:20 PM
                  </span>
                </div>
                <p className="text-xs text-foreground/70 mt-1">
                  Request used an invalid API key. Please check your
                  implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/api/docs">
              <Button className="w-full bg-purpleHeart hover:bg-purpleHeart/90 text-white">
                View API Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-seance/5 rounded-lg p-6">
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
              Need help with our API?
            </h3>
            <p className="text-sm text-foreground/70 mb-4">
              Our comprehensive documentation includes guides, examples, and
              reference material to help you integrate with Tekcify products.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/api/docs">
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground"
                >
                  Read Documentation
                </Button>
              </Link>
              <Link href="/support/ticket/new">
                <Button className="bg-purpleHeart hover:bg-purpleHeart/90 text-white">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

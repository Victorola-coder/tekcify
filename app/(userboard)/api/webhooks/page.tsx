"use client";

import { Card, Button } from "@/app/components/ui";
import { useState } from "react";

export default function WebhooksPage() {
  // Sample webhooks data
  const [webhooks, setWebhooks] = useState([
    {
      id: 1,
      name: "Order Processing",
      url: "https://api.example.com/tekcify/webhooks/orders",
      events: ["document.processed", "document.failed"],
      product: "PDFx",
      status: "Active",
      created: "June 1, 2023",
      lastUsed: "Today, 10:30 AM",
    },
    {
      id: 2,
      name: "User Notifications",
      url: "https://api.example.com/tekcify/webhooks/notifications",
      events: ["user.created", "user.updated"],
      product: "CAMPUX",
      status: "Active",
      created: "May 15, 2023",
      lastUsed: "Yesterday, 3:45 PM",
    },
    {
      id: 3,
      name: "AI Model Updates",
      url: "https://api.example.com/tekcify/webhooks/ai-models",
      events: ["model.trained", "model.deployed"],
      product: "Binx AI",
      status: "Inactive",
      created: "April 20, 2023",
      lastUsed: "June 10, 2023",
    },
  ]);

  // State for the create webhook modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newWebhookName, setNewWebhookName] = useState("");
  const [newWebhookUrl, setNewWebhookUrl] = useState("");
  const [newWebhookProduct, setNewWebhookProduct] = useState("all");
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  // Product options
  const productOptions = [
    { value: "all", label: "All Products" },
    { value: "binx", label: "Binx AI" },
    { value: "campux", label: "CAMPUX" },
    { value: "pdfx", label: "PDFx" },
  ];

  // Event options by product
  const eventOptions = {
    all: [
      "document.processed",
      "document.failed",
      "user.created",
      "user.updated",
      "model.trained",
      "model.deployed",
    ],
    binx: ["model.trained", "model.deployed", "prediction.created"],
    campux: [
      "user.created",
      "user.updated",
      "course.created",
      "course.updated",
    ],
    pdfx: ["document.processed", "document.failed", "document.shared"],
  };

  // Handle event selection
  const toggleEvent = (event: string) => {
    if (selectedEvents.includes(event)) {
      setSelectedEvents(selectedEvents.filter((e) => e !== event));
    } else {
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  // Handle creating a new webhook
  const handleCreateWebhook = () => {
    // Add the new webhook to the list
    const newWebhook = {
      id: webhooks.length + 1,
      name: newWebhookName,
      url: newWebhookUrl,
      events: selectedEvents,
      product:
        newWebhookProduct === "all"
          ? "All Products"
          : newWebhookProduct === "binx"
          ? "Binx AI"
          : newWebhookProduct === "campux"
          ? "CAMPUX"
          : "PDFx",
      status: "Active",
      created: "Today",
      lastUsed: "Never",
    };

    setWebhooks([newWebhook, ...webhooks]);

    // Close the modal and reset form
    setShowCreateModal(false);
    setNewWebhookName("");
    setNewWebhookUrl("");
    setNewWebhookProduct("all");
    setSelectedEvents([]);
  };

  // Handle toggling webhook status
  const toggleWebhookStatus = (id: number) => {
    setWebhooks(
      webhooks.map((webhook) =>
        webhook.id === id
          ? {
              ...webhook,
              status: webhook.status === "Active" ? "Inactive" : "Active",
            }
          : webhook
      )
    );
  };

  // Handle deleting a webhook
  const deleteWebhook = (id: number) => {
    setWebhooks(webhooks.filter((webhook) => webhook.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Webhooks
          </h1>
          <p className="text-foreground/70 mt-1">
            Configure event notifications for your application
          </p>
        </div>
        <Button
          className="bg-purpleHeart hover:bg-purpleHeart/90 text-white self-start sm:self-auto"
          onClick={() => setShowCreateModal(true)}
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
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
          Create Webhook
        </Button>
      </div>

      <Card className="border border-seance/20 p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Endpoint URL
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Events
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Product
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
              {webhooks.map((webhook) => (
                <tr key={webhook.id}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-foreground">
                      {webhook.name}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    <div className="max-w-xs truncate">{webhook.url}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {webhook.events.map((event, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-md bg-seance/10 text-seance truncate max-w-[150px]"
                        >
                          {event}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-md ${
                        webhook.product === "Binx AI"
                          ? "bg-purpleHeart/10 text-purpleHeart"
                          : webhook.product === "CAMPUX"
                          ? "bg-seance/10 text-seance"
                          : webhook.product === "PDFx"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {webhook.product}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={webhook.status === "Active"}
                        onChange={() => toggleWebhookStatus(webhook.id)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purpleHeart"></div>
                    </label>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-foreground/70 hover:text-foreground mr-4"
                      onClick={() => {
                        /* View details */
                      }}
                    >
                      Details
                    </button>
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => deleteWebhook(webhook.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {webhooks.length === 0 && (
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
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
              <path d="M13 2v7h7" />
              <path d="m5 12 5 5" />
              <path d="m5 17 5-5" />
              <path d="M15 12h4" />
            </svg>
            <p className="text-foreground/70">
              No webhooks found. Create one to get started.
            </p>
          </div>
        )}
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Recent Webhook Deliveries
          </h2>
          {webhooks.length > 0 ? (
            <div className="space-y-4">
              <div className="border border-seance/20 p-4 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium text-foreground">
                        {webhooks[0].name}
                      </span>
                    </div>
                    <div className="text-xs text-foreground/70 mb-2">
                      Event:{" "}
                      <span className="font-mono">{webhooks[0].events[0]}</span>
                    </div>
                  </div>
                  <span className="text-xs text-foreground/70">
                    Today, 10:30 AM
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className="text-green-600 font-medium">
                    Success (200)
                  </span>
                  <button className="text-purpleHeart">View Details</button>
                </div>
              </div>

              <div className="border border-seance/20 p-4 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-sm font-medium text-foreground">
                        {webhooks[1].name}
                      </span>
                    </div>
                    <div className="text-xs text-foreground/70 mb-2">
                      Event:{" "}
                      <span className="font-mono">{webhooks[1].events[0]}</span>
                    </div>
                  </div>
                  <span className="text-xs text-foreground/70">
                    Yesterday, 3:45 PM
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className="text-red-600 font-medium">Failed (502)</span>
                  <button className="text-purpleHeart">View Details</button>
                </div>
              </div>

              <div className="border border-seance/20 p-4 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium text-foreground">
                        {webhooks[0].name}
                      </span>
                    </div>
                    <div className="text-xs text-foreground/70 mb-2">
                      Event:{" "}
                      <span className="font-mono">{webhooks[0].events[1]}</span>
                    </div>
                  </div>
                  <span className="text-xs text-foreground/70">
                    June 10, 2023
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className="text-green-600 font-medium">
                    Success (200)
                  </span>
                  <button className="text-purpleHeart">View Details</button>
                </div>
              </div>

              <div className="text-center mt-4">
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground"
                >
                  View All Deliveries
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-seance/5 rounded-lg h-48 flex items-center justify-center">
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
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                  <path d="M13 2v7h7" />
                  <path d="m5 12 5 5" />
                  <path d="m5 17 5-5" />
                  <path d="M15 12h4" />
                </svg>
                <p className="text-foreground/70 text-sm">
                  No webhook deliveries yet
                </p>
              </div>
            </div>
          )}
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Webhook Events
          </h2>
          <div className="space-y-4">
            <div className="border border-seance/20 p-4 rounded-md">
              <div className="flex items-center gap-3">
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
                  className="text-purpleHeart"
                >
                  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z" />
                  <path d="M10.2 7a26.4 26.4 0 0 0-3.9 4.9c-.7 1.3-1.1 2.7-1 4.1.1 1.5.8 3 2 4 1.3 1 3 1.2 4.8.8 1.8-.4 3.7-1.4 5.5-2.8 1.8-1.5 3.2-3.3 4-5.1.7-1.8.8-3.5 0-4.9a5 5 0 0 0-3.9-2" />
                </svg>
                <h3 className="font-medium text-foreground">Binx AI Events</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-foreground/70 list-disc list-inside pl-4">
                <li>model.trained - When an AI model finishes training</li>
                <li>model.deployed - When an AI model is deployed</li>
                <li>prediction.created - When a new prediction is made</li>
              </ul>
            </div>

            <div className="border border-seance/20 p-4 rounded-md">
              <div className="flex items-center gap-3">
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
                  className="text-seance"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <h3 className="font-medium text-foreground">CAMPUX Events</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-foreground/70 list-disc list-inside pl-4">
                <li>user.created - When a new user is created</li>
                <li>user.updated - When user information is updated</li>
                <li>course.created - When a new course is created</li>
                <li>course.updated - When course content is updated</li>
              </ul>
            </div>

            <div className="border border-seance/20 p-4 rounded-md">
              <div className="flex items-center gap-3">
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
                  className="text-blue-600"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <h3 className="font-medium text-foreground">PDFx Events</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-foreground/70 list-disc list-inside pl-4">
                <li>document.processed - When a document is processed</li>
                <li>document.failed - When document processing fails</li>
                <li>document.shared - When a document is shared</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Create Webhook Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg w-full max-w-lg p-6 border border-seance/20 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">
                Create New Webhook
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-foreground/50 hover:text-foreground"
              >
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
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Webhook Name
                </label>
                <input
                  type="text"
                  value={newWebhookName}
                  onChange={(e) => setNewWebhookName(e.target.value)}
                  placeholder="e.g., Order Processing Webhook"
                  className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart focus:border-purpleHeart"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Endpoint URL
                </label>
                <input
                  type="url"
                  value={newWebhookUrl}
                  onChange={(e) => setNewWebhookUrl(e.target.value)}
                  placeholder="https://example.com/webhook"
                  className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart focus:border-purpleHeart"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Product
                </label>
                <select
                  value={newWebhookProduct}
                  onChange={(e) => {
                    setNewWebhookProduct(e.target.value);
                    setSelectedEvents([]);
                  }}
                  className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
                >
                  {productOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Events to Subscribe
                </label>
                <div className="space-y-2 max-h-40 overflow-y-auto border border-seance/20 rounded-md p-3">
                  {eventOptions[
                    newWebhookProduct as keyof typeof eventOptions
                  ].map((event) => (
                    <div key={event} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`event-${event}`}
                        checked={selectedEvents.includes(event)}
                        onChange={() => toggleEvent(event)}
                        className="h-4 w-4 text-purpleHeart focus:ring-purpleHeart rounded"
                      />
                      <label
                        htmlFor={`event-${event}`}
                        className="ml-2 block text-sm text-foreground"
                      >
                        {event}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Secret (Optional)
                </label>
                <input
                  type="password"
                  placeholder="Webhook secret for payload verification"
                  className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart focus:border-purpleHeart"
                />
                <p className="mt-1 text-xs text-foreground/70">
                  We'll use this secret to sign the webhook payload.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Button
                variant="outline"
                className="border-seance/20 text-foreground"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                onClick={handleCreateWebhook}
                disabled={
                  !newWebhookName.trim() ||
                  !newWebhookUrl.trim() ||
                  selectedEvents.length === 0
                }
              >
                Create Webhook
              </Button>
            </div>
          </div>
        </div>
      )}

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
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
              <path d="M13 2v7h7" />
              <path d="m5 12 5 5" />
              <path d="m5 17 5-5" />
              <path d="M15 12h4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              About Webhooks
            </h3>
            <p className="text-sm text-foreground/70">
              Webhooks allow your applications to receive real-time updates from
              Tekcify. When an event occurs, we'll send an HTTP POST payload to
              your webhook's URL.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground/70 mt-2 space-y-1">
              <li>
                Configure webhooks to receive events from specific products
              </li>
              <li>
                Ensure your endpoint is publicly accessible and handles POST
                requests
              </li>
              <li>
                Verify webhook signatures to ensure requests are from Tekcify
              </li>
              <li>Webhook requests timeout after 5 seconds</li>
            </ul>
            <div className="mt-4">
              <Button
                variant="outline"
                className="border-seance/20 text-foreground"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

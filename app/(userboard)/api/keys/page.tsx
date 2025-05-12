"use client";

import { Card, Button } from "@/app/components/ui";
import { useState } from "react";

export default function ApiKeysPage() {
  // Sample API keys data
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: "Production Key",
      key: "tk_prod_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      product: "All Products",
      created: "June 1, 2023",
      lastUsed: "Today, 10:30 AM",
      status: "Active",
    },
    {
      id: 2,
      name: "Development Key",
      key: "tk_dev_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      product: "Binx AI",
      created: "May 15, 2023",
      lastUsed: "Yesterday, 3:45 PM",
      status: "Active",
    },
    {
      id: 3,
      name: "Testing Key",
      key: "tk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      product: "PDFx",
      created: "April 20, 2023",
      lastUsed: "June 10, 2023",
      status: "Active",
    },
    {
      id: 4,
      name: "Staging Key",
      key: "tk_staging_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      product: "CAMPUX",
      created: "March 5, 2023",
      lastUsed: "June 5, 2023",
      status: "Expired",
    },
  ]);

  // State for the create API key modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyProduct, setNewKeyProduct] = useState("all");
  const [newKeyExpiration, setNewKeyExpiration] = useState("never");

  // State for showing a newly created key
  const [showNewKey, setShowNewKey] = useState(false);
  const [newKey, setNewKey] = useState("");

  // Product options
  const productOptions = [
    { value: "all", label: "All Products" },
    { value: "binx", label: "Binx AI" },
    { value: "campux", label: "CAMPUX" },
    { value: "pdfx", label: "PDFx" },
  ];

  // Expiration options
  const expirationOptions = [
    { value: "never", label: "Never" },
    { value: "30d", label: "30 Days" },
    { value: "90d", label: "90 Days" },
    { value: "1y", label: "1 Year" },
  ];

  // Handle creating a new API key
  const handleCreateKey = () => {
    // Generate a mock API key
    const mockKey = `tk_${newKeyProduct}_${Math.random()
      .toString(36)
      .substring(2, 15)}`;

    // Add the new key to the list
    const newKeyObj = {
      id: apiKeys.length + 1,
      name: newKeyName,
      key: mockKey,
      product:
        newKeyProduct === "all"
          ? "All Products"
          : newKeyProduct === "binx"
          ? "Binx AI"
          : newKeyProduct === "campux"
          ? "CAMPUX"
          : "PDFx",
      created: "Today",
      lastUsed: "Never",
      status: "Active",
    };

    setApiKeys([newKeyObj, ...apiKeys]);

    // Show the newly created key
    setNewKey(mockKey);
    setShowNewKey(true);

    // Close the modal and reset form
    setShowCreateModal(false);
    setNewKeyName("");
    setNewKeyProduct("all");
    setNewKeyExpiration("never");
  };

  // Handle key revocation
  const handleRevokeKey = (id: number) => {
    setApiKeys(
      apiKeys.map((key) =>
        key.id === id ? { ...key, status: "Revoked" } : key
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            API Keys
          </h1>
          <p className="text-foreground/70 mt-1">
            Manage API keys for accessing Tekcify services
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
          Create New API Key
        </Button>
      </div>

      {/* Show newly created API key */}
      {showNewKey && (
        <Card className="border border-seance/20 p-6 bg-purpleHeart/5">
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
                <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                <circle cx="16.5" cy="7.5" r=".5" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    API Key Created Successfully
                  </h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    Make sure to copy your API key now. You won't be able to see
                    it again.
                  </p>
                </div>
                <button
                  className="text-foreground/50 hover:text-foreground"
                  onClick={() => setShowNewKey(false)}
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
              <div className="bg-background border border-seance/20 p-3 rounded-md font-mono text-sm break-all">
                {newKey}
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                  onClick={() => {
                    navigator.clipboard.writeText(newKey);
                  }}
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
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  Copy to Clipboard
                </Button>
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground"
                  onClick={() => setShowNewKey(false)}
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      <Card className="border border-seance/20 p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Key
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
                  Status
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              {apiKeys.map((key) => (
                <tr key={key.id}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-foreground">
                      {key.name}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground font-mono">
                    {key.key.substring(0, 8)}...
                    {key.key.substring(key.key.length - 4)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-md ${
                        key.product === "Binx AI"
                          ? "bg-purpleHeart/10 text-purpleHeart"
                          : key.product === "CAMPUX"
                          ? "bg-seance/10 text-seance"
                          : key.product === "PDFx"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {key.product}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {key.created}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                    {key.lastUsed}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        key.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {key.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-purpleHeart hover:text-purpleHeart/80 mr-4"
                      onClick={() => {
                        navigator.clipboard.writeText(key.key);
                      }}
                    >
                      Copy
                    </button>
                    {key.status === "Active" && (
                      <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleRevokeKey(key.id)}
                      >
                        Revoke
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {apiKeys.length === 0 && (
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
              <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
              <circle cx="16.5" cy="7.5" r=".5" />
            </svg>
            <p className="text-foreground/70">
              No API keys found. Create one to get started.
            </p>
          </div>
        )}
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            API Usage
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
                API requests per day (last 30 days)
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-foreground/70 text-sm">Total Requests</p>
              <p className="text-lg font-medium text-foreground">12.5k</p>
            </div>
            <div>
              <p className="text-foreground/70 text-sm">Avg. Daily</p>
              <p className="text-lg font-medium text-foreground">416</p>
            </div>
            <div>
              <p className="text-foreground/70 text-sm">Error Rate</p>
              <p className="text-lg font-medium text-foreground">0.2%</p>
            </div>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            API Documentation
          </h2>
          <p className="text-foreground/70 mb-4">
            Learn how to integrate with Tekcify products using our API.
          </p>
          <div className="space-y-4">
            <div className="border border-seance/20 p-4 rounded-md hover:bg-seance/5 transition-colors cursor-pointer">
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
                <h3 className="font-medium text-foreground">Binx AI API</h3>
              </div>
              <p className="text-sm text-foreground/70 mt-2">
                API endpoints for text processing, chat completion, and model
                fine-tuning.
              </p>
              <div className="mt-2 flex justify-end">
                <span className="text-xs text-purpleHeart flex items-center font-semibold">
                  View Documentation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="border border-seance/20 p-4 rounded-md hover:bg-seance/5 transition-colors cursor-pointer">
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
                <h3 className="font-medium text-foreground">CAMPUX API</h3>
              </div>
              <p className="text-sm text-foreground/70 mt-2">
                API endpoints for managing students, courses, and educational
                content.
              </p>
              <div className="mt-2 flex justify-end">
                <span className="text-xs text-purpleHeart flex items-center font-semibold">
                  View Documentation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="border border-seance/20 p-4 rounded-md hover:bg-seance/5 transition-colors cursor-pointer">
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <h3 className="font-medium text-foreground">PDFx API</h3>
              </div>
              <p className="text-sm text-foreground/70 mt-2">
                API endpoints for PDF processing, data extraction, and document
                management.
              </p>
              <div className="mt-2 flex justify-end">
                <span className="text-xs text-purpleHeart flex items-center font-semibold">
                  View Documentation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Create API Key Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg w-full max-w-md p-6 border border-seance/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">
                Create New API Key
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
                  API Key Name
                </label>
                <input
                  type="text"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="e.g., Development Key"
                  className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart focus:border-purpleHeart"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Product Access
                </label>
                <select
                  value={newKeyProduct}
                  onChange={(e) => setNewKeyProduct(e.target.value)}
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
                <label className="block text-sm font-medium text-foreground mb-1">
                  Expiration
                </label>
                <select
                  value={newKeyExpiration}
                  onChange={(e) => setNewKeyExpiration(e.target.value)}
                  className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
                >
                  {expirationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
                onClick={handleCreateKey}
                disabled={!newKeyName.trim()}
              >
                Create API Key
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              API Key Security Best Practices
            </h3>
            <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
              <li>
                Store API keys securely and never expose them in client-side
                code.
              </li>
              <li>
                Use separate API keys for different environments (development,
                testing, production).
              </li>
              <li>
                Rotate API keys regularly and immediately revoke compromised
                keys.
              </li>
              <li>
                Set appropriate permissions and restrictions for each API key.
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

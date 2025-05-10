"use client";

import { Card, Button } from "@/app/components/ui";
import Link from "next/link";

export default function BinxDashboardPage() {
  // Sample metrics data
  const metrics = [
    { name: "Total API Calls", value: "24,583", change: "+12.5%", trend: "up" },
    { name: "Response Time", value: "238ms", change: "-18.3%", trend: "down" },
    { name: "Success Rate", value: "99.8%", change: "+0.5%", trend: "up" },
    { name: "Active Users", value: "1,297", change: "+22.4%", trend: "up" },
  ];

  // Sample recent activities
  const recentActivities = [
    {
      action: "Generated response",
      timestamp: "10 minutes ago",
      details: "Response to 'Summarize quarterly financial report'",
    },
    {
      action: "Fine-tuned model",
      timestamp: "2 hours ago",
      details: "Model 'Contract-Analysis-v2' completed training",
    },
    {
      action: "API key created",
      timestamp: "Yesterday, 15:30",
      details: "New development API key for Binx Integration",
    },
    {
      action: "New prompt template",
      timestamp: "Yesterday, 10:15",
      details: "Created 'Customer Support Workflow' template",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Binx AI Dashboard
          </h1>
          <p className="text-foreground/70 mt-1">
            Monitor and manage your AI assistant performance
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
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            View Documentation
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
            New Project
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
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
                    : metric.trend === "down" && metric.name === "Response Time"
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
                API Usage
              </h2>
              <div className="flex items-center gap-2">
                <select className="text-sm border border-seance/20 rounded-md bg-background text-foreground p-1">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
            </div>

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
                  API usage chart showing daily calls
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-foreground/70 text-sm">Completions</p>
                <p className="text-lg font-medium text-foreground">15,327</p>
              </div>
              <div>
                <p className="text-foreground/70 text-sm">Embeddings</p>
                <p className="text-lg font-medium text-foreground">8,456</p>
              </div>
              <div>
                <p className="text-foreground/70 text-sm">File Processing</p>
                <p className="text-lg font-medium text-foreground">800</p>
              </div>
            </div>
          </Card>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-seance/20 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Token Usage
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">
                      Input Tokens
                    </span>
                    <span className="text-sm text-foreground/70">78%</span>
                  </div>
                  <div className="w-full bg-seance/10 rounded-full h-2">
                    <div
                      className="bg-purpleHeart h-2 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-foreground/70">
                    <span>780,000 / 1,000,000</span>
                    <span>Reset in 10 days</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">
                      Output Tokens
                    </span>
                    <span className="text-sm text-foreground/70">45%</span>
                  </div>
                  <div className="w-full bg-seance/10 rounded-full h-2">
                    <div
                      className="bg-seance h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-foreground/70">
                    <span>225,000 / 500,000</span>
                    <span>Reset in 10 days</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border border-seance/20 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Model Usage
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purpleHeart"></div>
                    <span className="text-sm text-foreground">BinxGPT-4</span>
                  </div>
                  <span className="text-sm text-foreground/70">52%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-seance"></div>
                    <span className="text-sm text-foreground">BinxGPT-3.5</span>
                  </div>
                  <span className="text-sm text-foreground/70">38%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-foreground">
                      Custom Models
                    </span>
                  </div>
                  <span className="text-sm text-foreground/70">10%</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-seance/20">
                <Button
                  variant="outline"
                  className="w-full border-seance/20 text-foreground"
                >
                  View Detailed Analytics
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <Card className="border border-seance/20 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Recent Activity
              </h2>
              <Link
                href="/activity"
                className="text-sm text-purpleHeart hover:text-purpleHeart/80"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="border-b border-seance/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-seance/10 mt-0.5">
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
                        className="text-seance"
                      >
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">
                        {activity.action}
                      </h4>
                      <p className="text-xs text-foreground/70 mt-1">
                        {activity.details}
                      </p>
                      <p className="text-xs text-foreground/50 mt-1">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
                  New API Key
                </Button>
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground"
                >
                  Train Model
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

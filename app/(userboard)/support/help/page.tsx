"use client";

import { useState } from "react";
import { Button, Card, Input } from "@/app/components/ui";

export default function HelpArticlesPage() {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Categories
  const categories = [
    { id: "all", name: "All Articles" },
    { id: "getting-started", name: "Getting Started" },
    { id: "billing", name: "Billing & Payments" },
    { id: "products", name: "Products" },
    { id: "account", name: "Account" },
    { id: "security", name: "Security" },
    { id: "api", name: "API & Integrations" },
  ];

  // Help articles data
  const articles = [
    {
      id: 1,
      title: "Getting started with Tekcify",
      category: "getting-started",
      content:
        "Learn how to set up your Tekcify account and navigate the dashboard.",
      views: 1842,
      link: "#article-1",
    },
    {
      id: 2,
      title: "How to manage your subscription",
      category: "billing",
      content:
        "Learn how to upgrade, downgrade, or cancel your subscription plan.",
      views: 1253,
      link: "#article-2",
    },
    {
      id: 3,
      title: "Setting up Two-Factor Authentication",
      category: "security",
      content: "Enhance your account security with two-factor authentication.",
      views: 986,
      link: "#article-3",
    },
    {
      id: 4,
      title: "Integrating Binx AI with your application",
      category: "products",
      content: "Step-by-step guide to integrate Binx AI with your application.",
      views: 1432,
      link: "#article-4",
    },
    {
      id: 5,
      title: "Using PDFx for document processing",
      category: "products",
      content:
        "Learn how to use PDFx for efficient document processing and analysis.",
      views: 1123,
      link: "#article-5",
    },
    {
      id: 6,
      title: "Managing API keys",
      category: "api",
      content:
        "Best practices for creating, using, and rotating API keys securely.",
      views: 876,
      link: "#article-6",
    },
    {
      id: 7,
      title: "Updating your account information",
      category: "account",
      content: "How to update your profile, contact details, and preferences.",
      views: 732,
      link: "#article-7",
    },
    {
      id: 8,
      title: "Understanding CAMPUX features",
      category: "products",
      content: "A comprehensive guide to CAMPUX's features and capabilities.",
      views: 954,
      link: "#article-8",
    },
    {
      id: 9,
      title: "Troubleshooting common issues",
      category: "getting-started",
      content: "Solutions for common problems you might encounter.",
      views: 1586,
      link: "#article-9",
    },
    {
      id: 10,
      title: "Understanding your invoice",
      category: "billing",
      content: "Learn how to read and understand your Tekcify invoice.",
      views: 847,
      link: "#article-10",
    },
  ];

  // Filter articles based on category and search query
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeTab === "all" || article.category === activeTab;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Popular articles
  const popularArticles = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Help Center
        </h1>
        <p className="text-foreground/70 mt-1">
          Find answers to common questions and learn how to use our products
        </p>
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder="Search help articles..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          className="w-full py-3 pl-10 pr-4 border-seance/20 bg-background focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground/50"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 space-y-6">
          <Card className="border border-seance/20 p-4">
            <div className="flex overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-seance/20 scrollbar-track-transparent">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
                    activeTab === category.id
                      ? "bg-purpleHeart text-white"
                      : "bg-transparent text-foreground hover:bg-seance/10"
                  }`}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </Card>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
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
                className="mx-auto text-foreground/30 mb-4"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <h2 className="text-xl font-medium text-foreground mb-2">
                No articles found
              </h2>
              <p className="text-foreground/70">
                Try adjusting your search or filter to find what you're looking
                for
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="border border-seance/20 p-6 hover:border-purpleHeart/50 transition-colors"
                >
                  <a href={article.link} className="block">
                    <h2 className="text-lg font-medium text-foreground hover:text-purpleHeart mb-2">
                      {article.title}
                    </h2>
                    <p className="text-foreground/70 text-sm mb-4">
                      {article.content}
                    </p>
                    <div className="flex items-center text-xs text-foreground/50">
                      <span>{article.views} views</span>
                      <span className="mx-2">•</span>
                      <span className="capitalize">
                        {article.category.replace("-", " ")}
                      </span>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="border-seance/20 text-foreground"
            >
              Load More Articles
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border border-seance/20 p-6">
            <h2 className="text-lg font-medium text-foreground mb-4">
              Popular Articles
            </h2>
            <div className="space-y-4">
              {popularArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  className="block text-sm text-foreground hover:text-purpleHeart"
                >
                  {article.title}
                </a>
              ))}
            </div>
          </Card>

          <Card className="border border-seance/20 p-6">
            <h2 className="text-lg font-medium text-foreground mb-4">
              Browse by Product
            </h2>
            <div className="space-y-3">
              <a
                href="#binx-ai"
                className="block p-3 border border-seance/20 rounded-md text-sm font-medium text-foreground hover:bg-seance/10 hover:border-purpleHeart/50 transition-colors"
              >
                Binx AI
              </a>
              <a
                href="#campux"
                className="block p-3 border border-seance/20 rounded-md text-sm font-medium text-foreground hover:bg-seance/10 hover:border-purpleHeart/50 transition-colors"
              >
                CAMPUX
              </a>
              <a
                href="#pdfx"
                className="block p-3 border border-seance/20 rounded-md text-sm font-medium text-foreground hover:bg-seance/10 hover:border-purpleHeart/50 transition-colors"
              >
                PDFx
              </a>
            </div>
          </Card>

          <Card className="border border-seance/20 p-6 bg-seance/5">
            <h2 className="text-lg font-medium text-foreground mb-4">
              Need More Help?
            </h2>
            <p className="text-sm text-foreground/70 mb-4">
              Can't find what you're looking for? Our support team is ready to
              assist you.
            </p>
            <Button
              className="w-full bg-purpleHeart hover:bg-purpleHeart/90 text-white"
              onClick={() => (window.location.href = "/support/ticket")}
            >
              Contact Support
            </Button>
          </Card>
        </div>
      </div>

      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="group border border-seance/20 rounded-md">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
              <span>How do I change my subscription plan?</span>
              <svg
                className="transition group-open:rotate-180"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div className="px-4 pb-4 text-foreground/70 text-sm">
              <p>
                You can change your subscription plan by navigating to Billing &
                Payments → Active Plans in the sidebar. From there, you can view
                all available plans and upgrade or downgrade as needed. Changes
                to your subscription will be reflected in your next billing
                cycle.
              </p>
            </div>
          </details>

          <details className="group border border-seance/20 rounded-md">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
              <span>How do I reset my password?</span>
              <svg
                className="transition group-open:rotate-180"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div className="px-4 pb-4 text-foreground/70 text-sm">
              <p>
                You can reset your password by going to Account Settings → Email
                & Password. If you're logged out, use the "Forgot Password" link
                on the login page. You'll receive an email with instructions to
                reset your password.
              </p>
            </div>
          </details>

          <details className="group border border-seance/20 rounded-md">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
              <span>How do I generate an API key?</span>
              <svg
                className="transition group-open:rotate-180"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div className="px-4 pb-4 text-foreground/70 text-sm">
              <p>
                To generate an API key, navigate to API & Integrations → API
                Keys in the sidebar. Click the "Create New Key" button, give
                your key a name, select the appropriate permissions, and then
                create the key. Be sure to copy and store your API key securely,
                as it won't be displayed again.
              </p>
            </div>
          </details>

          <details className="group border border-seance/20 rounded-md">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
              <span>How do I export my data?</span>
              <svg
                className="transition group-open:rotate-180"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div className="px-4 pb-4 text-foreground/70 text-sm">
              <p>
                You can export your data from the respective product dashboards.
                For example, in PDFx, navigate to the Documents section and use
                the Export button. For billing data, go to Billing & Payments →
                Invoices & Payment History and use the Export button there.
              </p>
            </div>
          </details>

          <details className="group border border-seance/20 rounded-md">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
              <span>How do I add team members to my account?</span>
              <svg
                className="transition group-open:rotate-180"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div className="px-4 pb-4 text-foreground/70 text-sm">
              <p>
                Team member management is available on our Team and Enterprise
                plans. If you're on one of these plans, go to Account Settings →
                Team Members to add new members, manage permissions, and assign
                roles. If you're not on a Team or Enterprise plan, you'll need
                to upgrade first.
              </p>
            </div>
          </details>
        </div>
      </Card>
    </div>
  );
}

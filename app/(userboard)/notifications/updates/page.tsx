"use client";

import { useState } from "react";
import { Button, Card } from "@/app/components/ui";

export default function ProductUpdatesPage() {
  // Filter state
  const [filterProduct, setFilterProduct] = useState("all");

  // Product updates data
  const updates = [
    {
      id: "update-1",
      title: "Binx AI: Advanced Document Analysis",
      description:
        "We've added advanced document analysis capabilities to Binx AI. The new feature uses improved machine learning models to extract key information from complex documents with higher accuracy.",
      features: [
        "Improved accuracy for data extraction from tables",
        "Support for multi-column document layouts",
        "Enhanced entity recognition for technical documents",
        "New API endpoints for document classification",
      ],
      product: "binx",
      date: "Jul 15, 2023",
      version: "v2.4.0",
    },
    {
      id: "update-2",
      title: "PDFx: Collaboration Tools",
      description:
        "PDFx now offers real-time collaboration tools that allow multiple users to annotate and review documents simultaneously.",
      features: [
        "Real-time collaborative annotations",
        "Comment threads on document sections",
        "User presence indicators",
        "Version history and change tracking",
        "Permission controls for shared documents",
      ],
      product: "pdfx",
      date: "Jul 10, 2023",
      version: "v3.2.0",
    },
    {
      id: "update-3",
      title: "CAMPUX: Enhanced Analytics Dashboard",
      description:
        "The CAMPUX learning platform now features an enhanced analytics dashboard for educators to track student progress and engagement.",
      features: [
        "Visual learning progress trackers",
        "Engagement heat maps for course content",
        "Custom report generation",
        "Automated intervention suggestions",
        "Exportable data in multiple formats",
      ],
      product: "campux",
      date: "Jul 5, 2023",
      version: "v4.1.0",
    },
    {
      id: "update-4",
      title: "Binx AI: Custom Training Models",
      description:
        "Binx AI now supports custom training models, allowing you to fine-tune AI behavior for your specific industry and use cases.",
      features: [
        "Custom model training with your data",
        "Fine-tuning controls for model parameters",
        "Industry-specific pre-trained models",
        "Model performance comparison tools",
        "Automated model optimization",
      ],
      product: "binx",
      date: "Jun 28, 2023",
      version: "v2.3.5",
    },
    {
      id: "update-5",
      title: "PDFx: Mobile App Release",
      description:
        "We're excited to announce the release of our PDFx mobile app for iOS and Android, allowing you to access and manage your documents on the go.",
      features: [
        "Document viewing and annotation on mobile devices",
        "Camera capture with automatic enhancement",
        "Offline access to starred documents",
        "Touch-optimized interface",
        "Push notifications for shared documents",
      ],
      product: "pdfx",
      date: "Jun 20, 2023",
      version: "v3.1.0",
    },
    {
      id: "update-6",
      title: "CAMPUX: Integration with Video Platforms",
      description:
        "CAMPUX now integrates seamlessly with popular video conferencing platforms, making virtual classes and recorded lectures easier to manage.",
      features: [
        "One-click integration with Zoom, Teams, and Google Meet",
        "Automatic recording uploads and organization",
        "Transcription and searchable video content",
        "Interactive video quizzes",
        "Attendance tracking for virtual sessions",
      ],
      product: "campux",
      date: "Jun 15, 2023",
      version: "v4.0.0",
    },
    {
      id: "update-7",
      title: "Platform-wide Performance Improvements",
      description:
        "We've made significant performance improvements across all products, resulting in faster load times and more responsive interfaces.",
      features: [
        "50% reduction in initial load times",
        "Optimized API response times",
        "Improved caching mechanisms",
        "Reduced memory usage",
        "Enhanced mobile responsiveness",
      ],
      product: "all",
      date: "Jun 10, 2023",
      version: "Various",
    },
    {
      id: "update-8",
      title: "Binx AI: New Language Models",
      description:
        "Binx AI now supports additional language models, expanding its capabilities to understand and generate content in more languages.",
      features: [
        "Support for 15 new languages",
        "Improved multilingual content understanding",
        "Cross-language translation capabilities",
        "Language-specific optimizations",
        "Regional dialect support",
      ],
      product: "binx",
      date: "Jun 5, 2023",
      version: "v2.3.0",
    },
  ];

  // Filter updates based on product filter
  const filteredUpdates = updates.filter((update) => {
    if (filterProduct === "all") return true;
    if (filterProduct === "all-products" && update.product === "all")
      return true;
    return update.product === filterProduct;
  });

  // Get product badge style
  const getProductBadge = (product) => {
    switch (product) {
      case "binx":
        return "bg-purpleHeart/10 text-purpleHeart";
      case "pdfx":
        return "bg-blue-100 text-blue-800";
      case "campux":
        return "bg-seance/10 text-seance";
      case "all":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get product display name
  const getProductName = (product) => {
    switch (product) {
      case "binx":
        return "Binx AI";
      case "pdfx":
        return "PDFx";
      case "campux":
        return "CAMPUX";
      case "all":
        return "All Products";
      default:
        return product;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Product Updates
        </h1>
        <p className="text-foreground/70 mt-1">
          Stay informed about the latest features and improvements across our
          products
        </p>
      </div>

      <div className="flex overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-seance/20 scrollbar-track-transparent">
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filterProduct === "all"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilterProduct("all")}
        >
          All Updates
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filterProduct === "binx"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilterProduct("binx")}
        >
          Binx AI
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filterProduct === "pdfx"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilterProduct("pdfx")}
        >
          PDFx
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filterProduct === "campux"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilterProduct("campux")}
        >
          CAMPUX
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filterProduct === "all-products"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilterProduct("all-products")}
        >
          Platform-wide
        </button>
      </div>

      <div className="space-y-6">
        {filteredUpdates.length === 0 ? (
          <Card className="border border-seance/20 p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seance/10 text-purpleHeart mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" x2="16" y1="21" y2="21" />
                <line x1="12" x2="12" y1="17" y2="21" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              No updates found
            </h2>
            <p className="text-foreground/70">
              There are no updates matching your current filter.
            </p>
          </Card>
        ) : (
          filteredUpdates.map((update) => (
            <Card key={update.id} className="border border-seance/20 p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4 justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-md ${getProductBadge(
                        update.product
                      )}`}
                    >
                      {getProductName(update.product)}
                    </span>
                    <span className="text-sm text-foreground/70">
                      {update.version}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {update.title}
                  </h2>
                </div>
                <div className="text-sm text-foreground/70 whitespace-nowrap">
                  Released: {update.date}
                </div>
              </div>
              <p className="text-foreground/80 mb-4">{update.description}</p>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-foreground">
                  What's new:
                </h3>
                <ul className="space-y-1 pl-5 list-disc text-sm text-foreground/70">
                  {update.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-seance/20 flex justify-end">
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground text-sm"
                >
                  View Full Release Notes
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Upcoming Releases
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-purpleHeart pl-3 py-1">
              <p className="text-sm font-medium text-foreground">
                Binx AI: Advanced Video Analysis
              </p>
              <p className="text-xs text-foreground/70">
                Planned for August 2023
              </p>
            </div>
            <div className="border-l-2 border-seance pl-3 py-1">
              <p className="text-sm font-medium text-foreground">
                CAMPUX: Quiz Builder Enhancements
              </p>
              <p className="text-xs text-foreground/70">
                Planned for July 2023
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-3 py-1">
              <p className="text-sm font-medium text-foreground">
                PDFx: Advanced Form Recognition
              </p>
              <p className="text-xs text-foreground/70">
                Planned for August 2023
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-seance/20">
            <a
              href="/roadmap"
              className="text-sm text-purpleHeart hover:text-purpleHeart/80"
            >
              View Product Roadmap →
            </a>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Recent Updates
          </h2>
          <div className="space-y-3">
            {updates.slice(0, 5).map((update, index) => (
              <a
                key={index}
                href={`#${update.id}`}
                className="block text-sm hover:text-purpleHeart"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{update.title}</span>
                  <span className="text-foreground/50">{update.date}</span>
                </div>
                <p className="text-xs text-foreground/70 truncate">
                  {update.description}
                </p>
              </a>
            ))}
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Update Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-foreground">
                <p className="font-medium">Email Notifications</p>
                <p className="text-foreground/70 text-xs">
                  Receive product updates via email
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
                <p className="font-medium">Dashboard Notifications</p>
                <p className="text-foreground/70 text-xs">
                  Show product updates in your dashboard
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
                <p className="font-medium">Beta Features</p>
                <p className="text-foreground/70 text-xs">
                  Get notified about beta features
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
          <div className="mt-4 pt-4 border-t border-seance/20">
            <Button
              variant="outline"
              className="w-full border-seance/20 text-foreground"
              onClick={() => (window.location.href = "/account/notifications")}
            >
              Manage All Notification Settings
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

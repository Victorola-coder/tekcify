"use client";

import { useState } from "react";
import { Button, Card } from "@/app/components/ui";

export default function AnnouncementsPage() {
  // Filter state
  const [filter, setFilter] = useState("all");

  // Announcements data
  const announcements = [
    {
      id: "ann-1",
      title: "Summer Promotion: 20% Off All Plans",
      content:
        "For a limited time, get 20% off all subscription plans when you upgrade or renew. Use code SUMMER20 at checkout. Offer valid until August 31, 2023.",
      type: "promotion",
      date: "Jul 15, 2023",
      isImportant: true,
      expiryDate: "Aug 31, 2023",
      ctaLink: "/billing/plans",
      ctaText: "Upgrade Now",
    },
    {
      id: "ann-2",
      title: "Tekcify Awarded 'Best AI Platform 2023'",
      content:
        "We're proud to announce that Tekcify has been recognized as the 'Best AI Platform of 2023' by TechInnovation Awards. This recognition highlights our commitment to innovation and excellence in AI technologies.",
      type: "company",
      date: "Jul 10, 2023",
      isImportant: false,
      expiryDate: null,
      ctaLink: "/blog/awards-2023",
      ctaText: "Read More",
    },
    {
      id: "ann-3",
      title: "Join Our Upcoming Webinar: AI in Education",
      content:
        "Join us for an interactive webinar on how AI is transforming education. Our experts will discuss practical applications of CAMPUX in educational settings and share success stories from our partners.",
      type: "event",
      date: "Jul 5, 2023",
      isImportant: false,
      expiryDate: "Jul 25, 2023",
      ctaLink: "/events/webinar-education",
      ctaText: "Register Now",
    },
    {
      id: "ann-4",
      title: "Holiday Operating Hours",
      content:
        "Please note that our support team will be operating on a limited schedule during the upcoming holiday season. From July 1-4, support will be available from 9AM to 5PM ET.",
      type: "company",
      date: "Jun 28, 2023",
      isImportant: true,
      expiryDate: "Jul 5, 2023",
      ctaLink: null,
      ctaText: null,
    },
    {
      id: "ann-5",
      title: "New Partnership with CloudTech Solutions",
      content:
        "We're excited to announce our strategic partnership with CloudTech Solutions. This collaboration will allow us to offer enhanced cloud storage options and seamless integration with CloudTech's suite of productivity tools.",
      type: "company",
      date: "Jun 22, 2023",
      isImportant: false,
      expiryDate: null,
      ctaLink: "/blog/cloudtech-partnership",
      ctaText: "Learn More",
    },
    {
      id: "ann-6",
      title: "Refer a Friend, Get 3 Months Free",
      content:
        "Love Tekcify? Refer a friend or colleague, and when they sign up for a paid plan, you'll both receive 3 months of free service on your current plan. No limits on the number of referrals!",
      type: "promotion",
      date: "Jun 15, 2023",
      isImportant: false,
      expiryDate: "Sep 15, 2023",
      ctaLink: "/refer",
      ctaText: "Get Referral Link",
    },
    {
      id: "ann-7",
      title: "Tekcify User Conference 2023",
      content:
        "Save the date for TekCon 2023, our annual user conference. Join us September 15-17 in San Francisco for workshops, networking, and a first look at our upcoming product roadmap.",
      type: "event",
      date: "Jun 10, 2023",
      isImportant: true,
      expiryDate: "Sep 15, 2023",
      ctaLink: "/events/tekcon-2023",
      ctaText: "Learn More",
    },
    {
      id: "ann-8",
      title: "New Office Opening in London",
      content:
        "We're expanding our global presence with a new office in London. This location will serve as our European headquarters and help us better support our growing customer base in the region.",
      type: "company",
      date: "Jun 5, 2023",
      isImportant: false,
      expiryDate: null,
      ctaLink: "/company/locations",
      ctaText: "View Locations",
    },
  ];

  // Filter announcements
  const filteredAnnouncements = announcements.filter((announcement) => {
    if (filter === "all") return true;
    if (filter === "important") return announcement.isImportant;
    return announcement.type === filter;
  });

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Get icon based on announcement type
  const getIcon = (type) => {
    switch (type) {
      case "promotion":
        return (
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
            className="text-purple-500"
          >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
        );
      case "event":
        return (
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
            className="text-blue-500"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case "company":
      default:
        return (
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
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
            <path d="M12 11v5" />
            <path d="M8 11v5" />
            <path d="M16 11v5" />
          </svg>
        );
    }
  };

  // Get badge styles based on type
  const getBadgeStyles = (type) => {
    switch (type) {
      case "promotion":
        return "bg-purple-100 text-purple-800";
      case "event":
        return "bg-blue-100 text-blue-800";
      case "company":
      default:
        return "bg-seance/10 text-seance";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Announcements
        </h1>
        <p className="text-foreground/70 mt-1">
          Stay informed about Tekcify company news, events, and special offers
        </p>
      </div>

      <div className="flex overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-seance/20 scrollbar-track-transparent">
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "all"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("all")}
        >
          All Announcements
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "important"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("important")}
        >
          Important
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "promotion"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("promotion")}
        >
          Promotions
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "event"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("event")}
        >
          Events
        </button>
        <button
          className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-md mr-2 ${
            filter === "company"
              ? "bg-purpleHeart text-white"
              : "bg-transparent text-foreground hover:bg-seance/10"
          }`}
          onClick={() => setFilter("company")}
        >
          Company News
        </button>
      </div>

      <div className="space-y-6">
        {filteredAnnouncements.length === 0 ? (
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
                <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
                <path d="m6 9 6 3 6-3" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              No announcements found
            </h2>
            <p className="text-foreground/70">
              There are no announcements matching your current filter.
            </p>
          </Card>
        ) : (
          filteredAnnouncements.map((announcement) => (
            <Card
              key={announcement.id}
              className={`border ${
                announcement.isImportant
                  ? "border-purpleHeart"
                  : "border-seance/20"
              } p-6 ${announcement.isImportant ? "bg-seance/5" : ""}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(announcement.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium text-foreground">
                      {announcement.title}
                    </h3>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getBadgeStyles(
                        announcement.type
                      )}`}
                    >
                      {announcement.type.charAt(0).toUpperCase() +
                        announcement.type.slice(1)}
                    </span>
                    {announcement.isImportant && (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Important
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/80 mb-4">
                    {announcement.content}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60">
                    <span>Posted: {formatDate(announcement.date)}</span>
                    {announcement.expiryDate && (
                      <span>
                        Valid until: {formatDate(announcement.expiryDate)}
                      </span>
                    )}
                  </div>
                  {announcement.ctaLink && (
                    <div className="mt-4">
                      <a
                        href={announcement.ctaLink}
                        className="inline-flex items-center text-sm font-medium text-purpleHeart hover:text-purpleHeart/80"
                      >
                        {announcement.ctaText}
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
                          className="ml-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
                {announcement.type === "promotion" && (
                  <div className="flex-shrink-0 w-16 h-16 bg-purpleHeart/10 rounded-full flex items-center justify-center text-purpleHeart font-bold text-xl">
                    20%
                  </div>
                )}
              </div>
            </Card>
          ))
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-500 pl-3 py-1">
              <p className="text-sm font-medium text-foreground">
                AI in Education Webinar
              </p>
              <p className="text-xs text-foreground/70">July 25, 2023</p>
              <p className="text-xs text-foreground/70 mt-1">
                Learn how AI is transforming education.
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-3 py-1">
              <p className="text-sm font-medium text-foreground">
                PDFx Power User Workshop
              </p>
              <p className="text-xs text-foreground/70">August 10, 2023</p>
              <p className="text-xs text-foreground/70 mt-1">
                Advanced techniques for document management.
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-3 py-1">
              <p className="text-sm font-medium text-foreground">TekCon 2023</p>
              <p className="text-xs text-foreground/70">
                September 15-17, 2023
              </p>
              <p className="text-xs text-foreground/70 mt-1">
                Annual user conference in San Francisco.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-seance/20">
            <a
              href="/events"
              className="text-sm text-purpleHeart hover:text-purpleHeart/80"
            >
              View All Events →
            </a>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Latest Blog Posts
          </h2>
          <div className="space-y-3">
            <a href="/blog/ai-trends-2023" className="block">
              <p className="text-sm font-medium text-foreground hover:text-purpleHeart">
                5 AI Trends to Watch in 2023
              </p>
              <p className="text-xs text-foreground/70">July 12, 2023</p>
            </a>
            <a href="/blog/pdf-automation" className="block">
              <p className="text-sm font-medium text-foreground hover:text-purpleHeart">
                Automating Document Workflows with PDFx
              </p>
              <p className="text-xs text-foreground/70">July 5, 2023</p>
            </a>
            <a href="/blog/case-study-university" className="block">
              <p className="text-sm font-medium text-foreground hover:text-purpleHeart">
                Case Study: How State University Improved Learning Outcomes with
                CAMPUX
              </p>
              <p className="text-xs text-foreground/70">June 28, 2023</p>
            </a>
            <a href="/blog/ai-ethics" className="block">
              <p className="text-sm font-medium text-foreground hover:text-purpleHeart">
                Ethical AI Development: Our Approach
              </p>
              <p className="text-xs text-foreground/70">June 20, 2023</p>
            </a>
          </div>
          <div className="mt-4 pt-4 border-t border-seance/20">
            <a
              href="/blog"
              className="text-sm text-purpleHeart hover:text-purpleHeart/80"
            >
              Visit Our Blog →
            </a>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Announcement Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-foreground">
                <p className="font-medium">Email Announcements</p>
                <p className="text-foreground/70 text-xs">
                  Receive company announcements via email
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
                <p className="font-medium">Promotions & Offers</p>
                <p className="text-foreground/70 text-xs">
                  Receive special offers and promotions
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
                <p className="font-medium">Event Invitations</p>
                <p className="text-foreground/70 text-xs">
                  Receive invitations to webinars and events
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

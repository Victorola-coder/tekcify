"use client";

import { useState } from "react";
import { Card, Button, Input } from "@/app/components/ui";
import Link from "next/link";

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Support categories
  const supportCategories = [
    {
      title: "Help Articles / FAQs",
      description:
        "Browse our knowledge base to find answers to common questions",
      href: "/support/help",
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
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ),
    },
    {
      title: "Open Ticket / Chat Support",
      description: "Get personalized assistance from our support team",
      href: "/support/ticket",
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
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: "Ticket History",
      description:
        "View status and responses to your previous support requests",
      href: "/support/history",
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
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  // FAQs data
  const faqs = [
    {
      question: "How do I upgrade my subscription plan?",
      answer:
        "You can upgrade your subscription plan from the Billing & Payments section. Go to 'Active Plans' and select the plan you want to upgrade, then follow the instructions to select a new plan.",
      category: "Billing",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans.",
      category: "Billing",
    },
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by going to the Account Settings section, then to Email & Password. Click on 'Change Password' and follow the instructions.",
      category: "Account",
    },
    {
      question: "Can I use Binx AI for my business?",
      answer:
        "Yes, Binx AI has specific business plans that include additional features and higher usage limits designed for professional use.",
      category: "Products",
    },
    {
      question: "How do I connect my PDFx account with other applications?",
      answer:
        "You can set up integrations in the API & Integrations section. Navigate to 'Connected Services' to view available integrations or 'API Keys' to set up custom connections.",
      category: "API",
    },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Recent tickets data
  const recentTickets = [
    {
      id: "T-12345",
      subject: "Issue with PDFx document extraction",
      status: "Open",
      date: "June 10, 2023",
      lastUpdate: "2 hours ago",
    },
    {
      id: "T-12344",
      subject: "Binx AI integration questions",
      status: "Closed",
      date: "June 5, 2023",
      lastUpdate: "3 days ago",
    },
    {
      id: "T-12340",
      subject: "Billing inquiry about CAMPUX charges",
      status: "Pending",
      date: "May 28, 2023",
      lastUpdate: "1 week ago",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Support Center
        </h1>
        <p className="text-foreground/70 mt-1">
          Get help with any of our products or services
        </p>
      </div>

      <div className="bg-background border border-seance/20 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          How can we help you today?
        </h2>
        <div className="max-w-3xl">
          <div className="relative">
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
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help articles, FAQs, or topics..."
              className="w-full pl-10 pr-4 py-3 border border-seance/20 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportCategories.map((category, index) => (
          <Link href={category.href} key={index}>
            <Card className="p-6 border border-seance/20 hover:border-seance/30 hover:shadow-md transition-all duration-200">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-background border border-seance/20">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {category.description}
                  </p>
                </div>
                <Button className="bg-purpleHeart hover:bg-purpleHeart/90 text-white mt-2">
                  {category.title === "Open Ticket / Chat Support"
                    ? "Get Support"
                    : "View"}
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-background border border-seance/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>

            {searchQuery && (
              <p className="text-sm text-foreground/70 mb-4">
                Showing {filteredFaqs.length} results for "{searchQuery}"
              </p>
            )}

            <div className="space-y-6">
              {(searchQuery ? filteredFaqs : faqs.slice(0, 3)).map(
                (faq, index) => (
                  <div
                    key={index}
                    className="border-b border-seance/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-purpleHeart/10 mt-1">
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
                          className="text-purpleHeart"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-foreground">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-foreground/70 mt-1">
                          {faq.answer}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-seance/10 text-seance">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {!searchQuery && (
              <div className="mt-4 text-center">
                <Link
                  href="/support/help"
                  className="text-sm text-purpleHeart hover:text-purpleHeart/80 font-medium inline-flex items-center gap-1"
                >
                  View all FAQs
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
            )}
          </div>
        </div>

        <div>
          <div className="bg-background border border-seance/20 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                Recent Tickets
              </h2>
              <Link
                href="/support/history"
                className="text-sm text-purpleHeart hover:text-purpleHeart/80 font-medium flex items-center gap-1"
              >
                View all
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

            <div className="space-y-4">
              {recentTickets.map((ticket, index) => (
                <Link href={`/support/ticket/${ticket.id}`} key={index}>
                  <div className="border border-seance/20 rounded-lg p-4 hover:bg-seance/5 transition-colors">
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-foreground/70">
                        {ticket.id}
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full 
                        ${
                          ticket.status === "Open"
                            ? "bg-green-100 text-green-800"
                            : ticket.status === "Closed"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-foreground mt-2">
                      {ticket.subject}
                    </h3>
                    <div className="flex justify-between mt-2 text-xs text-foreground/70">
                      <span>Created: {ticket.date}</span>
                      <span>Updated: {ticket.lastUpdate}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/support/ticket/new">
                <Button className="w-full bg-purpleHeart hover:bg-purpleHeart/90 text-white">
                  Create New Ticket
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button, Card, Input } from "@/app/components/ui";

export default function TicketHistoryPage() {
  // Filter and search state
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample ticket data
  const tickets = [
    {
      id: "TK-2023-1042",
      subject: "API integration issue with Binx AI",
      status: "open",
      priority: "high",
      category: "technical",
      created: "Jun 15, 2023",
      updated: "Jun 16, 2023",
      lastResponseBy: "support",
    },
    {
      id: "TK-2023-1039",
      subject: "Unable to process certain PDF types",
      status: "in_progress",
      priority: "normal",
      category: "technical",
      created: "Jun 12, 2023",
      updated: "Jun 14, 2023",
      lastResponseBy: "support",
    },
    {
      id: "TK-2023-1029",
      subject: "Billing cycle question",
      status: "closed",
      priority: "normal",
      category: "billing",
      created: "Jun 05, 2023",
      updated: "Jun 07, 2023",
      lastResponseBy: "support",
    },
    {
      id: "TK-2023-1024",
      subject: "Feature request for CAMPUX",
      status: "closed",
      priority: "low",
      category: "feature",
      created: "May 28, 2023",
      updated: "Jun 02, 2023",
      lastResponseBy: "user",
    },
    {
      id: "TK-2023-1015",
      subject: "Account access issue resolved",
      status: "closed",
      priority: "high",
      category: "account",
      created: "May 20, 2023",
      updated: "May 21, 2023",
      lastResponseBy: "support",
    },
    {
      id: "TK-2023-1008",
      subject: "Question about Team plan pricing",
      status: "closed",
      priority: "normal",
      category: "billing",
      created: "May 15, 2023",
      updated: "May 16, 2023",
      lastResponseBy: "user",
    },
    {
      id: "TK-2023-1003",
      subject: "API rate limit clarification",
      status: "waiting_for_customer",
      priority: "normal",
      category: "technical",
      created: "May 12, 2023",
      updated: "May 13, 2023",
      lastResponseBy: "support",
    },
  ];

  // Filter tickets by status and search query
  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus =
      filterStatus === "all" || ticket.status === filterStatus;
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Get status display name
  const getStatusDisplay = (status: string) => {
    switch (status) {
      case "open":
        return { text: "Open", classes: "bg-blue-100 text-blue-800" };
      case "in_progress":
        return {
          text: "In Progress",
          classes: "bg-purple-100 text-purple-800",
        };
      case "waiting_for_customer":
        return {
          text: "Awaiting Reply",
          classes: "bg-yellow-100 text-yellow-800",
        };
      case "closed":
        return { text: "Closed", classes: "bg-green-100 text-green-800" };
      default:
        return {
          text: status.replace(/_/g, " "),
          classes: "bg-gray-100 text-gray-800",
        };
    }
  };

  // Get priority display name
  const getPriorityDisplay = (priority: string) => {
    switch (priority) {
      case "low":
        return { text: "Low", classes: "text-gray-500" };
      case "normal":
        return { text: "Normal", classes: "text-blue-600" };
      case "high":
        return { text: "High", classes: "text-orange-500" };
      case "urgent":
        return { text: "Urgent", classes: "text-red-600 font-bold" };
      default:
        return { text: priority, classes: "text-gray-500" };
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Support Ticket History
        </h1>
        <p className="text-foreground/70 mt-1">
          View and manage your support requests
        </p>
      </div>

      <Card className="border border-seance/20 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative w-full md:w-96">
            <Input
              type="text"
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="w-full py-2 pl-10 pr-4 border-seance/20 bg-background focus:outline-none focus:ring-1 focus:ring-purpleHeart"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                className="text-foreground/50"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="status-filter"
              className="text-sm text-foreground/70 whitespace-nowrap"
            >
              Status:
            </label>
            <select
              id="status-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
            >
              <option value="all">All Tickets</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="waiting_for_customer">Awaiting Reply</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <Button
            className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
            onClick={() => (window.location.href = "/support/ticket")}
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
            New Ticket
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-seance/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Ticket ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seance/20">
              {filteredTickets.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-8 text-center text-foreground/70"
                  >
                    No tickets found matching your search criteria
                  </td>
                </tr>
              ) : (
                filteredTickets.map((ticket) => {
                  const statusDisplay = getStatusDisplay(ticket.status);
                  const priorityDisplay = getPriorityDisplay(ticket.priority);

                  return (
                    <tr key={ticket.id} className="hover:bg-seance/5">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                        {ticket.id}
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground">
                        <a
                          href={`/support/ticket/${ticket.id}`}
                          className="hover:text-purpleHeart"
                        >
                          {ticket.subject}
                        </a>
                        {ticket.lastResponseBy === "support" &&
                          ticket.status !== "closed" && (
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 py-0.5 px-1.5 rounded">
                              New Reply
                            </span>
                          )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusDisplay.classes}`}
                        >
                          {statusDisplay.text}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <span className={priorityDisplay.classes}>
                          {priorityDisplay.text}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground/70">
                        {ticket.created}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground/70">
                        {ticket.updated}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                        <a
                          href={`/support/ticket/${ticket.id}`}
                          className="text-purpleHeart hover:text-purpleHeart/80 mr-4"
                        >
                          View
                        </a>
                        {ticket.status !== "closed" && (
                          <a
                            href={`/support/ticket/${ticket.id}#reply`}
                            className="text-purpleHeart hover:text-purpleHeart/80"
                          >
                            Reply
                          </a>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Ticket Status
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground/70">Open</span>
                <span className="text-foreground font-medium">
                  {tickets.filter((t) => t.status === "open").length}
                </span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: `${
                      (tickets.filter((t) => t.status === "open").length /
                        tickets.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground/70">In Progress</span>
                <span className="text-foreground font-medium">
                  {tickets.filter((t) => t.status === "in_progress").length}
                </span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{
                    width: `${
                      (tickets.filter((t) => t.status === "in_progress")
                        .length /
                        tickets.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground/70">Awaiting Reply</span>
                <span className="text-foreground font-medium">
                  {
                    tickets.filter((t) => t.status === "waiting_for_customer")
                      .length
                  }
                </span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{
                    width: `${
                      (tickets.filter(
                        (t) => t.status === "waiting_for_customer"
                      ).length /
                        tickets.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground/70">Closed</span>
                <span className="text-foreground font-medium">
                  {tickets.filter((t) => t.status === "closed").length}
                </span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width: `${
                      (tickets.filter((t) => t.status === "closed").length /
                        tickets.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-500 pl-3 py-1">
              <p className="text-sm text-foreground">
                Support replied to{" "}
                <span className="font-medium">TK-2023-1042</span>
              </p>
              <p className="text-xs text-foreground/70">Today, 10:23 AM</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-3 py-1">
              <p className="text-sm text-foreground">
                Ticket status changed to{" "}
                <span className="font-medium">In Progress</span> for{" "}
                <span className="font-medium">TK-2023-1039</span>
              </p>
              <p className="text-xs text-foreground/70">Yesterday, 4:17 PM</p>
            </div>
            <div className="border-l-2 border-green-500 pl-3 py-1">
              <p className="text-sm text-foreground">
                Ticket <span className="font-medium">TK-2023-1029</span> was
                closed
              </p>
              <p className="text-xs text-foreground/70">
                Jun 07, 2023, 11:05 AM
              </p>
            </div>
            <div className="border-l-2 border-purple-500 pl-3 py-1">
              <p className="text-sm text-foreground">
                You replied to ticket{" "}
                <span className="font-medium">TK-2023-1024</span>
              </p>
              <p className="text-xs text-foreground/70">
                Jun 02, 2023, 3:42 PM
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-seance/20">
            <a
              href="/support/history"
              className="text-sm text-purpleHeart hover:text-purpleHeart/80"
            >
              View all activity →
            </a>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Support Resources
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/support/help"
                className="flex items-center text-foreground hover:text-purpleHeart"
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
                  className="mr-2 text-purpleHeart"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9.09 9 .5.5a2.5 2.5 0 1 1 5 0c0 2.5-2.5 2.5-2.5 4.5" />
                  <path d="M12 17h.01" />
                </svg>
                Help Articles
              </a>
            </li>
            <li>
              <a
                href="/support/ticket"
                className="flex items-center text-foreground hover:text-purpleHeart"
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
                  className="mr-2 text-purpleHeart"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Contact Support
              </a>
            </li>
            <li>
              <a
                href="/api/documentation"
                className="flex items-center text-foreground hover:text-purpleHeart"
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
                  className="mr-2 text-purpleHeart"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
                API Documentation
              </a>
            </li>
            <li>
              <a
                href="/support/faq"
                className="flex items-center text-foreground hover:text-purpleHeart"
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
                  className="mr-2 text-purpleHeart"
                >
                  <path d="M9.879 16.121A3 3 0 1 0 12 12v.879l3.879 3.879"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Frequently Asked Questions
              </a>
            </li>
          </ul>
          <div className="mt-6 pt-4 border-t border-seance/20">
            <h3 className="text-sm font-medium text-foreground mb-2">
              Need immediate assistance?
            </h3>
            <p className="text-sm text-foreground/70 mb-3">
              For urgent matters, call our support line or start a live chat.
            </p>
            <Button
              variant="outline"
              className="border-seance/20 text-foreground text-sm w-full"
              onClick={() => (window.location.href = "/support/chat")}
            >
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
                className="mr-2"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
              </svg>
              Start Live Chat
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

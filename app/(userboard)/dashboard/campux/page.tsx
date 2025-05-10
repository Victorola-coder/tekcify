"use client";

import { Card, Button } from "@/app/components/ui";
import Link from "next/link";

export default function CampuxDashboardPage() {
  // Sample campus data
  const campusMetrics = [
    { name: "Active Students", value: "1,287", change: "+3.2%", trend: "up" },
    { name: "Active Courses", value: "48", change: "+5.0%", trend: "up" },
    { name: "Instructors", value: "32", change: "0%", trend: "neutral" },
    { name: "Avg. Attendance", value: "87%", change: "+2.1%", trend: "up" },
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      title: "Fall Semester Registration",
      date: "August 25, 2023",
      status: "Upcoming",
      attendees: 450,
    },
    {
      title: "Faculty Training Workshop",
      date: "July 15, 2023",
      status: "In Progress",
      attendees: 28,
    },
    {
      title: "Summer Course Evaluations",
      date: "July 10, 2023",
      status: "Upcoming",
      attendees: 820,
    },
  ];

  // Popular courses
  const popularCourses = [
    {
      code: "CS101",
      name: "Introduction to Computer Science",
      instructor: "Dr. Alan Turing",
      students: 85,
      rating: 4.8,
    },
    {
      code: "BIO220",
      name: "Molecular Biology",
      instructor: "Dr. Rosalind Franklin",
      students: 72,
      rating: 4.6,
    },
    {
      code: "MATH305",
      name: "Advanced Calculus",
      instructor: "Dr. Katherine Johnson",
      students: 64,
      rating: 4.3,
    },
    {
      code: "ENG201",
      name: "Creative Writing",
      instructor: "Prof. Maya Angelou",
      students: 78,
      rating: 4.9,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            CAMPUX Dashboard
          </h1>
          <p className="text-foreground/70 mt-1">
            Campus management and educational resources
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
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
            </svg>
            Generate Reports
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
            Add Course
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {campusMetrics.map((metric, index) => (
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
                    : metric.trend === "down"
                    ? "text-red-500"
                    : "text-foreground/50"
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
                ) : metric.trend === "down" ? (
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
                ) : (
                  <span className="mr-1">→</span>
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
                Popular Courses
              </h2>
              <Link
                href="/dashboard/campux/courses"
                className="text-sm text-purpleHeart hover:text-purpleHeart/80 flex items-center gap-1"
              >
                View All
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

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-seance/20">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Instructor
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Students
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-foreground/70 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-seance/20">
                  {popularCourses.map((course, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            {course.name}
                          </div>
                          <div className="text-sm text-foreground/70">
                            {course.code}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                        {course.instructor}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                        {course.students}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-foreground mr-2">
                            {course.rating}
                          </span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill={
                                  i < Math.floor(course.rating)
                                    ? "currentColor"
                                    : "none"
                                }
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={
                                  i < Math.floor(course.rating)
                                    ? "text-yellow-500"
                                    : "text-foreground/30"
                                }
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-purpleHeart hover:text-purpleHeart/80 mr-3">
                          View
                        </button>
                        <button className="text-foreground/70 hover:text-foreground">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-6">
            <Card className="border border-seance/20 p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Student Distribution
              </h2>

              {/* Placeholder for charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                      <path d="M22 12A10 10 0 0 0 12 2v10z" />
                    </svg>
                    <p className="text-foreground/70 text-sm">
                      Students by Department
                    </p>
                  </div>
                </div>

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
                      <path d="M5 22h14" />
                      <path d="M5 2h14" />
                      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                    </svg>
                    <p className="text-foreground/70 text-sm">
                      Students by Year
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-foreground/70 text-sm">Undergraduate</p>
                  <p className="text-lg font-medium text-foreground">965</p>
                </div>
                <div className="text-center">
                  <p className="text-foreground/70 text-sm">Graduate</p>
                  <p className="text-lg font-medium text-foreground">322</p>
                </div>
                <div className="text-center">
                  <p className="text-foreground/70 text-sm">Full-time</p>
                  <p className="text-lg font-medium text-foreground">1,108</p>
                </div>
                <div className="text-center">
                  <p className="text-foreground/70 text-sm">Part-time</p>
                  <p className="text-lg font-medium text-foreground">179</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border border-seance/20 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Upcoming Events
              </h2>
              <Link
                href="/dashboard/campux/events"
                className="text-sm text-purpleHeart hover:text-purpleHeart/80"
              >
                View Calendar
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="border border-seance/20 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-medium text-foreground">
                      {event.title}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        event.status === "In Progress"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-foreground/70">
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
                      className="mr-1"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="mt-2 text-sm text-foreground/70">
                    {event.attendees} attendees registered
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                className="w-full border-seance/20 text-foreground"
              >
                Create New Event
              </Button>
            </div>
          </Card>

          <Card className="border border-seance/20 p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-seance/20 text-foreground justify-start"
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Manage Students
              </Button>
              <Button
                variant="outline"
                className="w-full border-seance/20 text-foreground justify-start"
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
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                </svg>
                Course Assignments
              </Button>
              <Button
                variant="outline"
                className="w-full border-seance/20 text-foreground justify-start"
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
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
                Grade Book
              </Button>
              <Button
                variant="outline"
                className="w-full border-seance/20 text-foreground justify-start"
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
                  <line x1="3" x2="21" y1="9" y2="9" />
                  <line x1="3" x2="21" y1="15" y2="15" />
                  <line x1="9" x2="9" y1="9" y2="21" />
                  <line x1="15" x2="15" y1="9" y2="21" />
                </svg>
                Schedule Builder
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

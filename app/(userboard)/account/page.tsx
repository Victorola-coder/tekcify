"use client";

import { Card } from "@/app/components/ui";
import Link from "next/link";

export default function AccountPage() {
  // Settings categories
  const settingsCategories = [
    {
      title: "Profile Information",
      description: "Update your personal details and profile photo",
      href: "/account/profile",
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
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "Email & Password",
      description: "Manage your account credentials and security settings",
      href: "/account/security",
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
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: "Notification Preferences",
      description: "Customize how and when you receive notifications",
      href: "/account/notifications",
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
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
    },
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      href: "/account/2fa",
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Account Settings
        </h1>
        <p className="text-foreground/70 mt-1">
          Manage your account preferences and security settings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsCategories.map((category, index) => (
          <Link href={category.href} key={index}>
            <Card className="p-6 border border-seance/20 hover:border-seance/30 hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-background border border-seance/20">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {category.description}
                  </p>
                </div>
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
                  className="text-foreground/50 self-center"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-background border border-seance/20 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Account Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-foreground/70 mb-1">
              Account Type
            </h3>
            <p className="text-foreground">Premium Plan</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground/70 mb-1">
              Member Since
            </h3>
            <p className="text-foreground">April 15, 2023</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground/70 mb-1">
              Last Login
            </h3>
            <p className="text-foreground">Today, 10:45 AM</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground/70 mb-1">
              Account Status
            </h3>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <p className="text-foreground">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

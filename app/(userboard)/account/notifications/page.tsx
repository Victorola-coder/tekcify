"use client";

import { useState } from "react";
import { Button, Card } from "@/app/components/ui";

export default function NotificationsPage() {
  // Notification preferences data
  const [emailPreferences, setEmailPreferences] = useState({
    accountUpdates: true,
    securityAlerts: true,
    productUpdates: true,
    newsletterAndPromotions: false,
    productTips: true,
    loginActivity: true,
    billingUpdates: true,
    apiUsage: false,
  });

  const [pushPreferences, setPushPreferences] = useState({
    accountUpdates: false,
    securityAlerts: true,
    productUpdates: false,
    productTips: false,
    loginActivity: true,
    billingUpdates: false,
    apiUsage: false,
  });

  const [notificationFrequency, setNotificationFrequency] = useState("daily");
  const [browserNotifications, setBrowserNotifications] = useState(true);
  const [mobileNotifications, setMobileNotifications] = useState(true);

  // Handle toggle change for email preferences
  const handleEmailToggle = (setting: keyof typeof emailPreferences) => {
    setEmailPreferences({
      ...emailPreferences,
      [setting]: !emailPreferences[setting],
    });
  };

  // Handle toggle change for push preferences
  const handlePushToggle = (setting: keyof typeof pushPreferences) => {
    setPushPreferences({
      ...pushPreferences,
      [setting]: !pushPreferences[setting],
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Email preferences saved:", emailPreferences);
    console.log("Push preferences saved:", pushPreferences);
    console.log("Notification frequency:", notificationFrequency);
    console.log("Browser notifications:", browserNotifications);
    console.log("Mobile notifications:", mobileNotifications);
    // Show success message or handle errors
  };

  // Notification categories
  const notificationCategories = [
    {
      id: "accountUpdates",
      title: "Account Updates",
      description: "Changes to your account settings and information",
    },
    {
      id: "securityAlerts",
      title: "Security Alerts",
      description: "Important security notifications about your account",
    },
    {
      id: "productUpdates",
      title: "Product Updates",
      description: "New features, improvements, and major updates",
    },
    {
      id: "newsletterAndPromotions",
      title: "Newsletter & Promotions",
      description: "News about Tekcify products and special offers",
    },
    {
      id: "productTips",
      title: "Product Tips & Best Practices",
      description: "Tips to help you get the most from Tekcify products",
    },
    {
      id: "loginActivity",
      title: "Login Activity",
      description: "Notifications about new logins to your account",
    },
    {
      id: "billingUpdates",
      title: "Billing Updates",
      description: "Invoices, payment confirmations, and plan changes",
    },
    {
      id: "apiUsage",
      title: "API Usage & Limits",
      description: "Updates on your API usage and approaching limits",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Notification Preferences
        </h1>
        <p className="text-foreground/70 mt-1">
          Manage how and when we contact you
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-seance/20 p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Notification Settings
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-seance/20">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-3 py-3 text-center text-xs font-medium text-foreground/70 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-3 py-3 text-center text-xs font-medium text-foreground/70 uppercase tracking-wider">
                        Push
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-seance/20">
                    {notificationCategories.map((category) => (
                      <tr key={category.id}>
                        <td className="px-3 py-4">
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {category.title}
                            </p>
                            <p className="text-xs text-foreground/70 mt-1">
                              {category.description}
                            </p>
                          </div>
                        </td>
                        <td className="px-3 py-4 text-center">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={
                                emailPreferences[
                                  category.id as keyof typeof emailPreferences
                                ]
                              }
                              onChange={() =>
                                handleEmailToggle(
                                  category.id as keyof typeof emailPreferences
                                )
                              }
                              className="sr-only peer"
                            />
                            <div className="w-9 h-5 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purpleHeart"></div>
                          </label>
                        </td>
                        <td className="px-3 py-4 text-center">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={
                                pushPreferences[
                                  category.id as keyof typeof pushPreferences
                                ]
                              }
                              onChange={() =>
                                handlePushToggle(
                                  category.id as keyof typeof pushPreferences
                                )
                              }
                              className="sr-only peer"
                            />
                            <div className="w-9 h-5 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purpleHeart"></div>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-foreground mb-4">
                  Notification Frequency
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="freq-realtime"
                      name="frequency"
                      type="radio"
                      value="realtime"
                      checked={notificationFrequency === "realtime"}
                      onChange={() => setNotificationFrequency("realtime")}
                      className="h-4 w-4 text-purpleHeart border-foreground/30 focus:ring-purpleHeart"
                    />
                    <label
                      htmlFor="freq-realtime"
                      className="ml-3 text-sm text-foreground"
                    >
                      Real-time
                      <p className="text-xs text-foreground/70 mt-0.5">
                        Receive notifications as events happen
                      </p>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="freq-daily"
                      name="frequency"
                      type="radio"
                      value="daily"
                      checked={notificationFrequency === "daily"}
                      onChange={() => setNotificationFrequency("daily")}
                      className="h-4 w-4 text-purpleHeart border-foreground/30 focus:ring-purpleHeart"
                    />
                    <label
                      htmlFor="freq-daily"
                      className="ml-3 text-sm text-foreground"
                    >
                      Daily digest
                      <p className="text-xs text-foreground/70 mt-0.5">
                        Receive a summary of notifications once per day
                      </p>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="freq-weekly"
                      name="frequency"
                      type="radio"
                      value="weekly"
                      checked={notificationFrequency === "weekly"}
                      onChange={() => setNotificationFrequency("weekly")}
                      className="h-4 w-4 text-purpleHeart border-foreground/30 focus:ring-purpleHeart"
                    />
                    <label
                      htmlFor="freq-weekly"
                      className="ml-3 text-sm text-foreground"
                    >
                      Weekly digest
                      <p className="text-xs text-foreground/70 mt-0.5">
                        Receive a summary of notifications once per week
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-seance/20">
                <Button
                  type="submit"
                  className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                >
                  Save Preferences
                </Button>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border border-seance/20 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Email Address
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/70">
                    Notifications are sent to:
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    victor@tekcify.com
                  </p>
                </div>
                <div>
                  <Button
                    variant="outline"
                    className="text-sm w-full border-seance/20 text-foreground"
                    onClick={() => (window.location.href = "/account/security")}
                  >
                    Change Email Address
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="border border-seance/20 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Push Notifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-foreground/70">
                    Browser notifications
                  </p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={browserNotifications}
                      onChange={() =>
                        setBrowserNotifications(!browserNotifications)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purpleHeart"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-foreground/70">Mobile app</p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mobileNotifications}
                      onChange={() =>
                        setMobileNotifications(!mobileNotifications)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purpleHeart"></div>
                  </label>
                </div>

                <p className="text-xs text-foreground/70 mt-2">
                  To manage system-level notifications on your device, please
                  check your browser or device settings.
                </p>
              </div>
            </Card>

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
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Stay Up to Date
                  </h3>
                  <p className="text-sm text-foreground/70">
                    We recommend keeping security alerts enabled to ensure
                    you're informed about important account activity.
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="text-sm border-seance/20 text-foreground"
                      onClick={() => (window.location.href = "/notifications")}
                    >
                      View Recent Notifications
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}

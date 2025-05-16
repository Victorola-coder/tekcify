"use client";

import { useState } from "react";
import { Button, Card } from "@/app/components/ui";

export default function NotificationSettingsPage() {
  // Notification settings state
  const [settings, setSettings] = useState({
    // Email notifications
    emailSystem: true,
    emailUpdates: true,
    emailAnnouncements: true,
    emailBilling: true,
    emailMarketing: false,

    // Push notifications
    pushSystem: true,
    pushUpdates: true,
    pushAnnouncements: false,
    pushBilling: true,

    // Product notifications
    binxUpdates: true,
    pdfxUpdates: true,
    campuxUpdates: true,

    // Frequency
    frequency: "daily",

    // Mobile app
    mobileAlerts: true,

    // SMS
    smsEnabled: false,
    smsNumber: "",
  });

  // Handle toggle change
  const handleToggle = (setting: string) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting as keyof typeof settings],
    });
  };

  // Handle select change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      frequency: e.target.value,
    });
  };

  // Handle save settings
  const handleSaveSettings = () => {
    // In a real app, this would make an API call to save settings
    console.log("Saving notification settings:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Notification Settings
        </h1>
        <p className="text-foreground/70 mt-1">
          Manage how and when you receive notifications from Tekcify
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Email Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">System Alerts</p>
                <p className="text-sm text-foreground/70">
                  Important system notifications, security alerts, and
                  maintenance updates
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailSystem}
                  onChange={() => handleToggle("emailSystem")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">Product Updates</p>
                <p className="text-sm text-foreground/70">
                  New features, improvements, and changes to our products
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailUpdates}
                  onChange={() => handleToggle("emailUpdates")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">
                  Company Announcements
                </p>
                <p className="text-sm text-foreground/70">
                  News, events, and important company updates
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailAnnouncements}
                  onChange={() => handleToggle("emailAnnouncements")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">Billing & Account</p>
                <p className="text-sm text-foreground/70">
                  Invoices, payment confirmations, and account changes
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailBilling}
                  onChange={() => handleToggle("emailBilling")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">
                  Marketing & Promotions
                </p>
                <p className="text-sm text-foreground/70">
                  Special offers, promotions, and marketing communications
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailMarketing}
                  onChange={() => handleToggle("emailMarketing")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Push Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">System Alerts</p>
                <p className="text-sm text-foreground/70">
                  Important system notifications and security alerts
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.pushSystem}
                  onChange={() => handleToggle("pushSystem")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">Product Updates</p>
                <p className="text-sm text-foreground/70">
                  New features and improvements to our products
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.pushUpdates}
                  onChange={() => handleToggle("pushUpdates")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">Announcements</p>
                <p className="text-sm text-foreground/70">
                  Company news and announcements
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.pushAnnouncements}
                  onChange={() => handleToggle("pushAnnouncements")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">
                  Billing Notifications
                </p>
                <p className="text-sm text-foreground/70">
                  Payment reminders and billing alerts
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.pushBilling}
                  onChange={() => handleToggle("pushBilling")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>
          </div>
        </Card>

        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Product-Specific Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">Binx AI Updates</p>
                <p className="text-sm text-foreground/70">
                  Feature updates and improvements for Binx AI
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.binxUpdates}
                  onChange={() => handleToggle("binxUpdates")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">PDFx Updates</p>
                <p className="text-sm text-foreground/70">
                  Feature updates and improvements for PDFx
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.pdfxUpdates}
                  onChange={() => handleToggle("pdfxUpdates")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">CAMPUX Updates</p>
                <p className="text-sm text-foreground/70">
                  Feature updates and improvements for CAMPUX
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.campuxUpdates}
                  onChange={() => handleToggle("campuxUpdates")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
              </label>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-seance/20 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Notification Frequency
            </h2>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-foreground mb-2">
                Email digest frequency
              </label>
              <select
                value={settings.frequency}
                onChange={handleSelectChange}
                className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
              >
                <option value="realtime">Real-time (send immediately)</option>
                <option value="daily">Daily digest</option>
                <option value="weekly">Weekly digest</option>
                <option value="never">Do not send digests</option>
              </select>
              <p className="text-sm text-foreground/70 mt-2">
                This setting applies to non-critical notifications only.
                Important system alerts will always be sent immediately.
              </p>
            </div>
          </Card>

          <Card className="border border-seance/20 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Mobile Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">
                    Mobile App Notifications
                  </p>
                  <p className="text-sm text-foreground/70">
                    Receive notifications in the Tekcify mobile app
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.mobileAlerts}
                    onChange={() => handleToggle("mobileAlerts")}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">
                    SMS Notifications
                  </p>
                  <p className="text-sm text-foreground/70">
                    Receive critical alerts via SMS
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.smsEnabled}
                    onChange={() => handleToggle("smsEnabled")}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purpleHeart"></div>
                </label>
              </div>

              {settings.smsEnabled && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={settings.smsNumber}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        smsNumber: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
                  />
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            className="bg-purpleHeart hover:bg-purpleHeart/90 text-white px-8"
            onClick={handleSaveSettings}
          >
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}

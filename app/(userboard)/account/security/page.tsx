"use client";

import { useState } from "react";
import { Button, Card, Input } from "@/app/components/ui";

export default function SecurityPage() {
  // User security data
  const [emailData, setEmailData] = useState({
    currentEmail: "victor@tekcify.com",
    newEmail: "",
    confirmPassword: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // Handle email form change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle password form change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle email form submission
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Email change submitted:", emailData);
    // Show success message or handle errors
    setEmailData({
      ...emailData,
      newEmail: "",
      confirmPassword: "",
    });
  };

  // Handle password form submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Password change submitted:", passwordData);
    // Show success message or handle errors
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  // Last password change date (mock data)
  const lastPasswordChange = "July 15, 2023";

  // Recent logins (mock data)
  const recentLogins = [
    {
      device: "Chrome on macOS",
      location: "Lagos, Nigeria",
      time: "Today, 10:30 AM",
      status: "Current session",
    },
    {
      device: "Safari on iPhone",
      location: "Lagos, Nigeria",
      time: "Yesterday, 8:45 PM",
      status: "Active",
    },
    {
      device: "Firefox on Windows",
      location: "Abuja, Nigeria",
      time: "July 10, 2023",
      status: "Ended",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Email & Password
        </h1>
        <p className="text-foreground/70 mt-1">
          Manage your email address and password
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border border-seance/20 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Email Address
            </h2>
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="currentEmail"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Current Email
                </label>
                <Input
                  id="currentEmail"
                  name="currentEmail"
                  type="email"
                  value={emailData.currentEmail}
                  disabled
                />
              </div>

              <div>
                <label
                  htmlFor="newEmail"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  New Email
                </label>
                <Input
                  id="newEmail"
                  name="newEmail"
                  type="email"
                  placeholder="Enter your new email address"
                  value={emailData.newEmail}
                  onChange={handleEmailChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter your current password"
                  value={emailData.confirmPassword}
                  onChange={handleEmailChange}
                  required
                />
                <p className="text-xs text-foreground/60 mt-1">
                  We need your current password to verify your identity
                </p>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                  disabled={!emailData.newEmail || !emailData.confirmPassword}
                >
                  Update Email
                </Button>
              </div>
            </form>
          </Card>

          <Card className="border border-seance/20 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Change Password
            </h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label
                    htmlFor="currentPassword"
                    className="block text-sm font-medium text-foreground"
                  >
                    Current Password
                  </label>
                  <a
                    href="/reset-password"
                    className="text-xs text-purpleHeart hover:text-purpleHeart/90"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  placeholder="Enter your current password"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  New Password
                </label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="Enter your new password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmNewPassword"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Confirm New Password
                </label>
                <Input
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type="password"
                  placeholder="Confirm your new password"
                  value={passwordData.confirmNewPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div>
                <p className="text-sm text-foreground/70 mb-2">
                  Password requirements:
                </p>
                <ul className="list-disc list-inside text-xs text-foreground/70 space-y-1 pl-1">
                  <li>Minimum 8 characters long</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one number</li>
                  <li>At least one special character</li>
                </ul>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                  disabled={
                    !passwordData.currentPassword ||
                    !passwordData.newPassword ||
                    !passwordData.confirmNewPassword ||
                    passwordData.newPassword !== passwordData.confirmNewPassword
                  }
                >
                  Update Password
                </Button>
              </div>
            </form>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border border-seance/20 p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Password Information
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-foreground/70">Last changed</p>
                <p className="text-sm font-medium text-foreground">
                  {lastPasswordChange}
                </p>
              </div>
              <div>
                <p className="text-sm text-foreground/70">Password strength</p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="w-full bg-seance/10 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-green-600">
                    Strong
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border border-seance/20 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Recent Login Activity
              </h3>
              <a
                href="/activity/logins"
                className="text-xs text-purpleHeart hover:text-purpleHeart/90"
              >
                View all
              </a>
            </div>
            <div className="space-y-4">
              {recentLogins.map((login, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between border-b border-seance/10 last:border-b-0 pb-3 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {login.device}
                    </p>
                    <p className="text-xs text-foreground/70 mt-1">
                      {login.location} • {login.time}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      login.status === "Current session"
                        ? "bg-green-100 text-green-800"
                        : login.status === "Active"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-foreground/10 text-foreground/70"
                    }`}
                  >
                    {login.status}
                  </span>
                </div>
              ))}
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
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Enhanced Security
                </h3>
                <p className="text-sm text-foreground/70">
                  Enable two-factor authentication for an additional layer of
                  security on your account.
                </p>
                <Button
                  className="mt-4 bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                  onClick={() => (window.location.href = "/account/2fa")}
                >
                  Set Up 2FA
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button, Card, Input } from "@/app/components/ui";

export default function ProfilePage() {
  // User profile data
  const [formData, setFormData] = useState({
    firstName: "Victor",
    lastName: "Olaiya",
    displayName: "Victor Olaiya",
    email: "victor@tekcify.com",
    phoneNumber: "+234 (810) 800-0000",
    company: "Tekcify",
    jobTitle: "Software Engineer",
    bio: "Product manager with 5+ years of experience in SaaS platforms.",
    location: "Lagos, Nigeria",
    website: "https://johndoe.com",
  });

  // Handle form change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Form submitted:", formData);
    // Show success message or handle errors
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Profile Information
        </h1>
        <p className="text-foreground/70 mt-1">
          Update your personal details and profile photo
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border border-seance/20 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="displayName"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Display Name
                </label>
                <Input
                  id="displayName"
                  name="displayName"
                  placeholder="Enter your display name"
                  value={formData.displayName}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-foreground/60 mt-1">
                  This is how your name will appear across Tekcify products
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled
                />
                <p className="text-xs text-foreground/60 mt-1">
                  To change your email, please visit the Email & Password
                  settings
                </p>
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Job Title
                  </label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="Enter your job title"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent"
                  placeholder="Tell us about yourself"
                  value={formData.bio}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter your location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Website
                  </label>
                  <Input
                    id="website"
                    name="website"
                    placeholder="Enter your website URL"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </Card>
        </div>

        <div>
          <Card className="border border-seance/20 p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Profile Photo
            </h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-seance/10 flex items-center justify-center overflow-hidden border-2 border-seance/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-seance/40"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <button className="absolute bottom-0 right-0 bg-purpleHeart text-white rounded-full p-2 shadow-lg hover:bg-purpleHeart/90 transition-colors">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" x2="19" y1="8" y2="14" />
                    <line x1="22" x2="16" y1="11" y2="11" />
                  </svg>
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-foreground/70 mb-3">
                  Upload a photo (JPG, PNG, GIF)
                  <br />
                  Maximum size: 5MB
                </p>
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground hover:bg-seance/10"
                >
                  Upload Photo
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-seance/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Account Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="publicProfile"
                    className="h-4 w-4 text-purpleHeart rounded border-seance/20 focus:ring-purpleHeart"
                    defaultChecked
                  />
                  <label
                    htmlFor="publicProfile"
                    className="ml-2 text-sm text-foreground"
                  >
                    Make my profile public
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showEmail"
                    className="h-4 w-4 text-purpleHeart rounded border-seance/20 focus:ring-purpleHeart"
                  />
                  <label
                    htmlFor="showEmail"
                    className="ml-2 text-sm text-foreground"
                  >
                    Show my email to other users
                  </label>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

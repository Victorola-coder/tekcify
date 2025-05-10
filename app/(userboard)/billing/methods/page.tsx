"use client";

import { useState } from "react";
import { Card, Button } from "@/app/components/ui";
import Link from "next/link";

export default function PaymentMethodsPage() {
  const [showAddCard, setShowAddCard] = useState(false);

  // Sample payment methods data
  const paymentMethods = [
    {
      id: "pm_1234567890",
      type: "card",
      brand: "visa",
      last4: "4242",
      expMonth: 12,
      expYear: 2024,
      isDefault: true,
    },
    {
      id: "pm_0987654321",
      type: "card",
      brand: "mastercard",
      last4: "5555",
      expMonth: 8,
      expYear: 2025,
      isDefault: false,
    },
  ];

  // Get card icon based on brand
  const getCardIcon = (brand) => {
    switch (brand) {
      case "visa":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#1434CB"
            className="rounded"
          >
            <path d="M14.88 6H9.12C7.397 6 6 7.397 6 9.12v5.76c0 1.723 1.397 3.12 3.12 3.12h5.76c1.723 0 3.12-1.397 3.12-3.12V9.12C18 7.397 16.603 6 14.88 6zM15.2 9.33l-1.94.34a.48.48 0 00-.38.39l-.19 1.45h1.47l-.17 1.33h-1.5L12 15h-1.31l.49-2.16h-1l-.49 2.16h-1.31l.76-3.33h-.9l.17-1.33h.9L9.5 9.4c.05-.36.27-.73.51-.87s1.84-.37 1.84-.37h3.26l.09 1.17z" />
          </svg>
        );
      case "mastercard":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="8" cy="12" r="6" fill="#EB001B" />
            <circle cx="16" cy="12" r="6" fill="#F79E1B" />
            <path d="M12 16.5a6 6 0 000-9 6 6 0 000 9z" fill="#FF5F00" />
          </svg>
        );
      case "amex":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#2E77BC"
            className="rounded"
          >
            <path d="M5 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5zm11.414 4.836l2 2a1 1 0 010 1.328l-2 2-.664-.748 1.797-1.797-1.797-1.797.664-.986zM8.918 9h1.164l2 5h-1.234l-.505-1.25H7.739L7.234 14H6l2.918-5zm-1.039 3h1.621l-.8-2-.821 2zm5.121-3h1v4h2v1h-3V9z" />
          </svg>
        );
      default:
        return (
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
            className="text-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
        );
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Payment Methods
          </h1>
          <p className="text-foreground/70 mt-1">
            Manage your saved payment information
          </p>
        </div>
        <Button
          className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
          onClick={() => setShowAddCard(true)}
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
            <line x1="12" x2="12" y1="14" y2="18" />
            <line x1="10" x2="14" y1="16" y2="16" />
          </svg>
          Add Payment Method
        </Button>
      </div>

      {/* Saved Payment Methods */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">
          Saved Payment Methods
        </h2>

        {paymentMethods.length === 0 ? (
          <Card className="border border-seance/20 p-8 text-center">
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
              className="mx-auto text-foreground/30 mb-4"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
            <h3 className="text-lg font-medium text-foreground mb-2">
              No payment methods found
            </h3>
            <p className="text-foreground/70 text-sm max-w-md mx-auto mb-4">
              You haven't added any payment methods yet. Add a credit card or
              other payment method to make payments.
            </p>
            <Button
              className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
              onClick={() => setShowAddCard(true)}
            >
              Add Payment Method
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method) => (
              <Card
                key={method.id}
                className={`border p-6 ${
                  method.isDefault
                    ? "border-purpleHeart/40 bg-purpleHeart/5"
                    : "border-seance/20"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    {getCardIcon(method.brand)}
                    <div className="ml-4">
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-medium text-foreground capitalize">
                          {method.brand}
                        </p>
                        {method.isDefault && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purpleHeart/10 text-purpleHeart">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-foreground/70">
                        •••• •••• •••• {method.last4}
                      </p>
                      <p className="text-sm text-foreground/70 mt-1">
                        Expires {method.expMonth}/{method.expYear}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button className="text-sm text-purpleHeart hover:text-purpleHeart/80">
                      Edit
                    </button>
                    {!method.isDefault && (
                      <button className="text-sm text-foreground/70 hover:text-foreground">
                        Set as default
                      </button>
                    )}
                    <button className="text-sm text-red-500 hover:text-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              </Card>
            ))}

            {/* Add Payment Method Card */}
            <Card
              className="border border-dashed border-seance/20 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-seance/5 transition-colors"
              onClick={() => setShowAddCard(true)}
            >
              <div className="p-3 rounded-full bg-seance/10 mb-4">
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
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                  <line x1="12" x2="12" y1="14" y2="18" />
                  <line x1="10" x2="14" y1="16" y2="16" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Add New Payment Method
              </h3>
              <p className="text-sm text-foreground/70">
                Add a new credit card or payment method
              </p>
            </Card>
          </div>
        )}
      </div>

      {/* Add Payment Method Form (shown when showAddCard is true) */}
      {showAddCard && (
        <Card className="border border-seance/20 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              Add Payment Method
            </h2>
            <button
              className="text-foreground/70 hover:text-foreground"
              onClick={() => setShowAddCard(false)}
            >
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
              >
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="nameOnCard"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="nameOnCard"
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent"
              />
            </div>

            <div className="flex items-center">
              <input
                id="setDefault"
                type="checkbox"
                className="h-4 w-4 text-purpleHeart border-seance/20 rounded focus:ring-purpleHeart"
              />
              <label
                htmlFor="setDefault"
                className="ml-2 block text-sm text-foreground"
              >
                Set as default payment method
              </label>
            </div>

            <div className="pt-2 flex gap-3">
              <Button
                type="submit"
                className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
              >
                Add Payment Method
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-seance/20 text-foreground"
                onClick={() => setShowAddCard(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Payment Information */}
      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Billing Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-medium text-foreground mb-2">
              Billing Contact
            </h3>
            <div className="text-sm text-foreground/70 space-y-1">
              <p>Victor Olaiya</p>
              <p>victor@tekcify.com</p>
              <p>+234 (810) 800-0000</p>
            </div>
            <button className="text-sm text-purpleHeart hover:text-purpleHeart/80 mt-3">
              Edit contact information
            </button>
          </div>

          <div>
            <h3 className="text-base font-medium text-foreground mb-2">
              Billing Address
            </h3>
            <div className="text-sm text-foreground/70 space-y-1">
              <p>Tekcify, Inc.</p>
              <p>123 Tech Avenue</p>
              <p>Lagos, Nigeria 10001</p>
            </div>
            <button className="text-sm text-purpleHeart hover:text-purpleHeart/80 mt-3">
              Edit billing address
            </button>
          </div>
        </div>
      </Card>

      {/* Other Payment Options */}
      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Other Payment Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-seance/20 rounded-lg p-4 flex flex-col items-center text-center hover:bg-seance/5 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#0079C1"
              className="mb-3"
            >
              <path d="M9.101 11.13c0-1.26.772-2.27 2.006-2.27 1.284 0 2.007 1.01 2.007 2.269 0 1.344-.723 2.27-2.007 2.27-1.234 0-2.006-1.011-2.006-2.27zm-3.86-5.328H2v10.45h3.241v-10.45zm10.602 0h-3.804l-2.066 7.2h-.183l-1.965-7.2H4v10.45h3.241V8.79h.091l2.466 7.461h2.391L14.654 8.8h.091v7.453h3.241V5.802h-2.143zm8.071 0H20.67v10.45h3.241l.003-10.45z" />
            </svg>
            <h3 className="text-base font-medium text-foreground">
              Pay with PayPal
            </h3>
            <p className="text-xs text-foreground/70 mt-1">
              Connect your PayPal account
            </p>
          </div>

          <div className="border border-seance/20 rounded-lg p-4 flex flex-col items-center text-center hover:bg-seance/5 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-3 text-foreground"
            >
              <path d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z" />
            </svg>
            <h3 className="text-base font-medium text-foreground">
              Bank Transfer
            </h3>
            <p className="text-xs text-foreground/70 mt-1">
              Pay via direct bank transfer
            </p>
          </div>

          <div className="border border-seance/20 rounded-lg p-4 flex flex-col items-center text-center hover:bg-seance/5 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-3 text-foreground"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
            <h3 className="text-base font-medium text-foreground">
              Billing Invoice
            </h3>
            <p className="text-xs text-foreground/70 mt-1">
              Request an invoice for payment
            </p>
          </div>
        </div>
      </Card>

      {/* Security Information */}
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
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Your Payment Security
            </h3>
            <p className="text-sm text-foreground/70 mb-4">
              Your payment information is secure with us. We use encryption and
              comply with PCI DSS standards to protect your data.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-1 text-sm text-foreground/70">
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
                  className="text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-foreground/70">
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
                  className="text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-foreground/70">
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
                  className="text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Secure Processing</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

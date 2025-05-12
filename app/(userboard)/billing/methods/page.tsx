"use client";

import { useState } from "react";
import { Button, Card, Input } from "@/app/components/ui";

export default function PaymentMethodsPage() {
  // State for adding a new card
  const [showAddCard, setShowAddCard] = useState(false);
  const [newCard, setNewCard] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiryDate: "",
    cvc: "",
    setAsDefault: true,
  });

  // Payment methods
  const paymentMethods = [
    {
      id: "visa-1234",
      type: "visa",
      name: "Visa ending in 1234",
      expiry: "09/25",
      default: true,
      billingName: "Victor Smith",
      billingZip: "94107",
    },
    {
      id: "mastercard-5678",
      type: "mastercard",
      name: "Mastercard ending in 5678",
      expiry: "12/24",
      default: false,
      billingName: "Victor Smith",
      billingZip: "94107",
    },
  ];

  // Handle form input change
  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewCard({
      ...newCard,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding new card:", newCard);
    // In a real app, you would make an API call to save the card
    // Then update the UI with the new card
    setShowAddCard(false);
    setNewCard({
      cardNumber: "",
      nameOnCard: "",
      expiryDate: "",
      cvc: "",
      setAsDefault: true,
    });
  };

  // Toggle payment default
  const setDefaultPayment = (id: string) => {
    // In a real application, this would make an API call
    console.log(`Setting payment method ${id} as default`);
  };

  // Remove payment method
  const removePaymentMethod = (id: string) => {
    // In a real application, this would make an API call
    console.log(`Removing payment method ${id}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Payment Methods
          </h1>
          <p className="text-foreground/70 mt-1">
            Manage your payment methods and billing preferences
          </p>
        </div>
        <Button
          className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
          onClick={() => setShowAddCard(!showAddCard)}
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
          Add Payment Method
        </Button>
      </div>

      {showAddCard && (
        <Card className="border border-seance/20 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Add New Card
          </h2>
          <form onSubmit={handleAddCard} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Card Number
                </label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={newCard.cardNumber}
                  onChange={handleCardInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="nameOnCard"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Name on Card
                </label>
                <Input
                  id="nameOnCard"
                  name="nameOnCard"
                  type="text"
                  placeholder="John Doe"
                  value={newCard.nameOnCard}
                  onChange={handleCardInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Expiry Date
                </label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  value={newCard.expiryDate}
                  onChange={handleCardInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="cvc"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  CVC
                </label>
                <Input
                  id="cvc"
                  name="cvc"
                  type="text"
                  placeholder="123"
                  value={newCard.cvc}
                  onChange={handleCardInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="setAsDefault"
                name="setAsDefault"
                type="checkbox"
                checked={newCard.setAsDefault}
                onChange={handleCardInputChange}
                className="h-4 w-4 text-purpleHeart border-seance/20 rounded focus:ring-purpleHeart"
              />
              <label
                htmlFor="setAsDefault"
                className="ml-2 block text-sm text-foreground"
              >
                Set as default payment method
              </label>
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
              >
                Add Card
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

      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Your Payment Methods
        </h2>
        <div className="space-y-6">
          {paymentMethods.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-foreground/70">No payment methods found</p>
            </div>
          ) : (
            paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`border ${
                  method.default ? "border-purpleHeart/50" : "border-seance/20"
                } rounded-md p-6 ${method.default ? "bg-seance/5" : ""}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 flex items-center justify-center bg-background rounded border border-seance/20">
                      {method.type === "visa" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="10"
                          viewBox="0 0 32 10"
                          className="text-blue-600"
                        >
                          <path
                            fill="currentColor"
                            d="M11.551 1.051L7.65 9H5.15L3.251 2.436c-.115-.452-.217-.617-.57-.808C2.134 1.343 1.253 1.05 0.5 1v-.25h3.536c.45 0 .855.301.95.802L6.045 7.3 8.649.75h2.902zM16.899.75L14.5 9h-2.75l2.399-8.25h2.75zM24.8 6.1l.75-2.05.45 2.05H24.8zM28.45.75h-2.05c-.45 0-.85.3-.95.75l-3.35 7.5h2.75L25.6 7.3h2.8l.25 1.7h2.4L28.45.75zM13.35 3c0-1.1-.85-2.25-3-2.25-1.65 0-3.5.6-3.5 2.7 0 2.7 3.7 2.9 3.7.9 0-.35-.4-.55-.95-.55-.751 0-1.65.25-2.15.65l.4-1.9c.5-.25 1.3-.45 2.15-.45 1.1 0 1.6.35 1.6 1.05 0 1.75-3.9 1.5-3.9 4.45 0 .9.6 1.65 2.4 1.65 1.2 0 1.85-.25 2.3-.5l.4-1.9c-.55.3-1.3.55-2.15.55-.85 0-1.1-.3-1.1-.6.001-.95 3.8-.95 3.8-3.7z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="24"
                          viewBox="0 0 30 24"
                          className="scale-75"
                        >
                          <g fill="none">
                            <rect
                              width="30"
                              height="24"
                              fill="#252525"
                              rx="3"
                            ></rect>
                            <circle
                              cx="11"
                              cy="12"
                              r="7"
                              fill="#eb001b"
                            ></circle>
                            <circle
                              cx="19"
                              cy="12"
                              r="7"
                              fill="#f79e1b"
                            ></circle>
                            <path
                              fill="#ff5f00"
                              fillRule="evenodd"
                              d="M15 17a7 7 0 0 1 0-10 7 7 0 0 1 0 10Z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium text-foreground">
                          {method.name}
                        </p>
                        {method.default && (
                          <span className="ml-2 text-xs bg-purpleHeart/10 text-purpleHeart font-medium py-0.5 px-2 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="mt-1 space-x-3 text-sm text-foreground/70">
                        <span>Expires {method.expiry}</span>
                        <span>•</span>
                        <span>{method.billingName}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      className="border-seance/20 text-foreground"
                    >
                      Update Card
                    </Button>
                    {!method.default && (
                      <Button
                        variant="outline"
                        className="border-seance/20 text-foreground"
                        onClick={() => setDefaultPayment(method.id)}
                      >
                        Make Default
                      </Button>
                    )}
                    {!method.default && (
                      <Button
                        variant="outline"
                        className="border-red-300 text-red-600 hover:bg-red-50"
                        onClick={() => removePaymentMethod(method.id)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>

      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Billing Address
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">
              Current Billing Address
            </h3>
            <div className="text-sm text-foreground">
              <p>Victor Smith</p>
              <p>Tekcify Inc.</p>
              <p>123 Tech Street</p>
              <p>San Francisco, CA 94107</p>
              <p>United States</p>
            </div>
            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                className="border-seance/20 text-foreground"
              >
                Edit
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">
              Billing Email
            </h3>
            <p className="text-sm text-foreground mb-2">
              Invoices and payment receipts will be sent to:
            </p>
            <p className="text-sm font-medium text-foreground">
              victor@tekcify.com
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                className="border-seance/20 text-foreground"
              >
                Update Email
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border border-seance/20 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Payment Security
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
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
                className="text-purpleHeart"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <h3 className="text-lg font-medium text-foreground">
                Secure Processing
              </h3>
            </div>
            <p className="text-sm text-foreground/70">
              Your payment information is securely processed and never stored on
              our servers. We use industry-standard encryption for all
              transactions.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
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
                className="text-purpleHeart"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <h3 className="text-lg font-medium text-foreground">
                PCI Compliance
              </h3>
            </div>
            <p className="text-sm text-foreground/70">
              We adhere to Payment Card Industry Data Security Standards (PCI
              DSS) to ensure your payment data is managed with the highest
              security standards.
            </p>
          </div>
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
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Need Other Payment Options?
            </h3>
            <p className="text-sm text-foreground/70">
              If you need to use alternative payment methods such as PayPal,
              wire transfers, or purchase orders, please contact our billing
              team.
            </p>
            <Button
              className="mt-4 bg-purpleHeart hover:bg-purpleHeart/90 text-white"
              onClick={() => (window.location.href = "/support/ticket")}
            >
              Contact Billing Support
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

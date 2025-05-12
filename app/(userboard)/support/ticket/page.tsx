"use client";

import { useState } from "react";
import { Button, Card, Input } from "@/app/components/ui";

export default function ContactSupportPage() {
  // Form state
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "general",
    product: "none",
    priority: "normal",
    message: "",
    attachments: [] as File[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Common issues
  const commonIssues = [
    {
      title: "Account Access Issues",
      description: "Login problems, password reset, or 2FA setup",
      link: "/support/help#account-access"
    },
    {
      title: "Billing Questions",
      description: "Subscription changes, payment methods, or invoices",
      link: "/support/help#billing-questions"
    },
    {
      title: "Product Functionality",
      description: "Feature questions or guidance on using our products",
      link: "/support/help#product-functionality"
    },
    {
      title: "Technical Issues",
      description: "API errors, integration problems, or performance issues",
      link: "/support/help#technical-issues"
    }
  ];

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTicketForm({
      ...ticketForm,
      [name]: value
    });
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setTicketForm({
        ...ticketForm,
        attachments: [...ticketForm.attachments, ...newFiles].slice(0, 5) // Limit to 5 files
      });
    }
  };

  // Remove attachment
  const removeAttachment = (index: number) => {
    const updatedAttachments = [...ticketForm.attachments];
    updatedAttachments.splice(index, 1);
    setTicketForm({
      ...ticketForm,
      attachments: updatedAttachments
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Submitted ticket:", ticketForm);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setTicketForm({
        subject: "",
        category: "general",
        product: "none",
        priority: "normal",
        message: "",
        attachments: []
      });
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Contact Support
        </h1>
        <p className="text-foreground/70 mt-1">
          Submit a support ticket and our team will assist you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {isSubmitted ? (
            <Card className="border border-seance/20 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
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
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Ticket Submitted Successfully
              </h2>
              <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                Thank you for contacting us. Your ticket has been received and our
                support team will respond to you shortly. You'll receive an email
                notification when we reply.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  className="border-seance/20 text-foreground"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Ticket
                </Button>
                <Button
                  className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                  onClick={() => window.location.href = "/support/history"}
                >
                  View Ticket History
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="border border-seance/20 p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Submit a Support Ticket
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Briefly describe your issue"
                    value={ticketForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label 
                      htmlFor="category" 
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={ticketForm.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="account">Account Issues</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="technical">Technical Support</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      htmlFor="product" 
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Product
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={ticketForm.product}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
                    >
                      <option value="none">Not Product Specific</option>
                      <option value="binx">Binx AI</option>
                      <option value="campux">CAMPUX</option>
                      <option value="pdfx">PDFx</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      htmlFor="priority" 
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Priority
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={ticketForm.priority}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart"
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Please provide as much detail as possible about your issue..."
                    value={ticketForm.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-seance/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-purpleHeart resize-none"
                  ></textarea>
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Attachments (Optional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-seance/20 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-foreground/30"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-foreground/70">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-purpleHeart hover:text-purpleHeart/80 focus-within:outline-none"
                        >
                          <span>Upload files</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            multiple
                            onChange={handleFileUpload}
                            accept=".jpg,.png,.pdf,.doc,.docx,.txt"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-foreground/70">
                        PNG, JPG, PDF, DOC up to 10MB (max 5 files)
                      </p>
                    </div>
                  </div>
                  
                  {ticketForm.attachments.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium text-foreground">
                        Uploaded Files:
                      </p>
                      <ul className="space-y-2">
                        {ticketForm.attachments.map((file, index) => (
                          <li 
                            key={index}
                            className="flex items-center justify-between text-sm bg-seance/5 p-2 rounded-md"
                          >
                            <span className="truncate max-w-xs">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeAttachment(index)}
                              className="text-red-500 hover:text-red-700"
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
                              >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Ticket"
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card className="border border-seance/20 p-6">
            <h2 className="text-lg font-medium text-foreground mb-4">
              Common Issues
            </h2>
            <p className="text-sm text-foreground/70 mb-4">
              Check if your issue is covered in our help articles before creating a ticket.
            </p>
            <div className="space-y-4">
              {commonIssues.map((issue, index) => (
                <a
                  key={index}
                  href={issue.link}
                  className="block p-3 border border-seance/20 rounded-md hover:bg-seance/5 transition-colors"
                >
                  <h3 className="text-sm font-medium text-foreground">{issue.title}</h3>
                  <p className="text-xs text-foreground/70 mt-1">{issue.description}</p>
                </a>
              ))}
            </div>
          </Card>

          <Card className="border border-seance/20 p-6">
            <h2 className="text-lg font-medium text-foreground mb-4">
              Support Hours
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground">Monday - Friday:</span>
                <span className="text-foreground/70">9:00 AM - 8:00 PM ET</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Saturday:</span>
                <span className="text-foreground/70">10:00 AM - 6:00 PM ET</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Sunday:</span>
                <span className="text-foreground/70">Closed</span>
              </div>
              <div className="pt-3 border-t border-seance/20 mt-3">
                <p className="text-foreground/70">
                  Priority and Enterprise customers receive 24/7 support.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border border-seance/20 p-6">
            <h2 className="text-lg font-medium text-foreground mb-4">
              Response Times
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground">Urgent:</span>
                <span className="text-foreground/70">< 2 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">High:</span>
                <span className="text-foreground/70">< 4 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Normal:</span>
                <span className="text-foreground/70">< 24 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Low:</span>
                <span className="text-foreground/70">< 48 hours</span>
              </div>
            </div>
          </Card>

          <Card className="border border-seance/20 p-6 bg-seance/5">
            <h2 className="text-lg font-medium text-foreground mb-4">
              Need Urgent Help?
            </h2>
            <p className="text-sm text-foreground/70 mb-4">
              For critical issues that require immediate assistance, please call our emergency support line.
            </p>
            <div className="flex items-center gap-2 text-purpleHeart font-medium">
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>(888) 123-4567</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 
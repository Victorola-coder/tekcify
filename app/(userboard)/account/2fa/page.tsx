"use client";

import { useState } from "react";
import { Button, Card, Input } from "@/app/components/ui";

export default function TwoFactorAuthPage() {
  // 2FA states
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [setupStep, setSetupStep] = useState(0);
  const [verificationCode, setVerificationCode] = useState("");
  const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);

  // Handle enabling 2FA
  const handleEnable2FA = () => {
    setSetupStep(1);
    // In a real app, you'd make an API call to generate QR code and backup codes
    generateMockRecoveryCodes();
  };

  // Handle disabling 2FA
  const handleDisable2FA = () => {
    setIs2FAEnabled(false);
    setSetupStep(0);
  };

  // Handle verification code submission
  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd validate the code with your backend
    if (verificationCode.length === 6) {
      setIs2FAEnabled(true);
      setSetupStep(2);
    }
  };

  // Generate mock recovery codes
  const generateMockRecoveryCodes = () => {
    const codes = [];
    for (let i = 0; i < 8; i++) {
      codes.push(
        `${Math.random().toString(36).substring(2, 7)}-${Math.random()
          .toString(36)
          .substring(2, 7)}`
      );
    }
    setRecoveryCodes(codes);
  };

  // Handle downloading recovery codes
  const handleDownloadCodes = () => {
    const codesText = recoveryCodes.join("\n");
    const blob = new Blob([codesText], { type: "text/plain" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "tekcify-recovery-codes.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Two-Factor Authentication
        </h1>
        <p className="text-foreground/70 mt-1">
          Add an extra layer of security to your account
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {setupStep === 0 && !is2FAEnabled && (
            <Card className="border border-seance/20 p-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-4 rounded-full bg-seance/10 mb-4">
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
                    className="text-purpleHeart"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Two-Factor Authentication is Not Enabled
                </h2>
                <p className="text-foreground/70 max-w-md mb-6">
                  Two-factor authentication adds an extra layer of security to
                  your account by requiring more than just a password to log in.
                </p>
                <Button
                  className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                  onClick={handleEnable2FA}
                >
                  Enable Two-Factor Authentication
                </Button>
              </div>
            </Card>
          )}

          {setupStep === 1 && (
            <Card className="border border-seance/20 p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Set Up Two-Factor Authentication
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium text-foreground mb-2">
                    1. Scan QR Code
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    Scan this QR code with your authentication app (like Google
                    Authenticator, Authy, or 1Password).
                  </p>
                  <div className="flex justify-center p-4 bg-white w-48 h-48 mx-auto border border-seance/20">
                    <div className="bg-seance/5 w-full h-full flex items-center justify-center">
                      <p className="text-xs text-foreground/70">
                        [QR Code Placeholder]
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-medium text-foreground mb-2">
                    2. Enter Verification Code
                  </h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    Enter the 6-digit code from your authentication app to
                    verify setup.
                  </p>
                  <form onSubmit={handleVerifyCode} className="space-y-4">
                    <Input
                      value={verificationCode}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setVerificationCode(e.target.value)
                      }
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      className="max-w-xs font-mono text-lg tracking-widest"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                      disabled={verificationCode.length !== 6}
                    >
                      Verify Code
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          )}

          {setupStep === 2 && (
            <Card className="border border-seance/20 p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Recovery Codes
              </h2>
              <div className="space-y-4">
                <p className="text-sm text-foreground/70">
                  Save these recovery codes in a secure place. You can use these
                  codes to access your account if you lose your authentication
                  device.
                </p>
                <div className="grid grid-cols-2 gap-2 p-4 bg-seance/5 rounded-md font-mono text-sm">
                  {recoveryCodes.map((code, index) => (
                    <div key={index} className="text-foreground">
                      {code}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    className="bg-purpleHeart hover:bg-purpleHeart/90 text-white"
                    onClick={handleDownloadCodes}
                  >
                    Download Codes
                  </Button>
                  <Button
                    variant="outline"
                    className="border-seance/20 text-foreground"
                    onClick={() => setSetupStep(3)}
                  >
                    I've Saved These Codes
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {(setupStep === 3 || is2FAEnabled) && (
            <Card className="border border-seance/20 p-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
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
                    className="text-green-600 dark:text-green-400"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Two-Factor Authentication is Enabled
                </h2>
                <p className="text-foreground/70 max-w-md mb-6">
                  Your account is now more secure. You'll need to enter a
                  verification code when you sign in.
                </p>
                <Button
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/30"
                  onClick={handleDisable2FA}
                >
                  Disable Two-Factor Authentication
                </Button>
              </div>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card className="border border-seance/20 p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Authentication Methods
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Authenticator App
                  </p>
                  <p className="text-xs text-foreground/70">
                    Google Authenticator, Authy, etc.
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
                  className={
                    is2FAEnabled ? "text-green-600" : "text-foreground/30"
                  }
                >
                  {is2FAEnabled ? (
                    <path d="M20 6 9 17l-5-5" />
                  ) : (
                    <circle cx="12" cy="12" r="10" />
                  )}
                </svg>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-seance/10">
                <div>
                  <p className="text-sm font-medium text-foreground opacity-50">
                    SMS Authentication
                  </p>
                  <p className="text-xs text-foreground/70 opacity-50">
                    Receive codes via text message
                  </p>
                </div>
                <span className="text-xs bg-foreground/10 text-foreground/70 px-2 py-1 rounded">
                  Coming Soon
                </span>
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Account Security Tips
                </h3>
                <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                  <li>Never share your 2FA codes with anyone</li>
                  <li>Store recovery codes in a secure location</li>
                  <li>Update your authentication app regularly</li>
                  <li>Use a strong, unique password for your account</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Welcome to Tekcify Dashboard
        </h1>
        <p className="text-base md:text-lg text-foreground/80">
          A centralized dashboard for managing all Tekcify products
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background border border-seance/20 p-6 rounded-lg transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">Binx AI</h2>
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
                <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z" />
                <path d="M10.2 7a26.4 26.4 0 0 0-3.9 4.9c-.7 1.3-1.1 2.7-1 4.1.1 1.5.8 3 2 4 1.3 1 3 1.2 4.8.8 1.8-.4 3.7-1.4 5.5-2.8 1.8-1.5 3.2-3.3 4-5.1.7-1.8.8-3.5 0-4.9a5 5 0 0 0-3.9-2" />
                <path d="M9.3 18s.3-2.5 2.3-3.5c2-1 3.7-.4 3.7-.4" />
                <path d="M13.8 7.8a15.5 15.5 0 0 1 5.5 2.3c1.4.8 2.7 1.9 3.4 3 .8 1 1 2 .9 2.8a6 6 0 0 1-1.2 2.6" />
              </svg>
            </div>
            <p className="text-foreground/80 mb-4">
              Your WhatsApp AI assistant. Chat, search, and get things done
              without app switching.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium bg-purpleHeart/10 text-purpleHeart px-3 py-1 rounded-full">
                Active
              </span>
              <a
                href="/dashboard/binx"
                className="text-sm text-purpleHeart hover:text-purpleHeart/80 font-medium flex items-center gap-1"
              >
                Manage
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
              </a>
            </div>
          </div>

          <div className="bg-background border border-seance/20 p-6 rounded-lg transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">CAMPUX</h2>
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
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <p className="text-foreground/80 mb-4">
              Campus management platform. Streamline your educational
              institution operations.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium bg-seance/10 text-seance px-3 py-1 rounded-full">
                Active
              </span>
              <a
                href="/dashboard/campux"
                className="text-sm text-purpleHeart hover:text-purpleHeart/80 font-medium flex items-center gap-1"
              >
                Manage
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
              </a>
            </div>
          </div>

          <div className="bg-background border border-seance/20 p-6 rounded-lg transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">PDFx</h2>
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <p className="text-foreground/80 mb-4">
              PDF management and processing. Summarize, extract, and analyze
              your documents.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium bg-purpleHeart/10 text-purpleHeart px-3 py-1 rounded-full">
                Active
              </span>
              <a
                href="/dashboard/pdfx"
                className="text-sm text-purpleHeart hover:text-purpleHeart/80 font-medium flex items-center gap-1"
              >
                Manage
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
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-background border border-seance/20 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purpleHeart/10 flex items-center justify-center text-purpleHeart">
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
                  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z" />
                  <path d="M10.2 7a26.4 26.4 0 0 0-3.9 4.9c-.7 1.3-1.1 2.7-1 4.1.1 1.5.8 3 2 4 1.3 1 3 1.2 4.8.8 1.8-.4 3.7-1.4 5.5-2.8 1.8-1.5 3.2-3.3 4-5.1.7-1.8.8-3.5 0-4.9a5 5 0 0 0-3.9-2" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-medium">
                  Binx AI processed 120 messages
                </p>
                <p className="text-sm text-foreground/70">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-seance/10 flex items-center justify-center text-seance">
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-medium">
                  PDFx processed 3 documents
                </p>
                <p className="text-sm text-foreground/70">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purpleHeart/10 flex items-center justify-center text-purpleHeart">
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
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-medium">
                  Account login from new device
                </p>
                <p className="text-sm text-foreground/70">Yesterday</p>
              </div>
            </div>
          </div>
          <a
            href="/activity"
            className="text-sm text-purpleHeart hover:text-purpleHeart/80 font-medium flex items-center gap-1 mt-4"
          >
            View all activity
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
          </a>
        </section>

        <section className="bg-background border border-seance/20 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Usage Summary
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">
                  Binx AI Tokens
                </span>
                <span className="text-sm text-foreground/70">75%</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">
                  PDFx Storage
                </span>
                <span className="text-sm text-foreground/70">40%</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-seance h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">
                  CAMPUX Users
                </span>
                <span className="text-sm text-foreground/70">90%</span>
              </div>
              <div className="w-full bg-seance/10 rounded-full h-2">
                <div
                  className="bg-purpleHeart h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
          <a
            href="/billing/usage"
            className="text-sm text-purpleHeart hover:text-purpleHeart/80 font-medium flex items-center gap-1 mt-4"
          >
            View detailed usage
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
          </a>
        </section>
      </div>
    </div>
  );
}

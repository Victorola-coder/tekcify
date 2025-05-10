export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container py-12 space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Tekcify Dashboard
          </h1>
          <p className="text-lg text-foreground/80">
            A centralized dashboard for managing all Tekcify products
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background border border-seance/20 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-2">Binx AI</h2>
            <p className="text-foreground/80">
              Manage your AI assistant and view analytics
            </p>
          </div>

          <div className="bg-background border border-seance/20 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-2">CAMPUX</h2>
            <p className="text-foreground/80">
              Campus management and student resources
            </p>
          </div>

          <div className="bg-background border border-seance/20 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-2">PDFx</h2>
            <p className="text-foreground/80">
              PDF management and processing tools
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { MobileBottomNav } from "./MobileBottomNav";
import { AnnouncementBar } from "./AnnouncementBar";

export function Layout({ children, showAnnouncement = true }: { children: ReactNode; showAnnouncement?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      {showAnnouncement && <AnnouncementBar />}
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <MobileBottomNav />
    </div>
  );
}

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919000000000?text=Hello%20MLA%20Office"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elegant transition-transform hover:scale-110 md:bottom-6 md:right-6"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-whatsapp" />
    </a>
  );
}

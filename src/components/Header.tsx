import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#process", label: "How It Works" },
  { href: "#agents", label: "AI Agents" },
  { href: "#pricing", label: "Pricing" },
  { href: "#custom", label: "Solutions" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-black/[0.06]">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-12">
        {/* Logo */}
        <a href="#" className="text-[17px] font-semibold text-foreground tracking-tight shrink-0">
          HireStack
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <Button
            asChild
            size="sm"
            className="rounded-full px-5 text-[13px] h-8 font-medium"
          >
            <a href="#custom">Talk to Sales</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground/60 hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-black/[0.06] px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[15px] text-foreground/70 hover:text-foreground py-2.5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <Button asChild size="sm" className="w-full rounded-full text-[14px] h-10 font-medium">
              <a href="#custom" onClick={() => setMobileOpen(false)}>Talk to Sales</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

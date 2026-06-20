"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(80);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-50 flex justify-center px-0 md:px-4",
        "transition-[top] duration-300 ease-out",
        scrolled && !open ? "top-0 md:top-4" : "top-2",
      )}
    >
      <header
        className={cn(
          "w-full max-w-7xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out",
          scrolled && !open &&
            "bg-background/95 supports-[backdrop-filter]:bg-background/80 border-border backdrop-blur-lg md:max-w-6xl md:shadow",
          open && "bg-background/95",
        )}
      >
        <nav
          className={cn(
            "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
            scrolled && "md:px-2",
          )}
        >
          {/* Logo — white on hero, flips dark when scrolled */}
          <a href="#top" className="flex items-center self-center leading-none -translate-y-1">
            <img
              src="/logo-sitespark.png"
              alt="SiteSpark"
              className="block h-7 w-auto sm:h-8 transition-[filter] duration-300"
              style={{ filter: scrolled ? "brightness(0)" : "none" }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link, i) => (
              <a
                key={i}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  !scrolled && "text-white hover:text-white hover:bg-white/10",
                )}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: scrolled ? "default" : "outline" }),
                !scrolled && "border-white/60 text-white bg-transparent hover:bg-white/10 hover:text-white",
              )}
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            className={cn(
              "md:hidden",
              !scrolled && !open && "border-white/60 text-white hover:bg-white/10 hover:text-white",
            )}
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y",
            "bg-background/95 backdrop-blur-lg md:hidden",
            open ? "block" : "hidden",
          )}
        >
          <div
            data-slot={open ? "open" : "closed"}
            className={cn(
              "data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 ease-out",
              "data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95",
              "flex h-full w-full flex-col justify-between gap-y-2 p-4",
            )}
          >
            <div className="grid gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className={buttonVariants({ variant: "ghost", className: "justify-start" })}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "default" }), "w-full justify-center")}
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

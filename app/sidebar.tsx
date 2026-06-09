"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layers,
  LayoutDashboard,
  TextQuote,
  FileCheck,
  ReceiptText,
  ListCheck,
  Moon,
  Sun,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { href: "/", label: "Tableau de bord", icon: LayoutDashboard },
    { href: "/devis", label: "Devis", icon: TextQuote },
    { href: "/factures", label: "Factures", icon: FileCheck },
    { href: "/contrats", label: "Contrats", icon: ReceiptText },
    { href: "/livrables", label: "Livrables", icon: ListCheck },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-screen bg-sidebar border-r border-sidebar-border z-50 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      {/* Header avec logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link
          href="/"
          className="flex items-center gap-3 text-foreground hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-primary rounded-lg shrink-0">
            <Layers className="w-6 h-6 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <h1 className="font-bold text-xl tracking-tight">ZENO</h1>
              <p className="text-xs text-muted-foreground">Suivi de projets</p>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent",
              )}
            >
              <div
                className={cn(
                  "p-1.5 rounded-md transition-colors",
                  isActive
                    ? "bg-primary-foreground/20"
                    : "bg-sidebar-accent group-hover:bg-primary/10",
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground group-hover:text-primary",
                  )}
                />
              </div>
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
              {isActive && !isCollapsed && (
                <ChevronRight className="w-4 h-4 ml-auto text-primary-foreground/60" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Section inférieure */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
        {/* Toggle Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className={cn(
            "flex items-center gap-3 w-full px-3 py-3 rounded-lg transition-colors",
            "bg-sidebar-accent text-sidebar-foreground hover:bg-sidebar-accent/80",
          )}
        >
          <div className="p-1.5 rounded-md bg-sidebar-accent">
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-muted-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
          {!isCollapsed && (
            <span className="font-medium">
              {isDarkMode ? "Mode clair" : "Mode sombre"}
            </span>
          )}
        </button>

        {/* Toggle Sidebar */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 p-1.5 bg-primary rounded-full border border-sidebar-border shadow-lg hover:bg-primary/90 transition-colors"
          aria-label={
            isCollapsed
              ? "Étendre la barre latérale"
              : "Réduire la barre latérale"
          }
        >
          <ChevronRight
            className={cn(
              "w-4 h-4 text-primary-foreground transition-transform",
              isCollapsed ? "" : "rotate-180",
            )}
          />
        </button>
      </div>
    </aside>
  );
}

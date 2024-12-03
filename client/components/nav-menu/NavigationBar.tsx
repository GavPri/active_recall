"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import React, { useState } from "react";

// links to map through

const navLinks = [
  { name: "Sign Up", href: "signup" },
  { name: "Login", href: "login" },
];

const NavigationBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="w-full h-24 shadow-sm flex justify-between items-center px-4">
      <Link href="/">
        <p className="text-xl font-mono tracking-wider font-thin text-muted-foreground">
          <span className="italic font-bold text-foreground">A</span>ctive{" "}
          <span className="italic font-bold text-foreground">R</span>ecall
        </p>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex md:flex-row md:items-center">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.name}>
              <Link href={link.href}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationBar;

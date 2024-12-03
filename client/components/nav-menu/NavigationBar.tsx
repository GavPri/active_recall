"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

// links to map through

const navLinks = [
  { name: "Sign Up", href: "signup" },
  { name: "Login", href: "login" },
];

const NavigationBar = () => {
  return (
    <div className="w-full h-24 shadow-sm flex justify-between items-center px-4">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center">
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

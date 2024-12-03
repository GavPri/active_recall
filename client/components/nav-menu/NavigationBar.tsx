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
  {name : 'Sign Up', href: 'signup'},
  {name: 'Login', href: 'login'}
]

const NavigationBar = () => {
  return (
    <div className="w-full h-24 shadow-sm">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sign Up
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationBar;

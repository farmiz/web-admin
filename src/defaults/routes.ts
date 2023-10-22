import React from "react";
import { UserRole } from "../store/userSlice/types";
import VerifyAccount from "../pages/auth/VerifyAccount";
import {
  LayoutDashboard,
  LucideCompass,
  User,
  UserCircleIcon,
  WalletIcon,
  ShieldQuestionIcon,
  SettingsIcon,
  ArrowLeftRight,
  HeartHandshake,
} from "lucide-react";
import Login from "@/pages/auth/Login";
import Users from "@/pages/users";
import Dashboard from "@/pages/dashboard";
import CreateUser from "@/pages/users/create";
import CreateDiscovery from "@/pages/discoveries/CreateDiscoveryScreen";
import Discovery from "@/pages/discoveries/DiscoveryListScreen";
import Example from "@/pages/Example";

export interface RoutesProps {
  url: string;
  permission?: [];
  requireAuth: boolean;
  allowedRoles?: UserRole[];
  meta?: Record<string, string>;
  component: React.FC;
}
export const routes: RoutesProps[] = [
  {
    url: "/users",
    requireAuth: false,
    component: Example,
  },
  {
    url: "/verify/email",
    requireAuth: false,
    component: VerifyAccount,
  },
  {
    url: "/",
    requireAuth: true,
    component: Dashboard,
  },
  {
    url: "/auth/login",
    requireAuth: false,
    component: Login,
  },
  {
    url: "/users",
    requireAuth: true,
    component: Users,
  },
  {
    url: "/users/create",
    requireAuth: true,
    component: CreateUser,
  },
  {
    url: "/discoveries/create",
    requireAuth: true,
    component: CreateDiscovery,
  },
  {
    url: "/discoveries",
    requireAuth: true,
    component: Discovery,
  },
];

export const menuSidebarRoutes = {
  title: "Menu",
  routeLinks: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      url: "/users",
      icon: User,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: UserCircleIcon,
    },
    {
      title: "Discoveries",
      url: "/discoveries",
      icon: LucideCompass,
    },
    {
      title: "Wallets",
      url: "/wallets",
      icon: WalletIcon,
    },

    {
      title: "Transactions",
      url: "/transactions",
      icon: ArrowLeftRight,
    },
    {
      title: "Sponsorships",
      url: "/sponsorshipa",
      icon: HeartHandshake,
    },
  ],
};
export const generalSidebarRoutes = {
  title: "General",
  routeLinks: [
    {
      title: "Support",
      url: "/support",
      icon: ShieldQuestionIcon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
  ],
};

import * as React from "react"
import { Link } from 'react-router-dom';
import {
  House,
  BriefcaseBusiness,
  Warehouse,
  Frame,

  Map,
  PieChart,
  CarFront,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Rentals",
      url: "#",
      icon: House,
      isActive: true,
      items: [
        {
          title: "Searched History",
          url: "/dashboard/rentals/summary",
        },
        {
          title: "Saved Searches",
          url: "#",
        },
        {
          title: "Recently viewed",
          url: "#",
        },
        {
          title: "Recommendations",
          url: "#",
        },
      ],
    },
    {
      title: "Venues",
      url: "#",
      icon: Warehouse,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Jobs",
      url: "#",
      icon: BriefcaseBusiness,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Cars",
      url: "#",
      icon: CarFront,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader className="items-center">
                    
          <Link to="/">
            <img
              alt="Hira logo"
              src="/src/assets/Hira_logo.png"
              className="h-9 w-auto"
            />
          </Link>
      </SidebarHeader>
      <SidebarContent >
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

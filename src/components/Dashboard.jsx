import React from 'react';
import {  SidebarProvider } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, Outlet } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const Dashboard = () => {

  return (
    <div className="flex h-screen overflow-hidden"> {/* Ensure the main container handles overflow */}
      <SidebarProvider>
        <AppSidebar className="bg-gray-800 text-white z-20 md:z-auto " /> {/* Higher z-index for the sidebar */}
        <SidebarInset className="flex-1 overflow-auto"> {/* Make the content area take remaining space and scroll */}
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Searched Listings
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>History</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className='flex justify-center  items-center'>
          <Outlet/>
          </div>
          
        </SidebarInset>
      </SidebarProvider>


    </div>
  );
};

// Placeholder Summary Components
const ReportsSummary = () => (
  <Card>
    <CardHeader>
      <CardTitle>Reports Summary</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Summary of reports goes here.</p>
    </CardContent>
  </Card>
);

const SettingsSummary = () => (
  <Card>
    <CardHeader>
      <CardTitle>Settings Summary</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Summary of settings goes here.</p>
    </CardContent>
  </Card>
);

export default Dashboard;
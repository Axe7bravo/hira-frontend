//import React, { useState } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ListingsSummary } from './ListingsSummary';
import { BookingsSummary } from './BookingsSummary';
import { UsersSummary } from './UsersSummary'


import { AppSidebar } from "@/components/app-sidebar"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const Dashboard = () => {
  //const [activePage, setActivePage] = useState('listings');

  /*const sidebarItems = [
    { id: 'listings', label: 'Listings' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'users', label: 'Users' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' },
  ];*/
  

 /* const renderPage = () => {
    switch (activePage) {
      case 'listings':
        return <ListingsSummary />;
      case 'bookings':
        return <BookingsSummary />;
      case 'users':
        return <UsersSummary />;
      case 'reports':
        return <ReportsSummary />;
      case 'settings':
        return <SettingsSummary />;
      default:
        return <ListingsSummary />;
    }
  };*/

  return (
    <div className=" ">
     
       <SidebarProvider> 
        
       <AppSidebar className="bg-sky-700 text-white"/>
      
       <SidebarInset>
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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <ListingsSummary />
        
       
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          
          
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
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
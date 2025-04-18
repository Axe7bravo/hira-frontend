// pages/owner-dashboard.jsx
import React from 'react';
import AddPropertyModal from '../components/owner-dashboard/add-property-modal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming you've set up "@/components" alias
import { Sidebar, SidebarProvider, SidebarTrigger  } from '@/components/ui/sidebar'; // You might create a custom Sidebar component
import { Link } from 'react-router-dom'; // Or your preferred routing library


const OwnerDashboard = () => {
  // Dummy data
  const recentActivity = [
    { id: 1, message: 'New Booking: John Doe - Luxury Villa Camps Bay' },
    { id: 2, message: 'Job Application: Jane Smith - Chef' },
  ];

  const quickStatistics = {
    totalBookings: 125,
    activeListings: 42,
    jobApplications: 87,
    monthlyRevenue: 'R 15,000',
  };

  const navigation = [
    {
      label: 'Listings',
      items: [
        { href: '/owner/listings/accommodations', label: '🏠 Accommodations' },
        { href: '/owner/listings/venues', label: '🏢 Venues' },
        { href: '/owner/listings/cars', label: '🚗 Cars' },
      ],
    },
    {
      label: 'Jobs',
      items: [
        { href: '/owner/jobs/post', label: '➕ Post New Job' },
        { href: '/owner/jobs/manage', label: '⚙️ Manage Jobs' },
      ],
    },
    { href: '/owner/bookings', label: '🗓️ Bookings' },
    { href: '/owner/analytics', label: '📊 Analytics' },
  ];

  return (
    <SidebarProvider>
    <div className="flex min-h-screen bg-background">
      <Sidebar className="w-64 border-r bg-secondary text-secondary-foreground">
        <div className="p-4 space-y-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">Navigation</h2>
          <div className="grid gap-1">
            {navigation.map((item) => (
              item.items ? (
                <div key={item.label} className="space-y-1">
                  <span className="px-2 py-1.5 text-lg font-medium tracking-tight">{item.label}</span>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      to={subItem.href}
                      className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-gray-100 hover:text-accent-foreground"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </Sidebar>
      <main className="flex-1 p-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight">Owner Dashboard</h1>
          <SidebarTrigger className="-ml-1" />
          <AddPropertyModal /> {/* Keep the AddPropertyModal here */}

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>🔔 Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {recentActivity.map((activity) => (
                  <p key={activity.id} className="text-sm">{activity.message}</p>
                ))}
                <Link to="/owner/activity" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  View All
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📊 Quick Statistics</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-lg font-bold tracking-tight">{quickStatistics.totalBookings}</p>
                  <p className="text-sm text-muted-foreground">Total Bookings</p>
                </div>
                <div>
                  <p className="text-lg font-bold tracking-tight">{quickStatistics.activeListings}</p>
                  <p className="text-sm text-muted-foreground">Active Listings</p>
                </div>
                <div>
                  <p className="text-lg font-bold tracking-tight">{quickStatistics.jobApplications}</p>
                  <p className="text-sm text-muted-foreground">Job Applications</p>
                </div>
                <div>
                  <p className="text-lg font-bold tracking-tight">{quickStatistics.monthlyRevenue}</p>
                  <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* ... other owner dashboard content can go here within the <main> section ... */}
        </div>
      </main>
    </div>
    </SidebarProvider>
  );
};

export default OwnerDashboard;
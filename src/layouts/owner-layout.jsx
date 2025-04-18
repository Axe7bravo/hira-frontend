// layouts/owner-layout.jsx
import React from 'react';
import { Sidebar } from '@/components/ui/sidebar';
import {  SidebarProvider } from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';

const navigation = [
  // ... your navigation array ...
];

const OwnerLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar.Root className="w-64 border-r bg-secondary text-secondary-foreground">
          <Sidebar.Header className="p-4">
            <Link to="/owner" className="font-semibold text-lg tracking-tight">
              Owner Panel
            </Link>
          </Sidebar.Header>
          <Sidebar.Content className="p-4 space-y-2">
            <h2 className="mb-2 text-lg font-semibold tracking-tight">Navigation</h2>
            <div className="grid gap-1">
              {navigation.map((item) => (
                item.items ? (
                  <div key={item.label} className="space-y-1">
                    <span className="px-2 py-1.5 text-sm font-medium tracking-tight">{item.label}</span>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
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
          </Sidebar.Content>
        </Sidebar.Root>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default OwnerLayout;
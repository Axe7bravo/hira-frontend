import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function UsersSummary () {
  // Placeholder users data
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Owner' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'User' },
    // Add more users as needed
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Users Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="border rounded-md p-4">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

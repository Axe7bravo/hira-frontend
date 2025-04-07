import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function ReportsSummary() {
  // Placeholder reports data
  const reports = [
    { id: 1, title: 'Monthly Sales', date: '2023-11-01', summary: 'Total sales for November' },
    { id: 2, title: 'User Activity', date: '2023-11-15', summary: 'User engagement report' },
    { id: 3, title: 'Listing Performance', date: '2023-11-30', summary: 'Listing popularity report' },
    // Add more reports as needed
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Reports Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="border rounded-md p-4">
                <h3 className="text-lg font-semibold">{report.title}</h3>
                <p>Date: {report.date}</p>
                <p>Summary: {report.summary}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

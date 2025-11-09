
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, Home, Eye, MessageSquare, BarChart } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const overviewStats = [
    { title: 'Total Listings', value: '12', icon: Home, change: '+2 since last month' },
    { title: 'Active Inquiries', value: '4', icon: MessageSquare, change: '1 new today' },
    { title: 'Total Views', value: '2,849', icon: Eye, change: '+15% this week' },
    { title: 'Est. Annual Rent', value: '₦45,500,000', icon: DollarSign, change: 'Across all listings' },
]

const recentInquiries = [
    { name: 'Chioma Okeke', property: '3-Bed Duplex, Lekki', time: '2 hours ago', status: 'New' },
    { name: 'David Adeleke', property: '2-Bed Apartment, Ikoyi', time: '1 day ago', status: 'Responded' },
    { name: 'Amina Salisu', property: '4-Bed Villa, Maitama', time: '3 days ago', status: 'Viewing Scheduled' },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {overviewStats.map(stat => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">{stat.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Inquiries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Renter</TableHead>
                                    <TableHead>Property</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Time</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentInquiries.map(inquiry => (
                                    <TableRow key={inquiry.name}>
                                        <TableCell className="font-medium">{inquiry.name}</TableCell>
                                        <TableCell>{inquiry.property}</TableCell>
                                        <TableCell><Badge variant={inquiry.status === 'New' ? 'default' : 'secondary'}>{inquiry.status}</Badge></TableCell>
                                        <TableCell className="text-right">{inquiry.time}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                     <CardHeader>
                        <CardTitle>Platform Analytics</CardTitle>
                    </CardHeader>
                     <CardContent className="flex items-center justify-center h-64 text-muted-foreground">
                        <BarChart className="w-16 h-16" />
                        <p className="ml-4">Chart coming soon...</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

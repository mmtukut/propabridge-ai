
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, LineChart, PieChart, Users, Eye } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

const chartData = [
  { month: "Jan", views: 186, inquiries: 80 },
  { month: "Feb", views: 305, inquiries: 200 },
  { month: "Mar", views: 237, inquiries: 120 },
  { month: "Apr", views: 273, inquiries: 190 },
  { month: "May", views: 209, inquiries: 130 },
  { month: "Jun", views: 214, inquiries: 140 },
]

const chartConfig = {
  views: {
    label: "Views",
    color: "hsl(var(--primary))",
  },
  inquiries: {
    label: "Inquiries",
    color: "hsl(var(--muted-foreground))",
  },
}

export default function AnalyticsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-8">Listing Analytics</h1>
            <div className="space-y-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                            <Eye className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">15,231</div>
                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">278</div>
                            <p className="text-xs text-muted-foreground">+18.3% from last month</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                            <PieChart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1.82%</div>
                            <p className="text-xs text-muted-foreground">+0.2% from last month</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Avg. View Time</CardTitle>
                            <LineChart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2m 15s</div>
                            <p className="text-xs text-muted-foreground">Analytics coming soon</p>
                        </CardContent>
                    </Card>
                </div>
                 <Card>
                    <CardHeader>
                        <CardTitle>Views & Inquiries Over Time</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[350px] w-full">
                         <ChartContainer config={chartConfig} className="w-full h-full">
                             <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <YAxis />
                                    <Tooltip
                                        cursor={false}
                                        content={<ChartTooltipContent indicator="dot" />}
                                    />
                                    <Legend />
                                    <Bar dataKey="views" fill="var(--color-views)" radius={4} />
                                    <Bar dataKey="inquiries" fill="var(--color-inquiries)" radius={4} />
                                </BarChart>
                             </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

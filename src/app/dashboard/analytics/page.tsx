
import { Card, CardContent } from "@/components/ui/card";
import { BarChart } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-8">Listing Analytics</h1>
            <Card className="flex flex-col items-center justify-center h-[60vh] text-center">
                <CardContent className="flex flex-col items-center justify-center p-6">
                    <BarChart className="w-24 h-24 text-muted-foreground/50 mb-6" />
                    <h2 className="text-2xl font-bold">Advanced Analytics Dashboard</h2>
                    <p className="text-muted-foreground mt-2 max-w-md">
                        This page will feature detailed charts and metrics on your listings' performance, including views over time, inquiry conversion rates, and market comparisons.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

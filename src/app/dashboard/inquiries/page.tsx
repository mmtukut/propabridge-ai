
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export default function InquiriesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-8">Inquiries</h1>
            <Card className="flex flex-col items-center justify-center h-[60vh] text-center">
                <CardContent className="flex flex-col items-center justify-center p-6">
                    <MessageSquare className="w-24 h-24 text-muted-foreground/50 mb-6" />
                    <h2 className="text-2xl font-bold">Real-Time Messaging Center</h2>
                    <p className="text-muted-foreground mt-2 max-w-md">
                        This is where you'll communicate with potential renters. The full messaging interface is coming soon.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

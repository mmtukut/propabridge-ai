
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SavedSearchesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-8">Saved Searches</h1>
            <Card className="flex flex-col items-center justify-center h-[60vh] text-center">
                <CardContent className="flex flex-col items-center justify-center p-6">
                    <Search className="w-24 h-24 text-muted-foreground/50 mb-6" />
                    <h2 className="text-2xl font-bold">Save Searches, Get Notified</h2>
                    <p className="text-muted-foreground mt-2 max-w-md mb-6">
                        You have no saved searches yet. Save a search to receive instant notifications when new properties matching your criteria are listed.
                    </p>
                    <Button href="/search">Start a New Search</Button>
                </CardContent>
            </Card>
        </div>
    )
}

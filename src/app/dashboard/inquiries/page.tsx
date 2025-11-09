
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Search, Send, Paperclip } from "lucide-react";

const contacts = [
    { name: 'Chioma Okeke', property: '3-Bed Duplex, Lekki', lastMessage: 'Is the property still available?', time: '2h', unread: 2, avatar: 'https://picsum.photos/seed/user1/40/40' },
    { name: 'David Adeleke', property: '2-Bed Apartment, Ikoyi', lastMessage: 'Great, thank you!', time: '1d', unread: 0, avatar: 'https://picsum.photos/seed/user2/40/40' },
    { name: 'Amina Salisu', property: '4-Bed Villa, Maitama', lastMessage: 'Viewing confirmed for Friday at 2pm.', time: '3d', unread: 0, avatar: 'https://picsum.photos/seed/user3/40/40' },
];

const messages = [
    { sender: 'them', text: 'Good afternoon, I saw your listing for the 3-Bed Duplex in Lekki on Propabridge. Is it still available?' },
    { sender: 'me', text: 'Hello Chioma, yes it is. Are you interested in scheduling a viewing?' },
    { sender: 'them', text: 'Yes, I am. What time works for you this week?' },
    { sender: 'them', text: 'I am available on Thursday or Friday afternoon.' },
]

export default function InquiriesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-8">Inquiries</h1>
            <Card className="grid grid-cols-1 md:grid-cols-3 h-[75vh] overflow-hidden">
                {/* Contact List */}
                <div className="md:col-span-1 border-r flex flex-col">
                    <div className="p-4 border-b">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search messages..." className="pl-10" />
                        </div>
                    </div>
                    <ScrollArea className="flex-1">
                        {contacts.map(contact => (
                            <div key={contact.name} className="flex items-center gap-4 p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors data-[active=true]:bg-primary/10" data-active={contact.unread > 0}>
                                <Avatar>
                                    <AvatarImage src={contact.avatar} />
                                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold">{contact.name}</p>
                                        <p className="text-xs text-muted-foreground">{contact.time}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                                </div>
                                {contact.unread > 0 && <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">{contact.unread}</div>}
                            </div>
                        ))}
                    </ScrollArea>
                </div>
                
                {/* Message View */}
                <div className="md:col-span-2 flex flex-col">
                    <div className="p-4 border-b flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={contacts[0].avatar} />
                            <AvatarFallback>{contacts[0].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{contacts[0].name}</p>
                            <p className="text-sm text-muted-foreground">Inquiry for: {contacts[0].property}</p>
                        </div>
                    </div>
                    <ScrollArea className="flex-1 p-6 bg-secondary/30">
                        <div className="space-y-6">
                            {messages.map((msg, index) => (
                                <div key={index} className={cn("flex items-end gap-2", msg.sender === 'me' ? 'justify-end' : '')}>
                                    {msg.sender === 'them' && <Avatar className="h-8 w-8"><AvatarImage src={contacts[0].avatar} /></Avatar>}
                                    <div className={cn(
                                        "max-w-md p-3 rounded-2xl",
                                        msg.sender === 'me' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card border rounded-bl-none'
                                    )}>
                                        <p>{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="p-4 border-t bg-card">
                         <div className="relative">
                             <Input placeholder="Type your message..." className="pr-24 h-12" />
                             <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="text-muted-foreground"><Paperclip className="w-5 h-5" /></Button>
                                <Button size="icon"><Send className="w-5 h-5" /></Button>
                             </div>
                         </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

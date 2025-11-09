
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarInset,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Home,
  User,
  Heart,
  Search,
  MessageSquare,
  BarChart,
  LogOut,
  Building2,
} from 'lucide-react';
import { Logo, LogoIcon } from '@/components/branding/Logo';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

// This is a mock user. In a real app, this would come from an auth context.
const user = {
  name: 'Tobi Otokiti',
  email: 'tobi@propabridge.ng',
  avatar: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwwfHx8fDE3NjIxMTk3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  role: 'LANDLORD' // Can be 'RENTER' or 'LANDLORD' to show different sidebar items
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <SidebarProvider>
      <Sidebar side="left" variant="sidebar" collapsible="icon">
        <SidebarHeader className="h-20 justify-between px-2">
          <LogoIcon className="hidden group-data-[collapsible=icon]:block" />
          <Logo className="group-data-[collapsible=icon]:hidden" />
          <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarGroup>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard"
                  isActive={isActive('/dashboard')}
                  tooltip="Dashboard"
                >
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>

            {/* Common Items */}
            <SidebarGroup>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard/profile"
                  isActive={isActive('/dashboard/profile')}
                  tooltip="Profile"
                >
                  <User />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard/saved-properties"
                  isActive={isActive('/dashboard/saved-properties')}
                  tooltip="Saved Properties"
                >
                  <Heart />
                  <span>Saved Properties</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
               <SidebarMenuItem>
                <SidebarMenuButton
                  href="/search"
                  isActive={isActive('/search')}
                  tooltip="New Search"
                >
                  <Search />
                  <span>New Search</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
            
            {/* Landlord Specific Items */}
            {user.role === 'LANDLORD' && (
              <SidebarGroup>
                 <SidebarMenuItem>
                    <SidebarMenuButton
                      href="/dashboard/listings"
                      isActive={isActive('/dashboard/listings')}
                      tooltip="My Listings"
                    >
                      <Building2 />
                      <span>My Listings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuButton
                      href="/dashboard/inquiries"
                      isActive={isActive('/dashboard/inquiries')}
                      tooltip="Inquiries"
                    >
                      <MessageSquare />
                      <span>Inquiries</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      href="/dashboard/analytics"
                      isActive={isActive('/dashboard/analytics')}
                      tooltip="Analytics"
                    >
                      <BarChart />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              </SidebarGroup>
            )}

          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/login" tooltip="Logout">
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-20 w-full items-center justify-between border-b bg-background/90 px-4 backdrop-blur-sm sm:px-6 md:px-8">
            <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden" />
                <h1 className="text-2xl font-bold font-headline text-glow">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="secondary" href="/landlords/new">List a New Property</Button>
                <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
        </header>
        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

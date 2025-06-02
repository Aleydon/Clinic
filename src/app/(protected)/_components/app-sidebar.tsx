import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';
import {
  CalendarDays,
  LayoutDashboard,
  Stethoscope,
  UsersRound
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Appointments',
    url: '/appointments',
    icon: CalendarDays
  },
  {
    title: 'Doctors',
    url: '/doctors',
    icon: Stethoscope
  },
  {
    title: 'Patients',
    url: '/pacients',
    icon: UsersRound
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 boder-b">
        <div className="flex items-center ">
          <Image
            src="/clinic-logo.svg"
            alt="Clinic Logo"
            width={136}
            height={28}
            priority
            className="h-8 w-8"
          />
          <h1 className="ml-2 text-md font-bold">Clinic</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu modal={true}>
              <DropdownMenuTrigger asChild>
                <Button>Clinic</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Button>Logout</Button>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

'use client';

// // import { zodResolver } from '@hookform/resolvers/zod';
// // import { useForm } from 'react-hook-form';
// // import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { SignUpForm } from './components/sign-up-form';

export default function AuthenticationPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="login">
          <TabsList className="w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Log in to continue</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6"></CardContent>
              <CardFooter>
                <Button className="w-full" type="submit">
                  Login
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { SignInForm } from './components/sign-in-form';
import { SignUpForm } from './components/sign-up-form';

export default function AuthenticationPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="login">
          <TabsList className="w-full">
            <TabsTrigger className="cursor-pointer" value="login">
              Login
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="register">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <SignInForm />
          </TabsContent>
          <TabsContent value="register">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';

import { SignOut } from './components/sign-out';

export default async function Dashboard() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect('/authentication');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h3 className="text-4xl text-bold">
        {session?.user?.name
          ? `Welcome back, ${session.user.name}!`
          : 'Welcome to the Dashboard!'}
      </h3>
      <SignOut />
    </div>
  );
}

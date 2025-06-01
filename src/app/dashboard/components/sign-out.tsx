'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';

export function SignOut() {
  const router = useRouter();

  return (
    <Button
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push('/authentication');
            }
          }
        })
      }
    >
      Sign Out
    </Button>
  );
}

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ProtectedRoute() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }
  return (
    <div>
      This is a ProtectedRoute
      <br />
      You will see this only if you are authenticated
    </div>
  );
}

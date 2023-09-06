import { getServerSession } from 'next-auth';
import WhoAMIButton from './WhoAmIButton';
export default async function ServerActionPage() {
  const whoAmI = async () => {
    'use server';
    const session = await getServerSession();
    return session?.user?.name || 'Not Logged In';
  };
  return (
    <div>
      <WhoAMIButton whoAMIAction={whoAmI} />
    </div>
  );
}

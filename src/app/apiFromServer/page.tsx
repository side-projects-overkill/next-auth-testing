import { headers } from 'next/headers';

export default async function APIFromServer() {
  const resp = await fetch('http://localhost:3000/api/whoAmI', {
    method: 'GET',
    headers: headers(),
  }).then((resp) => resp.json());

  return (
    <div>
      <div>
        API Route from <span className="font-bold underline">Server</span>
      </div>
      <div>Name: {resp?.name}</div>
    </div>
  );
}

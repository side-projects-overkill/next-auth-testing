'use client';
import { useState } from 'react';

export default function WhoAMIButton({
  whoAMIAction,
}: {
  whoAMIAction: () => Promise<string>;
}) {
  const [name, setName] = useState<string>();
  return (
    <div>
      <button
        onClick={async () => {
          setName(await whoAMIAction());
        }}
      >
        Who Am I?
      </button>
      {name && <div>You are {name}</div>}
    </div>
  );
}

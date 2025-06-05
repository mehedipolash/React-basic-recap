import { use } from 'react';

export default function Users({ x }) {
  const users = use(x);
  console.log(users);

  return (
    <div className="card">
      <h3>Users: {users.length}</h3>
    </div>
  );
}

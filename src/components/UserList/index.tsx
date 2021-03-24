import { useUser } from '~/store/User';

export const UserList: React.FC = () => {
  const { users } = useUser();

  if (!users) return null;

  return (
    <>
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </ul>
      ))}
    </>
  );
};

import useSWR from 'swr';
import { fetchUser, User } from '~/api/user';

export const useUser = () => {
  const { data: users } = useSWR<User[]>('/fetchUser', fetchUser);
  return { users };
};

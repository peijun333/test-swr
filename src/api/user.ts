import axios from 'axios';

interface ApiResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type User = ApiResponse;

export const fetchUser = async (): Promise<ApiResponse[]> => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data.data;
};

import axios from 'axios';

export enum Name {
  FirstName = "firstName",
  LastName = "lastName",
}

export interface User {
  id: number;
  firstName: Name;
  lastName: Name;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await axios.get<UsersResponse>('https://dummyjson.com/users');
    return response.data.users;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка Axios:', error.message);
    } else {
      console.error('Непредвиденная ошибка:', error);
    }
    throw new Error('Не удалось найти пользователей');
  }
}

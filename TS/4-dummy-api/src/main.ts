import { fetchUsers } from './api/users';

async function main() {
  try {
    const users = await fetchUsers();
    users.forEach((user) => {
      console.log(`${user.firstName} ${user.lastName} — ${user.gender}, email: ${user.email}`);
    });
  } catch (error) {
    console.error('Не удалось загрузить пользователей:', error);
  }
}

main();

// fetchUserData.ts
import User from './User';

async function fetchUserData(): Promise<User[]> {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();
  
  // Extracting required fields from each user object
  const extractedData = data.map((user: any) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    gender: user.gender,
    email: user.email,
    phone: user.phone,
    username: user.username,
    password: user.password,
    birthDate: user.birthDate,
    image: user.image
  }));

  return extractedData;
}

export default fetchUserData;

// src/app/api/touristService.ts
export interface Tourist {
    createdOn: string;
    imageUrl: string | null;
    age: number;
    bio: string | null;
    firstName: string;
    lastName: string;
    fullName: string;
    userName: string;
    email: string;
    password: string | null;
    confirmPassword: string | null;
    address: string;
    phoneNumber: string | null;
  }
  
  export const fetchTourists = async (): Promise<Tourist[]> => {
    const response = await fetch('http://safaryapi.runasp.net/api/Tourist/GetAllTourist');
    if (!response.ok) {
      throw new Error(`Failed to fetch tourists: ${response.statusText}`);
    }
    return response.json();
  };
  
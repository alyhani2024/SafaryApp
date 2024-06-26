import axios from 'axios';

export interface Tourist {
  userName: string;
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
  age: number;
  imageUrl?: string;
}

export const fetchTourists = async (): Promise<Tourist[]> => {
  const response = await axios.get('http://safariapi.runasp.net/api/Tourist/GetAllTourist');
  return response.data;
};

export const addTourist = async (tourist: Tourist): Promise<void> => {
  await axios.post('http://safariapi.runasp.net/api/Tourist', tourist);
};

export const updateTourist = async (email: string, tourist: Tourist): Promise<void> => {
  await axios.put(`http://safariapi.runasp.net/api/Tourist/${email}`, tourist);
};

export const deleteTourist = async (email: string): Promise<void> => {
  await axios.delete(`http://safariapi.runasp.net/api/Tourist/${email}`);
};

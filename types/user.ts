export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    street?: string;
    suite?: string;
    zipcode?: string;
  };
}

export interface UserFormData {
  name: string;
  email: string;
  city: string;
}

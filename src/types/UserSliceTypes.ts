export interface User {
  _id: string;
  nickname: string;
  email?: string;
  picture?: string;
}

export interface UserState {
  isLoading: boolean;
  error?: string | null;
  user: User | null;
}

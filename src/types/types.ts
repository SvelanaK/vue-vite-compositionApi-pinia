export interface IUser {
  score: number;
  country: string;
  avatar: string;
  title: string;
  subtitle: string;
  id?: number;
}

export interface IUsersStoreState {
  country: string | null;
  score: string | null;
  users: IUser[];
  loading: boolean;
  error: unknown[];
}

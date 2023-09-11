interface UserType {
  userData: String;
}
interface AuthContextType {
  authData: UserType | null | undefined;
  login: (userData: UserType) => void;
  logout: () => void;
}

export type {UserType, AuthContextType};

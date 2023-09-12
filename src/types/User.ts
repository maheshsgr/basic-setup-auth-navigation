import {LoginFormData} from './Forms';

interface UserType extends LoginFormData {}
interface AuthContextType {
  authData: UserType | null | undefined;
  login: (userData: UserType) => void;
  logout: () => void;
}

export type {UserType, AuthContextType};

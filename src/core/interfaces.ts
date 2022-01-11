export interface User {
  username: string;
  password: string;
}

export interface AuthContextType {
  user: User;
  signIn: (user: User, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  species: {
    name: string;
  };
  sprites: {
    front_shiny: string;
  };
}

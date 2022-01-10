export interface AuthContextType {
  user: string;
  signIn: (user: string, callback: VoidFunction) => void;
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

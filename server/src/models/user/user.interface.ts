export interface UserI {
  _id: string;
  nombre: string;
  email: string;
  password: string;
  direccion: {
    calle: string;
    altura: string;
    cp: string;
    piso: string;
    departamento: string;
  };
  telefono: string;
  admin: boolean;
}

export interface newUserI {
  nombre: string;
  direccion: {
    calle: string;
    altura: string;
    cp: string;
    piso: string;
    departamento: string;
  };
  telefono: string;
  email: string;
  password: string;
  confirmPassword: string;
  admin: boolean;
}

export interface UserBaseClass {
  createUser(user: newUserI): Promise<UserI>;
  getUser(id: string): Promise<UserI>;
  getUsers(): Promise<UserI[]>;
  updateUser(id: string, user: UserI): Promise<UserI>;
  deleteUser(id: string): Promise<UserI>;
  isValidPassword(user: UserI, password: string): Promise<boolean>;
}

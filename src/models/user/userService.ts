import { RESTDataSource } from 'apollo-datasource-rest';
import { API, UserAPIEndpoint } from '../../const/api';
import {
  Jwt, LoginArgs, RegisterUserArgs, User,
} from '../../types/user';

export interface UsersAPIDataSource {
  getUser: (id: string) => Promise<User>
  registerUser: (args: RegisterUserArgs) => Promise<User>
  login: (args: LoginArgs) => Promise<Jwt>
}

class UsersAPI extends RESTDataSource implements UsersAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.users;
  }

  getUser(id: string) {
    return this.get<User>(`${UserAPIEndpoint.users}/${encodeURIComponent(id)}`);
  }

  registerUser(args: RegisterUserArgs) {
    return this.post<User>(UserAPIEndpoint.register, args);
  }

  login(args: LoginArgs) {
    return this.post<Jwt>(UserAPIEndpoint.login, args);
  }
}

export default UsersAPI;

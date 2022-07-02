import { RESTDataSource } from 'apollo-datasource-rest';
import { API, UserAPIEndpoint } from '../const/api';
import { LoginArgs, RegisterUserArgs } from '../types/user';

export interface UsersAPIDataSource {
  getUser: (id: string) => Promise<any>
  registerUser: (args: RegisterUserArgs) => Promise<any>
  login: (args: LoginArgs) => Promise<any>
}

class UsersAPI extends RESTDataSource implements UsersAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.users;
  }

  async getUser(id: string) {
    return this.get(`${UserAPIEndpoint.users}/${encodeURIComponent(id)}`);
  }

  async registerUser(args: RegisterUserArgs) {
    return this.post(UserAPIEndpoint.register, args);
  }

  async login(args: LoginArgs) {
    return this.post(UserAPIEndpoint.login, args);
  }
}

export default UsersAPI;

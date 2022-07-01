import { RESTDataSource } from 'apollo-datasource-rest';
import { API, UserAPIEndpoint } from '../const/api';
import { RegisterUserArgs } from '../types/user';

export interface UsersAPIDataSource {
  getUser: (id: string) => Promise<any>
  registerUser: (args: RegisterUserArgs) => Promise<any>
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
}

export default UsersAPI;

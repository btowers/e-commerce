/* eslint-disable no-unused-vars */
import { UserI } from '../../src/models/user/user.interface';

declare global {
  namespace Express {
    interface User extends UserI {}
  }
}

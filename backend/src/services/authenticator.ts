import { Request } from 'express';
import { newUserI } from '../models/user/user.interface';
import { validatorS } from './validator';
// import { mailerS } from './mailer';
import config from '../config';
import passport from 'passport';
import {
  Strategy as LocalStrategy,
  IStrategyOptionsWithRequest,
} from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { cartS } from '../models/cart/cart.service';
import { userS } from '../models/user/user.service';

const localStrategyOptions: IStrategyOptionsWithRequest = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
};

const jwtStrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET_KEY,
};

/**
 * @description Passport configuration
 * @param {any} jwtPayload
 * @param {any}  done
 * @return {Promise}
 */
const jwtFunc = async (jwtPayload: any, done: any): Promise<any> => {
  try {
    const user = await userS.getUserById(jwtPayload.sub);
    if (user) return done(null, user);
    else return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

/**
 * @description Login function for Passport
 * @param {Request} _req
 * @param {string} username
 * @param {string} password
 * @param {any} done
 * @return {Promise}
 */
const loginFunc = async (
  _req: Request,
  username: string,
  password: string,
  done: any
): Promise<any> => {
  try {
    const user = await userS.getUser(username);
    if (!user || !(await userS.isValidPassword(user, password))) {
      return done(null, false, 'Invalid username or password.');
    } else return done(null, user);
  } catch (error) {
    return done(error, false);
  }
};

/**
 * @description Sign Up function for Passport
 * @param {Request} req
 * @param {string} _username
 * @param {string} _password
 * @param {any} done
 * @return {any}
 */
const signUpFunc = async (
  req: Request,
  _username: string,
  _password: string,
  done: any
): Promise<any> => {
  try {
    const newUser: newUserI = req.body;
    await validatorS.user(newUser);
    if (newUser.password !== newUser.confirmPassword) {
      return done(null, false, 'Passwords do not match.');
    }
    const user = await userS.getUser(newUser.email);
    if (user) return done(null, false, `User ${user.email} already exists`);
    const savedUser = await userS.createUser(newUser);
    await cartS.createCart(savedUser);
    return done(null, savedUser);
  } catch (error) {
    return done(error, false);
  }
};

passport.use('jwt', new JwtStrategy(jwtStrategyOptions, jwtFunc));
passport.use('login', new LocalStrategy(localStrategyOptions, loginFunc));
passport.use('signup', new LocalStrategy(localStrategyOptions, signUpFunc));

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (_id: string, done) {
  userS.getUserById(_id).then((user: any) => {
    done(null, user);
  });
});

export default passport;

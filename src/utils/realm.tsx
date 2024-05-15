import * as Realm from 'realm-web';
import { SNOOTY_REALM_APP_ID } from '../build-constants';
import { currentRealmUsersCleanup } from './realm-user-management';
import { snootyEnv } from '@/types/site-metadata';

const app = new Realm.App({ id: SNOOTY_REALM_APP_ID });

// acts as a singleton to prevent multiple login
// attempts.

let loginDefer: null | Promise<Realm.User> = null;

const loginAnonymous = async () => {
  if (loginDefer) {
    return loginDefer;
  }

  // Clears realm users from localStorage if there are more than
  // n number of users.
  // n = second param
  currentRealmUsersCleanup(app, 5);

  // Avoid creating multiple users if one already exists
  if (app.currentUser) {
    return;
  }

  loginDefer = new Promise(async (res, rej) => {
    try {
      const credentials = Realm.Credentials.anonymous();
      const user = await app.logIn(credentials);
      res(user);
    } catch (err) {
      console.error('Failed to login', err);
    }
  });

  return loginDefer.finally(() => {
    loginDefer = null;
  });
};

const callAuthenticatedFunction = async (funcName: string, ...argsList: unknown[]) => {
  try {
    await loginAnonymous();
    return await app.currentUser?.functions[funcName](...argsList)
  } catch (err) {
    console.error(`Failed to call function: ${funcName}`);
  }
};

export const fetchBanner = async (snootyEnv: snootyEnv) => {
  return callAuthenticatedFunction('getBanner', snootyEnv === 'development');
};

export const fetchBreadcrumbs = async (database: string, project: string) => {
  return callAuthenticatedFunction('fetchBreadcrumbs', database, project);
};

export const fetchSearchPropertyMapping = async (snootyEnv: snootyEnv) => {
  return callAuthenticatedFunction('fetchSearchPropertyMapping', snootyEnv);
};

export const fetchOASFile = async (apiName: string, database: string) => {
  return callAuthenticatedFunction('fetchOASFile', apiName, database);
};

export const fetchDocument = async (database: string, collectionName: string, query: unknown, projections: unknown) => {
  return callAuthenticatedFunction('fetchDocumentSorted', database, collectionName, query, projections);
};

export const fetchDocset = async (database: string, matchConditions: unknown) => {
  return callAuthenticatedFunction('fetchDocset', database, matchConditions);
};

export const fetchDocuments = async (database: string, collectionName: string, query: unknown, projections: unknown, options: unknown) => {
  return callAuthenticatedFunction('fetchDocuments', database, collectionName, query, projections, options);
};

export const fetchDocsets = async (database: string) => {
  return callAuthenticatedFunction('fetchDocsets', database);
};

export const fetchOADiff = async (runId: string, diffString: string, snootyEnv: snootyEnv) => {
  return callAuthenticatedFunction('fetchOADiff', runId, diffString, snootyEnv);
};

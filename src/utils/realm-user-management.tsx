import * as Realm from 'realm-web';
import { isBrowser } from './is-browser';

/**
 * returns the prefix for the storage key used by Realm for localStorage access
 */
const parseStorageKey = (storage: any): string => {
  if (!storage.keyPart) {
    return '';
  }
  const prefix = parseStorageKey(storage.storage);
  return prefix + storage.keyPart + ':';
};

export const removeAllRealmUsersFromLocalStorage = (allUsers: any[]) => {
  // The accessToken and refreshToken are automatically removed if invalid, but not the following keys
  const keysToDelete = ['profile', 'providerType'];

  Object.values(allUsers).forEach((user) => {
    const storageKeyPrefix = parseStorageKey(user.storage);
    keysToDelete.forEach((key) => {
      localStorage.removeItem(storageKeyPrefix + key);
    });
  });
};

export const currentRealmUsersCleanup = (app: Realm.App, maxUsersAllowed = 1) => {
  // TODO: provide better type checking
const {allUsers } : { allUsers: any } = app; 

  const allUsersSize = Object.keys(allUsers).length;
  if (allUsersSize > maxUsersAllowed) {
    // Delete local storage for the app, removing all logged in users creds
    // local store will restore new values on page navigation or refresh
    if (isBrowser) {
      removeAllRealmUsersFromLocalStorage(allUsers);
    }
  }
};

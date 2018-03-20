/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const CHECK_IF_AUTHORIZED = 'app/app/CHECK_IF_AUTHORIZED';
export const CHECK_IF_AUTHORIZED_ERROR = 'app/app/CHECK_IF_AUTHORIZED_ERROR';
export const CHECK_IF_AUTHORIZED_SUCCESS = 'app/app/CHECK_IF_AUTHORIZED_SUCCESS';

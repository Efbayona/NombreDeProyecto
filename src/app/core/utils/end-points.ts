export const enum EndPoints {

  /*** 1. Login ***/
  LOGIN = 'secure/auth/login',

  /*** 2. Multifactor-Authentication ***/
  MFA = 'secure/auth/mfa',

  /*** 3. Refresh Token ***/
  TOKEN_REFRESH = 'secure/auth/refresh_token',

  /*** 4. Custom Validators ***/
  EXIST_USERNAME = 'secure/user/exist_user_name/',
  EXIST_EMAIL = 'secure/user/exist_email/',
  EXIST_DOCUMENT = 'secure/user/exist_document/',
}

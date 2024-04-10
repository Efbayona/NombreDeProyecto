export interface UserLoginRequest {
  user_name: string;
  user_password: string;
}


export interface UserLoginResponse {
  user_id: string;
  user_email: string;
}

export interface TokenRefreshResponse {
  access_token: string,
  refresh_token: string,
  token_type: string,
}

export interface TokenRefreshRequest {
  refresh_token_id: string,
}

export interface MultiFactorAuthenticationRequest {
  user_id: string,
  user_code: string,
}

export interface DataMultiFactorAuthenticationResponse {
  token: Token;
  user: User;
  modules: Module[];
  permissions: Permission[];
}

export interface Token {
  token_type: string;
  access_token: string;
  refresh_token: string;
}

export interface User {
  user_id: string;
  user_name: string;
  user_status: string;
}

export interface Module {
  module_id: string;
  name: string;
  description: string;
  module_icon: string;
  module_route: string;
  module_order: number;
}

export interface Permission {
  name: string;
}

import { UserRepositoryAdapter, CriptographyAdapter, AuthenticationAdapter } from "@/layers/external";


export const userRepositoryAdapter = new UserRepositoryAdapter();
export const criptographyAdapter = new CriptographyAdapter();
export const authenticationAdapter = new AuthenticationAdapter();



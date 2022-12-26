import { TokenService } from '@loopback/authentication';
import { Credentials } from '@loopback/authentication-jwt';
import { UserProfile } from '@loopback/security';
import { CustomUserService } from '../services';
import { UserRepository, UserCredentialsRepository } from '../repositories';
import { SchemaObject, Response, Request } from '@loopback/rest';
import { User } from '../models';
export declare class NewUserRequest extends User {
    password: string;
}
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class UserController {
    jwtService: TokenService;
    tokenService: TokenService;
    userService: CustomUserService;
    private user;
    protected response: Response;
    protected request: Request;
    protected userRepository: UserRepository;
    protected userCredentialRepository: UserCredentialsRepository;
    constructor(jwtService: TokenService, tokenService: TokenService, userService: CustomUserService, user: UserProfile, response: Response, request: Request, userRepository: UserRepository, userCredentialRepository: UserCredentialsRepository);
    getUsers(): Promise<User[]>;
    signUp(newUserRequest: NewUserRequest): Promise<User>;
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    whoAmI(): Promise<User>;
    logout(): Promise<void>;
}

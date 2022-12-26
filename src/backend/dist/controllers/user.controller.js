"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.CredentialsRequestBody = exports.NewUserRequest = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const authentication_1 = require("@loopback/authentication");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const security_1 = require("@loopback/security");
const repository_1 = require("@loopback/repository");
const services_1 = require("../services");
const repositories_1 = require("../repositories");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const bcryptjs_1 = require("bcryptjs");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
let NewUserRequest = class NewUserRequest extends models_1.User {
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], NewUserRequest.prototype, "password", void 0);
NewUserRequest = tslib_1.__decorate([
    repository_1.model()
], NewUserRequest);
exports.NewUserRequest = NewUserRequest;
const CredentialsSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: {
            type: 'string',
            format: 'email',
        },
        password: {
            type: 'string',
        },
    },
};
exports.CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};
let UserController = class UserController {
    constructor(jwtService, tokenService, userService, user, response, request, userRepository, userCredentialRepository) {
        this.jwtService = jwtService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.user = user;
        this.response = response;
        this.request = request;
        this.userRepository = userRepository;
        this.userCredentialRepository = userCredentialRepository;
    }
    async getUsers() {
        try {
            return await this.userRepository.find();
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении юзеров');
        }
    }
    async signUp(newUserRequest) {
        try {
            const password = await bcryptjs_1.hash(newUserRequest.password, await bcryptjs_1.genSalt());
            const savedUser = await this.userRepository.create(lodash_1.default.omit(newUserRequest, 'password'));
            await this.userRepository.customUserCredentials(savedUser.id).create({ password });
            return savedUser;
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при регистрации');
        }
    }
    async login(credentials) {
        try {
            const user = await this.userService.verifyCredentials(credentials);
            const userProfile = this.userService.convertToUserProfile(user);
            const token = await this.jwtService.generateToken(userProfile);
            return { token };
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Логин и/или пароль неверны');
        }
    }
    async whoAmI() {
        try {
            return await this.userRepository.findById(this.user[security_1.securityId]);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['401']('Пользователь не авторизован');
        }
    }
    async logout() {
        try {
            this.response.status(204);
            return;
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Ошибка логаута');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Users',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': models_1.User,
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.post('/signup', {
        responses: {
            '200': {
                description: 'User',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': models_1.User,
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(NewUserRequest, {
                    title: 'NewUser',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [NewUserRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
tslib_1.__decorate([
    rest_1.post('/login', {
        responses: {
            '200': {
                description: 'Token',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                token: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody(exports.CredentialsRequestBody)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
tslib_1.__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.get('/whoAmI'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "whoAmI", null);
tslib_1.__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.del('/logout'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
    tslib_1.__param(1, core_1.inject(authentication_jwt_1.RefreshTokenServiceBindings.REFRESH_TOKEN_SERVICE)),
    tslib_1.__param(2, core_1.inject(authentication_jwt_1.UserServiceBindings.USER_SERVICE)),
    tslib_1.__param(3, core_1.inject(security_1.SecurityBindings.USER, { optional: true })),
    tslib_1.__param(4, core_1.inject(rest_1.RestBindings.Http.RESPONSE)),
    tslib_1.__param(5, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__param(6, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__param(7, repository_1.repository(repositories_1.UserCredentialsRepository)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, services_1.CustomUserService, Object, Object, Object, repositories_1.UserRepository,
        repositories_1.UserCredentialsRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
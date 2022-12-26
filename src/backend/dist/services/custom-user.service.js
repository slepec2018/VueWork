"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomUserService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const bcryptjs_1 = require("bcryptjs");
const repositories_1 = require("../repositories");
let CustomUserService = class CustomUserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async verifyCredentials(credentials) {
        const invalidCredentialsError = 'Invalid email or password.';
        const foundUser = await this.userRepository.findOne({
            where: { email: credentials.email },
        });
        if (!foundUser) {
            throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
        }
        const credentialsFound = await this.userRepository.findCredentials(foundUser.id);
        if (!credentialsFound) {
            throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
        }
        const passwordMatched = await bcryptjs_1.compare(credentials.password, credentialsFound.password);
        if (!passwordMatched) {
            throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
        }
        return foundUser;
    }
    convertToUserProfile(user) {
        return {
            [security_1.securityId]: user.id.toString(),
            name: user.name,
            id: user.id,
            email: user.email,
        };
    }
};
CustomUserService = tslib_1.__decorate([
    core_1.injectable({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], CustomUserService);
exports.CustomUserService = CustomUserService;
//# sourceMappingURL=custom-user.service.js.map
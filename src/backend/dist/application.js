"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const datasources_1 = require("./datasources");
const services_1 = require("./services");
const repositories_1 = require("./repositories");
const user_credentials_repository_1 = require("./repositories/user-credentials.repository");
const authentication_1 = require("@loopback/authentication");
class Application extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/public', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        this.component(authentication_1.AuthenticationComponent);
        this.component(authentication_jwt_1.JWTAuthenticationComponent);
        this.dataSource(datasources_1.DatabaseDataSource, authentication_jwt_1.UserServiceBindings.DATASOURCE_NAME);
        this.dataSource(datasources_1.DatabaseDataSource, authentication_jwt_1.RefreshTokenServiceBindings.DATASOURCE_NAME);
        this.bind(authentication_jwt_1.UserServiceBindings.USER_SERVICE).toClass(services_1.CustomUserService);
        this.bind(authentication_jwt_1.UserServiceBindings.USER_REPOSITORY).toClass(repositories_1.UserRepository);
        this.bind(authentication_jwt_1.UserServiceBindings.USER_CREDENTIALS_REPOSITORY).toClass(user_credentials_repository_1.UserCredentialsRepository);
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
/**
 * Export the OpenAPI spec from the application
 */
async function exportOpenApiSpec() {
    const config = {
        rest: {
            port: process.env.PORT || 3000,
            host: process.env.HOST || 'localhost',
        },
    };
    const outFile = process.argv[2] || '';
    const app = new application_1.Application(config);
    await app.boot();
    await app.exportOpenApiSpec(outFile);
}
exportOpenApiSpec().catch(err => {
    console.error('Fail to export OpenAPI spec from the application.', err);
    process.exit(1);
});
//# sourceMappingURL=openapi-spec.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = buildRouter;
function buildRouter(builder) {
    builder.add('home', '/', 'site.index', {}).addDefaultRoutes();
}
//# sourceMappingURL=routerBuilder.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alp = require('alp');

exports.default = (0, _alp.newController)({
    index: function index(ctx) {
        return ctx.redirect(ctx.urlGenerator('defaultSimple', { controller: 'module1' }));
    }
});
//# sourceMappingURL=siteController.js.map

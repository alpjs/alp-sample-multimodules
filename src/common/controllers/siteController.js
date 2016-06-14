import { newController } from 'alp';

export default newController({
    index(ctx) {
        return ctx.redirect(ctx.urlGenerator('defaultSimple', { controller: 'module1' }));
    },
});

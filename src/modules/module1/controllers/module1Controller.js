import { newController } from 'alp';
import * as moduleDescriptor from '..';

export default newController({
    index(ctx) {
        return ctx.render(moduleDescriptor);
    },
});

import { newController } from 'alp';
import * as appDescriptor from '..';

export default newController({
    index(ctx) {
        return ctx.render(appDescriptor);
    },
});

import 'babel-regenerator-runtime';
import Alp from 'alp';
import reactredux from 'alp-react-redux';
import { init } from 'alauda/web-app';
// import { install } from 'offline-plugin/runtime';

import controllers from './controllers';
import routerBuilder from './routerBuilder';

import * as module1 from './modules/module1';
import * as module2 from './modules/module2';

module1.controllers.forEach((controller, key) => controllers.set(key, controller));
module2.controllers.forEach((controller, key) => controllers.set(key, controller));

// install();

function fetchModule() {
    switch (window.MODULE_IDENTIFIER) {
        case 'module1':
            // return System.import('./modules/module1');
            return module1;
        case 'module2':
            // return System.import('./modules/module2');
            return module2;
        default:
            alert(`Unexpected module ${window.MODULE_IDENTIFIER}`);
            throw new Error(`Unexpected module ${window.MODULE_IDENTIFIER}`);
    }
}

async function loadModule() {
    const module = await fetchModule();
    /*if (module.controllers && module.controllers.size) {
        module.controllers.forEach((controller, key) => controllers.set(key, controller));
        module.controllers.clear();
    } */

    return module;
}

(async function main() {
    const app = new Alp();
    app.appVersion = window.VERSION;
    const [moduleDescriptor] = await Promise.all([
        loadModule(),
        (async () => {
            await app.init();
            await reactredux(document.getElementById('app'))(app);
        })(),
    ]);

    app.useRouter(routerBuilder, controllers);

    await app.initialRender(moduleDescriptor, window.initialData);
    init(url => app.load(url));

    await app.run();
})().catch(err => {
    console.log(err);
    throw err;
});

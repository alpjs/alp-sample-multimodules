import Alp from 'alp';
import routerBuilder from './routerBuilder';
import reactredux from 'alp-react-redux';
import Html from './views/layouts/Html';
import controllers from './controllers';
import config from './server/config';

const app = new Alp({
    srcDirname: __dirname,
    packageDirname: `${__dirname}/..`,
    config,
});

// config / init
reactredux(Html)(app);

// middlewares
app.servePublic();
app.catchErrors();
app.useRouter(routerBuilder, controllers);

app.listen();

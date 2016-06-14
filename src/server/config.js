import { Config } from 'alp';
import packageConfig from '../../package.json';

const config = new Config(`${__dirname}/../config/`);
config.loadSync({
    packageConfig,
});

export default config;

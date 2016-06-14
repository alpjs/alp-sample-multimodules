export default function buildRouter(builder) {
    builder
        .add('home', '/', 'site.index', {})
        .addDefaultRoutes();
}

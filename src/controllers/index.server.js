import controllers from '../common/controllers';
export default controllers;

['module1', 'module2'].forEach(key => {
    const moduleControllers = require('../modules/' + key + '/controllers/').default;
    moduleControllers.forEach((controller, key) => {
        if (controllers.has(key)) {
            throw new Error(`${key} already exists in controllers !`);
        }

        controllers.set(key, controller);
    })
});


// todo combineControllers

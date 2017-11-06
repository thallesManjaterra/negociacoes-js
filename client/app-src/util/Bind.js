import { ProxyFactory } from './ProxyFactory.js';
export class Bind {
    constructor(model, view, ...props) {
        const proxy = ProxyFactory.create(
            model,
            props,
            target => view.update(target)
        );
        view.update(model);
        return proxy;
    }
}

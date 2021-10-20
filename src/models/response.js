import { ModelBase } from './model-base';

export class Response extends ModelBase {
    content;
    createdAt;

    constructor(obj) {
        super(obj);
        this.setProperties(obj);
        this.createdAt = this.createdAt ? this.createdAt : new Date().getTime();
    }
}

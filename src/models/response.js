import { ModelBase } from './model-base';

export class Question extends ModelBase {
    id;
    content;
    createdAt;

    constructor(obj) {
        super(obj);
        this.createdAt = this.createdAt ? this.createdAt : new Date().getTime();
    }
}

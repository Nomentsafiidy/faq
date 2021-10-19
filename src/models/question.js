import { ModelBase } from './model-base';

export class Question extends ModelBase {
    id;
    content;
    createdAt;
    updatedAt;

    constructor(obj) {
        super(obj);
        this.createdAt = this.createdAt ? this.createdAt : new Date().getTime();
        this.updatedAt = this.updatedAt ? this.updatedAt : new Date().getTime();
    }
}

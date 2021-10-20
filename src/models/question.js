import { ModelBase } from './model-base';

export class Question extends ModelBase {
    id;
    userId;
    content;
    response;
    createdAt;
    updatedAt;

    constructor(obj) {
        super(obj);
        this.setProperties(obj);
        this.response = this.response ? this.response : undefined;
        this.createdAt = this.createdAt ? this.createdAt : new Date().getTime();
        this.updatedAt = this.updatedAt ? this.updatedAt : new Date().getTime();
    }
}

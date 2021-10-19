import { ModelBase } from './model-base';

export class User extends ModelBase {
    id;
    pseudo;
    email;
    password;
    isAdmin;

    constructor(obj) {
        super(obj);
        this.setProperties(obj);
        this.isAdmin = this.isAdmin ? this.isAdmin : false;
    }
}

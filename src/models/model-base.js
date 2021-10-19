export class ModelBase {
    /******************************************
     *				CONSTRUCTOR
     ******************************************/
    /**
     * @param obj: (object)
     */
    constructor(obj) {
        if (obj) {
            this.setProperties(obj);
        }
    }

    /**
     * @param obj: (object)
     * @return (this) chainable
     */
    setProperties(obj) {
        if (obj) {
            if (typeof obj == 'string') {
                try {
                    obj = JSON.parse(obj);
                } catch (exception) {
                    console.error('[HibouLib.ModalBase - instanciate] Exception:', exception);
                }
            }
            if (typeof obj == 'object') {
                Object.assign(this, obj);
            } else {
                console.warn('[HibouLib.ModalBase - instanciate] This variable is not an object:', obj);
            }
        }
        return this;
    }

    /******************************************
     *				METHODS
     ******************************************/
    /**
     * @return (object)
     */
    getProperties() {
        var properties = {},
            column;
        for (column in this) {
            //console.debug('[ModelBase - getProperties] column:', column);
            if (!(this[column] instanceof ModelBase)) {
                //cconsole.debug('[ModelBase - getProperties]', column, this[column]);
                properties[column] = this[column];
            }
        }
        return properties;
    }
}

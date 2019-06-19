import {Validator} from  './validator.mjs'
import {pupilsSchema} from './schema/pupilsSchema'
import {forid} from './id'

class PupilsModel {
    constructor() {
        this.pupils = new Map();
    }
    
    async add(pupil) {
        Validator.validate(pupil, pupilsSchema)
        const id = forid()
        this.pupils.set(id, pupil);
                
        return id
    }

    async read(id) {
        return { id, ...this.pupils.get(id) };
    }

    async update(id, pupil) {
        Validator.validate(pupil, pupilsSchema, true)
        return this.pupils.set(id, pupil);
    }

    async remove(id) {
        this.pupils.delete(id);
    }

}

export {PupilsModel}

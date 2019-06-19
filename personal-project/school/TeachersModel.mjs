import {Validator} from  './validator'
import {forid} from './id'
import {teacherSchema} from './schema/teacherSchema'

class TeachersModel {
    constructor() {
        this._teachers = new Map();
    }
    
    async add(teacher) {
        Validator.validate(teacher,teacherSchema)
        const id = forid()
        this._teachers.set(id, teacher);
        return id
    }

    async read(id) {
        return { id, ...this._teachers.get(id) };
    }

    async update(id, teacher) {
        Validator.validate(teacher,teacherSchema, true)
        return this._teachers.set(id, teacher);
    }

    async remove(id) {
        this._teachers.delete(id);
    }

}

export {TeachersModel}

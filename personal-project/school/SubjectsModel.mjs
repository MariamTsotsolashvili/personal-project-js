import {Validator} from  './validator.mjs'
import {subjSchema} from './schema/subjectSchema'
import {forid} from './id'
class SubjectsModel {
    constructor(subject) {
        Validator.validate(subject, subjSchema);
        this.id = forid();
        subjects.set(this.id, subject);
        return this.id;
    }
}
 
const subjects = new Map();


export { subjects, SubjectsModel };

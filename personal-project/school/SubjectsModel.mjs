import {Validator} from  './validator.mjs'
import {subjSchema} from './schema/subjectSchema'
import {forid} from './id'
class SubjectsModel {
    constructor(subject) {
        Validator.validate(subject, subjSchema);
        this.title = subject.title;
        this.lessons = subject.lessons;
        this.description = obj.description;
    }
}



export { subjects, SubjectsModel };

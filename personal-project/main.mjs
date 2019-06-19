import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradesbooksModel
} from './school/index.mjs';

const teacherSchema = { name: { first: 'Mariam', last: 'Tsotso' }, 
    image: "IMage", 
    dateOfBirth: '11-04-1962',
    emails: [{ email: 'mari.1@gmail.com', primary: true }],
    phones: [{ phone: '5999999', primary: false }],
    sex: 'female', subjects: [{ subject: 'History' }], 
    description: 'desc' 
};

const pupilSchema = { name: { first: 'Mari', last: 'ts' }, 
    image: "imageeee", 
    dateOfBirth: '11-04-2000',
    phones: [{ phone: '777588777', primary: false }],
    sex: 'female', description: 'ript'
};

const pupilSchemaSecond = { name: { first: 'mariko', last: 'ariko' },
    phones: [{ phone: '599663322', primary: false}, { phone: '599557558', primary: true}],
    sex: 'female', description: 'ion'
};
(async () => {
    const history = new SubjectsModel({
        title: 'History',
        lessons: 24,
        description:'description'
    });

    const lms = new LMSModel();
    await lms.add(history);

    const teacher = new TeachersModel();
    const teacherID = await teacher.add(teacherSchema);
    
    const pupil = new PupilsModel();
    const pupilId = await pupil.add(pupilSchema);
    await pupil.update(pupilId, pupilSchemaSecond)
    
    const group = new GroupsModel(pupil);
    const groupID = await group.add(236);
    await group.addPupil(groupID, pupilId);
    await group.readAll()

    const level = 1;
    const grade = await new GradesbooksModel(group, teacher, lms);
    const gradebook = await grade.add(level, groupID);

    const record = { pupilId: pupilId,
        teacherId: teacherID,
        subjectId: history,
        lesson: 3,
        mark: 7 };

    await grade.addRecord(gradebook, record);

    const stud = await grade.read(gradebook, pupilId);
    const result = await grade.readAll(gradebook);
})()
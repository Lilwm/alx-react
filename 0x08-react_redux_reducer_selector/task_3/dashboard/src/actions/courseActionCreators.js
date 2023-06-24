import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { bindActionCreator } from 'redux';

const selectCourse = (index) => ({
    type : SELECT_COURSE,
    index,
});
const boundSelectCourse = bindActionCreator(selectCourse, dispatch);

const unSelectCourse = (index) => ({
    type: UNSELECT_COURSE,
    index,
});

const boundUnSelectCourse = bindActionCreator(unSelectCourse, dispatch);


export {selectCourse, boundSelectCourse, unSelectCourse, boundUnSelectCourse };

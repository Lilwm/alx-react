import { courseNormalizer } from "../schema/courses";

const initialState = Immutable.Map({
  courses: Immutable.Map(),
  selectedCourse: null,
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const courses = courseNormalizer(action.data);
      state = state.merge({ courses });
      break;
    case SELECT_COURSE:
      state = state.setIn(['selectedCourse'], action.courseId);
      break;
    case UNSELECT_COURSE:
      state = state.setIn(['selectedCourse'], null);
      break;
    default:
      return state;
  }
};

export default courseReducer;
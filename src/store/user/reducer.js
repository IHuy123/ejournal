import { ACT_ALL_USER, ACT_ALL_UNIVERSITY, ACT_ALL_MAJOR } from "./actions";
const initUserState = {
  allUser: null,
  allUniversity: null,
  allMajor: null,
};

export default function reducer(state = initUserState, action) {
  switch (action.type) {
    case ACT_ALL_USER:
      return {
        ...state,
        allUser: action.payload.allUser,
      };
    case ACT_ALL_UNIVERSITY:
      return {
        ...state,
        allUniversity: action.payload.allUniversity,
      };
    case ACT_ALL_MAJOR:
      return {
        ...state,
        allMajor: action.payload.allMajor,
      };
    default:
      return state;
  }
}

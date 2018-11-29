import { firebase } from './configs';
import { getTodo, insertTodo } from './modules';

// init firebase
firebase();

// export to firebase functions
export {
    getTodo,
    insertTodo,
};

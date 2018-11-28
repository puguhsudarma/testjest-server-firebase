import firebase from './configs/firebase';
import getTodo from './modules/getTodo';
import insertTodo from './modules/insertTodo';

// init firebase
firebase();

// export to firebase functions
export {
    getTodo,
    insertTodo,
};

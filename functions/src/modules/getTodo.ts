import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin';
import { TODO } from '../constants/pathDatabase';

export default functions.https.onRequest(async (request, response) => {
    try {
        const snapshot = await firebase.database().ref(TODO).once('value');

        const todos = [];
        snapshot.forEach((child) => {
            todos.push(child.val().todo);
            return true;
        });

        response.send({
            status: true,
            data: {
                todos,
            }
        });
    } catch (err) {
        response.sendStatus(500).send({
            status: false,
            data: {
                ...err,
            },
        });
    }
});

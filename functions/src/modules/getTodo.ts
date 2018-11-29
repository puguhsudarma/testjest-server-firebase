import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin';
import { pathDatabase } from '../constants';
import { jsonTransformer } from '../helpers';

export default functions.https.onRequest(async (request, response) => {
    try {
        const snapshot = await firebase.database().ref(pathDatabase.TODO).once('value');

        const todos = [];
        snapshot.forEach((child) => {
            const val = child.val();
            todos.push(val.todo);
            return false;
        });

        response.send(jsonTransformer(true, 'success', { todos }));
    } catch (err) {
        response.sendStatus(500).send(jsonTransformer(false, 'failed', err));
    }
});

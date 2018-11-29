import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin';
import { pathDatabase } from '../constants';
import { jsonTransformer } from '../helpers';

export default functions.https.onRequest(async (request, response) => {
    try {
        const { todo } = request.body;
        await firebase.database().ref(pathDatabase.TODO).push({ todo })

        response.send(jsonTransformer(true, 'success', { todo }));
    } catch (err) {
        response.status(500).send(jsonTransformer(false, 'failed', err));
    }
});

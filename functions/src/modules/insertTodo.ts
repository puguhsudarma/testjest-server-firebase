import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin';
import { TODO } from '../constants/pathDatabase';

export default functions.https.onRequest(async (request, response) => {
    try {
        const { todo } = request.body;
        await firebase.database().ref(TODO).push({ todo })

        response.send({
            status: true,
            data: {
                todo,
            }
        });
    } catch (err) {
        response.status(500).send({
            status: false,
            data: {
                ...err,
            },
        });
    }
});

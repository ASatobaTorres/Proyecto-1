/**
 * Importa los disparadores de funciones desde sus respectivos submódulos:
 * 
 * const { onCall } = require("firebase-functions/v2/https");
 * const { onDocumentWritten } = require("firebase-functions/v2/firestore");
 * 
 * Consulta la lista completa de disparadores compatibles en:
 * https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https"); // Importa la función para manejar solicitudes HTTP
const logger = require("firebase-functions/logger"); // Importa el módulo para registrar mensajes en Firebase

// Crea y despliega tu primera función
// https://firebase.google.com/docs/functions/get-started

/*
exports.helloWorld = onRequest((request, response) => {
    logger.info("¡Hola logs!", { structuredData: true });
    response.send("¡Hola desde Firebase!");
});
*/

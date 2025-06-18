

/* import Database from "better-sqlite3";
const db = new Database('data.db', {verbose: console.log}); */

import { goto } from '$app/navigation';

let date = new Date();



let email = '';
let password = '';
let error = '';
let user = null;


export function load({params}) {

    console.log("ESECUZIONE FUNZIONE LOAD ", Date.now());
    
}


// +page.server.js
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');

    console.log(name + email);

    try {
      const response = await fetch('http://192.168.1.199/xampp-api/inserisci.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      if (!response.ok) {
        return {
          status: response.status,
          error: new Error('Errore nella richiesta al server')
        };
      }

      const result = await response.json();
      const fileId = result.file_id;

      // Reindirizza al download del file
      return {
        status: 302,
        headers: {
          Location: `http://192.168.1.199/xampp-api/download.php?id=${fileId}`
        }
      };
    } catch (err) {
      return {
        status: 500,
        error: new Error('Errore di connessione al server')
      };
    }
  }
};

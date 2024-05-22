

import Database from "better-sqlite3";

const db = new Database('data.db', {verbose: console.log});

let date = new Date();


export function load({params}) {

    console.log("ESECUZIONE FUNZIONE LOAD ", Date.now());
    
}

export const actions={
    create: async({cookies, request})=>{
        const data = await request.formData();
        console.log("create action");
        console.log("i valori sono", data);

        const query2 = db.prepare("INSERT INTO utenti(user,nomeAzienda,data) VALUES(@tipouser,@nomeazienda,datetime('now','localtime'))");
        
        const user = {
            tipouser: data.get("tipouser"),
            nomeazienda: data.get("nomeazienda"),
            
        }

        

        if (user.tipouser) {
            const res2 =query2.run({
                tipouser: user.tipouser,
                nomeazienda: user.nomeazienda,
                
            });
        }else{
            return{
                form_error: true,
                form_vals: user
            }
        }

    }
}

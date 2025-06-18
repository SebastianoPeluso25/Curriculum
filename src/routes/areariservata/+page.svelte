<script>

    import { onMount } from 'svelte';

    /** FIREBASE */
  //   import { db, auth } from "../../lib/firebase.js";
  //   import { collection, addDoc, query, onSnapshot } from "firebase/firestore";

  //   let users = [];

  //   // Funzione per recuperare i dati in tempo reale
  // onMount(() => {
  //   const q = query(collection(db, "utenti2"));
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //   });

  //   return () => unsubscribe(); // Pulisce il listener quando il componente viene distrutto
  // });



  /**332222222222222222222*/


  import { signInWithEmailAndPassword, onAuthStateChanged, signOut  } from 'firebase/auth';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let error = '';
  let user = null;

  // Carica utente da localStorage (se presente)
  onMount(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user = JSON.parse(storedUser);
      loadUsers(); // carica utenti se loggato
    }
  });

  // Login con fetch verso login.php
  const login = async () => {
    try {
      const res = await fetch('http://192.168.1.199/xampp-api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data));
        user = data;
        email = '';
        password = '';
        error = '';
        loadUsers(); // carica utenti
      } else {
        error = 'Credenziali errate';
      }
    } catch (err) {
      error = 'Errore di rete o server';
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    user = null;
    goto('/areariservata');
  };

  // Lista utenti che hanno scaricato il file (presumo da un endpoint PHP)
  let users = [];

  async function loadUsers() {
    try {
      const res = await fetch('http://192.168.1.199/xampp-api/lista_utenti.php');
      users = await res.json();
    } catch (err) {
      console.error('Errore nel caricamento utenti:', err);
    }
  }

  /* const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      goto('/areariservata'); // Reindirizza alla home page dopo il login
    } catch (err) {
      error = err.message;
    }
  };


  let user = null;

  // Controlla lo stato di autenticazione
  onAuthStateChanged(auth, (authUser) => {
    user = authUser;
  });

  // Funzione di logout
  const logout = async () => {
    await signOut(auth);
    goto('/areariservata'); // Reindirizza alla pagina di login dopo il logout
  }; */



</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<header>
  
    {#if user}
      <div class="header">
        <p id="welcome-header" ><span class="material-symbols-outlined">
          account_circle
          </span></p>
          <p>Benvenuto, {user.email.split('@')[0]}</p>
      </div>
 
      <button on:click={logout}>
        <span class="material-symbols-outlined">logout</span>
        Logout
      </button>

      <h2>Persone che hanno scaricato il Curriculum:</h2>
      <div class="user">
        <ul>
          {#each users as user (user.id)}
            <li>{user.name} - {user.email} - {user.type} - {user.nomeAzienda}</li>
          {/each}
        </ul>
      </div>

    {:else}
    <form on:submit|preventDefault={login}>
      <label for="email">Email</label>
      <input id="email" type="email" bind:value={email} required />
    
      <label for="password">Password</label>
      <input id="password" type="password" bind:value={password} required />

      <div class="container-button">
        <button type="submit">Login</button>
      </div>
      
      {#if error}
        <!-- <p id="error-access-alert" >{error}</p> -->
        <p id="error-access-alert">Impossibile effettuare l'accesso credenziali errate</p>
      {/if}
    </form>
    {/if}
  
</header>








<style>

  @media(min-width:480px){
      .user{
          width: 80%;
          margin: auto;
      }

      .header{
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      #welcome-header > .material-symbols-outlined{
        font-size: 40px;
      }

      #welcome-header{
        font-size: 20px;
        
      }

      #error-access-alert{
        color: red;
      }

      ul{
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    li{
      padding: 10px;
      box-shadow: 1px 1px 8px 2px black;
      border-radius: 10px;
      width: max-content;
    }

    li:hover{
      background-color: greenyellow;
      cursor: pointer;
      padding: 14px;
    }

    form{
      display: flex;
      flex-direction: column;
      width: 46%;
      margin: auto;
      padding: 10px;
      row-gap: 10px;
    }

    form > .container-button{
      --button_radius: 0.75em;
            --button_color: #e8e8e8;
            --button_outline_color: #107fee;
      font-size: 17px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            border-radius: var(--button_radius);
            background: var(--button_outline_color);
            box-shadow: 8px 10px 6px solid var(--button_outline_color);
            width: 100%;
    }

    form > .container-button > button{
      border-radius: 20px;
      padding: 8px;
      font-size: 20px;
      border: none;
      color: black;
      background-color: #90caf9;
      /* box-shadow: -2px 4px 0px 2px #1565c0; */
      transform: translateY(-0.2em);
      transition: transform 0.2s ease;

      border: 2px solid 1565c0;
            border-radius: 0.75rem;
            padding: 0.75em 1.5em;
            width: 100%;
    }



    form > .container-button > button:hover{
      transform: translateY(-0.50em);
    }

    form > .container-button > button:active{
      background-color: orange;
      transform: translateY(0);
    }

    form > input{
      border-radius: 10px;
      padding: 8px;
    }
  
  }



  @media(max-width:480px){
      .user{

      }

      #error-access-alert{
        color: red;
      }

      ul{
      list-style: none;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      padding: 20px;
      
      
    }

    li{
      padding: 10px;
      box-shadow: 1px 1px 8px 2px black;
      border-radius: 10px;
      width: max-content;
    }

    li:hover{
      background-color: greenyellow;
      cursor: pointer;
      padding: 14px;
    }

    form{
      display: flex;
      flex-direction: column;
      width: 46%;
      margin: auto;
      padding: 10px;
      row-gap: 10px;
    }

    form > .container-button{
      --button_radius: 0.75em;
            --button_color: #e8e8e8;
            --button_outline_color: #107fee;
      font-size: 17px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            border-radius: var(--button_radius);
            background: var(--button_outline_color);
            box-shadow: 8px 10px 6px solid var(--button_outline_color);
            width: 100%;
    }

    form > .container-button > button{
      border-radius: 20px;
      padding: 8px;
      font-size: 20px;
      border: none;
      color: black;
      background-color: #90caf9;
      /* box-shadow: -2px 4px 0px 2px #1565c0; */
      transform: translateY(-0.2em);
      transition: transform 0.2s ease;

      border: 2px solid 1565c0;
            border-radius: 0.75rem;
            padding: 0.75em 1.5em;
            width: 100%;
    }



    form > .container-button > button:hover{
      transform: translateY(-0.50em);
    }

    form > .container-button > button:active{
      background-color: orange;
      transform: translateY(0);
    }

    form > input{
      border-radius: 10px;
      padding: 8px;
    }
  }

    
</style>
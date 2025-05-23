// src/firebase.js

import { initializeApp } from "firebase/app";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuqLUzuszv3XDu6_eyEs0ZrCfBOGQgHrc",
  authDomain: "replyflow-ai.firebaseapp.com",
  projectId: "replyflow-ai",
  storageBucket: "replyflow-ai.appspot.com",
  messagingSenderId: "2282640553",
  appId: "1:2282640553:web:1412df559aab8cb81c85b8",
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Exportação padrão para uso no projeto
export default app;

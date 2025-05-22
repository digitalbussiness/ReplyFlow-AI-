// Importa a função para inicializar o app Firebase
import { initializeApp } from "firebase/app";

// Configuração do seu projeto Firebase (substitua pelos seus dados reais)
const firebaseConfig = {
  apiKey: "AIzaSyAuqLUzuszv3XDu6_eyEs0ZrCfBOGQgHrc",
  authDomain: "replyflow-ai.firebaseapp.com",
  projectId: "replyflow-ai",
  storageBucket: "replyflow-ai.firebasestorage.app",
  messagingSenderId: "2282640553",
  appId: "1:2282640553:web:1412df559aab8cb81c85b8"
};

// Inicializa o app Firebase com a configuração
const app = initializeApp(firebaseConfig);

export default app;

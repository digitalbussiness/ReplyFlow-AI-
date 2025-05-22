import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase"; // seu arquivo firebase.js onde tem o Firestore inicializado

// Salva ou atualiza o plano do usuário no Firestore
export async function saveUserPlan(uid, plan) {
  try {
    const userPlanRef = doc(db, "userPlans", uid);
    await setDoc(userPlanRef, { plan });
  } catch (error) {
    console.error("Erro ao salvar plano do usuário:", error);
    throw error;
  }
}

// Busca o plano do usuário no Firestore
export async function getUserPlan(uid) {
  try {
    const userPlanRef = doc(db, "userPlans", uid);
    const docSnap = await getDoc(userPlanRef);
    if (docSnap.exists()) {
      return docSnap.data().plan;
    } else {
      return null; // Usuário sem plano salvo
    }
  } catch (error) {
    console.error("Erro ao buscar plano do usuário:", error);
    throw error;
  }
}

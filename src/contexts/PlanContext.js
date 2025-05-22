import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { getUserPlan } from "../firebase/firestorePlans";

const PlanContext = React.createContext();

export function usePlan() {
  return useContext(PlanContext);
}

export function PlanProvider({ children }) {
  const { currentUser } = useAuth();
  const [userPlan, setUserPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlan() {
      if (currentUser) {
        const plan = await getUserPlan(currentUser.uid);
        setUserPlan(plan);
      }
      setLoading(false);
    }

    fetchPlan();
  }, [currentUser]);

  const value = { userPlan, setUserPlan };

  return (
    <PlanContext.Provider value={value}>
      {!loading && children}
    </PlanContext.Provider>
  );
}

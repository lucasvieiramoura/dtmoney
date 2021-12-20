import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Trasanction {
    id:number;
    title:string;
    amount:number;
    type:string;
    category:string;
    createdAt: string;
}

interface TrasanctionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Trasanction[]>([]);

export function TransactionsProvider({children}: TrasanctionsProviderProps) {
    const [transactions, setTransactions] = useState<Trasanction[]>([]);

    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    },[]);
  return(
      <TransactionsContext.Provider value={transactions}>
          {children}
      </TransactionsContext.Provider>
  )
}
import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const API = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  timeout: 4000,
});

export const useLoginStore = create(
  persist(
    (set, get) => ({
      loggedIn: false,
      logout: () => set({ loggedIn: false }),
      login: () => set({ loggedIn: true }),
    }),
    {
      name: "doctor-dash-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

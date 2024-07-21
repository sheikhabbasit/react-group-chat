import { create } from "zustand";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  changedChat: () => {},
  activeChatId: (id) => set({ chatId: id }),
  clearChat: () => set({ chatId: null, user: null }),
}));

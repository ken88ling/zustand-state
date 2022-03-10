import create from 'zustand';
import { devtools } from 'zustand/middleware';

let useStore = (set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 2 }),
});

useStore = devtools(useStore);

export default useStore = create(useStore);

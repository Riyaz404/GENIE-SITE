'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesStore {
  favorites: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
}

interface CompareStore {
  compareList: string[]
  addToCompare: (id: string) => void
  removeFromCompare: (id: string) => void
  toggleCompare: (id: string) => void
  isComparing: (id: string) => boolean
  clearCompare: () => void
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (id) =>
        set((state) => ({
          favorites: [...state.favorites, id],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== id),
        })),
      toggleFavorite: (id) => {
        const { favorites, addFavorite, removeFavorite } = get()
        if (favorites.includes(id)) {
          removeFavorite(id)
        } else {
          addFavorite(id)
        }
      },
      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: 'genie-favorites',
    }
  )
)

export const useCompareStore = create<CompareStore>()(
  persist(
    (set, get) => ({
      compareList: [],
      addToCompare: (id) =>
        set((state) => {
          if (state.compareList.length >= 4) {
            return state
          }
          return {
            compareList: [...state.compareList, id],
          }
        }),
      removeFromCompare: (id) =>
        set((state) => ({
          compareList: state.compareList.filter((item) => item !== id),
        })),
      toggleCompare: (id) => {
        const { compareList, addToCompare, removeFromCompare } = get()
        if (compareList.includes(id)) {
          removeFromCompare(id)
        } else {
          addToCompare(id)
        }
      },
      isComparing: (id) => get().compareList.includes(id),
      clearCompare: () => set({ compareList: [] }),
    }),
    {
      name: 'genie-compare',
    }
  )
)

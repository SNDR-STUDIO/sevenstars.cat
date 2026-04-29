const STORAGE_KEY = "seven-stars-static-state";

const defaultState = {
  locale: "en",
  cart: [],
  wishlist: [],
  recent: [],
};

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return parsed ? { ...defaultState, ...parsed } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

function createStore() {
  let state = loadState();
  const listeners = new Set();

  function emit() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    listeners.forEach((listener) => listener(state));
  }

  return {
    getState: () => state,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    setLocale(locale) {
      state = { ...state, locale };
      emit();
    },
    addToCart(id) {
      if (state.cart.includes(id)) return;
      state = { ...state, cart: [...state.cart, id] };
      emit();
    },
    removeFromCart(id) {
      state = { ...state, cart: state.cart.filter((item) => item !== id) };
      emit();
    },
    clearCart() {
      state = { ...state, cart: [] };
      emit();
    },
    toggleWishlist(id) {
      state = {
        ...state,
        wishlist: state.wishlist.includes(id)
          ? state.wishlist.filter((item) => item !== id)
          : [...state.wishlist, id],
      };
      emit();
    },
    addRecent(id) {
      state = { ...state, recent: [id, ...state.recent.filter((item) => item !== id)].slice(0, 6) };
      emit();
    },
  };
}

window.StaticState = { createStore };

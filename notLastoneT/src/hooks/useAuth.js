import { create } from 'zustand';
import { login as apiLogin, register as apiRegister, logout as apiLogout, getCurrentUser } from '../services/api';

const useAuth = create((set) => ({
  user: null,
  loading: true,
  error: null,
  initialized: false,

  login: async (credentials) => {
    try {
      const response = await apiLogin(credentials);
      set({ user: response.data, error: null });
      return response.data;
    } catch (error) {
      set({ error: error.response?.data?.message || 'Login failed' });
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await apiRegister(userData);
      set({ user: response.data, error: null });
      return response.data;
    } catch (error) {
      set({ error: error.response?.data?.message || 'Registration failed' });
      throw error;
    }
  },

  logout: async () => {
    try {
      await apiLogout();
      set({ user: null, error: null });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Logout failed' });
      throw error;
    }
  },

  initialize: async () => {
    try {
      const response = await getCurrentUser();
      set({ user: response.data, loading: false, initialized: true });
    } catch (error) {
      set({ user: null, loading: false, initialized: true });
    }
  },

  clearError: () => set({ error: null }),
}));

// Initialize auth state when the hook is first imported
useAuth.getState().initialize();

export { useAuth };

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.url, config.method.toUpperCase());
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log('Received response from:', response.config.url, response.status);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

// Auth endpoints
export const login = (credentials) => 
  api.post('/auth/login/', credentials);

export const register = (userData) => 
  api.post('/auth/register/', userData);

export const logout = () => 
  api.post('/auth/logout/');

export const getCurrentUser = () => 
  api.get('/auth/user/');

// Category endpoints
export const getCategories = () => 
  api.get('/categories/');

// Product endpoints
export const getProducts = (category = '') => 
  api.get('/products/', {
    params: category ? { category } : {}
  });

export const getProduct = (id) => 
  api.get(`/products/${id}/`);

export const getProductReviews = (id) => 
  api.get(`/products/${id}/reviews/`);

export const addProductReview = (id, review) => 
  api.post(`/products/${id}/reviews/`, review);

// Cart endpoints
export const getCart = () => 
  api.get('/cart/');

export const addToCart = (productId, quantity = 1) => 
  api.post('/cart/add/', { product_id: productId, quantity });

export const updateCartItem = (itemId, quantity) => 
  api.put(`/cart/items/${itemId}/`, { quantity });

export const removeFromCart = (itemId) => 
  api.delete(`/cart/items/${itemId}/`);

export const clearCart = () => 
  api.post('/cart/clear/');

// Wishlist endpoints
export const getWishlist = () => 
  api.get('/wishlist/');

export const addToWishlist = (productId) => 
  api.post('/wishlist/add/', { product_id: productId });

export const removeFromWishlist = (productId) => 
  api.delete(`/wishlist/products/${productId}/`);

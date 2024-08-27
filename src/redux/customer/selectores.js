export const selectIsLoggedIn = (state) => state.customer.isLoggedIn;
export const selectCustomer = (state) => state.customer.user;
export const selectRefreshing = (state) => state.customer.isRefreshing;
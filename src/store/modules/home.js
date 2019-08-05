/** VUEX module for Home **/

export default {
    namespaced: true,
    // -----------------------------------------------------------------
    state: {
      // properties to store user data
    },
    // -----------------------------------------------------------------
    getters: {
      // getters and computed props on the user data
    },
    // -----------------------------------------------------------------
    mutations: {
      // stuff to set user data locally
    },
    // -----------------------------------------------------------------
    actions: {
      create: (context, formData) => {
        // stuff to create a new user on the backend : CRUD CREATE ACTION
      },
      read: context => {
        // stuff to retrieve user data from the backend : CRUD READ ACTION
      },
      update: (context, formData) => {
        // stuff to update user data to the backend : CRUD UPDATE ACTION
      },
      delete: context => {
        // stuff to erase user on the bockend : CRUD DELETE ACTION
      },
      login: (context, credentials) => {
        // stuff to log in a user : LOGIN ACTION
      },
      logout: context => {
        // stuff to logout the logged in user : LOGOUT ACTION
      }
    }
  }
const token = window.sessionStorage.getItem(
  "loginData",)

const UserService = {
    // login
    login: async (credentials) => {
      return fetch(`${process.env.REACT_APP_BASE_URL}admin_login`, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the Authorization header with the token
        },
        body: JSON.stringify(credentials),
      }).then((data) => data.json());
    },
  
    // save login data
    // saveLoginData: (loginData) => {
    //   sessionStorage.setItem("loginData", JSON.stringify(loginData));
    // },
  
    //   logout
    // logout: () => {
    //   sessionStorage.clear();
    // },
  
    isLoggedIn: () => {
      let loginData = JSON.parse(sessionStorage.getItem("loginData"));
  
      if (loginData && loginData.token && loginData.role) {
        return true;
      } else return false;
    },
  
    // get user role
    getCurrentUserRole: () => {
      let loginData = JSON.parse(sessionStorage.getItem("loginData"));
      let userRoles = JSON.parse(sessionStorage.getItem("userRoles"));
  
      let roleD = false;
      // if (loginData && loginData.user.role && userRoles.length) {
      //   userRoles.forEach((role) => {
      //     if (role._id == loginData.user.role) {
      //       roleD = role.name;
      //     }
      //   });
      // }
      return roleD;
    },
  
    // get login data
    getCurrentUserLoginData: () => {
      let loginData = JSON.parse(sessionStorage.getItem("loginData"));
  
      if (loginData) {
        loginData.key = process.env.REACT_APP_KEY;
        loginData.secret = process.env.REACT_APP_SECRET;
        return loginData;
      } else {
        return false;
      }
    },
    // get role
    getRoles: () => {
      return fetch(`${process.env.REACT_APP_BASE_URL}get_role`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          key: process.env.REACT_APP_KEY,
          secret: process.env.REACT_APP_SECRET,
          Country: "KE",
        },
      }).then((data) => data.json());
    },
  
    // save roles
    saveRoles: (roles) => {
      sessionStorage.setItem("userRoles", JSON.stringify(roles));
    },
    // register user
    addUser: async (post_data) => {
      return fetch(`${process.env.REACT_APP_BASE_URL}register_user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          key: process.env.REACT_APP_KEY,
          secret: process.env.REACT_APP_SECRET,
          Country: "KE",
        },
        body: JSON.stringify(post_data),
      }).then((data) => data.json());
    },
    // register admin
    addAdmin: async (post_data) => {
      return fetch(`${process.env.REACT_APP_BASE_URL}admin_register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          key: process.env.REACT_APP_KEY,
          secret: process.env.REACT_APP_SECRET,
          Country: "KE",
        },
        body: JSON.stringify(post_data),
      }).then((data) => data.json());
    },
  
    // end class
  };
  
  export default UserService;
  
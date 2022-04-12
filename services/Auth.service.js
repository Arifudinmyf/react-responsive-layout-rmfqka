const auth = {
  login: async email => {
    // Fake API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(localStorage.setItem("email", email));
      }, 500);
    });
  },
  logout: () => {
    localStorage.clear();
    location.reload();
  },
  isLogged: () => {
    return localStorage.getItem("email") ? true : false;
  }
};

export default auth;

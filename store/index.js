export const state = () => ({
    navIndex: 0
  })
  
  export const mutations = {
    setNavIndex(state, index) {
      state.navIndex = index;
    }
  }
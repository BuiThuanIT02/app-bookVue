import { getAllBook } from "@/apis/useAPI";
const state = () => ({
  book: [],
});
const mutations = {
  setAllBook(state, dataMutation) {
    state.book = dataMutation;
  },
};

const actions = {
  async getAllBookAction({ commit }) {
    const { data } = await getAllBook();
    // const request = await fetch("https://localhost:7063/api/Book");
    // const data = await request.json();
    console.log(data);
    commit("setAllBook", data);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

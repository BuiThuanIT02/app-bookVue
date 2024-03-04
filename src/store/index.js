import { createStore } from "vuex";
import book from "./moudule/book";
const store = createStore({
  modules: {
    listBook: book,
  },
});
export default store;

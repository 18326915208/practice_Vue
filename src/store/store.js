import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    minCount(state){
			state.count--;
			if(state.count<1){
				state.count=1;
			}
		},
		decCount(state){
			state.count++	;
			
		}
  }
})
export default store;
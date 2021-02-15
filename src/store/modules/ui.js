// State
const state = () => ({
    isDataLoaded: false,
    isProvinceLoaded: false,
    isCityLoaded: false,
    isSizeLoaded: false,
    dataLoading: false,
    areLoading: false,
    sizeLoading: false
});

// Getters
const getters = {};

// Actions
const actions = {
    dataLoaded({ commit }) {
        commit('setDataLoaded', true);
    },
    dataUnLoaded({ commit }) {
        commit('setDataLoaded', false);
    },

    provinceLoaded({commit}) {
        commit('setProvinceLoaded', true);
    },
    provinceUnLoaded({commit}) {
        commit('setProvinceLoaded', false);
    },

    cityLoaded({commit}) {
        commit('setCityLoaded', true);
    },
    cityUnLoaded({commit}) {
        commit('setCityLoaded', false);
    },

    sizeLoaded({commit}) {
        commit('setSizeLoaded', true);
    },
    sizeUnLoaded({commit}) {
        commit('setSizeLoaded', false);
    },

    startLoadingData({commit}) {
        commit('setDataLoading', true);
    },
    finishLoadingData({commit}) {
        commit('setDataLoading', false);
    },

    startAreaLoading({commit}) {
        commit('setAreaLoading', true);
    },
    finishAreaLoading({commit}) {
        commit('setAreaLoading', false);
    },

    startSizeLoading({commit}) {
        commit('setSizeLoading', true);
    },
    finishSizeLoading({commit}) {
        commit('setSizeLoading', false);
    }
};

// Mutations
const mutations = {
    setDataLoaded( state, value ) {
        state.isDataLoaded = value;
    },

    setProvinceLoaded( state, value ) {
        state.isProvinceLoaded = value;
    },

    setCityLoaded( state, value ) {
        state.isCityLoaded = value;
    },

    setSizeLoaded( state, value ) {
        state.isSizeLoaded = value;
    },

    setDataLoading( state, value ) {
        state.dataLoading = value;
    },

    setAreaLoading( state, value ) {
        state.areLoading = value;
    },

    setSizeLoading( state, value ) {
        state.sizeLoading = value;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
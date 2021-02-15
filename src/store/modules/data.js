import api from "./../../api/fish";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

moment.locale("id")

// const s = require("underscore.string");

// State
const state = () => ({
    fishes: [],
    provinces: [],
    cities: [],
    sizes: [],
    item: {}
})
// Getters
const getters = {}

// Actions
const actions = {
    async getData({ commit }, filter) {
        commit('ui/dataUnLoaded');
        commit('ui/startLoadingData');
        commit('loadMain', filter);
        commit('ui/finishLoadingData');
        commit('ui/dataLoaded');
    },

    async getAreas({ commit }) {
        commit('ui/provinceUnLoaded');
        commit('ui/cityUnLoaded');
        commit('ui/startAreaLoding');
        commit('loadArea');
        commit('ui/finishAreaLoading');
        commit('ui/provinceLoaded');
        commit('ui/cityUnLoaded');
    },

    async getSizes({ commit, dispatch }) {
        dispatch('ui/sizeUnLoaded', null, { root: true });
        dispatch('ui/startSizeLoading', null, { root: true });
        commit('loadSize');
        dispatch('ui/finishSizeLoading', null, { root: true });
        dispatch('ui/sizeLoaded', null, { root: true });
    }
}

// Mutations
const mutations = {
    async loadMain(state, filter) {
        await api.get("list", filter).then( (items) => {
            state.fishes = [];
            state.fishes.push( items );
        });
    },

    async loadFish( state, id) {
        await api.get("list", {
            uuid: id
        }).then( item => {
            state.item = item
        })
    },

    async addFish( state, { komoditas, province, city, size, price } ) {
        let data = {
            uuid: uuidv4(),
            komoditas: komoditas,
            area_provinsi: province,
            area_kota: city,
            size: size,
            price: price,
            tgl_parsed: moment.utc(),
            timestamp: Date.now()
        };
        await api.post("list", data).then( () => {
            state.item = data
        });
    },

    async updateFish( state, { id, komoditas, province, city, size, price } ) {
        let data = {
            komoditas: komoditas,
            area_provinsi: province,
            area_kota: city,
            size: size,
            price: price,
            tgl_parsed: moment.utc(),
            timestamp: Date.now()
        };
        await api.update("list", id, data).then( () => {
            data.uuid = id;
            state.item = data;
        })
    },

    async deleteFish( state, id ) {
        await api.delete("list", id).then( () => {
            state.item = {
                uuid: id
            }
        })
    },

    async loadArea(state) {
        await api.get("option_area", {}).then( (area) => {
            let p = [];
            let c = [];
            area.forEach( item => {
                p.push( item.province );
                c.push( item.city );
                state.provinces = p;
                state.cities = c;
            })
        });
    },

    async loadSize(state) {
        await api.get("option_size", {}).then( (size) => {
            let s = [];
            size.forEach( (item) => {
                s.push( item.size );
                state.sizes = s;
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
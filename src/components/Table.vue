<template>
    <vs-table ref="tata" striped>
        <template #header>
            <div class="row align-items-center">
                <div class="col col-md-6">
                    <vs-input v-model="search" placeholder="Pencarian..." primary block>
                        <template #icon>
                            <i class="ri-search-2-line"></i>
                        </template>
                    </vs-input>
                </div>
                <div class="col col-md-6">
                    <div class="d-flex justify-content-end">
                        <vs-button>
                            <i class="ri-add-fill"></i>
                            <span>Tambah Data</span>
                        </vs-button>
                        <!-- <vs-button class="d-inline d-md-none" icon flat>
                            <i class="ri-filter-3-line"></i>
                        </vs-button> -->
                    </div>
                </div>
            </div>
        </template>
        <template #thead>
            <vs-tr>
                <vs-th sort @click="fishes = $vs.sortData($event ,fishes, 'komoditas')">
                    Jenis Ikan
                </vs-th>
                <vs-th v-responsive.lg.xl sort @click="fishes = $vs.sortData($event ,fishes, 'area_provinsi')">
                    Provinsi
                </vs-th>
                <vs-th v-responsive.lg.xl sort @click="fishes = $vs.sortData($event ,fishes, 'area_kota')">
                    Kota
                </vs-th>
                <vs-th v-responsive.lg.xl sort @click="fishes = $vs.sortData($event ,fishes, 'size')">
                    Ukuran
                </vs-th>
                <vs-th v-responsive.lg.xl sort @click="fishes = $vs.sortData($event ,fishes, 'price')">
                    Harga
                </vs-th>
                <vs-th>
                </vs-th>
            </vs-tr>
        </template>
        <template #tbody>
            <vs-tr
                v-for="(tr,i) in $vs.getPage($vs.getSearch(fishes, search), page, max)"
                :key="i"
                :data="tr"
            >
                <vs-td>
                    <div v-responsive.lg.xl>
                        <div class="d-flex align-items-center">
                            <vs-avatar size="64" primary>
                                <div class="icon">
                                    <img svg-line :src="fishImage(tr.komoditas)" :alt="tr.komoditas" />
                                </div>
                            </vs-avatar>
                            <span class="ml-2 font-weight-bold">{{ tr.komoditas || "-" }}</span>
                        </div>
                    </div>
                    <div v-responsive.sm.xs>
                        <div class="d-flex">
                            <vs-avatar primary.xs size="52">
                                <div class="icon">
                                    <img svg-line :src="fishImage(tr.komoditas)" :alt="tr.komoditas" />
                                </div>
                            </vs-avatar>
                            <div class="d-flex flex-column ml-2">
                                <span class="sb-item__title">{{ tr.komoditas || "-" }}</span>
                                <small class="sb-item__area">{{ join(" - ", capitalize(tr.area_provinsi), capitalize(tr.area_kota) ) || "-" }}</small>
                                <span class="sb-item__price">Rp {{ numberFormat(tr.price) }}</span>
                            </div>
                        </div>
                    </div>
                </vs-td>
                <vs-td v-responsive.lg.xl>{{ capitalize(tr.area_provinsi) || "-" }}</vs-td>
                <vs-td v-responsive.lg.xl>{{ capitalize(tr.area_kota) || "-" }}</vs-td>
                <vs-td v-responsive.lg.xl>
                    <div class="text-right">{{ numberFormat(tr.size) }}</div>
                </vs-td>
                <vs-td v-responsive.lg.xl>
                    <div class="text-right">Rp {{ numberFormat(tr.price) }}</div>
                </vs-td>
                <vs-td>
                    <div v-responsive.lg.xl>
                        <div class="d-flex justify-content-end">
                            <vs-button icon flat>
                                <i class="ri-pencil-line"></i>
                            </vs-button>
                            <vs-button color="danger" icon flat>
                                <i class="ri-delete-bin-line"></i>
                            </vs-button>
                        </div>
                    </div>
                    <div v-responsive.sm.xs>
                        <div class="d-flex justify-content-end">
                            <vs-button size="mini" icon flat>
                                <i class="ri-pencil-line"></i>
                            </vs-button>
                            <vs-button size="mini" color="danger" icon flat>
                                <i class="ri-delete-bin-line"></i>
                            </vs-button>
                        </div>
                    </div>
                </vs-td>
            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(fishes, search), max)" />
        </template>
    </vs-table>
</template>

<script>
import { mapState } from "vuex";
const s = require("underscore.string");

export default {
    name: "Table",
    data: () => ({
        search: '',
        page: 1,
        max: 10,
        d: []
    }),
    computed: {
        ...mapState({
            loaded: state => state.ui.isDataLoaded,
            loading: state => state.ui.dataLoading,
            fishes: state => state.data.fishes
        }),
    },
    methods: {
        capitalize(value) {
            if( value !== null ) {
                return s.capitalize( value.toLowerCase() );
            }

            return value
        },
        numberFormat(value) {
            return s.numberFormat( s.toNumber(value), 0, ",", ".");
        },
        join( separator, ...strings) {
            return s.join( separator, ...strings)
        },
        isCarp(value) {
            return s.include( value.toLowerCase(), "gurame" );
        },
        isCatFish(value) {
            return s.include( value.toLowerCase(), "lele" );
        },
        isDory(value) {
            return s.include( value.toLowerCase(), "dori" );
        },
        isNila( value ) {
            return s.include( value.toLowerCase(), "nila" );
        },
        isShrimp( value ) {
            return s.include( value.toLowerCase(), "udang" );
        },
        fishImage(value) {
            let img = "./img/fish/img-fish-nila.svg";
            if( value !== null ) {
                if( this.isCarp( value ) ) {
                    img = "./img/fish/img-fish-carp.svg";
                } else if( this.isCatFish( value ) ) {
                    img = "./img/fish/img-fish-catfish.svg";
                } else if( this.isDory( value ) ) {
                    img = "./img/fish/img-fish-dory.svg";
                } else if( this.isShrimp( value ) ) {
                    img = "./img/fish/img-shrimp.svg"
                }
            }

            return img
        }
    },
    created() {
        this.$store.dispatch("data/getData")
    },
    watch: {
        loading(newVal) {
            let loading;
            if( newVal ) {
                loading = this.$vs.loading({
                    background: 'primary',
                    color: '#fff'
                })
            } else {
                setTimeout( () => {
                    loading.close()
                }, 300)
            }
        }
    }
}
</script>
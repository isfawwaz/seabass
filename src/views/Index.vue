<template>
    <section class="page-home">
        <div class="container-fluid">
            <div class="row no-gutters">
                <div class="col-12 col-md-8">
                    <Alert />
                    <Table />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import Alert from '@/components/Alert.vue';
import Table from '@/components/Table.vue';

export default {
    name: "Home",
    components: {
        Alert,
        Table
    },
    computed: {
        ...mapState({
            isSizeLoaded: state => state.ui.isSizeLoaded,
            sizeLoading: state => state.ui.sizeLoading,
            sizes: state => state.data.sizes
        })
    }
}
</script>
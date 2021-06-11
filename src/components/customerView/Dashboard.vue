<template>
    <div>
        <SearchCriteria></SearchCriteria>
        <ProductionNav></ProductionNav>
        <CommodityPanel :commodities='commodities'></CommodityPanel>
        <hr style="border:0;background-color:#e7e7e7;height:1px;">

        <img src="image/img.png" alt="" style="margin-left: 260px;margin-top: 10px">

        <hr style="border:0;background-color:#e7e7e7;height:1px;">

<!--        <img src="image/tianmao.png" alt="" class="tianmaoPosition">-->
    </div>
</template>

<script>
    import SearchCriteria from './SearchCriteria';
    import ProductionNav from './ProductionNav';
    import CommodityPanel from './CommodityPanel';
    import {getCommodities} from '../../service/search/search.service';
    export default {
        name: 'Dashboard',
        components: {SearchCriteria, ProductionNav, CommodityPanel},
        data () {
            return {commodities: []};
        },
        async created () {
            this.commodities = await getCommodities().catch(e => {
                console.log(e);
            });
        }
    }
</script>


<style scoped>
</style>

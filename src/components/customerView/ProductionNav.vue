<template>
    <div>
        <div class="list">
            <div class="listName">
                <i class="fa fa-th-list"></i>&nbsp;
                <span>商品分类</span>
            </div>
            <div class="list-list">
                <span class="list-width"><i class="el-icon-shopping-cart-full"></i>&nbsp;天猫超市</span>
                <span class="list-width"><i class="el-icon-s-platform"></i>&nbsp;天猫国际</span>
                <span class="list-width">平板电视</span>
                <span class="list-width">马桶</span>
                <span class="list-width">沙发</span>
                <span class="list-width">电脑</span>
            </div>
        </div>

        <div class="category">
            <div class="categoryListPosition">
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;平板电视</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;马桶</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;沙发</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;电热水器</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;平衡车</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;扫地机器人</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;原汁机</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;冰箱</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;空调</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;女表</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;男装</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;男士手提包</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;男士西服</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;时尚男鞋</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;时尚女装</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;太阳眼镜</div>
                <div class="categoryList"><i class="fa fa-link"></i>&nbsp;安全座椅</div>
            </div>
            <a href="">
                <img :src="imgSrc" id="img" alt="轮播图" style="margin-left: 270px"/>
            </a>
        </div>


    </div>
</template>

<script>
export default {
    name: 'production-nav',
    data () {
        return {num: 0};
    },
    mounted () {
        setInterval(() => {this.num++}, 3000);
    },
    computed: {
       imgSrc () {
           return `image/lunbo${(this.num % 4) + 1}.jpg`;
       }
    },
};
</script>

<style scoped>

</style>
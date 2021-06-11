<template>
    <div id="app">
        <Header></Header>
        <div>
            <router-view/>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/common/Header';
    import Footer from './components/common/Footer';

    export default {
        name: 'App',
        components: {Header, Footer}
    }
</script>

<style lang='css'>
    @import './assets/style/index.css';
    @import './assets/style/login.css';
    @import './assets/style/register.css';
</style>

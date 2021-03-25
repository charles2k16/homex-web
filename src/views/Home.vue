<template>
  <div class="home">
    <NavHeader />

    <MainBanner />

    <CategoryHouses />

    <About />

    <FeaturedHomes />

    <OurServices />

    <Footer />
  </div>
</template>

<script>
import NavHeader from '@/views/sections/NavHeader';
import MainBanner from '@/views/sections/MainBanner';
import CategoryHouses from '@/views/sections/CategoryHouses';
import About from '@/views/sections/About';
import FeaturedHomes from '@/views/sections/FeaturedHomes';
import OurServices from '@/views/sections/OurServices';
import Footer from '@/views/sections/Footer';

export default {
  name: 'Home',
  components: {
    NavHeader,
    MainBanner,
    CategoryHouses,
    About,
    FeaturedHomes,
    OurServices,
    Footer,
  },
};
</script>

<template>
  <div class="home">
    <div id="scroll" style="display: none"><i class="fa fa-angle-up"></i></div>

    <NavHeader />

    <MainBanner />

    <CategoryHouses />

    <About />

    <FeaturedHomes />

    <section
      style="
        background: url(images/background/bg-map.png) center center / cover
          fixed #f9f9f9;
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-title w-75 mx-auto d-table text-center mb-30">
              <span
                class="small-title color-primary position-relative line-2-primary"
                >What We Do?</span
              >
              <h2 class="title mb-20 color-secondary">Our Services</h2>
              <span class="sub-title"
                >Congue commodo ipsum, risus urna nisi. Primis velit turpis
                sollicitudin. Felis aptent sagittis aliquet turpis et tristique
                montes vestibulum rutrum. Scelerisque viverra ac ridiculus enim.
                Curabitur.</span
              >
            </div>
          </div>
          <div class="col-md-12 col-lg-12">
            <div class="owl-carousel slide-3 owl-dots-none owl-loaded owl-drag">
              <div class="service-item bg-white px-30 py-40 mt-30">
                <div class="service-info hover-secondery-primary">
                  <span class="flat-large icon-primary"><i class=""></i></span>
                  <a class="my-20 d-table" href="#">
                    <h4>Buying Properties</h4>
                  </a>
                  <p>
                    Metus rhoncus hendrer tellus lacinia aptent justo urna. Leo
                    conseq dapibus ipsum eleif massa enim potenti at magnis orci
                    molesti praesent ultrices elementum.
                  </p>
                  <hr class="border-top-1" />
                  <a class="btn-round bg-secondary" href="#"
                    ><i class="el-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
              <div class="service-item bg-white px-30 py-40 mt-30">
                <div class="service-info hover-secondery-primary">
                  <span class="flat-large icon-primary"
                    ><i class="flaticon-deal"></i
                  ></span>
                  <a class="my-20 d-table" href="#">
                    <h4>Selling Properties</h4>
                  </a>
                  <p>
                    Metus rhoncus hendrer tellus lacinia aptent justo urna. Leo
                    conseq dapibus ipsum eleif massa enim potenti at magnis orci
                    molesti praesent ultrices elementum.
                  </p>
                  <hr class="border-top-1" />
                  <a class="btn-round bg-secondary" href="#"
                    ><i class="el-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
              <div class="service-item bg-white px-30 py-40 mt-30">
                <div class="service-info hover-secondery-primary">
                  <span class="flat-large icon-primary"
                    ><i class="flaticon-sale"></i
                  ></span>
                  <a class="my-20 d-table" href="#">
                    <h4>Rental Properties</h4>
                  </a>
                  <p>
                    Metus rhoncus hendrer tellus lacinia aptent justo urna. Leo
                    conseq dapibus ipsum eleif massa enim potenti at magnis orci
                    molesti praesent ultrices elementum.
                  </p>
                  <hr class="border-top-1" />
                  <a class="btn-round bg-secondary" href="#"
                    ><i class="el-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
              <div class="service-item bg-white px-30 py-40 mt-30">
                <div class="service-info hover-secondery-primary">
                  <span class="flat-large icon-primary"
                    ><i class="flaticon-money"></i
                  ></span>
                  <a class="my-20 d-table" href="#">
                    <h4>Legal Investment</h4>
                  </a>
                  <p>
                    Metus rhoncus hendrer tellus lacinia aptent justo urna. Leo
                    conseq dapibus ipsum eleif massa enim potenti at magnis orci
                    molesti praesent ultrices elementum.
                  </p>
                  <hr class="border-top-1" />
                  <a class="btn-round bg-secondary" href="#"
                    ><i class="el-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
              <div class="service-item bg-white px-30 py-40 mt-30">
                <div class="service-info hover-secondery-primary">
                  <span class="flat-large icon-primary"
                    ><i class="flaticon-checklists"></i
                  ></span>
                  <a class="my-20 d-table" href="#">
                    <h4>Property Listing</h4>
                  </a>
                  <p>
                    Metus rhoncus hendrer tellus lacinia aptent justo urna. Leo
                    conseq dapibus ipsum eleif massa enim potenti at magnis orci
                    molesti praesent ultrices elementum.
                  </p>
                  <hr class="border-top-1" />
                  <a class="btn-round bg-secondary" href="#"
                    ><i class="el-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
              <div class="service-item bg-white px-30 py-40 mt-30">
                <div class="service-info hover-secondery-primary">
                  <span class="flat-large icon-primary"
                    ><i class="flaticon-research"></i
                  ></span>
                  <a class="my-20 d-table" href="#">
                    <h4>Market Analysis</h4>
                  </a>
                  <p>
                    Metus rhoncus hendrer tellus lacinia aptent justo urna. Leo
                    conseq dapibus ipsum eleif massa enim potenti at magnis orci
                    molesti praesent ultrices elementum.
                  </p>
                  <hr class="border-top-1" />
                  <a class="btn-round bg-secondary" href="#"
                    ><i class="el-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer
      class="footer-2 bg-secondary py-80 border-bottom-1-dark"
      style="margin-top: 80px"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-5 col-xl-3">
            <div class="footer-logo">
              <a href="#"
                ><img src="images/logo/logo-white.png" alt="Image not found!"
              /></a>
              <div class="text-area mt-30 color-white">
                <p>
                  Blandit pellente urna morbi. Dictumst duis eros facilisi
                  libero ornare telluser ad proin phasellus class commodoral
                  montes litora.
                </p>
              </div>
              <ul class="social-media-2 border-white large color-white-a mt-20">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-behance"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2 col-xl-2">
            <div class="footer-widget color-white mt-md-30">
              <h3 class="color-white line-bottom pb-15 mb-20">Links</h3>
              <div class="widget-content hover-white-primary">
                <ul class="quick-links">
                  <li><a href="#">For Rent</a></li>
                  <li><a href="#">For Sale</a></li>
                  <li><a href="#">Commercial</a></li>
                  <li><a href="#">Agents</a></li>
                  <li><a href="#">Property Guides</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-8 col-lg-5 col-xl-3">
            <div class="footer-widget color-white mt-md-30">
              <h3 class="color-white line-bottom pb-15 mb-20">Quick Contact</h3>
              <div class="widget-content">
                <span>East Legon, Accra Ghana</span>
                <span class="d-block mt-20"
                  >If you have any questions or need help, feel free to contact
                  with our support team.</span
                >
                <strong class="feel-free icon-primary mt-20 d-block"
                  ><span class="mr-15"><i class="fa fa-phone"></i></span> +(233)
                  54 405 9033</strong
                >
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-12 col-xl-4">
            <div
              class="newletter-2 py-80 px-30 mt-lg-50 bg-primary color-white"
              style="margin-top: -160px"
            >
              <h3 class="color-white mb-20">Sign Up For Newsletter!</h3>
              <p>
                Sign up and receive property listings right in your inbox once
                every month
              </p>
              <form class="news-letter bg-gray mt-30">
                <div class="form-group position-relative">
                  <input
                    class="form-control"
                    type="text"
                    name="email"
                    placeholder="Subscribe"
                  />
                  <button class="bg-gray color-secondary">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright bg-secondary color-white">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-lg-6">
            <ul class="copy-nav hover-white-primary py-15">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>
          <div class="col-md-5 col-lg-6">
            <div class="py-15 text-right">
              Homex @ 2020. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/views/sections/NavHeader';
import MainBanner from '@/views/sections/MainBanner';
import CategoryHouses from '@/views/sections/CategoryHouses';
import About from '@/views/sections/About';
import FeaturedHomes from '@/views/sections/FeaturedHomes';

export default {
  name: 'Home',
  components: {
    NavHeader,
    MainBanner,
    CategoryHouses,
    About,
    FeaturedHomes,
  },
};
</script>

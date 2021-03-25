<template>
  <div>
    <NavHeader />

    <div class="page-banner overlay-black" style="padding: 150px 0">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-12">
            <h1 class="page-banner-title color-primary">Property Listings</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <nav aria-label="breadcrumb">
              <ol
                class="breadcrumb m-0 py-15 px-0 bg-transparent hover-white-primary"
              >
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Listing</a></li>
                <li class="breadcrumb-item"><a href="#">Property</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <form class="adbanced-form-two amenities-list border-top-1-gray">
              <div class="row">
                <div class="form-group col-lg-3 col-md-6 col-6 pt-15">
                  <div class="select-wrapper position-relative">
                    <select class="select form-control">
                      <option>Select Location</option>
                      <option>Newyork</option>
                      <option>London</option>
                      <option>Dubai</option>
                      <option>Melbourne</option>
                      <option>Sydney</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-lg-3 col-md-6 col-6 pt-15">
                  <div class="select-wrapper position-relative">
                    <select class="select form-control has-val">
                      <option>Beds</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                      <option>Four</option>
                    </select>
                  </div>
                </div>
                <div class="form-group mb-0 col-lg-3 col-md-6 col-6 py-15">
                  <div class="select-wrapper position-relative">
                    <select class="select form-control has-val">
                      <option>Baths</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                      <option>Four</option>
                    </select>
                  </div>
                </div>
                <div class="form-group mb-0 col-lg-3 col-md-6 col-6 py-15">
                  <div class="select-wrapper position-relative">
                    <select class="select form-control has-val">
                      <option>Kitchen</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                      <option>Four</option>
                    </select>
                  </div>
                </div>
                <div class="form-group mb-0 pb-15 col-lg-3 col-md-6 col-12">
                  <div class="price_range">
                    <div class="price-filter">
                      <span
                        ><input
                          id="filter_sqft"
                          type="text"
                          name="price"
                          value="20000; 80000"
                      /></span>
                    </div>
                  </div>
                </div>
                <div class="form-group mb-0 pb-15 col-lg-3 col-md-6 col-12">
                  <div class="price_range">
                    <div class="price-filter">
                      <span class="price-slider">
                        <input
                          class="filter_price"
                          type="text"
                          name="price"
                          value="100000;900000"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div class="col-md-12 col-lg-12">
            <div class="tab-content border-top-1-gray" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-md-12 col-lg-6 col-xl-4">
                    <div class="property-item position-relative mt-30">
                      <div
                        class="property-img position-relative overflow-hidden overlay-secondary-4"
                      >
                        <img
                          src="../assets/images/property/2.jpeg"
                          alt="image"
                          style="height: 320px"
                        />
                        <span
                          class="thum-category category-1 bg-secondary color-white z-index-1 px-15"
                          >For Sale</span
                        >
                        <ul
                          class="hover-option position-absolute icon-white z-index-1"
                        >
                          <li>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Wishlist"
                              href="#"
                              ><i class="fa fa-heart-o" aria-hidden="true"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                              href="#"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div class="property-content bg-white pt-30 pb-50 px-30">
                        <a
                          class="color-secondary mb-5"
                          href="singleproperty.html"
                        >
                          <h4>4 Bedroom Single Detached</h4>
                        </a>
                        <span class="address icon-primary f-14"
                          ><i class="fa fa-map-marker"></i>801 Rosedale Street,
                          Est Legon.</span
                        >
                        <ul
                          class="about-property list-half icon-primary d-table f-14 mb-30 mt-20"
                        >
                          <li><i class="flaticon-fit-screen"></i>300 sqft</li>
                          <li><i class="flaticon-hotel"></i>5 Bedrooms</li>
                          <li><i class="flaticon-bathtub"></i>4 Bathrooms</li>
                          <li><i class="flaticon-garage"></i>2 Garage</li>
                        </ul>
                        <div class="property-cost color-white list-half w-100">
                          <ul>
                            <li>For Sale</li>
                            <li>$ 530,000</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-lg-6 col-xl-4">
                    <div class="property-item position-relative mt-30">
                      <div
                        class="property-img position-relative overflow-hidden overlay-secondary-4"
                      >
                        <img
                          src="../assets/images/property/4.jpg"
                          alt="image"
                        />
                        <span
                          class="thum-category category-1 bg-secondary color-white z-index-1 px-15"
                          >For Sale</span
                        >
                        <ul
                          class="hover-option position-absolute icon-white z-index-1"
                        >
                          <li>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Wishlist"
                              href="#"
                              ><i class="fa fa-heart-o" aria-hidden="true"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                              href="#"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></a>
                          </li>
                        </ul>
                        <div
                          class="meta-property icon-primary color-white z-index-1"
                        >
                          <ul>
                            <li><i class="fa fa-calendar"></i> 06/27/2020</li>
                            <li><i class="fa fa-user"></i> James Bond</li>
                          </ul>
                        </div>
                      </div>
                      <div class="property-content bg-white pt-30 pb-50 px-30">
                        <a
                          class="color-secondary mb-5"
                          href="single-property.html"
                        >
                          <h4>Villa on Grand Avenue</h4>
                        </a>
                        <span class="address icon-primary f-14"
                          ><i class="fa fa-map-marker"></i>801 Rosedale Ave SE,
                          Atlanta, USA.</span
                        >
                        <ul
                          class="about-property list-half icon-primary d-table f-14 mb-30 mt-20"
                        >
                          <li><i class="flaticon-fit-screen"></i>300 sqft</li>
                          <li><i class="flaticon-hotel"></i>5 Bedrooms</li>
                          <li><i class="flaticon-bathtub"></i>4 Bathrooms</li>
                          <li><i class="flaticon-garage"></i>2 Garage</li>
                        </ul>
                        <div class="property-cost color-white list-half w-100">
                          <ul>
                            <li>For Sale</li>
                            <li>$ 50,000</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-lg-6 col-xl-4">
                    <div class="property-item position-relative mt-30">
                      <div
                        class="property-img position-relative overflow-hidden overlay-secondary-4"
                      >
                        <img
                          src="../assets/images/property/7.jpeg"
                          alt="image"
                          style="height: 320px"
                        />
                        <span
                          class="thum-category category-1 bg-secondary color-white z-index-1 px-15"
                          >For Sale</span
                        >
                        <span
                          class="thum-category category-2 bg-secondary color-white z-index-1 px-15"
                          >Featured</span
                        >
                        <ul
                          class="hover-option position-absolute icon-white z-index-1"
                        >
                          <li>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Wishlist"
                              href="#"
                              ><i class="fa fa-heart-o" aria-hidden="true"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                              href="#"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></a>
                          </li>
                        </ul>
                        <div
                          class="meta-property icon-primary color-white z-index-1"
                        >
                          <ul>
                            <li><i class="fa fa-user"></i> James Bond</li>
                          </ul>
                        </div>
                      </div>
                      <div class="property-content bg-white pt-30 pb-50 px-30">
                        <a
                          class="color-secondary mb-5"
                          href="single-property.html"
                        >
                          <h4>Villa on Grand Avenue</h4>
                        </a>
                        <span class="address icon-primary f-14"
                          ><i class="fa fa-map-marker"></i>14523 Carowinds Blvd,
                          Charlotte, USA.</span
                        >
                        <ul
                          class="about-property list-half icon-primary d-table f-14 mb-30 mt-20"
                        >
                          <li><i class="flaticon-fit-screen"></i>300 sqft</li>
                          <li><i class="flaticon-hotel"></i>5 Bedrooms</li>
                          <li><i class="flaticon-bathtub"></i>4 Bathrooms</li>
                          <li><i class="flaticon-garage"></i>2 Garage</li>
                        </ul>
                        <div class="property-cost color-white list-half w-100">
                          <ul>
                            <li>For Sale</li>
                            <li>$ 20,000</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="mx-auto d-table">
                      <ul class="pagination mt-50">
                        <li class="page-item">
                          <a class="page-link" href="#">Prev</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link active" href="#">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import NavHeader from '@/views/sections/NavHeader';
import Footer from '@/views/sections/Footer';

export default {
  name: 'Home',
  components: {
    NavHeader,
    Footer,
  },
};
</script>

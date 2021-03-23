<template>
  <div>
    <div
      class="main-banner-slider position-relative bg-light z-index-1"
      style="padding: 150px 0"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="banner-text">
              <div class="contact-dots" data-dots=""></div>
              <h1 class="color-secondary mb-30">
                Find Your Perfect Home Today
              </h1>
              <p>Find all ready to move-in properties availabile in Ghana.</p>
            </div>
          </div>
          <div class="col-md-12 col-lg-10">
            <form
              class="adbanced-form-two amenities-list bg-light p-20 mt-30 pl-0"
            >
              <div class="row">
                <div class="form-group col-lg-4 position-relative">
                  <div class="custom-radio y-center">
                    <label>
                      <input type="radio" name="light" checked />
                      <span class="design"></span>
                      <span class="text">Buy</span>
                    </label>
                    <label>
                      <input type="radio" name="light" />
                      <span class="design"></span>
                      <span class="text">Rent</span>
                    </label>
                    <label>
                      <input type="radio" name="light" />
                      <span class="design"></span>
                      <span class="text">Sale</span>
                    </label>
                  </div>
                </div>
                <div class="form-group col-lg-3 col-md-6">
                  <div class="select-wrapper position-relative">
                    <select class="select form-control">
                      <option>All Type</option>
                      <option>Single Detached</option>
                      <option>Town Houses</option>
                      <option>Condo</option>
                      <option>Mansion</option>
                      <option>Commercial Property</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-lg-5 col-md-6">
                  <div class="select-wrapper position-relative">
                    <select
                      class="select form-control"
                      placeholder="Address, State/City"
                    >
                      <option>Select Location</option>
                      <option>East Legon</option>
                      <option>Dome</option>
                      <option>Spintex</option>
                      <option>Kasoa</option>
                      <option>Dodowa</option>
                    </select>
                  </div>
                </div>
                <div class="form-group mb-0 mt-md-15 col-lg-3 col-md-6">
                  <div class="price_range">
                    <div class="price-filter">
                      <label for="">Min Price ($)</label>
                      <select class="select form-control">
                        <option>Select Price</option>
                        <option>100,000</option>
                        <option>200,000</option>
                        <option>300,000</option>
                        <option>400,000</option>
                        <option>500,000</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group mb-0 mt-md-15 col-lg-3 col-md-6">
                  <div class="price_range">
                    <div class="price-filter">
                      <span class="price-slider">
                        <label for="">Max Price ($)</label>
                        <select class="select form-control">
                          <option>Select Price</option>
                          <option>800,000</option>
                          <option>900,000</option>
                          <option>1 million</option>
                          <option>1.5 million</option>
                          <option>2 million</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-12 col-lg-3">
                  <input
                    class="btn btn-primary w-100"
                    type="submit"
                    name="search"
                    value="Search"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

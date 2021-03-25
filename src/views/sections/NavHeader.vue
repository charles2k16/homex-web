<template>
  <div>
    <header class="nav-on-top">
      <div
        id="header"
        class="nav-header header-six w-100 py-15 bg-light d-table"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-5 col-xl-5">
              <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand d-none d-block-md" href="#"
                  ><img
                    src="../../assets/images/homex.png"
                    alt="logo"
                    style="margin-top: -10px"
                /></a>
                <button
                  class="toggle-btn"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown mega-menu">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >Home</a
                      >
                    </li>

                    <li class="nav-item">
                      <router-link to="/properties">
                        <a class="nav-link">Properties</a>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/properties">
                        <a class="nav-link">Request Property</a>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="col-md-2 col-lg-2">
              <a class="navbar-brand mx-auto logo-2" href="#"
                ><img
                  src="../../assets/images/homex.png"
                  alt="logo"
                  style="margin-top: -40px"
              /></a>
            </div>
            <div class="col-md-10 col-lg-5">
              <ul
                class="top-header-info icon-font-small icon-primary ml-auto d-table"
              >
                <li>
                  <i class="el-icon-phone" aria-hidden="true"></i>
                  <div class="d-inline-block">
                    <span class="d-block">Phone</span>
                    <strong>+(233) 54 405 9033</strong>
                  </div>
                </li>
                <li>
                  <i class="el-icon-user" aria-hidden="true"></i>
                  <div class="d-inline-block">
                    <span class="d-block">Email</span>
                    <strong>info@homexproperties.com</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

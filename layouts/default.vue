<template>
  <div class="tm-container">
    <div>
      <div class="tm-row pt-4">
        <div class="tm-col-left">
          <div class="tm-site-header media">
            <i class="fas fa-umbrella-beach fa-3x mt-1 tm-logo"></i>
            <div class="media-body">
              <h1 class="tm-sitename text-uppercase">VANDERELST</h1>
              <p class="tm-slogon"></p>
            </div>
          </div>
        </div>
        <div class="tm-col-right">
          <nav class="navbar navbar-expand-lg" id="tm-main-nav">
            <button class="navbar-toggler toggler-example mr-0 ml-auto" type="button"
                    data-toggle="collapse" data-target="#navbar-nav"
                    aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span><i class="fas fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse tm-nav" id="navbar-nav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <nuxt-link exact :active-class="'tm-nav-link-active'" class="nav-link tm-nav-link"
                             :to="localePath('index')">О Нас
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link :active-class="'tm-nav-link-active'" class="nav-link tm-nav-link"
                             :to="localePath('visa-vanderelst')">
                    Виза Вандер Эльст
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link :active-class="'tm-nav-link-active'" class="nav-link tm-nav-link"
                             :to="localePath('open-a-company-in-poland')">Открыть фирму в Польше
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link :active-class="'tm-nav-link-active'" class="nav-link tm-nav-link"
                             :to="localePath('registration-a1-and-ekuz-card')">Оформление A1 и карты
                    EKUZ
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link :active-class="'tm-nav-link-active'" class="nav-link tm-nav-link"
                             :to="localePath('registration-in-germany-agency')">Регистрация в немецких
                    органах
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link :active-class="'tm-nav-link-active'" class="nav-link tm-nav-link"
                             :to="localePath('useful-information')">
                    Полезная информация
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link :active-class="'tm-nav-link-active'" class="nav-link tm-nav-link"
                             :to="localePath('our-prices')">Наши
                    цены
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link :active-class="'tm-nav-link-active'" class="nav-link tm-nav-link"
                             :to="localePath('contacts')">Контакты
                  </nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link class="nav-link tm-nav-link"
                             v-if="$i18n.locale !== 'en'"
                             :to="switchLocalePath('en')"
                  >
                    English
                  </nuxt-link>

                  <nuxt-link class="nav-link tm-nav-link"
                             v-if="$i18n.locale !== 'ru'"
                             :to="switchLocalePath('ru')"
                  >
                    Russian
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <Nuxt/>

    </div>

    <div class="tm-row">
      <div class="tm-col-left text-center">
        <ul class="tm-bg-controls-wrapper">
          <li class="tm-bg-control active" data-id="0"></li>
          <li class="tm-bg-control" data-id="1"></li>
          <li class="tm-bg-control" data-id="2"></li>
        </ul>
      </div>
      <div class="tm-col-right tm-col-footer">
        <footer class="tm-site-footer text-right">
          <p class="mb-0">Copyright 2020 Diagoona Co.

            | Design: <a rel="nofollow" target="_parent" href="https://templatemo.com"
                         class="tm-text-link">TemplateMo</a>
          </p>
        </footer>
      </div>
    </div>

    <!-- Diagonal background design -->
    <div class="tm-bg">
      <div class="tm-bg-left"></div>
      <div class="tm-bg-right"></div>
    </div>
  </div>


</template>

<style scoped>
.tm-nav-link-active {
  color: #99CCCC !important;
}
</style>

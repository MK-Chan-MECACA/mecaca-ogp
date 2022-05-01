<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div
          class="
            relative
            z-10
            pb-8
            bg-white
            sm:pb-16
            md:pb-20
            lg:max-w-2xl lg:w-full lg:pb-28
            xl:pb-32
          "
        >
          <svg
            class="
              hidden
              lg:block
              absolute
              right-0
              inset-y-0
              h-full
              w-48
              text-white
              transform
              translate-x-1/2
            "
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <Menu />
          </div>

          <main
            class="
              mt-10
              mx-auto
              max-w-7xl
              px-4
              sm:mt-12 sm:px-6
              md:mt-16
              lg:mt-20 lg:px-8
              xl:mt-28
            "
          >
            <div class="sm:text-center lg:text-left">
              <h1
                class="
                  text-4xl
                  tracking-tight
                  font-extrabold
                  text-gray-900
                  sm:text-5xl
                  md:text-6xl
                "
                v-html="$lang(home.hero, 'title')"
              ></h1>
              <h2
                class="
                  mt-3
                  text-base text-gray-500
                  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                  md:mt-5 md:text-xl
                  lg:mx-0
                "
                v-html="$lang(home.hero, 'subtitle')"
              ></h2>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <form action="/panel" method="GET">
                  <div class="relative">
                    <div class="absolute top-4 left-3">
                      <i
                        class="
                          fa fa-search
                          text-gray-400
                          z-20
                          hover:text-gray-500
                        "
                      ></i>
                    </div>
                    <input
                      type="url"
                      required
                      name="url"
                      class="
                        h-14
                        w-96
                        pl-5
                        pr-20
                        rounded-lg
                        bg-gray-100
                        z-0
                        focus:shadow focus:outline-none
                      "
                      :placeholder="$lang(home.hero, 'placeholder')"
                    />

                    <div class="absolute top-2 right-2">
                      <button
                        class="
                          h-10
                          w-20
                          text-white
                          rounded-lg
                          bg-indigo-500
                          hover:bg-indigo-600
                        "
                      >
                        {{ $lang(home.hero, 'button') }}
                      </button>
                    </div>
                  </div>
                  <small>
                    {{ $lang(home.hero.example, 'label') }}
                    <nuxt-link :to="`/panel?url=${home.hero.example.url}`"
                      ><strong>{{ home.hero.example.url }}</strong></nuxt-link
                    >
                  </small>
                  <div class="text-xs text-gray-400">
                    <strong
                      >Facebook, Twitter, LinkedIn, Discord,
                      Pinterest...</strong
                    >
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          :src="home.hero.image"
          alt="Hero Image"
        />
      </div>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="
              mt-2
              text-3xl
              leading-8
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            {{ $lang(home.features, 'title') }}
          </p>
          <h3 class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {{ $lang(home.features, 'subtitle') }}
          </h3>
        </div>

        <div class="mt-10">
          <dl
            class="
              space-y-10
              md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10
            "
          >
            <template v-for="(item, index) in home.features.items">
              <div :key="index" class="relative">
                <dt>
                  <div
                    class="
                      absolute
                      flex
                      items-center
                      justify-center
                      h-12
                      w-12
                      rounded-md
                      bg-indigo-500
                      text-white
                    "
                  >
                    <span v-if="item.icon" v-html="item.icon"></span>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ $lang(item, 'title') }}
                  </p>
                </dt>
                <dd
                  v-if="item.description"
                  class="mt-2 ml-16 text-base text-gray-500"
                >
                  {{ $lang(item, 'description') }}
                </dd>
              </div>
            </template>
          </dl>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const home = await $content('home').fetch()

    return { home }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.$lang(this.home.seo, 'title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$lang(this.home.seo, 'description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$lang(this.home.seo, 'description'),
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.$lang(this.home.seo, 'description'),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$lang(this.home.seo, 'title'),
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.$lang(this.home.seo, 'title'),
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: `website`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.home.seo.image,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.home.seo.image,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary',
        },
      ],
    }
  },

  mounted() {},
}
</script>

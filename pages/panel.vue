<template>
  <div>
    <div class="relative bg-white overflow-hidden pb-4">
      <div class="max-w-7xl mx-auto">
        <Menu />
      </div>
    </div>
    <div class="bg-indigo-600">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-indigo-800">
              <!-- Heroicon name: outline/speakerphone -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="hidden md:inline">
                {{ $route.query.url }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        sm:px-4
        mt-5
        sm:mt-8 sm:flex sm:justify-center
        lg:justify-center
        pb-6
      "
    >
      <form action="/panel" method="GET">
        <div class="relative">
          <div class="absolute top-4 left-3">
            <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
          <input
            v-model="url"
            :disabled="loading"
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
              :disabled="loading"
            >
              <svg
                v-if="loading"
                class="animate-spin h-5 w-5 text-white mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span v-else> {{ $lang(home.hero, 'button') }}</span>
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-gray-100 pt-10">
      <div class="container mx-auto px-8 py-4 pb-10">
        <Loading v-if="loading" />
        <div
          class="
            space-y-10
            md:space-y-0 md:grid md:grid-cols-2
            lg:grid-cols-3
            md:gap-x-8 md:gap-y-10
          "
        >
          <Preview-Facebook v-if="!loading" :meta="meta" />
          <Preview-Twitter v-if="!loading" :meta="meta" />
          <Preview-Linkedin v-if="!loading" :meta="meta" />
          <Preview-Pinterest v-if="!loading" :meta="meta" />
          <Preview-Discord v-if="!loading" :meta="meta" />
        </div>
      </div>
      <div v-if="!loading" class="container mx-auto pb-4">
        <div class="md:grid md:grid-cols-2">
          <Meta :meta="meta" />
          <Code :meta="meta" />
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
    return {
      showCode: false,
      meta: {},
      url: this.$route.query.url,
      loading: true,
    }
  },
  head() {
    return {
      title: `${this.domain} | ${this.$lang(this.home.seo, 'title')}`,
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
          content: `${this.domain} | ${this.$lang(this.home.seo, 'title')}`,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.domain} | ${this.$lang(this.home.seo, 'title')}`,
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
  computed: {
    domain() {
      if (!this.$route.query.url) return ''
      return this.$route.query.url
        .split('https://')
        .join('')
        .split('http://')
        .join('')
        .split('www.')
        .join('')
        .split('/')[0]
    },
  },
  async mounted() {
    if (this.$route.query.url) {
      this.loading = true
      try {
        const { data: response } = await this.$axios.post(
          `${location.origin}/server/check/`,
          {
            url: this.$route.query.url,
          }
        )

        this.meta = response
      } catch (error) {}
      this.loading = false
    } else {
      this.$router.push('/')
    }
  },
}
</script>

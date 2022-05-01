<template>
  <div>
    <!-- component -->
    <footer class="footer bg-gray-900 relative pt-1">
      <div class="container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
          <div
            class="
              mt-8
              sm:mt-0 sm:w-full sm:px-8
              flex flex-col
              md:flex-row
              justify-between
            "
          >
            <div class="flex flex-col">
              <span
                class="font-bold text-white mb-2"
                v-html="$lang(footer, 'title')"
              ></span>
              <span
                v-html="$lang(footer, 'description')"
                class="my-2 text-white"
              >
              </span>
              <span class="font-bold text-black mb-2">
                <form ref="langs" method="GET">
                  <strong class="text-white mr-4">Language</strong>
                  <select
                    v-model="lang"
                    name="lang"
                    class="border rounded px-3 py-2 outline-none"
                  >
                    <option value=""></option>
                    <option
                      v-for="item in $langs.langs"
                      :key="item.code"
                      :value="item.code"
                    >
                      {{ item.label }}
                    </option>
                  </select>
                </form>
              </span>
            </div>
            <template v-for="(item, index) in footer.blocks">
              <div :key="index" class="flex flex-col">
                <span
                  class="font-bold text-white uppercase mt-4 md:mt-0 mb-2"
                  v-html="$lang(item, 'title')"
                ></span>
                <span
                  v-for="(link, linkIndex) in item.links"
                  :key="linkIndex"
                  class="my-2"
                >
                  <a
                    v-if="link.isExternal"
                    :href="link.link"
                    target="_blank"
                    class="text-white text-md hover:text-indigo-100"
                    >{{ $lang(link, 'label') }}</a
                  >
                  <nuxt-link
                    v-else
                    :to="link.link"
                    class="text-white text-md hover:text-indigo-100"
                    >{{ $lang(link, 'label') }}</nuxt-link
                  >
                </span>
                <span
                  v-for="(link, slug) in item.pages"
                  :key="slug"
                  class="my-2"
                >
                  <nuxt-link
                    :to="slug"
                    class="text-white text-md hover:text-indigo-100"
                    >{{ $lang(item.pages, slug) }}</nuxt-link
                  >
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div
          class="mt-16 border-t-2 border-gray-300 flex flex-col items-center"
        >
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-white font-bold mb-2">
              {{ footer.copyright }}
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: this.$route.query.lang || '',
    }
  },
  computed: {
    footer() {
      return this.$footer
    },
  },
  watch: {
    lang() {
      if (this.lang) {
        localStorage.lang = this.lang
        this.$refs.langs.submit()
      }
    },
  },
}
</script>

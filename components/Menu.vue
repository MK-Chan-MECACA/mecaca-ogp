<template>
  <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
    <nav
      class="
        relative
        flex
        items-center
        justify-between
        sm:h-10
        lg:justify-start
      "
      aria-label="Global"
    >
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <nuxt-link to="/">
            <img
              class="h-8 w-auto sm:h-10"
              :src="require('@/assets/icon.png')"
            />
          </nuxt-link>

          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-indigo-500
              "
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <nuxt-link
          to="/"
          class="font-medium text-gray-500 hover:text-gray-900"
          >{{ $lang(menu, 'preview') }}</nuxt-link
        >
        <template v-for="(link, slug) in menu.pages">
          <nuxt-link
            :key="slug"
            :to="`/${slug}`"
            class="font-medium text-gray-500 hover:text-gray-900"
            >{{ $lang(menu.pages, slug) }}</nuxt-link
          >
        </template>
      </div>
    </nav>
    <div
      class="
        absolute
        top-0
        inset-x-0
        p-2
        transition
        transform
        origin-top-right
        md:hidden
      "
    >
      <div
        class="
          rounded-lg
          shadow-md
          bg-white
          ring-1 ring-black ring-opacity-5
          overflow-hidden
        "
      >
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img
              class="h-8 w-auto"
              src="@/assets/icon.png"
              alt=""
            />
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-indigo-500
              "
            >
              <span class="sr-only">Close main menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <template v-for="(link, slug) in menu.pages.header">
            <nuxt-link
              :key="slug"
              :to="`/${slug}`"
              class="font-medium text-gray-500 hover:text-gray-900"
              >{{ $lang(menu.pages.header, slug) }}</nuxt-link
            >
          </template>
        </div>
        <nuxt-link
          to="/"
          class="
            block
            w-full
            px-5
            py-3
            text-center
            font-medium
            text-indigo-600
            bg-gray-50
            hover:bg-gray-100
          "
        >
          {{ $lang(menu, 'preview') }}
        </nuxt-link>
      </div>
    </div>
  </div>

  <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
</template>
<script>
export default {
  computed: {
    menu() {
      return this.$menu
    },
  },
}
</script>

<template>
  <div>
    <div
      class="
        border border-gray-300
        rounded-sm
        shadow-md
        overflow-hidden
        bg-white
      "
    >
      <img
        v-if="meta['og:image']"
        class="w-full h-48 object-cover"
        :src="meta['og:image']"
        :alt="meta['og:title']"
      />
      <Image-Not-Found v-else tag="og:image" />
      <div class="px-4 py-4">
        <div v-if="meta['og:title']" class="font-bold text-sm">
          {{ meta['og:title'] }}
        </div>
        <p v-else class="text-red-600 animate-pulse">
          <strong>og:title</strong> missing
        </p>

        <div class="font-light text-xs truncate text-gray-500">
          {{ domain }}
        </div>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2 text-center">
      <span
        class="
          inline-block
          bg-blue-800
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold
          text-white
          mr-2
          mb-2
        "
        >LinkedIn</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    meta: {
      type: [Object],
      required: true,
    },
  },

  computed: {
    domain() {
      if (typeof document === 'undefined') return ''
      const el = document.createElement('a')
      el.href = this.$route.query.url
      return el.hostname.toLowerCase().replace('www.', '').toUpperCase()
    },
  },
}
</script>

<template>
  <div>
    <div class="border border-gray-300 overflow-hidden bg-gray-200">
      <img
        v-if="meta['og:image']"
        class="w-full h-48 object-cover"
        :src="meta['og:image']"
        :alt="meta['og:title']"
      />
      <Image-Not-Found v-else tag="og:image" />

      <div class="px-4 py-4">
        <div class="font-light text-xs truncate">
          {{ domain }}
        </div>
        <div v-if="meta['og:title']" class="font-bold text-md truncate">
          {{ meta['og:title'] }}
        </div>
        <p v-else class="text-red-600 animate-pulse">
          <strong>og:title</strong> missing
        </p>
        <p v-if="meta['og:description']" class="text-gray-600 text-sm truncate">
          {{ meta['og:description'] }}
        </p>
        <p v-else class="text-red-600 animate-pulse">
          <strong>og:description</strong> missing
        </p>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2 text-center">
      <span
        class="
          inline-block
          bg-indigo-800
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold
          text-white
          mr-2
          mb-2
        "
        >Facebook</span
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

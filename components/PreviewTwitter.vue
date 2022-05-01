<template>
  <div>
    <div class="border border-gray-300 rounded-xl overflow-hidden bg-white">
      <img
        v-if="meta['twitter:image']"
        class="w-full h-48 object-cover"
        :src="meta['twitter:image']"
        :alt="meta['og:title']"
      />
      <Image-Not-Found v-else tag="twitter:image" />
      <div class="px-4 py-4">
        <div v-if="meta['twitter:title']" class="font-bold text-sm truncate">
          {{ meta['twitter:title'] }}
        </div>
        <div v-else class="text-red-600 animate-pulse">
          <strong>twitter:title</strong> missing
        </div>
        <p
          v-if="meta['twitter:description']"
          class="text-gray-600 text-sm truncate"
        >
          {{ meta['twitter:description'] }}
        </p>
        <p v-else class="text-red-600 animate-pulse">
          <strong>twitter:description</strong> missing
        </p>

        <div class="font-light text-sm truncate text-gray-400">
          {{ domain }}
        </div>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2 text-center">
      <span
        class="
          inline-block
          bg-blue-500
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold
          text-white
          mr-2
          mb-2
        "
        >Twitter</span
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
      return el.hostname.toLowerCase().replace('www.', '').toLowerCase()
    },
  },
}
</script>

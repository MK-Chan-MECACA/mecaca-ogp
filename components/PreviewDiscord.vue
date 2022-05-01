<template>
  <div>
    <div class="rounded-sm overflow-hidden bg-gray-800 px-4 py-4">
      <div class="font-regular text-xs pb-3 text-white">
        {{ domain }}
      </div>
      <div
        v-if="meta['og:title']"
        class="font-bold text-md pb-3"
        style="color: #00b0f4"
      >
        {{ meta['og:title'] }}
      </div>
      <p v-else class="text-red-600 animate-pulse">
        <strong>og:title</strong> missing
      </p>
      <p
        v-if="meta['og:description']"
        class="text-gray-200 text-sm leading-4 pb-3"
      >
        {{ meta['og:description'] }}
      </p>
      <p v-else class="text-red-600 animate-pulse">
        <strong>og:description</strong> missing
      </p>
      <img
        v-if="meta['og:image']"
        class="w-full h-48 object-cover rounded-lg"
        :src="meta['og:image']"
        :alt="meta['og:title']"
      />
      <Image-Not-Found v-else tag="og:image" class="mt-2" />
    </div>
    <div class="px-6 pt-4 pb-2 text-center">
      <span
        class="
          inline-block
          bg-gray-800
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold
          text-white
          mr-2
          mb-2
        "
        >Discord</span
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

<template>
  <div>
    <div class="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <img
        v-if="meta['og:image']"
        class="w-full h-48 object-cover"
        :src="meta['og:image']"
        :alt="meta['og:title']"
      />
      <Image-Not-Found v-else tag="og:image" />
    </div>
    <div class="px-6 pt-4 pb-2 text-center">
      <span
        class="
          inline-block
          bg-red-700
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold
          text-white
          mr-2
          mb-2
        "
        >Pinterest</span
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

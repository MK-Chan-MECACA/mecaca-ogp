<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <Menu />
      </div>
    </div>
    <div class="container mx-auto px-8 py-4 pb-10">
      <h1
        class="
          text-2xl
          tracking-tight
          font-extrabold
          text-gray-900
          sm:text-3xl
          md:text-4xl
          pb-4
          pt-4
        "
      >
        {{ doc.title }}
      </h1>
      <nuxt-content :document="doc" />
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`pages/${params.page}`).fetch()
    return { doc }
  },
}
</script>

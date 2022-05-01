<template>
  <div>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ $lang(labels, 'title') }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {{ $lang(labels, 'subtitle') }}
        </p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500 flex items-center">
              {{ $lang(labels, 'meta:title') }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                v-model="tags.title"
                type="text"
                required
                class="
                  h-12
                  w-full
                  pl-5
                  pr-5
                  rounded-lg
                  bg-gray-100
                  z-0
                  focus:shadow focus:outline-none
                "
              />
              <div v-if="validation['meta:title']" class="pt-2">
                <div class="text-xs text-gray-400 float-right">
                  <span
                    v-if="tags.title"
                    :class="
                      tags.title.length > validation['meta:title'].max ||
                      tags.title.length < validation['meta:title'].min
                        ? 'text-red-600'
                        : ''
                    "
                    >{{ tags.title ? tags.title.length : 0 }} </span
                  >/
                  {{
                    validation['meta:title'] ? validation['meta:title'].max : 0
                  }}
                </div>
                <div
                  class="text-xs text-gray-400"
                  v-html="$lang(validation['meta:title'], 'recomendation')"
                ></div>
              </div>
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500 flex items-center">
              {{ $lang(labels, 'meta:description') }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <textarea
                v-model="tags.description"
                required
                class="
                  h-36
                  w-full
                  px-5
                  py-5
                  rounded-lg
                  bg-gray-100
                  z-0
                  focus:shadow focus:outline-none
                "
              />
              <div v-if="validation['meta:description']" class="pt-2">
                <div class="text-xs text-gray-400 float-right">
                  <span
                    v-if="tags.description"
                    :class="
                      tags.description.length >
                        validation['meta:description'].max ||
                      tags.description.length <
                        validation['meta:description'].min
                        ? 'text-red-600'
                        : ''
                    "
                    >{{ tags.description ? tags.description.length : 0 }} </span
                  >/
                  {{
                    validation['meta:description']
                      ? validation['meta:description'].max
                      : 0
                  }}
                </div>
                <div
                  class="text-xs text-gray-400"
                  v-html="
                    $lang(validation['meta:description'], 'recomendation')
                  "
                ></div>
              </div>
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500 flex items-center">
              {{ $lang(labels, 'meta:image') }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                v-model="tags['og:image']"
                type="url"
                required
                class="
                  h-12
                  w-full
                  pl-5
                  pr-5
                  rounded-lg
                  bg-gray-100
                  z-0
                  focus:shadow focus:outline-none
                "
              />
              <div
                class="text-xs text-gray-400"
                v-html="$lang(validation['meta:image'], 'recomendation')"
              ></div>
            </dd>
          </div>
        </dl>
      </div>
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
  data() {
    return {
      labels: {},
      validation: {},
      tags: {},
    }
  },

  async fetch() {
    const metatags = await this.$content('metatag').fetch()
    this.labels = metatags.labels
    this.validation = metatags.validation
  },
  mounted() {
    console.log(this.meta)
    this.tags = this.meta
  },
}
</script>
<style lang=""></style>

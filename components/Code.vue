<template>
  <div class="px-4">
    <div class="bg-gray-900 shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6 flex">
        <div class="text-lg leading-6 font-medium text-white flex-grow">
          Code
        </div>
        <button @click="copy()">
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
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </button>
      </div>
      <div class="border-t border-gray-600">
        <div>
          <div
            id="code"
            ref="code"
            class="
              bg-gray-700
              px-4
              py-4
              whitespace-nowrap
              text-sm
              overflow-auto
              text-green-300
            "
            v-html="code"
          ></div>
        </div>
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

  computed: {
    code() {
      return this.syntax(`<!-- HTML Meta Tags -->
<title>${this.getMeta('title')}</title>
<meta name="description" content="${this.getMeta('description')}">

<!-- Facebook Meta Tags --> 
<meta property="og:url" content="${this.$route.query.url.toLowerCase()}">
<meta property="og:type" content="website">
<meta property="og:title" content="${this.getMeta('title')}">
<meta property="og:description" content="${this.getMeta('description')}">
<meta property="og:image" content="${this.getMeta('og:image')}">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="${this.domain()}">
<meta property="twitter:url" content="${this.$route.query.url.toLowerCase()}">
<meta name="twitter:title" content="${this.getMeta('title')}">
<meta name="twitter:description" content="${this.getMeta('description')}">
<meta name="twitter:image" content="${this.getMeta('og:image')}">

<!-- Meta Tags Generated via ${this.myDomain()} -->`)
    },
  },
  methods: {
    copy() {
      if (document.selection) {
        const range = document.body.createTextRange()
        range.moveToElementText(this.$refs.code)
        range.select().createTextRange()
        document.execCommand('copy')
      } else if (window.getSelection) {
        const range = document.createRange()

        range.selectNode(this.$refs.code)
        window.getSelection().removeAllRanges() // clear current selection
        window.getSelection().addRange(range)
        document.execCommand('copy')
      }
    },
    domain() {
      if (typeof document === 'undefined') return ''
      const el = document.createElement('a')
      el.href = this.$route.query.url
      return el.hostname.toLowerCase().replace('www.', '').toLowerCase()
    },
    myDomain() {
      if (typeof location === 'undefined') return ''
      return location.origin
    },
    getMeta(meta) {
      return this.meta[meta] ? this.meta[meta] : ''
    },
    syntax(code) {
      return code

        .split('<')
        .join('&lt;')

        .split('\n')
        .join('<br />')

        .split('=')
        .join(`<span class='text-gray-200'>=</span>`)
        .split('">')
        .join(`"<span class='text-gray-200'>></span>`)
        .split('"')
        .join('<span class="text-gray-200">"</span>')
        .split('&lt;!--')
        .join('<span class="text-gray-400">&lt;!--')
        .split('-->')
        .join('--></span>')
        .split('&lt;meta')
        .join('<span class="text-gray-200">&lt;</span>meta')

        .split('&lt;title>')
        .join(
          '<span class="text-gray-200">&lt;</span><span class="text-blue-200">title</span><span class="text-gray-200">></span>'
        )
        .split('&lt;/title>')
        .join(
          '<span class="text-gray-200">&lt;/</span><span class="text-blue-200">title</span><span class="text-gray-200">></span>'
        )

        .split('meta name')
        .join('<span class="text-blue-200">meta name</span>')
        .split('meta property')
        .join('<span class="text-blue-200">meta property</span>')
        .split('content')
        .join('<span class="text-blue-200">content</span>')
    },
  },
}
</script>

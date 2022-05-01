export default async ({ $content }, inject) => {
  const menu = await $content('menu').fetch()
  const footer = await $content('footer').fetch()
  const langs = await $content('langs').fetch()

  inject('menu', menu)
  inject('footer', footer.footer)
  inject('langs', langs)
}

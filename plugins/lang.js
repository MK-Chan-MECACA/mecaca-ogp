export default ({ app, route, storage, $auth }, inject) => {
  inject('lang', (data, key) => {
    let lang = 'en'
    if (typeof localStorage !== 'undefined')
      if (localStorage.lang) lang = localStorage.lang

    try {
      return data[key][lang]
        ? data[key][lang]
        : data[key].en
        ? data[key].en
        : key
    } catch (error) {
      return key
    }
  })
}

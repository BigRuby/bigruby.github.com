retinaDisplay = typeof window.devicePixelRatio isnt 'undefined' and window.devicePixelRatio > 1
html = document.getElementsByTagName('html')[0]
html.className = if retinaDisplay then "js retina" else "js no-retina"

$ ->
  html = $(html)

  scroll = ->
    if $(window).scrollTop() > 600
      html.addClass('is-scrolled')
    else
      html.removeClass('is-scrolled')

  scroll()

  $(window).on('scroll', scroll)

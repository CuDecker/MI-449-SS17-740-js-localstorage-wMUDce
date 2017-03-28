var currentTheme = parseInt(window.localStorage.getItem('currentTheme'))

var themeButton = document.getElementById('theme')

var day = 1

var night = 2

if (currentTheme === null) {
  currentTheme = day
  document.body.setAttribute('class', 'daytime')
  console.log('no previous theme set, defaulting...')
}
if (currentTheme === day) {
  document.body.setAttribute('class', 'daytime')
  console.log('Previous day theme found, setting...')
} else if (currentTheme === night) {
  document.body.setAttribute('class', 'nightime')
  console.log('Previous night theme found, setting...')
}

themeButton.addEventListener('click', function () {
  if (currentTheme === day) {
    currentTheme = night
    document.body.setAttribute('class', 'daytime')
    window.localStorage.setItem('currentTheme', currentTheme)
    console.log('Was day, now night')
  } else if (currentTheme === night) {
    currentTheme = day
    window.localStorage.setItem('currentTheme', currentTheme)
    document.body.setAttribute('class', 'nightime')
    console.log('was night, now day')
  }
})

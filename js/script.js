var currentTheme = parseInt(window.localStorage.getItem('currentTheme'))
var visits = parseInt(window.localStorage.getItem('visits'))

var themeButton = document.getElementById('theme')
var day = 1
var night = 2

if (isNaN(visits)) {
  visits = 0
}

if (visits > -1) {
  visits = visits + 1
  window.localStorage.setItem('visits', visits)
  document.getElementById('visits').innerHTML = visits
}

if (currentTheme === null || isNaN(currentTheme)) {
  currentTheme = day
  document.body.setAttribute('class', 'daytime')
  console.log('no previous theme set, defaulting...')
}

if (currentTheme === day) {
  document.body.setAttribute('class', 'daytime')
  console.log('Previous day theme found, setting...')
} else {
  document.body.setAttribute('class', 'nightime')
  console.log('Previous night theme found, setting...')
}

themeButton.addEventListener('click', function () {
  if (currentTheme === day) {
    currentTheme = night
    document.body.setAttribute('class', 'nightime')
    window.localStorage.setItem('currentTheme', currentTheme)
    console.log('Was day, now night')
  } else {
    currentTheme = day
    window.localStorage.setItem('currentTheme', currentTheme)
    document.body.setAttribute('class', 'daytime')
    console.log('was night, now day')
  }
})

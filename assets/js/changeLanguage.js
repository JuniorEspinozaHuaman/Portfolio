document.addEventListener("DOMContentLoaded", function () {
  // AQUÍ PONDRE TODO EL CODIGO
  const elementsToTranslate = document.querySelectorAll("[data-translate-es]");
  // console.log(elementsToTranslate);
  const btnChangeLanguage = document.getElementById('btn-translate')

  let language = 'es'

  btnChangeLanguage.addEventListener('click', function () {

    if (language === 'es') {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-en')
        phrase.textContent = translation
      }
      
      document.getElementById('downloadCV').href = './assets/cv/cv.pdf'
      language = 'en'

    } else {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-es')
        phrase.textContent = translation
      }
      
      document.getElementById('downloadCV').href = './assets/cv/cv.pdf'
      language = 'es'
    }
  })

});

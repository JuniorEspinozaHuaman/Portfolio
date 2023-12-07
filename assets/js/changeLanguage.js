document.addEventListener("DOMContentLoaded", function () {
  // AQUÍ PONDRE TODO EL CODIGO
  const elementsToTranslate = document.querySelectorAll("[data-translate-es]");
  console.log(elementsToTranslate);
  const btnChangeLanguage = document.getElementById('btn-translate')

  let language = 'es'

  btnChangeLanguage.addEventListener('click', function () {

    if (language === 'es') {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-en')
        phrase.textContent = translation
      }
      language = 'en'
      document.getElementById('downloadCV').href = '../cv/cv_en.png'

    } else {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-es')
        phrase.textContent = translation
      }
      language = 'es'
      document.getElementById('downloadCV').href = '../cv/cv_es.png'

    }




  })



});

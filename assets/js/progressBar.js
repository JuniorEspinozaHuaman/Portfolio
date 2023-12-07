document.addEventListener('DOMContentLoaded', function () {
    // progressBar
    // API web animations

    const progressBarr = document.getElementById('progress')

    progressBarr.animate(
        // como argumento, el metodo animate recibe un array de objetos que describen los estados de la animación.
        [
            { width: 0 },
            { width: '100%' }
        ],
        {
            fill: 'forwards',
            timeline: new ScrollTimeline({
                subject: document.documentElement
            })
        }
    )

    // animate Sections   

//     const sections = document.querySelectorAll('section')
  

//   sections.forEach(function (section) {
//     section.animate(
//       [
//         { opacity: 0, transform: "translateY(150px)", scale: 0.7 },
//         { opacity: 1, transform: "translateY(0)", scale: 1 }
//       ],
//       {
//         fill: 'both',
//         timeline: new ViewTimeline({
//           subject: section
//         }),

//         rangeStart: 'entry 10%',
//         rangeEnd: 'cover 45%',

//       }
//     )

//   })

})
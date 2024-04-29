let toggler = document.getElementById('switch')

toggler.addEventListener('click', () => {
  if (toggler.checked === true) {
        document.body.style.backgrounColor = 'black'
    } else {
        document.body.style.backgrounColor = 'white'
    }

    toggler.checked === true
        ? (document.body.style.backgroundColor = 'black')
        : (document.body.style.backgroundColor = 'white')

})


const avg = (x, y) => { return (x / y) }


const updateWithAvg = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    // const s = document.querySelector('#guest').value.replace(regex, '')
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)

    if (i >= 0 && j >= 0){
      ansAvg = `Your average tasks per developer is ${avg(i, j).toFixed(2)}`
    }
    else {
      ansAvg = `Please enter numbers in both fields to calculate`
    }
    document.querySelector('#result').innerHTML = ansAvg

  }
}


document.addEventListener('click', event => {
  if (event.target && event.target.id === 'average') { updateWithAvg(event) }
})

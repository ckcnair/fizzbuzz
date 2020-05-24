import { getBoxStyle } from './Spiral.js'
const boxess = []

for (let i=1; i<=15; i++){
  let text = ''
  if((i  % 3) === 0)
    text += 'Fizz'
  if(i % 5 === 0)
    text += 'Buzz'

  if(text==='') text = i
    boxess.push(React.createElement('div', { style: getBoxStyle(i-1), key: i},
      React.createElement('strong', {}, text)))
}

ReactDOM.render(
  React.createElement('div', {}, boxess),
  document.getElementById('app')
)


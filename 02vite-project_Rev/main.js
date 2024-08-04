

import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Are u learning react?
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

import eCode from './e_code.js';

document.body.innerHTML = `<div class="wrapper">
                             <header class="header">
                               <h1 class="text_header">RSS Virtual Keyboard</h1>
                               <div class="contain_descript">
                                 <p class="text_descript">The keyboard was created in the Windows operating system.</p>
                                 <p class="text_descript">To switch the language, the combination is: left ctrl + alt.</p>
                               </div>
                             </header>
                             <main class="main">
                               <textarea class="field" autofocus></textarea>
                               <div class="keyboard"></div>
                             </main>
                           </div>`;

eCode.forEach((el) => {
  const key = document.createElement('div');
  key.className = `key ${el.toLocaleLowerCase()}`;
  document.querySelector('.keyboard').append(key);
});

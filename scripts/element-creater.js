import eCode from './e_code.js';

document.body.innerHTML = `<div class="wrapper">
                             <header class="header"><h1 class="text_header">RSS Virtual Keyboard</h1></header>
                             <main class="main">
                               <textarea class="field"></textarea>
                               <div class="keyboard"></div>
                               <footer class="footer">
                                 <p class="text_footer">The keyboard was created in the Windows operating system.</p>
                                 <p class="text_footer">To switch the language, the combination is: left ctrl + alt.</p>
                               </footer>
                             </main>
                           </div>`;

eCode.forEach((el) => {
  const key = document.createElement('div');
  key.className = `key ${el}`;
  document.querySelector('.keyboard').append(key);
});

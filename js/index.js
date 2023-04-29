const keyObj = [
  {
    code: 'Backquote',
    dualSign: false,
    lang: { en: '`', ru: 'ё' },
    keySize: 'standard',
  },
  {
    code: 'Digit1',
    dualSign: false,
    lang: { en: '1', ru: '1' },
    keySize: 'standard',
  },
  {
    code: 'Digit2',
    dualSign: false,
    lang: { en: '2', ru: '2' },
    keySize: 'standard',
  },
  {
    code: 'Digit3',
    dualSign: false,
    lang: { en: '3', ru: '3' },
    keySize: 'standard',
  },
  {
    code: 'Digit4',
    dualSign: false,
    lang: { en: '4', ru: '4' },
    keySize: 'standard',
  },
  {
    code: 'Digit5',
    dualSign: false,
    lang: { en: '5', ru: '5' },
    keySize: 'standard',
  },
  {
    code: 'Digit6',
    dualSign: false,
    lang: { en: '6', ru: '6' },
    keySize: 'standard',
  },
  {
    code: 'Digit7',
    dualSign: false,
    lang: { en: '7', ru: '7' },
    keySize: 'standard',
  },
  {
    code: 'Digit8',
    dualSign: false,
    lang: { en: '8', ru: '8' },
    keySize: 'standard',
  },
  {
    code: 'Digit9',
    dualSign: false,
    lang: { en: '9', ru: '9' },
    keySize: 'standard',
  },
  {
    code: 'Digit0',
    dualSign: false,
    lang: { en: '0', ru: '0' },
    keySize: 'standard',
  },
  {
    code: 'Minus',
    dualSign: false,
    lang: { en: '-', ru: '-' },
    keySize: 'standard',
  },
  {
    code: 'Equal',
    dualSign: false,
    lang: { en: '=', ru: '=' },
    keySize: 'standard',
  },
  {
    code: 'Backspace',
    dualSign: true,
    lang: { en: 'Backspace', ru: 'Backspace' },
    keySize: 'double',
  },
  {
    code: 'Tab',
    dualSign: true,
    lang: { en: 'Tab', ru: 'Tab' },
    keySize: 'double',
  },
  {
    code: 'KeyQ',
    dualSign: false,
    lang: { en: 'q', ru: 'й' },
    keySize: 'standard',
  },
  {
    code: 'KeyW',
    dualSign: false,
    lang: { en: 'w', ru: 'ц' },
    keySize: 'standard',
  },
  {
    code: 'KeyE',
    dualSign: false,
    lang: { en: 'e', ru: 'у' },
    keySize: 'standard',
  },
  {
    code: 'KeyR',
    dualSign: false,
    lang: { en: 'r', ru: 'к' },
    keySize: 'standard',
  },
  {
    code: 'KeyT',
    dualSign: false,
    lang: { en: 't', ru: 'е' },
    keySize: 'standard',
  },
  {
    code: 'KeyY',
    dualSign: false,
    lang: { en: 'y', ru: 'н' },
    keySize: 'standard',
  },
  {
    code: 'KeyU',
    dualSign: false,
    lang: { en: 'u', ru: 'г' },
    keySize: 'standard',
  },
  {
    code: 'KeyI',
    dualSign: false,
    lang: { en: 'i', ru: 'ш' },
    keySize: 'standard',
  },
  {
    code: 'KeyO',
    dualSign: false,
    lang: { en: 'o', ru: 'щ' },
    keySize: 'standard',
  },
  {
    code: 'KeyP',
    dualSign: false,
    lang: { en: 'p', ru: 'з' },
    keySize: 'standard',
  },
  {
    code: 'BracketLeft',
    dualSign: false,
    lang: { en: '[', ru: 'х' },
    keySize: 'standard',
  },
  {
    code: 'BracketRight',
    dualSign: false,
    lang: { en: ']', ru: 'ъ' },
    keySize: 'standard',
  },
  {
    code: 'Backslash',
    dualSign: false,
    lang: { en: '\\', ru: '\\' },
    keySize: 'standard',
  },
  {
    code: 'CapsLock',
    dualSign: true,
    lang: { en: 'Capslock', ru: 'Capslock' },
    keySize: 'double',
  },
  {
    code: 'KeyA',
    dualSign: false,
    lang: { en: 'a', ru: 'ф' },
    keySize: 'standard',
  },
  {
    code: 'KeyS',
    dualSign: false,
    lang: { en: 's', ru: 'ы' },
    keySize: 'standard',
  },
  {
    code: 'KeyD',
    dualSign: false,
    lang: { en: 'd', ru: 'в' },
    keySize: 'standard',
  },
  {
    code: 'KeyF',
    dualSign: false,
    lang: { en: 'f', ru: 'а' },
    keySize: 'standard',
  },
  {
    code: 'KeyG',
    dualSign: false,
    lang: { en: 'g', ru: 'п' },
    keySize: 'standard',
  },
  {
    code: 'KeyH',
    dualSign: false,
    lang: { en: 'h', ru: 'р' },
    keySize: 'standard',
  },
  {
    code: 'KeyJ',
    dualSign: false,
    lang: { en: 'j', ru: 'о' },
    keySize: 'standard',
  },
  {
    code: 'KeyK',
    dualSign: false,
    lang: { en: 'k', ru: 'л' },
    keySize: 'standard',
  },
  {
    code: 'KeyL',
    dualSign: false,
    lang: { en: 'l', ru: 'д' },
    keySize: 'standard',
  },
  {
    code: 'Semicolon',
    dualSign: false,
    lang: { en: ';', ru: 'ж' },
    keySize: 'standard',
  },
  {
    code: 'Quote',
    dualSign: false,
    lang: { en: `'`, ru: 'э' },
    keySize: 'standard',
  },
  {
    code: 'Enter',
    dualSign: true,
    lang: { en: 'Enter', ru: 'Enter' },
    keySize: 'double',
  },
  {
    code: 'ShiftLeft',
    dualSign: true,
    lang: { en: 'Shift', ru: 'Shift' },
    keySize: 'double',
  },
  {
    code: 'KeyZ',
    dualSign: false,
    lang: { en: 'z', ru: 'я' },
    keySize: 'standard',
  },
  {
    code: 'KeyX',
    dualSign: false,
    lang: { en: 'x', ru: 'ч' },
    keySize: 'standard',
  },
  {
    code: 'KeyC',
    dualSign: false,
    lang: { en: 'c', ru: 'с' },
    keySize: 'standard',
  },
  {
    code: 'KeyV',
    dualSign: false,
    lang: { en: 'v', ru: 'м' },
    keySize: 'standard',
  },
  {
    code: 'KeyB',
    dualSign: false,
    lang: { en: 'b', ru: 'и' },
    keySize: 'standard',
  },
  {
    code: 'KeyN',
    dualSign: false,
    lang: { en: 'n', ru: 'т' },
    keySize: 'standard',
  },
  {
    code: 'KeyM',
    dualSign: false,
    lang: { en: 'm', ru: 'ь' },
    keySize: 'standard',
  },
  {
    code: 'Comma',
    dualSign: false,
    lang: { en: ',', ru: 'б' },
    keySize: 'standard',
  },
  {
    code: 'Period',
    dualSign: false,
    lang: { en: '.', ru: 'ю' },
    keySize: 'standard',
  },
  {
    code: 'Slash',
    dualSign: false,
    lang: { en: '/', ru: '.' },
    keySize: 'standard',
  },
  {
    code: 'ArrowUp',
    dualSign: true,
    lang: { en: '↑', ru: '↑' },
    keySize: 'standard',
  },
  {
    code: 'ShiftRight',
    dualSign: true,
    lang: { en: 'Shift', ru: 'Shift' },
    keySize: 'double',
  },
  {
    code: 'ControlLeft',
    dualSign: true,
    lang: { en: 'Ctrl', ru: 'Ctrl' },
    keySize: 'standardplus',
  },
  {
    code: 'AltLeft',
    dualSign: true,
    lang: { en: 'Alt', ru: 'Alt' },
    keySize: 'standard',
  },
  {
    code: 'Space',
    dualSign: false,
    lang: { en: 'Space', ru: 'Space' },
    keySize: 'long',
  },
  {
    code: 'AltRight',
    dualSign: true,
    lang: { en: 'Alt', ru: 'Alt' },
    keySize: 'standard',
  },
  {
    code: 'ArrowLeft',
    dualSign: true,
    lang: { en: '←', ru: '←' },
    keySize: 'standard',
  },
  {
    code: 'ArrowDown',
    dualSign: true,
    lang: { en: '↓', ru: '↓' },
    keySize: 'standard',
  },
  {
    code: 'ArrowRight',
    dualSign: true,
    lang: { en: '→', ru: '→' },
    keySize: 'standard',
  },
  {
    code: 'ControlRight',
    dualSign: true,
    lang: { en: 'Ctrl', ru: 'Ctrl' },
    keySize: 'standardplus',
  },
];

const keys = {};
const keyboard = document.createDocumentFragment();
const wrapperKeyboard = document.createElement('div');
wrapperKeyboard.classList.add('wrapper-keyboard');

keyObj.forEach((key) => {
  keys[key.code] = key.lang;
  keys[key.code].dualSign = key.dualSign;

  const keyButton = document.createElement('div');
  keyButton.setAttribute('id', key.code);
  keyButton.classList.add(`wrapper-keyboard__key`);
  keyButton.classList.add(`key__${key.keySize}`);

  keyButton.textContent = key.lang.en;
  wrapperKeyboard.appendChild(keyButton);
});

keyboard.appendChild(wrapperKeyboard);
console.log(keyboard, wrapperKeyboard);

class VirtualKeyboard {
  constructor() {
    this.lang = localStorage.getItem('lang') === 'en' ? 'en' : 'ru';
    this.capslock = false;
  }

  createStructure() {
    this.linkStyle = document.createElement('link');
    this.linkFavicon = document.createElement('link');
    this.tagTitle = document.createElement('title');

    this.linkStyle.rel = 'stylesheet';
    this.linkStyle.href = './css/style.css';

    this.linkFavicon.rel = 'icon';
    this.linkFavicon.href = './assets/';

    this.tagTitle.innerText = 'Virtual Keyboard';

    this.wrapperContent = document.createElement('div');
    this.title = document.createElement('h1');
    this.textArea = document.createElement('textarea');
    this.layout = document.createElement('div');
    this.info = document.createElement('p');
    this.langSwitcher = document.createElement('p');

    this.wrapperContent.classList.add('main-content');
    this.title.classList.add('main-content__title');
    this.textArea.classList.add('main-content__textarea');
    this.info.classList.add('main-content__info');
    this.langSwitcher.classList.add('main-content__lang-switcher');

    this.title.textContent = 'Virtual Keyboard';
    this.info.textContent = 'Keyboard was created on Windows operation system';
    this.langSwitcher.textContent = 'To switch language press Ctrl + ALT';

    this.textArea.autofocus = true;

    this.layout.innerHTML = wrapperKeyboard.innerHTML;
    this.layout.classList.add('wrapper-keyboard');

    this.wrapperContent.appendChild(this.title);
    this.wrapperContent.appendChild(this.textArea);
    this.wrapperContent.appendChild(this.layout);
    this.wrapperContent.appendChild(this.info);
    this.wrapperContent.appendChild(this.langSwitcher);

    document.head.append(this.linkStyle, this.linkFavicon, this.tagTitle);
    document.body.prepend(this.wrapperContent);

    this.addEvents();
  }

  addEvents() {
    document.addEventListener('keydown', (event) => {
      // event.preventDefault();

      const currentKey = document.getElementById(event.code);
      if (!currentKey) {
        event.preventDefault();
      }

      if (event.code === 'CapsLock') {
        this.capslock = !this.capslock;
        if (this.capslock) {
          currentKey.classList.add('capslock__pressed');
        } else {
          currentKey.classList.remove('capslock__pressed');
        }
      } else {
        currentKey.classList.add('pressed-button');
        console.log(currentKey);
        if (!keys[event.code].dualSign) {
          event.preventDefault();
          this.textArea.value += this.textArea.textContent + currentKey.textContent;
        }
      }
    });

    document.addEventListener('keyup', (event) => {
      event.preventDefault();

      const currentKey = document.getElementById(event.code);
      if (!currentKey) {
        event.preventDefault();
      }

      if (event.code !== 'CapsLock') {
        setTimeout(() => {
          currentKey.classList.remove('pressed-button');
        }, 200);
      }
    });

    console.log(wrapperKeyboard);

    this.layout.addEventListener('click', (event) => {
      this.textArea.focus();
      const currentKeyPressed = new KeyboardEvent('keydown', {
        code: event.target.id,
        bubbles: true,
        cancelable: true,
        view: window,
      });
      console.log(this.layout);
      console.log(currentKeyPressed);
      document.dispatchEvent(currentKeyPressed);

      this.textArea.focus();
      const currentKeyReleased = new KeyboardEvent('keyup', {
        code: event.target.id,
        bubbles: true,
        cancelable: true,
        view: window,
      });
      document.dispatchEvent(currentKeyReleased);
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const newKeyboard = new VirtualKeyboard();
  newKeyboard.createStructure();
});

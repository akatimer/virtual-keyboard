const keyObj = [
  {
    code: 'Backquote',
    action: false,
    lang: { en: '`', ru: 'ё' },
    keySize: 'standard',
  },
  {
    code: 'Digit1',
    action: false,
    lang: { en: '1', ru: '1' },
    keySize: 'standard',
  },
  {
    code: 'Digit2',
    action: false,
    lang: { en: '2', ru: '2' },
    keySize: 'standard',
  },
  {
    code: 'Digit3',
    action: false,
    lang: { en: '3', ru: '3' },
    keySize: 'standard',
  },
  {
    code: 'Digit4',
    action: false,
    lang: { en: '4', ru: '4' },
    keySize: 'standard',
  },
  {
    code: 'Digit5',
    action: false,
    lang: { en: '5', ru: '5' },
    keySize: 'standard',
  },
  {
    code: 'Digit6',
    action: false,
    lang: { en: '6', ru: '6' },
    keySize: 'standard',
  },
  {
    code: 'Digit7',
    action: false,
    lang: { en: '7', ru: '7' },
    keySize: 'standard',
  },
  {
    code: 'Digit8',
    action: false,
    lang: { en: '8', ru: '8' },
    keySize: 'standard',
  },
  {
    code: 'Digit9',
    action: false,
    lang: { en: '9', ru: '9' },
    keySize: 'standard',
  },
  {
    code: 'Digit0',
    action: false,
    lang: { en: '0', ru: '0' },
    keySize: 'standard',
  },
  {
    code: 'Minus',
    action: false,
    lang: { en: '-', ru: '-' },
    keySize: 'standard',
  },
  {
    code: 'Equal',
    action: false,
    lang: { en: '=', ru: '=' },
    keySize: 'standard',
  },
  {
    code: 'Backspace',
    action: true,
    lang: { en: 'Backspace', ru: 'Backspace' },
    keySize: 'double',
  },
  {
    code: 'Tab',
    action: true,
    lang: { en: 'Tab', ru: 'Tab' },
    keySize: 'double',
  },
  {
    code: 'KeyQ',
    action: false,
    lang: { en: 'q', ru: 'й' },
    keySize: 'standard',
  },
  {
    code: 'KeyW',
    action: false,
    lang: { en: 'w', ru: 'ц' },
    keySize: 'standard',
  },
  {
    code: 'KeyE',
    action: false,
    lang: { en: 'e', ru: 'у' },
    keySize: 'standard',
  },
  {
    code: 'KeyR',
    action: false,
    lang: { en: 'r', ru: 'к' },
    keySize: 'standard',
  },
  {
    code: 'KeyT',
    action: false,
    lang: { en: 't', ru: 'е' },
    keySize: 'standard',
  },
  {
    code: 'KeyY',
    action: false,
    lang: { en: 'y', ru: 'н' },
    keySize: 'standard',
  },
  {
    code: 'KeyU',
    action: false,
    lang: { en: 'u', ru: 'г' },
    keySize: 'standard',
  },
  {
    code: 'KeyI',
    action: false,
    lang: { en: 'i', ru: 'ш' },
    keySize: 'standard',
  },
  {
    code: 'KeyO',
    action: false,
    lang: { en: 'o', ru: 'щ' },
    keySize: 'standard',
  },
  {
    code: 'KeyP',
    action: false,
    lang: { en: 'p', ru: 'з' },
    keySize: 'standard',
  },
  {
    code: 'BracketLeft',
    action: false,
    lang: { en: '[', ru: 'х' },
    keySize: 'standard',
  },
  {
    code: 'BracketRight',
    action: false,
    lang: { en: ']', ru: 'ъ' },
    keySize: 'standard',
  },
  {
    code: 'Backslash',
    action: false,
    lang: { en: '\\', ru: '\\' },
    keySize: 'standard',
  },
  {
    code: 'CapsLock',
    action: true,
    lang: { en: 'Capslock', ru: 'Capslock' },
    keySize: 'double',
  },
  {
    code: 'KeyA',
    action: false,
    lang: { en: 'a', ru: 'ф' },
    keySize: 'standard',
  },
  {
    code: 'KeyS',
    action: false,
    lang: { en: 's', ru: 'ы' },
    keySize: 'standard',
  },
  {
    code: 'KeyD',
    action: false,
    lang: { en: 'd', ru: 'в' },
    keySize: 'standard',
  },
  {
    code: 'KeyF',
    action: false,
    lang: { en: 'f', ru: 'а' },
    keySize: 'standard',
  },
  {
    code: 'KeyG',
    action: false,
    lang: { en: 'g', ru: 'п' },
    keySize: 'standard',
  },
  {
    code: 'KeyH',
    action: false,
    lang: { en: 'h', ru: 'р' },
    keySize: 'standard',
  },
  {
    code: 'KeyJ',
    action: false,
    lang: { en: 'j', ru: 'о' },
    keySize: 'standard',
  },
  {
    code: 'KeyK',
    action: false,
    lang: { en: 'k', ru: 'л' },
    keySize: 'standard',
  },
  {
    code: 'KeyL',
    action: false,
    lang: { en: 'l', ru: 'д' },
    keySize: 'standard',
  },
  {
    code: 'Semicolon',
    action: false,
    lang: { en: ';', ru: 'ж' },
    keySize: 'standard',
  },
  {
    code: 'Quote',
    action: false,
    lang: { en: '\'', ru: 'э' },
    keySize: 'standard',
  },
  {
    code: 'Enter',
    action: true,
    lang: { en: 'Enter', ru: 'Enter' },
    keySize: 'double',
  },
  {
    code: 'ShiftLeft',
    action: true,
    lang: { en: 'Shift', ru: 'Shift' },
    keySize: 'double',
  },
  {
    code: 'KeyZ',
    action: false,
    lang: { en: 'z', ru: 'я' },
    keySize: 'standard',
  },
  {
    code: 'KeyX',
    action: false,
    lang: { en: 'x', ru: 'ч' },
    keySize: 'standard',
  },
  {
    code: 'KeyC',
    action: false,
    lang: { en: 'c', ru: 'с' },
    keySize: 'standard',
  },
  {
    code: 'KeyV',
    action: false,
    lang: { en: 'v', ru: 'м' },
    keySize: 'standard',
  },
  {
    code: 'KeyB',
    action: false,
    lang: { en: 'b', ru: 'и' },
    keySize: 'standard',
  },
  {
    code: 'KeyN',
    action: false,
    lang: { en: 'n', ru: 'т' },
    keySize: 'standard',
  },
  {
    code: 'KeyM',
    action: false,
    lang: { en: 'm', ru: 'ь' },
    keySize: 'standard',
  },
  {
    code: 'Comma',
    action: false,
    lang: { en: ',', ru: 'б' },
    keySize: 'standard',
  },
  {
    code: 'Period',
    action: false,
    lang: { en: '.', ru: 'ю' },
    keySize: 'standard',
  },
  {
    code: 'Slash',
    action: false,
    lang: { en: '/', ru: '.' },
    keySize: 'standard',
  },
  {
    code: 'ArrowUp',
    action: false,
    lang: { en: '↑', ru: '↑' },
    keySize: 'standard',
  },
  {
    code: 'ShiftRight',
    action: true,
    lang: { en: 'Shift', ru: 'Shift' },
    keySize: 'double',
  },
  {
    code: 'ControlLeft',
    action: true,
    lang: { en: 'Ctrl', ru: 'Ctrl' },
    keySize: 'standard',
  },
  {
    code: 'AltLeft',
    action: true,
    lang: { en: 'Alt', ru: 'Alt' },
    keySize: 'standard',
  },
  {
    code: 'Space',
    action: true,
    lang: { en: 'Space', ru: 'Space' },
    keySize: 'long',
  },
  {
    code: 'AltRight',
    action: true,
    lang: { en: 'Alt', ru: 'Alt' },
    keySize: 'standard',
  },
  {
    code: 'ArrowLeft',
    action: false,
    lang: { en: '←', ru: '←' },
    keySize: 'standard',
  },
  {
    code: 'ArrowDown',
    action: false,
    lang: { en: '↓', ru: '↓' },
    keySize: 'standard',
  },
  {
    code: 'ArrowRight',
    action: false,
    lang: { en: '→', ru: '→' },
    keySize: 'standard',
  },
  {
    code: 'ControlRight',
    action: true,
    lang: { en: 'Ctrl', ru: 'Ctrl' },
    keySize: 'standard',
  },
];

const keys = {};
const keyboard = document.createDocumentFragment();
const wrapperKeyboard = document.createElement('div');
wrapperKeyboard.classList.add('wrapper-keyboard');

keyObj.forEach((key) => {
  keys[key.code] = key.lang;
  keys[key.code].action = key.action;

  const keyButton = document.createElement('div');
  keyButton.setAttribute('id', key.code);
  keyButton.classList.add('wrapper-keyboard__key');
  keyButton.classList.add(`key__${key.keySize}`);

  keyButton.textContent = key.lang.en;
  wrapperKeyboard.appendChild(keyButton);
});

keyboard.appendChild(wrapperKeyboard);

class VirtualKeyboard {
  constructor() {
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
    this.capslock = false;
    this.shift = false;
  }

  createStructure() {
    this.linkStyle = document.createElement('link');
    this.linkFavicon = document.createElement('link');
    this.tagTitle = document.createElement('title');

    this.linkStyle.rel = 'stylesheet';
    this.linkStyle.href = './css/style.css';

    this.linkFavicon.rel = 'icon';
    this.linkFavicon.href = './assets/ico/keyboard.ico';

    this.tagTitle.innerText = 'Virtual Keyboard';

    this.wrapperContent = document.createElement('main');
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

    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
    this.showLayout();

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
      const currentKey = document.getElementById(event.code);
      if (!currentKey) {
        event.preventDefault();
      }

      if (event.code === 'CapsLock') {
        this.capslock = !this.capslock;
        if (this.capslock) {
          currentKey.classList.add('capslock__pressed');
          this.checkCapsLock();
        } else {
          currentKey.classList.remove('capslock__pressed');
          this.checkCapsLock();
        }
      } else {
        currentKey.classList.add('pressed-button');
        if (event.ctrlKey && event.altKey) {
          this.switchLanguage();
        } else if (!keys[event.code].action) {
          event.preventDefault();
          this.textArea.value += currentKey.textContent;
        } else if (event.code === 'Backspace') {
          event.preventDefault();
          this.textArea.value = this.textArea.value.substring(0, this.textArea.value.length - 1);
        } else if (event.code === 'Tab') {
          event.preventDefault();
          this.textArea.value += '\t';
        } else if (event.code === 'Enter') {
          event.preventDefault();
          this.textArea.value += '\n';
        } else if (event.code === 'Space') {
          event.preventDefault();
          this.textArea.value += ' ';
        } else if (event.code === 'ShiftLeft') {
          this.shift = true;
          this.pressedShift();
        }
      }
    });

    document.addEventListener('keyup', (event) => {
      event.preventDefault();

      const currentKey = document.getElementById(event.code);
      if (!currentKey) {
        event.preventDefault();
      }

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.shift = false;
        this.pressedShift();
        if (this.capslock) {
          this.checkCapsLock();
        }
      }

      if (event.code !== 'CapsLock') {
        setTimeout(() => {
          currentKey.classList.remove('pressed-button');
        }, 200);
      }
    });

    const shiftLeft = document.getElementById('ShiftLeft');
    const shiftRight = document.getElementById('ShiftRight');

    shiftLeft.addEventListener('mousedown', () => {
      this.shift = true;
      shiftLeft.classList.add('pressed-button');
      this.pressedShift();
    });

    shiftRight.addEventListener('mousedown', () => {
      this.shift = true;
      shiftRight.classList.add('pressed-button');
      this.pressedShift();
    });

    this.layout.addEventListener('click', (event) => {
      this.textArea.focus();
      const currentKeyPressed = new KeyboardEvent('keydown', {
        code: event.target.id,
        bubbles: true,
        cancelable: true,
        view: window,
      });
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

  checkCapsLock() {
    this.layout.querySelectorAll('.wrapper-keyboard__key').forEach((e) => {
      if (this.capslock) {
        e.textContent = e.textContent.toUpperCase();
      } else {
        e.textContent = e.textContent.toLowerCase();
      }
    });
  }

  pressedShift() {
    this.layout.querySelectorAll('.wrapper-keyboard__key').forEach((e) => {
      if (this.shift && !this.capslock) {
        if (e.textContent === '1') {
          e.textContent = '!';
        } else if (e.textContent === '2') {
          e.textContent = '@';
        } else if (e.textContent === '3') {
          e.textContent = this.lang === 'ru' ? '№' : '#';
        } else if (e.textContent === '4') {
          e.textContent = this.lang === 'ru' ? ';' : '$';
        } else if (e.textContent === '5') {
          e.textContent = '%';
        } else if (e.textContent === '6') {
          e.textContent = this.lang === 'ru' ? ':' : '^';
        } else if (e.textContent === '7') {
          e.textContent = this.lang === 'ru' ? '?' : '&';
        } else if (e.textContent === '8') {
          e.textContent = '*';
        } else if (e.textContent === '9') {
          e.textContent = '(';
        } else if (e.textContent === '0') {
          e.textContent = ')';
        } else if (e.textContent === '-') {
          e.textContent = '_';
        } else if (e.textContent === '=') {
          e.textContent = '+';
        } else if (e.textContent === '\\') {
          e.textContent = this.lang === 'ru' ? '/' : '|';
        } else if (e.textContent === '[') {
          e.textContent = '{';
        } else if (e.textContent === ']') {
          e.textContent = '}';
        } else if (e.textContent === ';') {
          e.textContent = ':';
        } else if (e.textContent === '\'') {
          e.textContent = '"';
        } else if (e.textContent === '.' && this.lang === 'ru') {
          e.textContent = ',';
        } else if (e.textContent === ',') {
          e.textContent = '<';
        } else if (e.textContent === '/') {
          e.textContent = '?';
        } else if (e.textContent === '`') {
          e.textContent = '~';
        } else if (e.textContent === '.') {
          e.textContent = '>';
        }
        e.textContent = e.textContent.toUpperCase();
      } else if (this.shift && this.capslock) {
        if (e.textContent === '1') {
          e.textContent = '!';
        } else if (e.textContent === '2') {
          e.textContent = '@';
        } else if (e.textContent === '3') {
          e.textContent = this.lang === 'ru' ? '№' : '#';
        } else if (e.textContent === '4') {
          e.textContent = this.lang === 'ru' ? ';' : '$';
        } else if (e.textContent === '5') {
          e.textContent = '%';
        } else if (e.textContent === '6') {
          e.textContent = this.lang === 'ru' ? ':' : '^';
        } else if (e.textContent === '7') {
          e.textContent = this.lang === 'ru' ? '?' : '&';
        } else if (e.textContent === '8') {
          e.textContent = '*';
        } else if (e.textContent === '9') {
          e.textContent = '(';
        } else if (e.textContent === '0') {
          e.textContent = ')';
        } else if (e.textContent === '-') {
          e.textContent = '_';
        } else if (e.textContent === '=') {
          e.textContent = '+';
        } else if (e.textContent === '\\') {
          e.textContent = this.lang === 'ru' ? '/' : '|';
        } else if (e.textContent === '[') {
          e.textContent = '{';
        } else if (e.textContent === ']') {
          e.textContent = '}';
        } else if (e.textContent === ';') {
          e.textContent = ':';
        } else if (e.textContent === '\'') {
          e.textContent = '"';
        } else if (e.textContent === '.' && this.lang === 'ru') {
          e.textContent = ',';
        } else if (e.textContent === ',') {
          e.textContent = '<';
        } else if (e.textContent === '/') {
          e.textContent = '?';
        } else if (e.textContent === '`') {
          e.textContent = '~';
        } else if (e.textContent === '.') {
          e.textContent = '>';
        }
        e.textContent = e.textContent.toLowerCase();
      } else if (!this.shift) {
        if (e.textContent === '!') {
          e.textContent = '1';
        } else if (e.textContent === '@' || (e.textContent === '"' && this.lang === 'ru')) {
          e.textContent = '2';
        } else if (e.textContent === '#' || (e.textContent === '№' && this.lang === 'ru')) {
          e.textContent = '3';
        } else if (e.textContent === '$' || (e.textContent === ';' && this.lang === 'ru')) {
          e.textContent = '4';
        } else if (e.textContent === '%' || (e.textContent === '%' && this.lang === 'ru')) {
          e.textContent = '5';
        } else if (e.textContent === '^' || (e.textContent === ':' && this.lang === 'ru')) {
          e.textContent = '6';
        } else if (e.textContent === '&' || (e.textContent === '?' && this.lang === 'ru')) {
          e.textContent = '7';
        } else if (e.textContent === '*' || (e.textContent === '*' && this.lang === 'ru')) {
          e.textContent = '8';
        } else if (e.textContent === '(' || (e.textContent === '(' && this.lang === 'ru')) {
          e.textContent = '9';
        } else if (e.textContent === ')' || (e.textContent === ')' && this.lang === 'ru')) {
          e.textContent = '0';
        } else if (e.textContent === '_' || (e.textContent === '_' && this.lang === 'ru')) {
          e.textContent = '-';
        } else if (e.textContent === '+' || (e.textContent === '+' && this.lang === 'ru')) {
          e.textContent = '=';
        } else if (e.textContent === '|' || (e.textContent === '/' && this.lang === 'ru')) {
          e.textContent = '\\';
        } else if (e.textContent === '{') {
          e.textContent = '[';
        } else if (e.textContent === '}') {
          e.textContent = ']';
        } else if (e.textContent === ':') {
          e.textContent = ';';
        } else if (e.textContent === '"') {
          e.textContent = '\'';
        } else if (e.textContent === '>') {
          e.textContent = '.';
        } else if (e.textContent === '<') {
          e.textContent = ',';
        } else if (e.textContent === '?') {
          e.textContent = '/';
        } else if (e.textContent === '~') {
          e.textContent = '`';
        } else if (e.textContent === ',' && this.lang === 'ru') {
          e.textContent = '.';
        }
        e.textContent = e.textContent.toLowerCase();
      }
    });
  }

  switchLanguage() {
    const { lang } = this;
    this.layout.querySelectorAll('.wrapper-keyboard__key').forEach((e) => {
      if (lang === 'en') {
        this.lang = 'ru';
        localStorage.setItem('lang', this.lang);
        e.textContent = keys[e.id][this.lang];
      } else {
        this.lang = 'en';
        localStorage.setItem('lang', this.lang);
        e.textContent = keys[e.id][this.lang];
      }
    });
  }

  showLayout() {
    const { lang } = this;
    this.layout.querySelectorAll('.wrapper-keyboard__key').forEach((e) => {
      if (lang === 'en') {
        localStorage.setItem('lang', this.lang);
        e.textContent = keys[e.id][this.lang];
      } else {
        localStorage.setItem('lang', this.lang);
        e.textContent = keys[e.id][this.lang];
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const newKeyboard = new VirtualKeyboard();
  newKeyboard.createStructure();
});

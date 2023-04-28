// const wrapper = document.createElement('div');
// console.log(wrapper);

const wrapper = `<div class="wrapper"></div>`;
const textarea = `<textarea id="wrapper__textarea" class="textarea" rows="10" cols="33"></textarea>`;
const keyboard = `<div class="wrapper__keyboard"></div>`;
const info = `<div class="wrapper__info"></div>`;

document.body.innerHTML = wrapper;
const wrapperDiv = document.querySelector('.wrapper');
console.log(wrapperDiv);

wrapperDiv.innerHTML = textarea + keyboard + info;

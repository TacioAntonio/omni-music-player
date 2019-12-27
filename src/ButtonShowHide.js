/* eslint-disable no-undef */
const buttonFooter = document.querySelector('.footer-icon');

export default function buttonShowHide() {
  buttonFooter.addEventListener('click', () => {
    document.querySelector('.list').classList.add('hide');
  });
}

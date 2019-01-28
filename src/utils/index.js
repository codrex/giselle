import { PASSWORD, DOT } from '../constants';

export function maskText(text, type) {
  if (type === PASSWORD && typeof text === 'string') {
    return text.replace(/./gi, DOT);
  }
  return text;
}

export function getTextWidth(text, selector, type) {
  const element = document && document.querySelector(selector);

  if (element) {
    element.innerHTML = maskText(text, type);
    return element.clientWidth;
  }
  return 0;
}

export function shouldUpdateValueLen(newLength) {
  const textField = document.querySelector('div.text-field');
  const width = textField.clientWidth;
  if (newLength >= width) return width;
  return newLength;
}

export function buildSelectOptions(arr = []) {
  if (Array.isArray(arr)) {
    return arr.map(value => ({ label: value, value }));
  }
  return arr;
}

export function capitalizeFirstLetter(letter) {
  if (typeof letter === 'string') {
    const firstLetter = letter.slice(0, 1);
    return `${firstLetter.toUpperCase()}${letter.slice(1).toLowerCase()}`;
  }
  return letter;
}

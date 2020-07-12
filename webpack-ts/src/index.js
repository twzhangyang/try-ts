import { formData } from './forms';
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const data = formData(form);
    console.log(data);
});
console.log('hello');
console.log('hello, again');
console.log('hello, again, again');
const person = {};
person.speak();
//# sourceMappingURL=index.js.map
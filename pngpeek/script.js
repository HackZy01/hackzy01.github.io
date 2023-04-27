const form = document.getElementById('form');
const textarea = document.getElementById('textarea');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const html = textarea.value;
  const regex = /<img[^>]+src="?((.+?)\.(png|jpg|jpeg))"?[^>]*>/g;
  let match;
  let images = '';
  while ((match = regex.exec(html)) !== null) {
    images += `<img src="${match[1]}">`;
  }
  output.innerHTML = images;
});

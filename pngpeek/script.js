const form = document.getElementById('form');
const input = document.getElementById('input');
const output = document.getElementById('output');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = input.value;
  const response = await fetch(url);
  const html = await response.text();
  const regex = /<img[^>]*src="([^"]+.(png|jpe?g|gif))"[^>]*>/g;
  let match;
  let images = '';
  while ((match = regex.exec(html)) !== null) {
    images += `<img src="${match[1]}">`;
  }
  output.innerHTML = images;
});

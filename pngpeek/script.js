const submitButton = document.querySelector('#submit-button');
const htmlInput = document.querySelector('#html-input');
const imageContainer = document.querySelector('#image-container');

submitButton.addEventListener('click', () => {
  const html = htmlInput.value;
  const regex = /<img[^>]*src="([^"]+.(png|jpe?g|gif))"[^>]*>/g;
  const matches = html.matchAll(regex);
  imageContainer.innerHTML = '';
  for (const match of matches) {
    const img = document.createElement('img');
    img.src = match[1];
    imageContainer.appendChild(img);
  }
});

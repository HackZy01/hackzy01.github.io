const htmlInput = document.getElementById('html-input');
const detectButton = document.getElementById('detect-button');
const pngImages = document.getElementById('png-images');
const pngRegex = /<img[^>]*src="([^"]*\.png)"[^>]*>/g;
function detectPNGs() {
	pngImages.innerHTML = '';
	const htmlCode = htmlInput.value;
	let match;
	while ((match = pngRegex.exec(htmlCode)) !== null) {
		const img = document.createElement('img');
		img.src = match[1];
		pngImages.appendChild(img);
	}
}
detectButton.addEventListener('click', detectPNGs);

// Get the necessary HTML elements
const htmlInput = document.getElementById('html-input');
const detectButton = document.getElementById('detect-button');
const pngImages = document.getElementById('png-images');

// Define the regular expression to detect PNG files
const pngRegex = /<img[^>]*src="([^"]*\.png)"[^>]*>/g;

// Define the function to detect PNGs and display them
function detectPNGs() {
	// Clear any existing images
	pngImages.innerHTML = '';

	// Get the HTML code from the input
	const htmlCode = htmlInput.value;

	// Find all matches of the PNG regular expression in the HTML code
	let match;
	while ((match = pngRegex.exec(htmlCode)) !== null) {
		// Create a new image element and set its source to the matched PNG URL
		const img = document.createElement('img');
		img.src = match[1];

		// Append the image element to the PNG images container
		pngImages.appendChild(img);
	}
}

// Add an event listener to the detect button to call the detectPNGs function
detectButton.addEventListener('click', detectPNGs);

const detectPngs = async () => {
  const url = document.getElementById("url-input").value.trim();
  if (!url) {
    alert("Please enter a valid website URL.");
    return;
  }
  
  const response = await fetch(url);
  const html = await response.text();
  
  const pngRegex = /<img[^>]+src="?((.+?)\.png)"?[^>]*>/gi;
  const pngMatches = html.match(pngRegex);
  
  if (!pngMatches) {
    alert("No PNG images found.");
    return;
  }
  
  const pngImagesDiv = document.getElementById("png-images");
  pngImagesDiv.innerHTML = "";
  
  for (let i = 0; i < pngMatches.length; i++) {
    const pngMatch = pngMatches[i];
    const pngSrcRegex = /src="([^"]+)"/i;
    const pngSrcMatch = pngMatch.match(pngSrcRegex);
    const pngSrc = pngSrcMatch ? pngSrcMatch[1] : "";
    const pngImg = document.createElement("img");
    pngImg.src = pngSrc;
    pngImagesDiv.appendChild(pngImg);
  }
};

const detectButton = document.getElementById("detect-button");
detectButton.addEventListener("click", detectPngs);

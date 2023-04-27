const form = document.querySelector("#form");
const input = document.querySelector("#input");
const results = document.querySelector("#results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const html = input.value;
  const pngs = detectPngs(html);
  showResults(pngs);
});

function detectPngs(html) {
  const jsonRegex = /{.*?}/gs; // match JSON objects
  const urlRegex = /https?:\/\/.*?\.png/g; // match PNG URLs
  let matches = [];
  let match;

  while ((match = jsonRegex.exec(html)) !== null) {
    const json = match[0];
    while ((match = urlRegex.exec(json)) !== null) {
      matches.push(match[0]);
    }
  }

  while ((match = urlRegex.exec(html)) !== null) {
    matches.push(match[0]);
  }

  return [...new Set(matches)]; // remove duplicates
}

function showResults(pngs) {
  results.innerHTML = "";

  if (pngs.length === 0) {
    const noResults = document.createElement("div");
    noResults.textContent = "No PNG files found";
    results.appendChild(noResults);
  } else {
    pngs.forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "";
      results.appendChild(img);
    });
  }
}


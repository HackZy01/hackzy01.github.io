document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    const url = document.getElementById("url-input").value;
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const packageId = doc.querySelector("div.product-name > h1").textContent;
        const description = doc.querySelector("div.product-description > p").textContent;
        const imageUrls = Array.from(doc.querySelectorAll("div.carousel-cell > img")).map(img => img.getAttribute("src"));
        const resultContainer = document.getElementById("result-container");
        resultContainer.innerHTML = "";
        const packageIdElement = document.createElement("p");
        packageIdElement.textContent = `Package ID: ${packageId}`;
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = `Description: ${description}`;
        const imagesElement = document.createElement("div");
        imagesElement.setAttribute("id", "images-container");
        imageUrls.forEach(url => {
          const imgElement = document.createElement("img");
          imgElement.setAttribute("src", url);
          imagesElement.appendChild(imgElement);
        });
        resultContainer.appendChild(packageIdElement);
        resultContainer.appendChild(descriptionElement);
        resultContainer.appendChild(imagesElement);
      })
      .catch(error => console.log(error));
  });
  
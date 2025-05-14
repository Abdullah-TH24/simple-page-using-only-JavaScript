/**
 * Globals
 */
let color = "rgb(0 177 101)";
let linkColor = "grey";
document.body.style.margin = "0";
document.body.style.position = "relative";

// Create container for header
let containerHeader = document.createElement("div");
containerHeader.className = "container";

/**
 * Header
 */

// Create header container
let header = document.createElement("header");
header.className = "head-page";
header.appendChild(containerHeader);

// Create header -> logo
let logo = document.createElement("h1");
let logoText = document.createTextNode("ATH");
logo.className = "logo";
logo.style.cssText = `color: ${color}; font-weight: bold; font-size: 25px;`;
logo.appendChild(logoText);
containerHeader.appendChild(logo);

// Create header -> list
let menu = document.createElement("ul");
menu.className = "menu";

/**
 * Create list items
 */
// Home
let liOne = document.createElement("li");
let linkOne = document.createElement("a");
let textOne = document.createTextNode("Home");
linkOne.href = "#";
linkOne.style.cssText = `text-decoration: none; color: ${linkColor};`;
liOne.onmousemove = () => {
  linkOne.style.color = "cyan";
};
liOne.onmouseleave = () => {
  linkOne.style.color = `${linkColor}`;
};
liOne.appendChild(linkOne);
linkOne.appendChild(textOne);
menu.appendChild(liOne);

// About
let liTwo = document.createElement("li");
let linkTwo = document.createElement("a");
let textTwo = document.createTextNode("About");
linkTwo.href = "#";
linkTwo.style.cssText = `text-decoration: none; color: ${linkColor};`;
liTwo.onmousemove = () => {
  linkTwo.style.color = "cyan";
};
liTwo.onmouseleave = () => {
  linkTwo.style.color = `${linkColor}`;
};
liTwo.appendChild(linkTwo);
linkTwo.appendChild(textTwo);
menu.appendChild(liTwo);

// Servcies
let liThree = document.createElement("li");
let linkThree = document.createElement("a");
let textThree = document.createTextNode("Services");
linkThree.href = "#";
linkThree.style.cssText = `text-decoration: none; color: ${linkColor};`;
liThree.onmousemove = () => {
  linkThree.style.color = "cyan";
};
liThree.onmouseleave = () => {
  linkThree.style.color = `${linkColor}`;
};
liThree.appendChild(linkThree);
linkThree.appendChild(textThree);
menu.appendChild(liThree);

// Contact
let liFour = document.createElement("li");
let linkFour = document.createElement("a");
let textFour = document.createTextNode("Contact");
linkFour.href = "#";
linkFour.style.cssText = `text-decoration: none; color: ${linkColor};`;
liFour.onmousemove = () => {
  linkFour.style.color = "cyan";
};
liFour.onmouseleave = () => {
  linkFour.style.color = `${linkColor}`;
};
liFour.appendChild(linkFour);
linkFour.appendChild(textFour);
menu.appendChild(liFour);

// Styling
containerHeader.appendChild(menu);
menu.style.cssText =
  "display: flex; list-style-type: none; gap: 10px; font-size: 15px;";
containerHeader.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; padding: 0px 25px;";

// Add header to documnet
document.body.appendChild(document.createComment(" Here my header "));
document.body.appendChild(header);

/**
 * Body
 */
// Create container for header
let containerBody = document.createElement("div");
containerBody.className = "container";

// Create div .content container
let content = document.createElement("div");
content.className = "content";
content.style.paddingBottom = "60px";
content.appendChild(containerBody);

// content
for (let i = 0; i < 15; i++) {
  // Create product container
  let product = document.createElement("div");
  product.className = "product";

  // Create contents of the products
  let span = document.createElement("span");
  let textSpan = document.createTextNode(`${i + 1}`);
  span.appendChild(textSpan);

  product.appendChild(span);
  product.append("Product");

  // styling product
  containerBody.style.cssText = `background-color: #c1c1c1; padding: 5px; display: flex; flex-wrap: wrap;`; // height: calc(100vh - 121px);
  product.style.cssText = `background-color: white; margin: 5px; flex-basis: 200px; height: 100px;
   display: flex; justify-content: center; flex-wrap: wrap; flex-direction: column; gap: 5px; align-content: center; text-align: center; color: grey; flex-grow: 1;`;
  span.style.cssText = `color: black; font-weight: bold; font-size: 25px;`;

  containerBody.appendChild(product);
}

// Responsive
const style = document.createElement("style");
style.type = "text/css";
style.innerHTML = `
  @media (min-width: 830px) {
    div.content .container .product {
      height: 200px !important;
    }
  }
`;
document.head.appendChild(style);

// Add container to document
document.body.appendChild(document.createComment(" Here my body "));
document.body.appendChild(content);

/**
 * Footer
 */
// Create container for header
let containerFooter = document.createElement("div");
containerFooter.className = "container";

// Create footer .footer container
let footer = document.createElement("footer");
footer.className = "footer";
footer.appendChild(containerFooter);

// Create footer content
let p = document.createElement("p");
p.innerHTML = `&copy; 2025 <span>- ATH -</span> All Right Reserved`;
containerFooter.appendChild(p);

// Styling
footer.style.cssText = `background-color: ${color}; height: 60.5px; display: flex
; justify-content: center; align-items: center; position: absolute; bottom: 0; width: 100%;`;
p.style.cssText = `margin: 0; color: white; font-weight: bold;`;

// Add container to document
document.body.appendChild(document.createComment(" Here my footer "));
document.body.appendChild(footer);

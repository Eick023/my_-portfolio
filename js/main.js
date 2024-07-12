const introText = document.querySelectorAll("span");
console.log(introText);

window.onload = () => {
  let timer = 100;
  introText.forEach((item) => {
    item.style.animation = `fade 500ms ${(timer += 50)}ms forwards`;
  });
};
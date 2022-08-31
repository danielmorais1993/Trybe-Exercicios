
const inputBackColor = document.getElementById("color-background");
const articleCatch = document.getElementById('artigo');
articleCatch.style.backgroundColor=inputBackColor.value;
const catchButton = document.getElementById("colorbackselect");

const inputColor = document.getElementById("colortext");
const catchButtonCT=document.getElementById("colorselect");
articleCatch.style.color=inputColor.value;






function BackGroundColor(event){
  console.log(event.target)
 
  articleCatch.style.backgroundColor=inputBackColor.value;
  localStorage.setItem('backgroundColor',JSON.stringify(inputBackColor.value));
}
function Color(event){
  console.log(event.target)
 
  articleCatch.style.color=inputColor.value;
  localStorage.setItem('Color',JSON.stringify(inputColor.value));
}

catchButton.addEventListener('click',BackGroundColor);

catchButtonCT.addEventListener('click',Color);







function initialRenderizationBackColor() {
  if (localStorage.getItem('backgroundColor') === null) {
    localStorage.setItem('backgroundColor', JSON.stringify([]));
  } else {
    const BcolorList = JSON.parse(localStorage.getItem('backgroundColor'));    
    articleCatch.style.backgroundColor=BcolorList;    
    }
  }
  function initialRenderizationColor(){
    if (localStorage.getItem('Color') === null) {
      localStorage.setItem('Color', JSON.stringify([]));
    } else {
      const colorList = JSON.parse(localStorage.getItem('Color'));    
      articleCatch.style.color=colorList;    
      }
    }


window.onload = function() {
  initialRenderizationBackColor();
  initialRenderizationColor();

};
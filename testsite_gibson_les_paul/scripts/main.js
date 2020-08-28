var mijnAfbeelding = document.querySelector('img');

mijnAfbeelding.onclick = function() {
    var mijnSrc = mijnAfbeelding.getAttribute('src');
    if(mijnSrc === 'afbeeldingen/lespaul.jpg') {
      mijnAfbeelding.setAttribute ('src','afbeeldingen/lespaul_2.jpg');
    } else {
      mijnAfbeelding.setAttribute ('src','afbeeldingen/lespaul.jpg');
    }
}
var mijnKnop = document.querySelector('button');
var mijnHoofding= document.querySelector('h4');

function stelNaamIn() {
    var mijnNaam = prompt('Voer uw naam in');
    localStorage.setItem('naam', mijnNaam);
    mijnHoofding.textContent = 'Gratis Gibson voor ' + mijnNaam;
  }
  if(!localStorage.getItem('naam')) {
    stelNaamIn();
  } else {
    var opgeslagenNaam = localStorage.getItem('naam');
    mijnHoofding.textContent = 'Gratis Gibson voor ' + opgeslagenNaam;
  }
  mijnKnop.onclick = function() {
    stelNaamIn();
  }
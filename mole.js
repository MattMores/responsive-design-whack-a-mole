window.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
      const moleHeads = document.querySelectorAll('.mole');
      for (let moleHead of moleHeads) {
        moleHead.classList.toggle('gameSpace__mole--hidden');
      }
    }, 1000);

  let moles = document.querySelectorAll('.gameSpace__mole--hidden');
  console.log(moles)

  function popUpRandomMole(min, max) {
    setTimeout(() => {
    hideMole(moles)
    }, 1000);

      min = Math.ceil(min);
      max = Math.floor(max);
      moles.classList.remove(".gameSpace__mole--hidden")
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    function hideMole(moles) {
    moles.classList.add(".gameSpace__mole--hidden")
    setTimeout(() => {
     popUpRandomMole()
    }, 1000);
    }
    setTimeout(() => {
    popUpRandomMole()
    }, 0);
});

console.log(popUpRandomMole(0, 7));
//THICC MOLES

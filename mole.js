window.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
      const moleHeads = document.querySelectorAll('.mole');
      for (let moleHead of moleHeads) {
        moleHead.classList.toggle('gameSpace__mole--hidden');
      }
    }, 1000);

  });

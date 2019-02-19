const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
  .memory-card {
    width: 155px;
    height: 155px;
    position: relative;
  }
  .memory-card .card {
    width: 100%;
    height: 100%;
    background-color: #f25a70;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    cursor: pointer;
    position: absolute;
  }

  .memory-card.-active .card,
  .memory-card.-score .card {
    display: none;
  }

  .memory-card .card.-front {
    background-color: #fff;
  }

  .memory-card.-active .card.-front,
  .memory-card.-score .card.-front {
    display: flex;
  }

  .memory-card .card.-front::before {
    content: "";
    width: 95px;
    height: 95px;
    background-color: #d4d4d4;
    border-radius: 50%;
    position: absolute;
    transform: translateY(5px);
  }

  .card > .icon {
    width: 100px;
    height: 100px;
  }

  .memory-card .card.-front > .icon {
    position: absolute;
    transform: translateY(-12px);
  }
`;

  $head.insertBefore($style, null);

  return ({ src, alt }) => `
  <div class="memory-card" onClick="handleClick(this)">
    <article class="card -front">
      <img
        src="${src}"
        alt="${alt}"
        class='icon'
      />
    </article>
    <article class="card">
      <img
        src="img/icon-collabcode.png"
        alt="Gueio, mascote da CollabCode"
        class='icon'
      />
    </article>
  </div>
`;
};

const handleClick = $component => {
  let $activeMemoryCards, score;
  if (!$component.classList.contains('-active')) {

    $component.classList.add("-active");
    $activeMemoryCards = $cardWrapper.querySelectorAll('.memory-card.-active');
    if ($activeMemoryCards.length === 2) {
      if (
        $activeMemoryCards[0].querySelector('.-front .icon').getAttribute('src') ===
        $activeMemoryCards[1].querySelector('.-front .icon').getAttribute('src')
        ) {
          $activeMemoryCards.forEach(function( $memoryCard ) {
            $memoryCard.classList.add('-score');
            $memoryCard.classList.remove('-active');
          });
          score = $cardWrapper.querySelectorAll('.-score').length/2;
          console.log(score);
        } else {
          setTimeout(function () {
            $activeMemoryCards.forEach($memoryCard => {
              $memoryCard.classList.remove('-active');
            });
          }, 1500);
        };
    };
  };
};
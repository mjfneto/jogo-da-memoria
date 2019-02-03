const createMemoryCard = ({ nameClass, src, alt }) => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      position: relative;
      cursor: pointer;
    }

    .memory-card.-front {
      background-color: #fff;
    }

    .memory-card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
      transform: translateY(5px);
    }

    .memory-card > .icon {
      width: 100px;
      height: 100px;
    }

    .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;

  $head.insertBefore($style, null);

  return `
  <article class="memory-card ${nameClass}">
    <img
      src="${src}"
      alt="${alt}"
      class='icon'
      onClick="handleClick()"
    />
  </article>
`

};

const handleClick = () => console.log("ae");
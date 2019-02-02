const createMemoryCard = nameClass  => `
  <article class="memory-card ${nameClass}">
    <img
      src="${
        nameClass === "-front"
          ? "img/icon-c.png"
          : "img/icon-collabcode.png"
      }"
      alt="${
        nameClass === "-front"
          ? "Ícone de um livro sobre C++"
          : "Gueio, mascote da CollabCode"
      }"
      class='icon'
      onClick="handleClick()"
    />
  </article>
`;

// const createMemoryCardFront = () => `
//     <article class="memory-card -front">
//       <img src='img/icon-c.png'
//           alt='Ícone de um livro sobre a linguagem C++'
//           class='icon'
//           onClick="handleClick()"
//       />
//     </article>
//   `

const handleClick = () => console.log("ae");
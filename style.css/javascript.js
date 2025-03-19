 let currentId = 1;

const emojis = ["🔮", "🌟", "🔥", "💎", "🌈", "✨", "🎯", "🚀"];

function generateSticker() {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  return {
    fid: currentId++, 
    emoji: randomEmoji,
    title: `Sticker ${currentId}`,
    description: `This is the description for sticker ${currentId}.`,
    documentation: `https://example.com/sticker${currentId}`
  };
}

function addToTable(data) {
  document.getElementById("myTable").innerHTML += `
    <tr>
      <td>${data.fid}</td>
      <td>${data.emoji}</td>
      <td>${data.title}</td>
      <td>${data.description}</td>
      <td><a href="${data.documentation}" target="_blank">Link</a></td>
    </tr>
  `;
}

document.getElementById("addButton").addEventListener("click", () => {
  const newSticker = generateSticker();
  addToTable(newSticker);
});
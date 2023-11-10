const searchInput = document.getElementById('search-input');
const emojiContainer = document.getElementById('e-container');
const list = [...emojiList];

// console.log(list)
let isMatched =  "";
const filterEmoji = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue)
        const newData = list.filter(item => item.aliases.includes(inputValue) || item.description.includes(inputValue));
        createEmji(newData);
        console.log(newData)
    
}

const splitWord = (word) => {
    const newWord = word[0].replace(/_/gi , " ");
    return newWord;
}

const createEmji = (data) => {
    let html =  data.map(item => {
    const {emoji , aliases , description} = item;
    // const a = splitWord(aliases);
    return `<div class="emoji-parent">
            <ul>
            <li class="imogi">${emoji}  <sapn class="aliases">${splitWord(aliases)}</span></li>
            <li class="description">${description}</li>
            </ul>
        </div>`
    }).join("");

    emojiContainer.innerHTML = html;
}


createEmji(list);
searchInput.addEventListener('keyup' , filterEmoji)
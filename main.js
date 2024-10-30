// function card(name, description, image){
//     this.name = name;
//     this.description = description;
//     this.image = image;
// }

// let deck = [
//     new card('Temperance', 'The Temperance card embodies a sense of balance, harmony, and patience. It signifies that your life is flowing smoothly and you\'ve achieved inner peace. This card encourages you to maintain your composure, especially in challenging situations, and keep your emotions in check.',''),
//     new card('The Lovers', 'The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners.',''),
//     new card('The High Priestess', 'High Priestess is a card of mystery, stillness and passivity. This card suggests that it is time to retreat and reflect upon the situation and trust your inner instincts to guide you through it. Things around you are not what they appear to be right now.',''),
//     new card('Three of Swords', 'The Three of Swords tarot card represents a period of emotional pain, heartbreak, and disappointment. It can also indicate unexpected events that cause intense feelings of sadness and pain. ',''),
//     new card('Three of Pentacles', 'The Three of Pentacles stands for education, research, and apprenticeship. It represents effort, resolves, commitment, and dedication, so whatever you are undertaking right now is likely to have your whole attention.',''),
//     new card('The Devil', 'The Devil card suggests feelings of obsession, addiction, and entrapment. It can signify a sense of helplessness due to external forces or circumstances. However, it reminds you that you\'re responsible for your actions.',''),
//     new card('King of Wands', 'The King of Wands represents the qualities of a visionary leader who possesses the ability to inspire and motivate others. In the upright position, this card signifies confidence, determination, and the power to manifest your goals',''),
//     new card('Nine of Swords', 'The Nine of Wands encourages you to keep pushing – you are so close to the finish line. Even if you want to give up, this is your final challenge before you reach your goal, so don\'t let go of your hopes and dreams when you are so close to making them a reality.',''),
// ];

// // This part provides logic and handles draw button and rendering
// import { fetchTarotCard } from "./api.js";

// const drawButton = document.getElementById("draw");
// const display = document.getElementById("display");

// async function drawCard() {
//     const card = await fetchTarotCard();
//     if (card) {
//         display.innerHTML = `
//             <h2>${card.name}</h2>
//             <p>${card.meaning}</p>
//             <img src="${card.image}" alt="${card.name}">
//         `;
//     } else {
//         display.innerHTML = "<p>Could not fetch card. Try again later.</p>";
//     }
// }

// drawButton.addEventListener("click", drawCard);

// finalized code

// main.js: Handles fetching and displaying a random tarot card GIF

const BASE_URL = "https://api.giphy.com/v1/gifs"; 
const API_KEY = 'SarYYW1Cg09FVzzgaGrt0LxVeqzusOhT'; 

async function fetchTarotCard() {
    try {
        const response = await fetch(`${BASE_URL}/random?api_key=${API_KEY}&tag=tarot card&rating=g`);
        
        if (!response.ok) throw new Error("Failed to fetch card");

        const data = await response.json();
        return data.data; 
    } catch (error) {
        console.error("Error fetching card:", error);
        return null;
    }
}

const drawButton = document.getElementById("draw"); 
const display = document.getElementById("display"); 

async function drawCard() {
    const card = await fetchTarotCard();
    
    if (card) {
        display.innerHTML = `
            <h2>The ${card.title} Card</h2>
            <img src="${card.images.fixed_height.url}" alt="${card.title}">
        `;
    } else {
        display.innerHTML = "<p>Could not fetch card. Try again later.</p>";
    }
}

drawButton.addEventListener("click", drawCard); 

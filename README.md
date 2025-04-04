# Rock-Paper-Scissors-Game

A responsive web-based Rock-Paper-Scissors game with advanced statistics tracking, built with HTML, CSS, and JavaScript.

![Rock-Paper-Scissors Screenshot](https://github.com/user-attachments/assets/ed1468c5-7cb8-4bc5-a61a-8d6802fe8f2f)

## Features ✨

- **Classic gameplay**: Play against the computer with rock, paper, or scissors
- **Real-time statistics**:
  - Win/loss/tie percentages
  - Most frequent choice tracking
  - Last 5 game results
- **Visual feedback**:
  - Player vs computer choice display
  - Color-coded UI sections
- **Additional features**:
  - Round counter
  - Game timer
  - Reset functionality
- **Accessibility**:
  - ARIA labels for buttons
  - Responsive design

## How to Play 🎮

1. Click on ✊ (Rock), ✋ (Paper), or ✌ (Scissors) to make your choice
2. The computer will randomly select its move
3. View results immediately:
   - Your score vs computer score
   - Last game outcome
   - Updated statistics
4. Track your performance with:
   - Win/loss/tie percentages
   - Most frequent choice
   - Game history

## Technical Details ⚙️

### File Structure
/rock-paper-scissors/
├── index.html # Main HTML structure
├── styles.css # All styling
└── script.js # Game logic
### Technologies Used
- **HTML5**: Game structure and semantics
- **CSS3**: Flexbox layout, responsive design
- **JavaScript**:
  - Game state management
  - DOM manipulation
  - Timer functionality
  - Statistical calculations

### Key Functions
- `determineWinner()`: Compares player/computer choices
- `Statistics()`: Calculates win/loss/tie percentages
- `FreqChoice()`: Tracks most frequent player choice
- `Last_5_Games()`: Maintains game history
- `startTimer()`: Game duration tracking
- `resetGame()`: Resets all game state

## Installation 💻

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rock-paper-scissors.git
2. Open index.html in any modern browser

Customization 🎨
Changing Colors
Modify color variables in styles.css:
`.game-container { background-color: #eb5e28; }`
`.score-container { background-color: #a1c349; }`
/* etc. */

Contributing 🤝
Pull requests are welcome! For major changes, please open an issue first.

Made with ❤️ by George Kapelos

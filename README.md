# 🎮 Pac-Man Game

A classic Pac-Man game built with HTML5 Canvas and JavaScript. Play it directly in your browser!

![Pac-Man Game](https://img.shields.io/badge/Game-Pac--Man-yellow?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange?style=for-the-badge&logo=html5)

## 🚀 How to Run

1. **Simply open the `index.html` file in your web browser**
   - Double-click on `index.html`, or
   - Right-click and select "Open with" your preferred browser (Chrome, Firefox, Safari, etc.)

2. **Alternative: Use a local server (optional)**
   ```bash
   # If you have Python installed:
   python -m http.server 8000
   # Then open http://localhost:8000 in your browser
   ```

## 🎯 How to Play

### Objective
- Control Pac-Man to eat all the pellets in the maze
- Avoid the ghosts or eat them when powered up
- Get the highest score possible!

### Controls
- **Arrow Keys**: Move Pac-Man (Up, Down, Left, Right)
- **Spacebar**: Start game / Pause
- **Start Button**: Begin the game
- **Pause Button**: Pause/Resume the game
- **Restart Button**: Restart from the beginning

### Scoring
- 🔵 **Small Pellet**: 10 points
- ⚡ **Power Pellet**: 50 points
- 👻 **Ghost (when vulnerable)**: 200 points

### Game Mechanics

1. **Pellets**: Collect all small pellets to win the game
2. **Power Pellets**: Large pellets in the corners that allow you to eat ghosts for 7 seconds
3. **Ghosts**: Four ghosts with different colors that chase you
   - Red Ghost: Aggressive chaser
   - Pink Ghost: Tries to ambush
   - Cyan Ghost: Patrols and chases
   - Orange Ghost: Unpredictable behavior
4. **Lives**: You start with 3 lives. Losing all lives ends the game
5. **High Score**: Your best score is saved in the browser

## 🎨 Features

- ✨ Beautiful modern UI with glowing effects
- 🎮 Smooth animations and gameplay
- 👻 Four ghosts with different AI behaviors
- ⚡ Power-up mode where ghosts become vulnerable
- 💾 High score persistence using localStorage
- 📱 Responsive design (works on different screen sizes)
- 🎯 Classic Pac-Man maze layout
- 🔄 Tunnel warping on sides of the maze

## 🛠️ Technologies Used

- **HTML5 Canvas**: For rendering the game graphics
- **CSS3**: Modern styling with gradients and animations
- **Vanilla JavaScript**: Game logic and mechanics
- **localStorage**: Saving high scores

## 🎓 Game Tips

1. Plan your route to collect pellets efficiently
2. Save power pellets for when you're surrounded by ghosts
3. Use the tunnels on the sides to escape from ghosts
4. Learn ghost patterns to avoid them better
5. Try to eat all ghosts during power mode for maximum points

## 📝 Code Structure

```
Pac-Man-Game/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── game.js         # Game logic and mechanics
└── README.md       # This file
```

## 🎪 Game States

- **Start**: Initial screen with instructions
- **Playing**: Active gameplay
- **Paused**: Game paused (press Space or click Start to resume)
- **Game Over**: When all lives are lost
- **Win**: When all pellets are collected

## 🐛 Browser Compatibility

This game works on all modern browsers:
- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Safari
- ✅ Microsoft Edge
- ✅ Opera

## 📜 License

This is a fan-made version of the classic Pac-Man game, created for educational purposes.

## 🎉 Enjoy the Game!

Have fun playing Pac-Man! Try to beat your high score! 👾

---

Made with ❤️ using HTML5, CSS3, and JavaScript


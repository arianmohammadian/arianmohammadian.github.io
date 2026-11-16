# Personal Portfolio — Arian Mohammadian

My personal portfolio website, built to showcase my software engineering projects, technical background, and interests in algorithms, artificial intelligence, and optimization.

**Live Website:** [arianmohammadian.github.io](https://arianmohammadian.github.io/)

**GitHub Profile:** [github.com/arianmohammadian](https://github.com/arianmohammadian)

## Overview

I am a third-year Computer Engineering student at the **Facultat d'Informàtica de Barcelona (FIB), Universitat Politècnica de Catalunya (UPC)**.

This portfolio serves as a central place to present my projects, highlight my technical skills, and connect with potential collaborators, clients, and employers.

The website was developed from scratch using **HTML5, CSS3, and vanilla JavaScript**, without frontend frameworks or external UI libraries.

Beyond presenting my work, this project has been an opportunity to explore fundamental web development concepts, including semantic HTML, responsive layouts, DOM manipulation, asynchronous JavaScript, and browser-based animations.

## Features

### Responsive Interface

- Modern dark-themed design with blue accents.
- Responsive layouts using CSS Flexbox, Grid, and media queries.
- Navigation between the main sections of the website.
- Interactive project cards with direct GitHub links.
- Contact section with an email shortcut.

### Interactive BFS Pathfinding Visualizer

The homepage features an interactive **Breadth-First Search (BFS)** visualization, demonstrating a fundamental graph traversal algorithm.

The visualizer represents a grid as an implicit, unweighted graph, where each traversable cell corresponds to a vertex and adjacent cells are connected by edges.

When the user clicks **Run BFS**, the application:

1. Initializes a queue containing the starting cell.
2. Explores neighboring cells in breadth-first order.
3. Tracks visited cells and stores their predecessors.
4. Stops when the destination is reached or no more cells can be explored.
5. Reconstructs a shortest path using the predecessor information.
6. Animates the exploration and highlights the resulting path.

The visualization distinguishes between the starting point, destination, obstacles, explored cells, and shortest path.

**Algorithmic complexity:**

- Time: `O(V + E)`
- Auxiliary space: `O(V)`

Where `V` is the number of traversable cells and `E` is the number of adjacency connections.

Because the grid uses unweighted edges, BFS guarantees a shortest path in terms of the number of movements, provided a path exists.

## Featured Projects

The portfolio highlights selected repositories from my GitHub profile.

| Project | Description | Technologies |
|---|---|---|
| [Poker AI Lab](https://github.com/arianmohammadian/poker-ai-lab) | Texas Hold'em engine featuring equity calculations, autonomous agents, and self-play learning. | C++20, AI, Algorithms |
| [Strategy Game Agent](https://github.com/arianmohammadian/cpp-strategy-game-agent) | Autonomous agent for a 2D strategy game using pathfinding algorithms and heuristics. | C++, BFS, Heuristics |
| [Energy Optimization AI](https://github.com/arianmohammadian/energy-optimization-ai) | Energy optimization using hill climbing and simulated annealing. | Java, Optimization |
| [Criminal Management System](https://github.com/arianmohammadian/criminal-management-system) | Java-based academic project featuring domain modeling, design patterns, and mission assignment algorithms. | Java, OOP, Design Patterns |

Each project links directly to its corresponding GitHub repository.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and content |
| CSS3 | Layouts, styling, transitions, and responsive design |
| JavaScript (ES6+) | DOM manipulation, BFS implementation, and animations |
| Git & GitHub | Version control and source code hosting |
| GitHub Pages | Static website deployment |

The website intentionally avoids frontend frameworks at this stage, keeping the architecture lightweight and focused on fundamental web technologies.

## Project Structure

```text
arianmohammadian.github.io/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
├── README.md
└── .gitignore
```

**Main files:**

- `index.html` — Website content and semantic structure.
- `css/styles.css` — Global styles, layouts, components, and responsive rules.
- `js/main.js` — Interactive BFS visualizer and JavaScript logic.
- `assets/` — Directory reserved for images and visual resources.
- `README.md` — Project documentation.

## Running Locally

No Node.js installation, package manager, or build process is required.

### 1. Clone the repository

```bash
git clone git@github.com:arianmohammadian/arianmohammadian.github.io.git
cd arianmohammadian.github.io
```

Alternatively, clone using HTTPS:

```bash
git clone https://github.com/arianmohammadian/arianmohammadian.github.io.git
cd arianmohammadian.github.io
```

### 2. Start a local server

Using Python 3:

```bash
python3 -m http.server 8000
```

### 3. Open the website

Visit:

[http://localhost:8000](http://localhost:8000)

Changes to HTML, CSS, and JavaScript files can be viewed by saving the files and refreshing the browser.

To stop the server, press `Ctrl + C`.

## Deployment

The website is hosted through **GitHub Pages**.

Deployment is configured from the repository's `main` branch, using the root directory as the publishing source.

Updates can be published through the standard Git workflow:

```bash
git add .
git commit -m "Describe the changes"
git push origin main
```

Once GitHub Pages finishes deploying the changes, the updated website becomes available at:

**https://arianmohammadian.github.io/**

## Development Roadmap

The initial version focuses on establishing a complete, lightweight personal website with an interactive algorithm demonstration.

Potential future improvements include:

- Enhanced project cards with screenshots and technical case studies.
- Interactive controls for modifying the BFS grid and its obstacles.
- Additional algorithm visualizations.
- Improved accessibility and reduced-motion behavior.
- Expanded professional experience and project information.
- A custom domain.

These enhancements are planned possibilities rather than features of the current release.

## About the Developer

**Arian Mohammadian**

Computer Engineering student at FIB-UPC, based in Barcelona, Spain.

My main technical interests include:

- Algorithms and data structures
- Artificial intelligence and autonomous agents
- Optimization and heuristic search
- C++ and Java development
- Software engineering and system design

I also have professional experience in AI training, data evaluation, and private tutoring.

I am interested in software engineering opportunities, technical collaborations, and projects involving challenging computational problems.

## Contact

**Website:** [arianmohammadian.github.io](https://arianmohammadian.github.io/)

**GitHub:** [@arianmohammadian](https://github.com/arianmohammadian)

**Email:** [arianmmbusiness@gmail.com](mailto:arianmmbusiness@gmail.com)

---

Built from scratch with HTML, CSS, and JavaScript.

© 2026 Arian Mohammadian.
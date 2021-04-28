# Phasmophobia Helper
Live Link: https://phasmophobia-helper.herokuapp.com/


## ✏️ Description
This is a simple companion webapp for [Phasmophobia](https://store.steampowered.com/app/739630/Phasmophobia/) that helps you and your team track the ghost name, its behaviour and the objectives. It also helps you decide what kind of ghost you're dealing with. Also works with Speech Recognition (only available in Chrome/Chromium browsers as of 2021).

![Phasmophobia Helper Screenshot](https://i.ibb.co/M6RKCjC/Screenshot-2021-04-27-at-23-20-24.png)


## 📕 Table of Contents
<table>
    <tr>
        <td align="center"><a href="#-features">✨ Features<a></td>
        <td align="center"><a href="#%EF%B8%8F-installation">⚙️ Installation<a></td>
        <td align="center"><a href="#%EF%B8%8F-concepts">🏗️ Concepts<a></td>
        <td align="center"><a href="#-todo-list">📃 Todo list<a></td>
        <td align="center"><a href="#-tech-stack">⭐ Tech Stack<a></td>
        <td align="center"><a href="#-packages">📦 Packages<a></td>
        <td align="center"><a href="#-license">🔐 License<a></td>
    </tr>
</table>


## ✨ Features
- Easy tracking of ghost name, response & objectives
- Automatically find the correct ghost
- Immersive Voice Commands as an alternative input


## ⚙️ Installation
> Looking to just use this webapp? Go to the Live Link here: https://phasmophobia-helper.herokuapp.com/

### Download Repo
1. Clone this Repo locally
```
git clone https://github.com/SjorsWijsman/real-time-web-2021/
```

2. With Node & NPM [download here](https://nodejs.org/en/download/) installed, run the following command to install dependencies:
```
npm install
```

### Setup Database
3. Setup a MongoDB database, rename the `.env-example` file to `.env` and fill in the credentials.

### Start Server
4. Build & Start a local server with:
```
npm start
```

5. Or start a dev environment (with automatic local server updates on code changes) with:
```
npm dev
```


## 🏗️ Concepts
For the [Real Time Web course](https://github.com/cmda-minor-web/real-time-web-2021) I started with 3 concepts to develop during the course. I started with the first concept (Gameplaylists), still visible on the `old` branch of this repo. Eventually I got demotivated by this concept (not enough challenge) and switched to the Phasmophobia Helper concept.

<details>
<summary>3 Concepts</summary>
    
| Gameplaylists | Phasmophobia Book | Poker |
|--|--|--|
| ![Gameplaylists](https://i.ibb.co/2jMS3tW/Gameplaylists.png) | ![Phasmophobia Helper](https://i.ibb.co/sFdS873/Phasmophobia-Book.png) | ![Poker](https://i.ibb.co/ZHW9R7r/Poker.png)

</details>


## 📃 Todo list
- [x] Reimplement old [Phasmophobia Helper Svelte code](https://github.com/SjorsWijsman/phasmophobia-helper) 
- [x] Implement static site generation with Snowpack
- [x] Setup server & Serve files wtith Express
- [x] Implement basic Socket functionalities
- [x] Add Socket rooms with ingame lobby codes
- [x] Improve Socket stability
- [x] Add better feedback for joining lobbies
- [x] Prevent bottom of page from jumping around when reducing possible ghost amount


## ⭐ Tech Stack
### Data Life Cycle
![Data Life Cycle Diagram](https://i.ibb.co/Mg8s0cY/rtw-life-cycle.png)

### Package: Svelte
Svelte Docs: https://svelte.dev/docs

Svelte is a front-end compiler that makes writing front-end code a lot more fun. Absolutely recommended to use for any project.

### Package: Express
Express Docs: https://expressjs.com/

Express is a web framework for Node that allows you to run a simple back-end server.

### Package: Snowpack
Snowpack Docs: https://www.snowpack.dev/

Snowpack is a front-end build tool, used in this project to compile the Svelte code to a static site.

### Package: Socket.io
Socket.io Docs: https://socket.io/

Socket.io allows you to create realtime and bidirectional communication events between the server and connected clients.

## 📦 Other Packages
### nodemon
Nodemon Docs: https://www.npmjs.com/package/nodemon

Nodemon watches the files in a working directory and restarts the server when it notices a change, allowing for a seamless dev experience.

### concurrently
Concurrently Docs: https://www.npmjs.com/package/concurrently

Concurrently allows multiple npm commands to be ran 'concurrently' (makes sense, right?)


## 🔐 License
[MIT License.](https://github.com/SjorsWijsman/phasmophobia-helper/blob/main/LICENSE)

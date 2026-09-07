/* ==========================================
   FRUITYY'S LITTLE GAME 🍓
   ========================================== */


/* ==========================================
   100 DIFFERENT MESSAGES
   ========================================== */

const messages = [

    "You are capable of beautiful things. Never forget that. ❤️",

    "You don't have to have everything figured out. Just keep moving. 🌸",

    "Believe in the person you are becoming. ✨",

    "Your little efforts today can become something beautiful tomorrow. 🍓",

    "You deserve to be proud of how far you've come. ❤️",

    "Don't compare your journey with anyone else's. Yours is yours. 🌷",

    "Some days are difficult. That doesn't mean you are failing.",

    "You are stronger than the problems that make you doubt yourself. 💪",

    "Keep going. Your future self will thank you. ✨",

    "You have more potential than you sometimes realize.",

    "It's okay to move slowly. Just don't stop believing in yourself. 🌸",

    "Your smile makes the world a little brighter. ❤️",

    "You don't need permission to dream big.",

    "One day you'll look back and be proud that you didn't give up.",

    "You are allowed to become someone completely amazing. ✨",

    "Take a breath. You've got this. ❤️",

    "Your story is still being written. Make it beautiful. 📖",

    "Don't let one bad day convince you that life is bad.",

    "You deserve happiness without having to earn it first. 🌷",

    "Keep your heart kind and your dreams big.",

    "You can do difficult things, Fruityy. I believe that. ❤️",

    "Every small step counts.",

    "You are not behind. You are on your own timeline.",

    "There is something beautiful waiting beyond today's struggle.",

    "Never underestimate what consistency can do.",

    "Your future has possibilities you haven't even imagined yet. ✨",

    "Keep learning. Keep growing. Keep smiling.",

    "You don't have to be perfect to be wonderful.",

    "Your best days haven't happened yet. ❤️",

    "Be gentle with yourself today.",

    "You are doing better than you think.",

    "Don't give up on a dream just because it takes time.",

    "Your courage is bigger than your fear.",

    "Sometimes the strongest thing you can do is simply keep going.",

    "You have survived every difficult day you've faced so far.",

    "That's something worth remembering. ❤️",

    "A beautiful future is built from ordinary little moments.",

    "You deserve people who genuinely celebrate you.",

    "Keep choosing yourself and your happiness.",

    "You are more than your mistakes.",

    "Your mistakes don't define you. How you grow from them does.",

    "The world needs your unique kind of light. ✨",

    "Never shrink yourself just to make someone else comfortable.",

    "Dream without being afraid of how big the dream is.",

    "You can start again whenever you need to.",

    "Tomorrow is another opportunity.",

    "Your life doesn't need to look like anyone else's.",

    "You are allowed to change your mind and choose a new path.",

    "Keep going, even if today your steps are tiny.",

    "Something good can come from the chapter you're in right now.",

    "Your kindness is one of your strengths. 🌸",

    "Don't forget to celebrate your small victories.",

    "You don't need to know the entire road. Just take the next step.",

    "Your dreams deserve your patience.",

    "There is no deadline for becoming yourself.",

    "You are worthy of good things.",

    "You deserve moments that make you genuinely happy. ❤️",

    "Keep that beautiful curiosity alive.",

    "Never stop discovering what you're capable of.",

    "Your future self is cheering for you.",

    "One brave decision can change an entire chapter.",

    "Don't be afraid to outgrow the person you used to be.",

    "Growth can be uncomfortable, but it is beautiful.",

    "You are becoming stronger with every experience.",

    "Keep your head up, Fruityy. 🌷",

    "There is always another chance to try again.",

    "You don't have to prove your worth to anyone.",

    "Your happiness matters.",

    "Your dreams matter.",

    "Your feelings matter.",

    "And most importantly, you matter. ❤️",

    "Don't forget how much you've already accomplished.",

    "You have come further than the version of you from years ago could imagine.",

    "Be proud of that girl.",

    "Keep becoming the person you would be proud to meet.",

    "Choose courage over fear whenever you can.",

    "A little progress is still progress.",

    "You can handle more than you think.",

    "Your potential has no fixed limit.",

    "Keep your standards high and your heart soft.",

    "The right things take time.",

    "Beautiful things often grow quietly.",

    "Trust yourself a little more.",

    "Your intuition deserves to be heard.",

    "You don't have to rush your life.",

    "Enjoy the journey too.",

    "There will be days when everything makes sense. Be patient.",

    "Keep going until you surprise yourself.",

    "You are capable of creating a life you genuinely love.",

    "Never stop dreaming about better days.",

    "You have a beautiful life ahead of you.",

    "Protect your peace.",

    "Choose people who make you feel valued.",

    "Choose dreams that make you excited to wake up.",

    "Choose happiness whenever you can.",

    "And choose yourself when you need to. ❤️",

    "One day, all these little efforts will make sense.",

    "Keep your beautiful spirit alive.",

    "You make ordinary moments feel a little more special.",

    "Whatever happens, don't stop believing in yourself.",

    "Fruityy, this little message is just a reminder:",

    "You are doing okay. Take your time. 🌸",

    "Keep going. Keep growing. Keep smiling. ❤️",

    "And never forget that someone is always cheering for you. ✨"

];


/* ==========================================
   ELEMENTS
   ========================================== */

const homeScreen =
    document.getElementById("homeScreen");

const gameScreen =
    document.getElementById("gameScreen");

const winScreen =
    document.getElementById("winScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const birthdayFinalScreen =
    document.getElementById("birthdayFinalScreen");


const dailyMessage =
    document.getElementById("dailyMessage");

const winMessage =
    document.getElementById("winMessage");


const startButton =
    document.getElementById("startButton");

const playAgainButton =
    document.getElementById("playAgainButton");

const homeButton =
    document.getElementById("homeButton");


const birthdayStartButton =
    document.getElementById(
        "birthdayStartButton"
    );


const birthdayGameButton =
    document.getElementById(
        "birthdayGameButton"
    );


const gameArea =
    document.getElementById("gameArea");


const scoreElement =
    document.getElementById("score");


const highScoreElement =
    document.getElementById("highScore");


const finalScoreElement =
    document.getElementById("finalScore");


const comboElement =
    document.getElementById("combo");


const gameHint =
    document.getElementById("gameHint");


const missesElement =
    document.getElementById("misses");


/* ==========================================
   GAME SETTINGS
   ========================================== */

const MAX_MISSES = 4;


/* ==========================================
   GAME VARIABLES
   ========================================== */

let score = 0;

let misses = 0;

let combo = 0;

let gameTimer = null;

let isGameRunning = false;


/*
 * Get saved high score.
 */

let highScore =
    Number(
        localStorage.getItem(
            "fruityHighScore"
        ) || 0
    );


/* ==========================================
   SCREEN MANAGEMENT
   ========================================== */

function showScreen(screen) {

    const screens =
        document.querySelectorAll(
            ".screen"
        );


    screens.forEach(
        function (item) {

            item.classList.remove(
                "active"
            );

        }
    );


    screen.classList.add(
        "active"
    );
}


/* ==========================================
   RANDOM MESSAGE SYSTEM
   ========================================== */

function getRandomMessage() {

    /*
     * Get previously used message indexes.
     */

    let usedMessages =
        JSON.parse(
            localStorage.getItem(
                "fruityUsedMessages"
            ) || "[]"
        );


    /*
     * Once all messages have been used,
     * start a fresh cycle.
     */

    if (
        usedMessages.length >=
        messages.length
    ) {

        usedMessages = [];

    }


    /*
     * Find messages that haven't
     * been shown yet.
     */

    const availableIndexes = [];


    for (
        let i = 0;
        i < messages.length;
        i++
    ) {

        if (
            !usedMessages.includes(i)
        ) {

            availableIndexes.push(i);

        }

    }


    /*
     * Pick a random unused message.
     */

    const randomPosition =
        Math.floor(
            Math.random() *
            availableIndexes.length
        );


    const selectedIndex =
        availableIndexes[
            randomPosition
        ];


    /*
     * Remember it.
     */

    usedMessages.push(
        selectedIndex
    );


    localStorage.setItem(
        "fruityUsedMessages",
        JSON.stringify(
            usedMessages
        )
    );


    return messages[
        selectedIndex
    ];
}


/* ==========================================
   LOAD HOME MESSAGE
   ========================================== */

function loadMessage() {

    dailyMessage.textContent =
        getRandomMessage();

}


/* ==========================================
   BIRTHDAY CHECK
   ========================================== */

function isBirthday() {

    const today =
        new Date();


    /*
     * JavaScript months start from 0.
     *
     * October = 9
     *
     * Therefore:
     *
     * October 3 = month 9 + day 3
     */

    return (
        today.getMonth() === 9 &&
        today.getDate() === 3
    );

}


/* ==========================================
   UPDATE MISSES
   ========================================== */

function updateMisses() {

    let hearts = "";


    for (
        let i = 0;
        i < MAX_MISSES;
        i++
    ) {

        if (
            i < misses
        ) {

            hearts += "🤍 ";

        } else {

            hearts += "❤️ ";

        }

    }


    missesElement.textContent =
        hearts;
}


/* ==========================================
   START GAME
   ========================================== */

function startGame() {

    /*
     * Reset game.
     */

    score = 0;

    misses = 0;

    combo = 0;

    isGameRunning = true;


    /*
     * Reset UI.
     */

    scoreElement.textContent =
        score;


    highScoreElement.textContent =
        highScore;


    comboElement.textContent =
        "Combo ×0";


    updateMisses();


    /*
     * Clear old hearts.
     */

    gameArea.innerHTML = "";


    /*
     * Put the hint back.
     */

    gameArea.appendChild(
        gameHint
    );


    gameHint.style.opacity =
        "1";


    /*
     * Show game screen.
     */

    showScreen(
        gameScreen
    );


    /*
     * Create first heart immediately.
     */

    createHeart();


    /*
     * Continue creating hearts.
     */

    gameTimer =
        setInterval(
            createHeart,
            750
        );

}


/* ==========================================
   CREATE FALLING HEART
   ========================================== */

function createHeart() {

    if (
        !isGameRunning
    ) {

        return;

    }


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "falling-heart";


    /*
     * Random heart type.
     */

    const heartTypes = [

        "❤️",
        "💗",
        "💕",
        "💖",
        "💓",
        "💘"

    ];


    const randomHeart =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.textContent =
        randomHeart;


    /*
     * Random horizontal position.
     */

    const maxPosition =
        gameArea.clientWidth - 50;


    const randomPosition =
        Math.random() *
        Math.max(
            10,
            maxPosition
        );


    heart.style.left =
        Math.max(
            5,
            randomPosition
        ) + "px";


    /*
     * Random falling speed.
     */

    const duration =
        2.3 +
        Math.random() * 1.4;


    heart.style.animationDuration =
        duration + "s";


    /*
     * IMPORTANT:
     *
     * pointerdown works with:
     *
     * Mobile touch
     * Mouse
     * Stylus
     */

    heart.addEventListener(
        "pointerdown",
        catchHeart
    );


    /*
     * Add heart to game.
     */

    gameArea.appendChild(
        heart
    );


    /*
     * Hide game instruction.
     */

    gameHint.style.opacity =
        "0";


    /*
     * Wait until heart reaches
     * bottom of game area.
     */

    setTimeout(
        function () {

            /*
             * If heart still exists,
             * player missed it.
             */

            if (
                heart.parentElement &&
                heart.dataset.caught !==
                    "true"
            ) {

                heart.remove();


                /*
                 * Increase miss count.
                 */

                misses++;


                /*
                 * Reset combo.
                 */

                combo = 0;

                comboElement.textContent =
                    "Combo ×0";


                /*
                 * Update UI.
                 */

                updateMisses();


                /*
                 * Four misses =
                 * Game Over.
                 */

                if (
                    misses >=
                    MAX_MISSES
                ) {

                    stopGame();

                }

            }

        },
        duration * 1000
    );

}


/* ==========================================
   CATCH HEART
   ========================================== */

function catchHeart(event) {

    event.preventDefault();

    event.stopPropagation();


    if (
        !isGameRunning
    ) {

        return;

    }


    const heart =
        event.currentTarget;


    /*
     * Prevent double tapping
     * the same heart.
     */

    if (
        heart.dataset.caught ===
        "true"
    ) {

        return;

    }


    heart.dataset.caught =
        "true";


    /*
     * Increase score.
     */

    score++;


    combo++;


    /*
     * Update score display.
     */

    scoreElement.textContent =
        score;


    comboElement.textContent =
        "Combo ×" + combo;


    /*
     * Check high score.
     */

    if (
        score > highScore
    ) {

        highScore =
            score;


        highScoreElement.textContent =
            highScore;


        localStorage.setItem(
            "fruityHighScore",
            highScore
        );

    }


    /*
     * +1 floating animation.
     */

    showScorePop(
        heart
    );


    /*
     * Heart catch animation.
     */

    heart.classList.add(
        "heart-caught"
    );


    /*
     * Combo animation.
     */

    comboElement.style.transform =
        "scale(1.25)";


    setTimeout(
        function () {

            comboElement.style.transform =
                "scale(1)";

        },
        180
    );


    /*
     * Remove heart after animation.
     */

    setTimeout(
        function () {

            if (
                heart.parentElement
            ) {

                heart.remove();

            }

        },
        350
    );

}


/* ==========================================
   SCORE POP ANIMATION
   ========================================== */

function showScorePop(
    heart
) {

    const pop =
        document.createElement(
            "div"
        );


    pop.className =
        "score-pop";


    pop.textContent =
        "+1 ❤️";


    pop.style.left =
        heart.offsetLeft + "px";


    pop.style.top =
        heart.offsetTop + "px";


    gameArea.appendChild(
        pop
    );


    setTimeout(
        function () {

            if (
                pop.parentElement
            ) {

                pop.remove();

            }

        },
        700
    );

}


/* ==========================================
   GAME OVER
   ========================================== */

function stopGame() {

    /*
     * Don't run twice.
     */

    if (
        !isGameRunning
    ) {

        return;

    }


    isGameRunning =
        false;


    /*
     * Stop creating hearts.
     */

    clearInterval(
        gameTimer
    );


    gameTimer =
        null;


    /*
     * Remove all remaining hearts.
     */

    gameArea.innerHTML = "";


    /*
     * Show final score.
     */

    finalScoreElement.textContent =
        score;


    /*
     * Generate a message based
     * on the score.
     */

    winMessage.textContent =
        getResultMessage();


    /*
     * Show result screen.
     */

    showScreen(
        winScreen
    );

}


/* ==========================================
   RESULT MESSAGE
   ========================================== */

function getResultMessage() {

    if (
        score === 0
    ) {

        return (
            "Even if you didn't catch one, " +
            "you still deserve a smile today. ❤️"
        );

    }


    if (
        score < 10
    ) {

        return (
            "A small score, but hey... " +
            "you showed up and played. " +
            "That's already something. 🌸"
        );

    }


    if (
        score < 25
    ) {

        return (
            "Not bad, Fruityy! " +
            "Keep going. Little by little, " +
            "you get better. ✨"
        );

    }


    if (
        score < 50
    ) {

        return (
            "Okayyy Fruityy! " +
            "Now we're talking. " +
            "Look at you go! ❤️"
        );

    }


    if (
        score < 75
    ) {

        return (
            "Whoa! Fruityy is getting serious now. " +
            "🔥❤️"
        );

    }


    if (
        score < 100
    ) {

        return (
            "Almost at 100! " +
            "Someone is seriously good at this. " +
            "😌🍓"
        );

    }


    if (
        score < 150
    ) {

        return (
            "100+! Fruityy has officially entered " +
            "the pro level. 🏆❤️"
        );

    }


    if (
        score < 200
    ) {

        return (
            "150+! Okay Fruityy... " +
            "this is getting ridiculous. 😂❤️"
        );

    }


    return (
        "200+! 🏆 " +
        "I officially cannot compete with you, Fruityy. " +
        "You win. ❤️🍓"
    );

}


/* ==========================================
   HOME BUTTON
   ========================================== */

homeButton.addEventListener(
    "click",
    function () {

        loadMessage();

        showScreen(
            homeScreen
        );

    }
);


/* ==========================================
   START BUTTON
   ========================================== */

startButton.addEventListener(
    "click",
    startGame
);


/* ==========================================
   PLAY AGAIN
   ========================================== */

playAgainButton.addEventListener(
    "click",
    startGame
);


/* ==========================================
   BIRTHDAY FLOW
   ========================================== */

birthdayStartButton.addEventListener(
    "click",
    function () {

        showScreen(
            birthdayFinalScreen
        );

    }
);


birthdayGameButton.addEventListener(
    "click",
    startGame
);


/* ==========================================
   INITIALIZE APP
   ========================================== */

function initializeApp() {

    /*
     * Load a random message.
     */

    loadMessage();


    /*
     * Show saved high score.
     */

    highScoreElement.textContent =
        highScore;


    /*
     * Check birthday.
     */

    if (
        isBirthday()
    ) {

        showScreen(
            birthdayScreen
        );

    } else {

        showScreen(
            homeScreen
        );

    }

}


/* ==========================================
   START APPLICATION
   ========================================== */

initializeApp();

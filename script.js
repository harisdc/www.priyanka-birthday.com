"use strict";

/* =====================================================
   🎂 BIRTHDAY COUNTDOWN
   ===================================================== */

/*
   ✏️ EASY TO EDIT

   Change ONLY this line:

   "2026-09-06T00:00:00"

   Example:
   "2027-09-06T00:00:00"
*/

const BIRTHDAY_DATE = "2026-09-05T00:00:00";

const countdownScreen =
    document.getElementById("countdownScreen");

const passwordScreen =
    document.getElementById("passwordScreen");

const mainContent =
    document.getElementById("mainContent");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const countdownFinished =
    document.getElementById("countdownFinished");

let countdownTimer;


/* =====================================================
   COUNTDOWN FUNCTION
   ===================================================== */

function updateCountdown() {

    const now =
        new Date().getTime();

    const target =
        new Date(BIRTHDAY_DATE).getTime();

    const difference =
        target - now;


    /* -----------------------------------------------
       COUNTDOWN FINISHED
    ------------------------------------------------ */

    if (difference <= 0) {

        hoursElement.textContent =
            "00";

        minutesElement.textContent =
            "00";

        secondsElement.textContent =
            "00";


        if (countdownFinished) {

            countdownFinished.style.display =
                "block";
        }


        clearInterval(
            countdownTimer
        );


        /*
           After countdown finishes,
           show password screen
        */

        setTimeout(
            function () {

                countdownScreen.style.display =
                    "none";

                passwordScreen.classList.remove(
                    "hidden"
                );

            },
            1000
        );

        return;
    }


    /* -----------------------------------------------
       TOTAL HOURS
    ------------------------------------------------ */

    const totalHours =
        Math.floor(
            difference /
            (1000 * 60 * 60)
        );


    /* -----------------------------------------------
       MINUTES
    ------------------------------------------------ */

    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    /* -----------------------------------------------
       SECONDS
    ------------------------------------------------ */

    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );


    /* -----------------------------------------------
       DISPLAY
    ------------------------------------------------ */

    hoursElement.textContent =
        String(totalHours)
            .padStart(2, "0");

    minutesElement.textContent =
        String(minutes)
            .padStart(2, "0");

    secondsElement.textContent =
        String(seconds)
            .padStart(2, "0");
}


/* Start countdown */

updateCountdown();

countdownTimer =
    setInterval(
        updateCountdown,
        1000
    );



/* =====================================================
   🔐 PASSWORD
   ===================================================== */

const correctPassword =
    "kural";

const passwordInput =
    document.getElementById(
        "password"
    );

const loginBtn =
    document.getElementById(
        "loginBtn"
    );

const passwordError =
    document.getElementById(
        "passwordError"
    );


function unlockPage() {

    const enteredPassword =
        passwordInput.value.trim();


    if (
        enteredPassword ===
        correctPassword
    ) {

        passwordScreen.style.display =
            "none";

        mainContent.classList.remove(
            "hidden"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        passwordError.textContent =
            "";

    } else {

        passwordError.textContent =
            "Wrong password. unaku na vacha peru 💜";

        passwordInput.value =
            "";

        passwordInput.focus();
    }
}


/* Login button */

loginBtn.addEventListener(
    "click",
    unlockPage
);


/* Enter key */

passwordInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Enter"
        ) {

            unlockPage();
        }
    }
);



/* =====================================================
   🎵 BIRTHDAY MUSIC
   ===================================================== */

const celebrateBtn =
    document.getElementById(
        "celebrateBtn"
    );

const bgMusic =
    document.getElementById(
        "bgMusic"
    );


bgMusic.src =
    "Priyanka.mp3";

bgMusic.volume =
    0.7;


celebrateBtn.addEventListener(
    "click",
    function () {

        bgMusic.play()
            .then(
                function () {

                    celebrateBtn.innerHTML =
                        "🎵 Playing Birthday Song";
                }
            )
            .catch(
                function (error) {

                    console.log(
                        "Birthday song error:",
                        error
                    );
                }
            );


        createConfetti();
    }
);



/* =====================================================
   🎉 CONFETTI
   ===================================================== */

function createConfetti() {

    const symbols = [
        "🎉",
        "💜",
        "✨",
        "🎊",
        "💖",
        "⭐"
    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );


        confetti.className =
            "confetti";


        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 +
            "vw";


        confetti.style.fontSize =
            15 +
            Math.random() * 20 +
            "px";


        document.body.appendChild(
            confetti
        );


        const animation =
            confetti.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)"
                    },

                    {
                        transform:
                            `translateY(110vh) rotate(${Math.random() * 720}deg)`
                    }
                ],

                {
                    duration:
                        Math.random() *
                        2000 +
                        2500,

                    easing:
                        "linear"
                }
            );


        animation.onfinish =
            function () {

                confetti.remove();
            };
    }
}



/* =====================================================
   🎬 BIRTHDAY VIDEO
   ===================================================== */

const birthdayVideo =
    document.getElementById(
        "birthdayVideo"
    );

const videoSoundBtn =
    document.getElementById(
        "videoSoundBtn"
    );

const videoContainer =
    document.getElementById(
        "videoContainer"
    );

const videoZoom =
    document.getElementById(
        "videoZoom"
    );

const zoomVideo =
    document.getElementById(
        "zoomVideo"
    );

const closeVideo =
    document.getElementById(
        "closeVideo"
    );


/* Video sound */

videoSoundBtn.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        if (
            birthdayVideo.muted
        ) {

            birthdayVideo.muted =
                false;

            birthdayVideo.volume =
                0.7;


            videoSoundBtn.innerHTML =
                "🔊 <span>Sound On</span>";

        } else {

            birthdayVideo.muted =
                true;


            videoSoundBtn.innerHTML =
                "🔇 <span>Sound Off</span>";
        }
    }
);



/* Video zoom */

videoContainer.addEventListener(
    "click",
    function () {

        zoomVideo.currentTime =
            birthdayVideo.currentTime;


        zoomVideo.muted =
            birthdayVideo.muted;


        zoomVideo.volume =
            birthdayVideo.volume;


        videoZoom.classList.add(
            "active"
        );


        birthdayVideo.pause();


        zoomVideo.play()
            .catch(
                function (error) {

                    console.log(
                        "Video play error:",
                        error
                    );
                }
            );
    }
);



/* Close zoom video */

function closeZoomVideo() {

    zoomVideo.pause();


    birthdayVideo.currentTime =
        zoomVideo.currentTime;


    videoZoom.classList.remove(
        "active"
    );


    birthdayVideo.play()
        .catch(
            function (error) {

                console.log(
                    "Background video error:",
                    error
                );
            }
        );
}


closeVideo.addEventListener(
    "click",
    closeZoomVideo
);


videoZoom.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            videoZoom
        ) {

            closeZoomVideo();
        }
    }
);



/* =====================================================
   📸 SIX PHOTO MEMORIES
   ===================================================== */

const photoCards =
    document.querySelectorAll(
        ".photo-card"
    );

const photoModal =
    document.getElementById(
        "photoModal"
    );

const largePhoto =
    document.getElementById(
        "largePhoto"
    );

const memoryNote =
    document.getElementById(
        "memoryNote"
    );

const songTitle =
    document.getElementById(
        "songTitle"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const flipCard =
    document.getElementById(
        "flipCard"
    );


let currentSong =
    null;



/* Photo click */

photoCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const photo =
                    card.dataset.photo;

                const song =
                    card.dataset.song;

                const note =
                    card.dataset.note;


                largePhoto.src =
                    photo;


                memoryNote.textContent =
                    note;


                songTitle.textContent =
                    song;


                photoModal.classList.add(
                    "active"
                );


                flipCard.classList.remove(
                    "flipped"
                );


                stopCurrentSong();


                currentSong =
                    new Audio(song);


                currentSong.loop =
                    true;


                currentSong.volume =
                    0.7;


                currentSong.play()
                    .catch(
                        function (error) {

                            console.log(
                                "Photo song error:",
                                error
                            );
                        }
                    );
            }
        );
    }
);



/* =====================================================
   🔄 FLIP PHOTO
   ===================================================== */

flipCard.addEventListener(
    "click",
    function () {

        flipCard.classList.toggle(
            "flipped"
        );
    }
);



/* =====================================================
   ❌ CLOSE PHOTO MODAL
   ===================================================== */

function closePhotoModal() {

    photoModal.classList.remove(
        "active"
    );


    flipCard.classList.remove(
        "flipped"
    );


    stopCurrentSong();
}


closeModal.addEventListener(
    "click",
    closePhotoModal
);


photoModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            photoModal
        ) {

            closePhotoModal();
        }
    }
);



/* =====================================================
   🎵 STOP PHOTO SONG
   ===================================================== */

function stopCurrentSong() {

    if (currentSong) {

        currentSong.pause();

        currentSong.currentTime =
            0;

        currentSong = null;
    }
}



/* =====================================================
   ⌨️ ESC KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        if (
            videoZoom.classList.contains(
                "active"
            )
        ) {

            closeZoomVideo();
        }


        if (
            photoModal.classList.contains(
                "active"
            )
        ) {

            closePhotoModal();
        }
    }
);



/* =====================================================
   🔐 SECRET BUTTON
   ===================================================== */

const openSecret =
    document.getElementById(
        "openSecret"
    );


openSecret.addEventListener(
    "click",
    function () {

        const secretPassword =
            prompt(
                "🔐 resent ahh romba pudicha person birthday date \nExample: 06092005"
            );


        if (
            secretPassword ===
            null
        ) {
            return;
        }


        if (
            secretPassword.trim() ===
            "07102004"
        ) {

            alert(
                "Sollaama irukkura sila feelings irukku… " +
                "Adha words-la explain panna mudiyadhu. " +
                "Maybe, indha little surprise paatha unakku puriyum priyanka. 💜"
            );

        } else {

            alert(
                "password mathi potina try pannatha itha nee paka vena vitudu 🔐 ithu secret ahhveyy irukatum 💔"
            );
        }
    }
);

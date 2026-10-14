let story = {
    step1: {
        image: "https://hd.wallpaperswide.com/thumbs/cute_monster_amused_illustration-t2.jpg",
        text: "you wake up surrounded by monsters... what should you do?",
        btn1: { text: "adventure", step: "step2" },
        btn2: { text: "run away", step: "step3" }
    },
    step2: {
        image: "https://c4.wallpaperflare.com/wallpaper/688/334/516/adorable-baby-monster-feeling-hungry-wallpaper-preview.jpg",
        text: "you choose to adventure the surrounding area, but something doesnt feel right.",
        btn1: { text: "fight the monsters", step: "step3" },
        btn2: { text: "try to run away", step: "step3" }
    },
    step3: {
        image: "https://hd.wallpaperswide.com/thumbs/cute_baby_monster_first_tooth_illustration-t2.jpg",
        text: "the monsters got you. better luck next time..."
    }
};

const storyImage = document.getElementById("storyImage");
const storyText = document.getElementById("storyText");
const storyBtn1 = document.getElementById("btn1");
const storyBtn2 = document.getElementById("btn2");
const buttonDiv = document.getElementById("buttonDiv");
const resetBtn = document.getElementById("resetBtn");

let currentStep = "step1";
loadScene();
storyBtn1.addEventListener("click", () => chooseOption("btn1"));
storyBtn2.addEventListener("click", () => chooseOption("btn2"));
resetBtn.addEventListener("click", reset);

function chooseOption(option) {
    const currentScene = story[currentStep];
    const nextStep = currentScene?.[option]?.step;

    if (nextStep && story[nextStep]) {
        currentStep = nextStep;
        loadScene();
    }
}

function loadScene() {
    const scene = story[currentStep];
    if (!scene) {
        return;
    }

    storyImage.src = scene.image;
    storyText.textContent = scene.text;
    const hasChoices = Boolean(scene.btn1 && scene.btn2);
    buttonDiv.hidden = !hasChoices;
    buttonDiv.classList.toggle("hidden", !hasChoices);

    if (hasChoices) {
        storyBtn1.disabled = false;
        storyBtn2.disabled = false;
        storyBtn1.textContent = scene.btn1.text;
        storyBtn2.textContent = scene.btn2.text;
    } else {
        storyBtn1.disabled = true;
        storyBtn2.disabled = true;
    }
}

function reset() {
    currentStep = "step1";
    loadScene();
}

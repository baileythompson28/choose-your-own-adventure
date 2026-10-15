let story = {
    step1: {
        image: "https://hd.wallpaperswide.com/thumbs/cute_monster_amused_illustration-t2.jpg",
        text: "youre surrounded by monsters... what should you do?",
        btn1: { text: "try to fight them", step: "step7" },
        btn2: { text: "venture the other way", step: "step3" }
    },

    step2: {
        image: "https://c4.wallpaperflare.com/wallpaper/688/334/516/adorable-baby-monster-feeling-hungry-wallpaper-preview.jpg",
        text: "you found some food! should you try it...?",
        btn1: { text: "try the food", step: "step4" },
        btn2: { text: "keep walking", step: "step5" }
    },
    
    step3: {
        image: "https://i.pinimg.com/1200x/8f/c4/d3/8fc4d36eec0ad9d5e506800370187bd0.jpg",
        text: "you choose to adventure, you found what looks to be a bunch of mushrooms.",
        btn1: { text: "go back towards the monsters", step: "step7" },
        btn2: { text: "go towards the mushrooms", step: "step2" }
    },

    step4: {
        image: "https://hd.wallpaperswide.com/thumbs/cute_baby_monster_first_tooth_illustration-t2.jpg",
        text: "you choose to try the food... did it atleast taste good?",
        btn1: { text: "keep walking", step: "step5" },
        btn2: { text: "think your stronger, try to fight the monsters now..", step: "step7" }
    },

    step5: {
        image: "https://i.pinimg.com/1200x/c3/bd/d9/c3bdd9cff5e6f21334bc06d346f7beab.jpg",
        text: "you kept walking and found what looks to be a way out!",
        btn1: { text: "leave", step: "step6" },
        btn2: { text: "stay", step: "step7" }
    },

    step6: {
        image: "https://i.pinimg.com/736x/5a/ed/19/5aed19a22d8379fd226f2205f3fdf8f2.jpg",
        text: "youve escaped, dont let whatever that was happen again!",
    },

    step7: {
        image: "https://i.pinimg.com/1200x/40/fd/ef/40fdefed8797bbb45d3d43f63df492c2.jpg",
        text: "the monsters got you. don't fight them, it'll never end well..."
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

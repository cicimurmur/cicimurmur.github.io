var currentScene = 0;

function changeScene(decision) {
    if (currentScene == 0) {
        currentScene = 1;
    } else if (currentScene == 1) {
        currentScene = decision == 1 ? 2 : 3;
    } else if (currentScene == 2) {
        currentScene = decision == 1 ? 4 : 5;
    } else if (currentScene == 3) {
        currentScene = decision == 1 ? 6 : 7;
    } else if (currentScene == 4) {
        currentScene = decision == 1 ? 3 : 5;
    } else if (currentScene == 5) {
        currentScene = decision == 1 ? 6 : 7;
    } else if (currentScene == 6) {
        currentScene = decision == 1 ? 6 : 7;
    } else if (currentScene == 7) {
        currentScene = decision == 1 ? 8 : 9;
    } else if (currentScene == 8) {
        currentScene = decision == 1 ? 1 : 2;
    } else if (currentScene == 9) {
        currentScene = decision == 1 ? 1 : 2;
    }

    document.getElementById("sceneimg").src = "office life/" + currentScene + ".jpg";
}

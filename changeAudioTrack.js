function changeAudioTrack() {
    const settingsButton = document.querySelector(".ytp-settings-button");
    if (!settingsButton) {
        console.log("Settings button not found.");
        return;
    }

    settingsButton.click();

    const menuItems = document.querySelectorAll(".ytp-audio-menu-item");
    let audioTrackMenuItem = null;
    menuItems.forEach((item) => {
        if (item.textContent.toLowerCase().includes("audio")) {
            audioTrackMenuItem = item;
        }
    });

    if (audioTrackMenuItem) {
        audioTrackMenuItem.click();

        const audioTrackOptions = document.querySelectorAll(".ytp-menuitem");
        audioTrackOptions.forEach((option) => {
            if (option.textContent.includes("original")) {
                option.click();
                console.log(`Switched to audio track: ${option.textContent}`);
            }
        });
    } else {
        console.log("Audio track menu not found.");
    }

    settingsButton.click();
}

changeAudioTrack();

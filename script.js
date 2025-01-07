function updateDeviceInfo() {
    document.getElementById('screen-width').textContent = screen.width;
    document.getElementById('screen-height').textContent = screen.height;
    document.getElementById('window-width').textContent = window.innerWidth;
    document.getElementById('window-height').textContent = window.innerHeight;
    document.getElementById('user-agent').textContent = navigator.userAgent;
    document.getElementById('platform').textContent = navigator.platform;
    document.getElementById('language').textContent = navigator.language;
}

// Call it initially
updateDeviceInfo();

// Update on window resize
window.addEventListener('resize', updateDeviceInfo);


let clickCount = 0
document.getElementById("button").addEventListener("click", () => {
    clickCount += 1
    document.getElementById("button-click").textContent = "button clicked x" + clickCount;
})
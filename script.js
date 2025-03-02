// General function to handle task completion
function completeTask(buttonClass, textId) {
    document.querySelector(buttonClass).addEventListener('click', function () {
        const pendingTask = getTextValueById('pending-task');
        const completedTask = getTextValueById('completed-task');
        document.getElementById('completed-task').innerText = completedTask + 1;
        document.getElementById('pending-task').innerText = pendingTask - 1;
        alert('Board Updated Successfully');
        
        const taskText = getTextById(textId);
        const newHistory = document.querySelector('.new-history');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
            <p class="text-sm">You have completed the task: ${taskText} ${getFormattedTime()}</p> 
        </div>`;
        newHistory.appendChild(newDiv);
    });
}

// Assign event listeners to buttons
completeTask('.btn-mobile', 'mobile-text');
completeTask('.btn-dark', 'dark-text');
completeTask('.btn-optimize', 'optimize-text');
completeTask('.btn-emoji', 'emoji-text');
completeTask('.btn-ai', 'ai-text');
completeTask('.btn-job', 'job-text');

// Track completed tasks
let taskCount = 0;
function taskCompleted() {
    taskCount++;
    if (taskCount === 6) {
        alert('Congratulations!! You have completed all the current tasks.');
    }
}

// Attach task completion event
['.btn-mobile', '.btn-dark', '.btn-optimize', '.btn-emoji', '.btn-ai', '.btn-job'].forEach(selector => {
    document.querySelector(selector).addEventListener('click', taskCompleted);
});

// Change random background color
function changeBgColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("body").style.backgroundColor = randomColor;
}

// Auto update date
function updateDate() {
    const today = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options).split(',');
    document.getElementById('day').innerText = formattedDate[0] + ",";
    document.getElementById('date').innerText = formattedDate[1] + formattedDate[2];
}
updateDate();

// Get formatted time
function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amAndPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `at ${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${amAndPm}`;
}

// Disable buttons after one-time use
function disableButton(button) {
    button.disabled = true;
    button.classList.add("bg-gray-400", "cursor-not-allowed");
}

// Convert inner text to number
function getTextValueById(id) {
    return parseInt(document.getElementById(id).innerText);
}

// Get inner text
function getTextById(id) {
    return document.getElementById(id).innerText;
}

// Clear history
function clearHistory() {
    document.getElementById("logContainer").innerHTML = "";
}

// Navigate to LinkedIn blog pages
document.getElementById('discover').addEventListener('click', function () {
    window.location.href = 'blog.html';
});





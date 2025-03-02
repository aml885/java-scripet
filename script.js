// Fix Mobile Button Issue 
document.querySelector('.btn-mobile').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const mobileText = getTextById('mobile-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${mobileText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);

})

// Add Dark Mode 
document.querySelector('.btn-dark').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const darkText = getTextById('dark-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${darkText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);
})


// Optimize Home page 
document.querySelector('.btn-optimize').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const optimizeText = getTextById('optimize-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${optimizeText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);
})


// Add new emoji 🤲 
document.querySelector('.btn-emoji').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const emojiText = getTextById('emoji-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${emojiText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);
})

// Integrate OpenAI API 
document.querySelector('.btn-ai').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const aiText = getTextById('ai-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${aiText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);
})

// Improve Job Seeking 
document.querySelector('.btn-job').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const jobText = getTextById('job-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${jobText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);

})

// Final Alert 
document.querySelector('.btn-mobile').addEventListener('click', taskCompleted);
document.querySelector('.btn-dark').addEventListener('click', taskCompleted);
document.querySelector('.btn-optimize').addEventListener('click', taskCompleted);
document.querySelector('.btn-emoji').addEventListener('click', taskCompleted);
document.querySelector('.btn-ai').addEventListener('click', taskCompleted);
document.querySelector('.btn-job').addEventListener('click', taskCompleted);

let taskCount = 0;
function taskCompleted() {
    taskCount++;
    if (taskCount === 6) {
        alert('Congratulations!! You have completed all the current tasks.');
    }
}





// Change random background color 
function changeBgColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("body").style.backgroundColor = randomColor;
}

// Auto day and Date Update
function updateDate() {
    const today = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options).split(',');
    document.getElementById('day').innerText = formattedDate[0] + ",";
    document.getElementById('date').innerText = formattedDate[1] + formattedDate[2];
}
updateDate();

// Times format hours minutes seconds
function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amAndPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `at ${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${amAndPm}`;
}

// disable buttons (One time Use)
function disableButton(button) {
    button.disabled = true;
    button.classList.add("bg-gray-400", "cursor-not-allowed");
}

// converted number 
function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const convertedTextValue = parseInt(textValue);
    return convertedTextValue;
}

//  Get Just inner text 
function getTextById(id) {
    const onlyText = document.getElementById(id).innerText;
    return onlyText;
}
// Clear History 
function clearHistory() {
    document.getElementById("logContainer").innerHTML = "";
}

// Linked in blog pages 
document.getElementById('discover').addEventListener('click', function () {
    window.location.href = 'blog.html'
})
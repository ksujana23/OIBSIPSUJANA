const taskInput = document.getElementById("taskInput");

const pendingTasks = document.getElementById("pendingTasks");

const completedTasks = document.getElementById("completedTasks");

/* ENTER KEY SUPPORT */

taskInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        addTask();
    }

});

/* ADD TASK FUNCTION */

function addTask(){

    const taskText = taskInput.value.trim();

    /* EMPTY VALIDATION */

    if(taskText === ""){

        alert("Please enter a task!");

        return;
    }

    /* CREATE TASK CARD */

    const li = document.createElement("li");

    const time = new Date().toLocaleString();

    li.innerHTML = `

        <div class="task-text">

            <span>${taskText}</span>

            <span class="time">Added: ${time}</span>

        </div>

        <div class="task-buttons">

            <button class="complete-btn">Done</button>

            <button class="delete-btn">Delete</button>

        </div>

    `;

    /* DONE BUTTON */

    const completeBtn = li.querySelector(".complete-btn");

    completeBtn.addEventListener("click", () => {

        completedTasks.appendChild(li);

        completeBtn.remove();

    });

    /* DELETE BUTTON */

    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

        li.style.opacity = "0";

        li.style.transform = "translateX(50px)";

        setTimeout(() => {

            li.remove();

        }, 300);

    });

    /* ADD TO PENDING TASKS */

    pendingTasks.appendChild(li);

    /* CLEAR INPUT */

    taskInput.value = "";

}

import { makeAutoObservable } from "mobx";

class practice {

    constructor() {
        makeAutoObservable(this);
    }

    currentProgress = 0;

    tasks = [
        {
            id: 1, 
            difficult:"easy", 
            isCompleted: false, 
            taskText: "",
            startStroke: "111"
        },
        {
            id: 2, 
            difficult:"medium", 
            isCompleted: false, 
            taskText: "",
            startStroke: "100"
        },
        {
            id: 3, 
            difficult:"medium", 
            isCompleted: false, 
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
        {
            id: 4, 
            difficult:"hard", 
            isCompleted: false,
            taskText: "",
            startStroke: "100"
        },
    ]

    getCurrentProgress() {
        this.currentProgress = 0;
        const progress = localStorage.getItem(String(this.tasks[0].id));

        if (progress) {
            for (let task of this.tasks) {
                let check = localStorage.getItem(String(task.id))

                if (check === "true") {
                    task.isCompleted = true 
                    this.currentProgress++;
                }
                else {
                    task.isCompleted = false    
                }
            }
        }
        else {
            this.tasks.forEach((task) => {
                localStorage.setItem(String(task.id), "false");
            })
            this.currentProgress = 0;
        } 
    }

    currentTaskId = 0;

    setCurrentTask(taskId:number) {
        this.currentTaskId = taskId;
    }
    
   
}



export default new practice();

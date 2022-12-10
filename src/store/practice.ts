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
    


    ////////////////////////////////////////////////// машина снизу


    alphabet:string = "01";
    alphabetChars = ["0", "1", "[ ]"];
    currentCell:number = 0;
    currentCellValue:string = "1"
    currentState:string = "q1";

    alphabetNeedUpdate = false;

    states = [
        {name: "q1", rules: [
            {meet: "0", char:"0", action:"L", state: "q1", isVisible: true},
            {meet: "1", char:"0", action:"L", state: "q1", isVisible: true},
            {meet: "[ ]", char:"0", action:"L", state: "q1", isVisible: false},
        ]},
        {name: "q2", rules: [
            {meet: "0", char:"0", action:"L", state: "q1", isVisible: false},
            {meet: "1", char:"0", action:"L", state: "q1", isVisible: false},
            {meet: "[ ]", char:"0]", action:"L", state: "q1", isVisible: false},
        ]}
    ]

    cells = [
        {id: -15, value: ""},
        {id: -14, value: ""},
        {id: -13, value: ""},
        {id: -12, value: ""},
        {id: -11, value: ""},
        {id: -10, value: ""},
        {id: -9, value: ""},
        {id: -8, value: ""},
        {id: -7, value: ""},
        {id: -6, value: ""},
        {id: -5, value: ""},
        {id: -4, value: ""},
        {id: -3, value: ""},
        {id: -2, value: ""},
        {id: -1, value: ""},
        {id: 0, value: "1"},
        {id: 1, value: "0"},
        {id: 2, value: "0"},
        {id: 3, value: ""},
        {id: 4, value: ""},
        {id: 5, value: ""},
        {id: 6, value: ""},
        {id: 7, value: ""},
        {id: 8, value: ""},
        {id: 9, value: ""},
        {id: 10, value: ""},
        {id: 11, value: ""},
        {id: 12, value: ""},
        {id: 13, value: ""},
        {id: 14, value: ""},
        {id: 15, value: ""},
    ]


    currentCells = [
        {id: -5, value: ""},
        {id: -4, value: ""},
        {id: -3, value: ""},
        {id: -2, value: ""},
        {id: -1, value: ""},
        {id: 0, value: "1"},
        {id: 1, value: "0"},
        {id: 2, value: "0"},
        {id: 3, value: ""},
        {id: 4, value: ""},
        {id: 5, value: ""},
    ]

    //Отрисовка видимой части ленты
    changeCurrentCells(move:string) {        
        this.currentCells = [];

        switch(move) {
            case "R": 
                this.currentCell++;
                this.cells.push({id: this.cells[this.cells.length - 1].id + 1, value: ""})
                // console.log(this.cells)
                break
            case "L": 
                this.currentCell--
                this.cells.unshift({id: this.cells[0].id - 1, value: ""})
                // console.log(this.cells)
            break
        }

        for (var i:number = this.currentCell - 5; i <= this.currentCell + 5; i++) {
            for(let item of this.cells) {
                if (item.id === i) {
                    this.currentCells.push({id: item.id, value: item.value});
                } 
            }
        }
        if (this.currentCells[5].value === "") {
            this.currentCellValue = "[ ]";
        } else {
            this.currentCellValue = this.currentCells[5].value;
        }
        
    }

    //Удаляем с ленты символы, которые отсутствуют в алфавите
    checkDuplicateOnTape() {
        let k = 0;
        let come = 0;
        for (let check of this.cells) {
            come = 0;
            for (let char of this.alphabet) {
                // console.log( "char = " + char)
                if (check.value === char) {
                    come++;
                }
            }
            if (come === 0) {
                this.cells[k].value = "";
            } 
            k++;
        }
        this.changeCurrentCells("stay");

    }

    //Сохранение алфавита 
    setAlphabet(value:string) {
        this.alphabetChars = [];

        for (let char of value) {
            this.alphabetChars.push(char);
        }
        this.alphabetChars = this.alphabetChars.filter((e, i) =>  this.alphabetChars.indexOf(e) === i )

        //Добавляем в States новые символы
        for (let state of this.states) {
            for (let char of this.alphabetChars) {
                if (!this.alphabet.includes(char)) {
                    // console.log("Не было символа: " + char)
                    state.rules.push(
                        {meet:char, char:"[ ]", action:"L", state: "q1", isVisible: false}
                    )
                }
            }
        }

        this.alphabet = "";
        for (let c of this.alphabetChars) {
            this.alphabet = this.alphabet + c;
        }
        
        //Удаляю "встречу" старого символа из MEET в rules
        for (let state of this.states) {
            let i = 0;
            for (let rule of state.rules) {
                if (!this.alphabet.includes(rule.meet) && rule.meet !== "[ ]") {
                    // console.log("Удаляю это: " + state.rules[i].meet)
                    state.rules.splice(i, 1);
                }
               
                i++;
            }
        }

        // console.log(JSON.stringify(this.states))

        this.alphabetChars.push("[ ]")

        this.checkDuplicateOnTape();

       
        return this.alphabet
    }

    //При изменении значений в таблице состояний сохраняем эти изменения
    changeState(stateName:string, char:string, parametr:string, value:string) {
        for (let state of this.states) {
            if (state.name === stateName) {
                for (let rule of state.rules) {
                    if (rule.meet === char) {
                        switch(parametr) {
                            case "char": 
                             
                              rule.char = value;
                              break

                            case "action": 
                              rule.action = value;
                              break

                            case "state": 
                              rule.state = value;
                              break
                          
                            default:
                              break
                        }
                    }
                }
            }
            // this.counter++;
            
        }
    }

    actionLogs:any[] = []

    makeStep() {
        let initialStroke:any = this.getCurrentPosition()
        
        for (let state of this.states) {
            if (state.name === this.currentState) {
                for (let rule of state.rules) {
                    if (rule.meet === this.currentCellValue) {
                        if ( rule.isVisible === true) {
                            for(let cell of this.cells) {
                                if (cell.id === this.currentCell) {
                                    if (rule.char === "[ ]") {
                                        cell.value = "";
                                    } else {
                                        cell.value = rule.char;
                                    }
                                }
                            }
                        }
                        else {
                            // console.log("Выполнение программы завершено")
                            alert("Выполнение программы завершено")
                            return false
                            // break
                        }

                        this.currentState = rule.state;

                        let finishStroke:string = this.getCurrentPosition()

                        this.actionLogs.push("P" + this.actionLogs.length + "   " + initialStroke + "→" + finishStroke)            
                        this.changeCurrentCells(rule.action);
                        
                        return true
                    }
                }
            }
        }

        
    }

    reset() {
        this.cells = [
            {id: -15, value: ""},
            {id: -14, value: ""},
            {id: -13, value: ""},
            {id: -12, value: ""},
            {id: -11, value: ""},
            {id: -10, value: ""},
            {id: -9, value: ""},
            {id: -8, value: ""},
            {id: -7, value: ""},
            {id: -6, value: ""},
            {id: -5, value: ""},
            {id: -4, value: ""},
            {id: -3, value: ""},
            {id: -2, value: ""},
            {id: -1, value: ""},
            {id: 0, value: "1"},
            {id: 1, value: "0"},
            {id: 2, value: "0"},
            {id: 3, value: ""},
            {id: 4, value: ""},
            {id: 5, value: ""},
            {id: 6, value: ""},
            {id: 7, value: ""},
            {id: 8, value: ""},
            {id: 9, value: ""},
            {id: 10, value: ""},
            {id: 11, value: ""},
            {id: 12, value: ""},
            {id: 13, value: ""},
            {id: 14, value: ""},
            {id: 15, value: ""},
        ]

        this.currentCells = [
            {id: -5, value: ""},
            {id: -4, value: ""},
            {id: -3, value: ""},
            {id: -2, value: ""},
            {id: -1, value: ""},
            {id: 0, value: "1"},
            {id: 1, value: "0"},
            {id: 2, value: "0"},
            {id: 3, value: ""},
            {id: 4, value: ""},
            {id: 5, value: ""},
        ]

        this.states = [
            {name: "q1", rules: [
                {meet: "0", char:"0", action:"L", state: "q1", isVisible: true},
                {meet: "1", char:"0", action:"L", state: "q1", isVisible: true},
                {meet: "[ ]", char:"0", action:"L", state: "q1", isVisible: false},
            ]},
            {name: "q2", rules: [
                {meet: "0", char:"0", action:"L", state: "q1", isVisible: false},
                {meet: "1", char:"0", action:"L", state: "q1", isVisible: false},
                {meet: "[ ]", char:"0]", action:"L", state: "q1", isVisible: false},
            ]}
        ]

        this.actionLogs = [] 

        this.alphabet = "01";
        this.alphabetChars = ["0", "1", "[ ]"];
        this.currentCell= 0;
        this.currentCellValue = "1"
        this.currentState = "q1";

        this.setAlphabet("01")
        this.alphabetNeedUpdate = true;
    }

    //Обновлять встреченные символы еще

    //Прописать функцию добавления нового СИМВОЛА, там надо

    returnNumbers(string:string) {
        return string.replace(/\D/g,'')
    }


    rulesFor:any[] = []
    addState() {
        this.rulesFor = []
        let nameOfNewState = "q" + (Number(this.returnNumbers(this.states[this.states.length - 1].name)) + 1)

        for (let stroke of this.alphabetChars) {
            this.rulesFor.push({meet: stroke, char: this.alphabetChars[0], action: "L", state: "q1", isVisible: true})
        }
        
        this.states.push({name: nameOfNewState, rules: this.rulesFor})

        for (let rule of this.states[this.states.length - 1].rules) {
            // rule.state = nameOfNewState
            rule.isVisible = false
        }
    }

   

    removeState(stateIndex:number) {
        if (stateIndex === 0) {
            return false
        }
        this.states.splice(stateIndex, 1);
    }


    currEditedCell = 100000000;
    editCell(cellId:number) {
        this.currEditedCell = cellId
    }

    editCellValue(newValue:string) {
        for (let cell of this.cells)
        {
            if (cell.id === this.currEditedCell) {
                cell.value = newValue;
                this.changeCurrentCells("") 
            }
        }
    }

    /////////////////////////////////////////////////

    // actions:ActionType[] = []

    // makeAction() {

    //     let currPoistion = this.getCurrentPosition()

    //     this.actions.push({
    //         previous: currPoistion,
    //         current: {}
    //     })
    // }

    getCurrentPosition():any {
    
        let cellStroke = ""
        for (let symbol of this.cells) {
            if (this.currentCell === symbol.id) {
                cellStroke += this.currentState;
            }
            if (symbol.value !== "") {
                cellStroke += symbol.value;
            }
        }
        return cellStroke
    }
   
}



export default new practice();

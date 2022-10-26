import { makeAutoObservable } from "mobx";

class machine {

    constructor() {
        makeAutoObservable(this);
    }

    
    alphabet:string = "01";
    alphabetChars = ["0", "1", "[ ]"];
    currentCell:number = 0;
    currentCellValue:string = "1"
    currentState:string = "q1";

    states = [
        {name: "q1", rules: [
            {meet: "0", char:"0", action:"L", state: "q1", isVisible: true},
            {meet: "1", char:"0", action:"L", state: "q1", isVisible: true},
            {meet: "[ ]", char:"0", action:"L", state: "q1", isVisible: true},
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
                this.currentCell++
                break
            case "L": 
                this.currentCell--
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


        // for (let state of this.states) {
        //     if (state.rules[0].meet === "[ ]") {
        //         state.rules[0].meet = "---"
        //     }

        // }

        //Добавляем в States новые символы
        for (let state of this.states) {
            for (let char of this.alphabetChars) {
                if (!this.alphabet.includes(char)) {
                    console.log("Не было символа: " + char)
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
                    console.log("Удаляю это: " + state.rules[i].meet)
                    state.rules.splice(i, 1);
                }
               
                i++;
            }
        }

        console.log(JSON.stringify(this.states))

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

   

    makeStep() {
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
                            alert("Выполнение программы завершено")
                            break
                        }

                        this.changeCurrentCells(rule.action);
                        this.currentState = rule.state;
                        
                        return
                    }
                   

                }
            }
        }
    }

    //Обновлять встреченные символы еще

    //Прописать функцию добавления нового СИМВОЛА, там надо

}

export default new machine();

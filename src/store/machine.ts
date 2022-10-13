import { makeAutoObservable } from "mobx";

class machine {

    constructor() {
        makeAutoObservable(this);
    }

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

    currentCell:number = 0;

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

    idCell:number = 0;

    changeCurrentCells(move:string) {        
        this.currentCells = [];
        if (move === "right") {
            this.currentCell++;
        }
        if (move === "left") {
            this.currentCell--;
        }

        for (var i:number = this.currentCell - 5; i <= this.currentCell + 5; i++) {

        
            for(let item of this.cells) {
                if (item.id === i) {
                    this.idCell = i;
                    // console.log("нашёл ID cell " + this.idCell)
                    this.currentCells.push({id: item.id, value: item.value});
                } 
            }

        }
       
    }

    alphabet:string = "01";
    alphabetChars = ["0", "1", "[ ]"];

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

    setAlphabet(value:string) {
        this.alphabetChars = [];

        for (let char of value) {
            this.alphabetChars.push(char);
        }
        this.alphabetChars = this.alphabetChars.filter((e, i) =>  this.alphabetChars.indexOf(e) === i )

        this.alphabet = "";
        for (let c of this.alphabetChars) {
            this.alphabet = this.alphabet + c;
        }

        this.alphabetChars.push("[ ]")

        this.checkDuplicateOnTape();
    
        return this.alphabet
    }

    //возможно надо отдельно сделать массив состояний и массив правил
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

    states = [
        {name: "q1", rules: [
            {meet: "0", char:"0", action:"L", state: "q1"},
            {meet: "1", char:"0", action:"L", state: "q1"},
            {meet: "[ ]", char:"0", action:"L", state: "q1"},
        ]},
        {name: "q2", rules: [
            {meet: "0", char:"0", action:"L", state: "q1"},
            {meet: "1", char:"0", action:"L", state: "q1"},
            {meet: "[ ]", char:"0", action:"L", state: "q2"},
        ]}
    ]
    //Обновлять встреченные символы еще

    //Прописать функцию добавления нового СИМВОЛА, там надо

}

export default new machine();

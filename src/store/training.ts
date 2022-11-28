import { makeAutoObservable } from "mobx";

class training {

    constructor() {
        makeAutoObservable(this);
    }

    currentPage = 0;

    handleChangePage() {
        this.currentPage += 1;
    }
   
}



export default new training();

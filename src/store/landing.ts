import { makeAutoObservable } from "mobx";

class landing {

    constructor() {
        makeAutoObservable(this);
    }
    
    currentReviewer:number = 0;

    setActiveRewiwer(id: number) {
        this.currentReviewer = id;
    }

    reviewers:any[] = [
        {
            id: 0,
            name: "Дуэйн Джонсон",
            avatar: "https://sun9-55.userapi.com/impg/LQOSTPQv7T6Pb67h0kzPSSapu1OtfTVS5P7Vog/YjQFM4ipp9A.jpg?size=300x400&quality=96&sign=b9bf3c58dfd30b5258075c1601d10da2&type=album",
            rating: 5,
            text: "Отличное приложение, оцениваю его на 5 баллов из 5! Научился машинному обучению, познал законы вселенной, накачал мозговую мышцу на максимум! А как автор отнёсся к каждой детали.. это просто восхитительно! Если хотите стать крутым программистом и познать суть работы алгоритмов - это веб-приложение для вас!",
            isActive: true,
        }, 
        {
            id: 1,
            name: "Джейсон Стэйтем",
            avatar: "https://sun9-22.userapi.com/impg/xX1AuvuQwkNwxIv4ezwHJLGcPp3O5v-n7lVhiw/TsKKtIKtDiw.jpg?size=1200x1200&quality=96&sign=ec1bc725b07ff019a9b5817dea5be64d&type=album",
            rating: 5,
            text: "Послушайте.. когда я зашёл на этот сайт.. я не знаю как описать мои чувства.. я просто сразу понял, что это ЛУЧШИЙ (не побоюсь этого слова) симулятор Машины Тьюринга, который я когда либо видел в жизни! Если кто-то не согласен - готов поговорить с вами лично. Я ДОХОДЧИВО ОБЪЯСНЮ СВОЮ ТОЧКУ ЗРЕНИЯ. Поверьте, я это умею ;)",
            isActive: false,
        }, 
        {
            id: 2,
            name: "Вин Дизель",
            avatar: "https://sun1-90.userapi.com/impg/c45RGhWjuN9yfo_hFnmHQ_82vQBlFCAt1a1FwA/rGVbituXFh4.jpg?size=250x292&quality=96&sign=869f3b52239e2fe738c4f10b75aaec89&type=album",
            rating: 4,
            text: "Хорошее веб-приложение, функционалом доволен. Но конечно вы спросите: 'почему же ты тогда поставил 4 звезды?'. А всё просто. Машины - это не люди, это искуственный интеллекс. Они никогда не станут для нас, человечества, родными. А я очень уважаю своих родных. Родные - это твоя семья. А семья - это важно. Запомните: нет ничего важнее семьи",
            isActive: false,

        }, 
    ]
}



export default new landing();

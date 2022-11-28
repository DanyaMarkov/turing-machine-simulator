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
            name: "Джейсон Стетхем",
            avatar: "https://sun9-22.userapi.com/impg/xX1AuvuQwkNwxIv4ezwHJLGcPp3O5v-n7lVhiw/TsKKtIKtDiw.jpg?size=1200x1200&quality=96&sign=ec1bc725b07ff019a9b5817dea5be64d&type=album",
            rating: 5,
            text: "Я ВАМ ЗАПРЕЩАЮ ПЛОХО ОТЗЫВАТЬСЯ ОБ ЭТОМ ВЕБ-ПРИЛОЖЕНИИ. Я правда настоящий Джейсон Стетхем и я заявляю, что это ЛУЧШИЙ симулятор Машины Тьюринга, который я когда либо видел в своей жизни! Если кто-то не согласен - готов поговорить с вами лично. Я ДОХОДЧИВО ОБЪЯСНЮ СВОЮ ТОЧКУ ЗРЕНИЯ. Поверьте, я это умею ;) А на последок запомните: «Можно сдать зачёт по Информационным технологиям, но своих пацанов - никогда» (С) Стетхем  ",
        }, 
        {
            id: 1,
            name: "Дуэйн Джонсон",
            avatar: "https://sun9-55.userapi.com/impg/LQOSTPQv7T6Pb67h0kzPSSapu1OtfTVS5P7Vog/YjQFM4ipp9A.jpg?size=300x400&quality=96&sign=b9bf3c58dfd30b5258075c1601d10da2&type=album",
            rating: 5,
            text: "Отличное приложение, оцениваю его на 5 баллов из 5! Научился машинному обучению, познал законы вселенной, накачал мозговую мышцу на максимум! А как автор отнёсся к каждой детали.. это просто восхитительно! Если хотите стать крутым программистом и познать суть работы алгоритмов - это веб-приложение для вас!",
        }, 
        {
            id: 2,
            name: "Вин Дизель",
            avatar: "https://sun1-90.userapi.com/impg/c45RGhWjuN9yfo_hFnmHQ_82vQBlFCAt1a1FwA/rGVbituXFh4.jpg?size=250x292&quality=96&sign=869f3b52239e2fe738c4f10b75aaec89&type=album",
            rating: 4,
            text: "Хорошее веб-приложение, функционалом доволен. Но конечно вы спросите: «Почему же ты тогда поставил 4 звезды?». А всё просто. Машины - это не люди, я давно это осознал. Как бы мы не были привязаны к машинам,  они никогда не станут для нас родными. А я очень уважаю своих родных. Родные - это твоя семья. А семья - это важно. Запомните: нет ничего важнее семьи",
        }, 
    ]
}



export default new landing();

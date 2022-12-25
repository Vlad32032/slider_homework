/*  после загрузки страницы подклюаем слайдер вызовом функции "sliderOn"  */
document.addEventListener("DOMContentLoaded", sliderOn);

/*  объявляем функцию вызова слайдера  */
function sliderOn() { 
    // переменная с номером текущего слайда
    let currentIndex = 0;

    /*  записываем в переменные ноды  */

    // ноды для названий слайда и линий
    const listsName = document.querySelectorAll(".list-item");
    const hr = document.querySelectorAll(".hr-line");

    // ноды для картинок 
    const gallery = document.querySelector(".gallery");
    const galleryImg = gallery.querySelectorAll("img");

    // ноды для стрелок и точек
    const arrows = document.querySelector(".completed-projects-arrow");
    const arrowsR = arrows.querySelector(".completed-projects-arrow-r");
    const arrowsL = arrows.querySelector(".completed-projects-arrow-l");
    const points = arrows.querySelectorAll(".point");

    /*  вешаем обработчики на стрелки, точки и названия слайда */

    // функции "nextSlide" и "prevSlide" переключат слайды 
    arrowsR.addEventListener("click", () => {nextSlide(currentIndex)});
    arrowsL.addEventListener("click", () => {prevSlide(currentIndex)});

    // проходим циклом по точкам и названиям и вешаем обработчик на каждый элемент в массиве вызовом функции "addEvent"
    points.forEach(addEvent);
    listsName.forEach(addEvent);

    /*  объявляем функции  */

    // функция которая вешает обработчик на каждый элеменет в масиве и присваевает индекс, который используеться как аргумент в колбек функции выбора слайда
    function addEvent(element, index) {
        const elIndex = index;
        element.addEventListener("click", () => {setSlide(elIndex)})
    };

    // функция которая удаляет стлили с текущего слайда и всех сопутствующих элементов (нужна для всех функций ниже, что-бы не повторять код)
    function changSlide(index) {
        points[index].classList.remove("active-point");
        listsName[index].classList.remove("color-mod");
        hr[index].classList.remove("hr-line-block");
        galleryImg[index].classList.add("gallery-none");
    };

    // функция которая добавляет стили для следующего слайда и всех сопутствующих элементов (тоже нужна для всех функций ниже, что-бы не повторять код )
    function newSlide(index) {
        points[index].classList.add("active-point");
        listsName[index].classList.add("color-mod");
        hr[index].classList.add("hr-line-block");
        galleryImg[index].classList.remove("gallery-none");
    };

    // функция выбора текущего элемента по заданному индексу для точек и названий слайда (добовляет стили)
    function setSlide(setIndex) {
        changSlide(currentIndex);
        newSlide(setIndex);
        currentIndex = setIndex;
    };

    // функиция перелистывания слайда вперед (добавляет стили следующему элементу)
    function nextSlide(index) {
        changSlide(index);
        if (index === 2) {
            newSlide(0);
            currentIndex = 0;
        } else {
            newSlide(index + 1);
            currentIndex += 1;
        }
    };

    // функиция перелистывания слайда назад (добавляет стили предыдущему элементу)
    function prevSlide(index) {
        changSlide(index);
        if (index === 0) {
            newSlide(2);
            currentIndex = 2;
        } else {
            newSlide(index - 1);
            currentIndex -= 1;
        }    
    };
};
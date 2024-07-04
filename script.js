// Находим все элементы input и textarea в форме
const formInputs = document.querySelectorAll('.hero__form-input, .hero__form-textarea');

// Добавляем обработчики событий для каждого элемента
formInputs.forEach(input => {
    input.addEventListener('mouseenter', function() {
        // Увеличиваем толщину бордера
        this.style.borderWidth = '3px'; // Можете указать любое другое значение
    });

    input.addEventListener('mouseleave', function() {
        // Возвращаем толщину бордера к изначальной
        this.style.borderWidth = '';
    });
});

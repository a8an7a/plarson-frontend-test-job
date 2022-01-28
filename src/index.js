// Подключаем к старнице CSS стили
import '@/styles/styles.scss'
;(function () {
    // Добавляем обработчик события, который сработает, когда HTML-документ будет полностью загружен
    function ready(f) {
        document.readyState == 'loading'
            ? document.addEventListener('DOMContentLoaded', f)
            : f()
    }

    function documentFullLoaded() {
        console.log('Воу! Страница полностью загружена.')

        // Убираем стандартное поведение формы при нажатии кнопки типа Submit
        const form = document.querySelector('#send-form')
        form.addEventListener('submit', event => {
            event.preventDefault()
        })
    }

    ready(documentFullLoaded)
})()

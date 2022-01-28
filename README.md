# Тестовое задание на вакансию Frontend-разработчика в компанию Plarson

Реализация [тестового задания](https://plarson.ru/about/job/front-end/) на вакансию "Frontend-разработчика" в компанию Plarson.

Используемы стек технологий:

1. **HTML / CSS**
2. **JavaScript**
3. **SCSS**
4. **Webpack**

## Реализация интерфейса часта

![Реализованный интерфейс чата](src/page__screen.png 'P7AY3R5')

## SQL запрос

Расположение `src/db.sql`

`SELECT 'Январь', 31 UNION SELECT 'Февраль', 28 UNION SELECT 'Март', 31 UNION SELECT 'Апрель', 30 UNION SELECT 'Май', 31 UNION SELECT 'Июнь', 30 UNION SELECT 'Июль', 31 UNION SELECT 'Август', 31 UNION SELECT 'Сентябрь', 30 UNION SELECT 'Октябрь', 31 UNION SELECT 'Ноябрь', 30 UNION SELECT 'Декабрь', 31`

## Аналог метода window.onload

Расположение `src/index.js`

    function ready(f) {
        document.readyState == 'loading'
            ? document.addEventListener('DOMContentLoaded', f)
            : f()
    }

    function f() {
        console.log('Воу! Страница полностью загружена.')
        // ...
    }

    ready(f)

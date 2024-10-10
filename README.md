# only-test

## Обзор проекта

## Необходимые зависимости

Для работы с проектом необходимо установить:

- **Node.js** (версия 16.x или выше)
- **npm** (идет в комплекте с Node.js)

## Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/HannahStarling/only-test.git
```

2. Перейдите в папку с проектом:

 ```bash
cd only-test
```

3. Установите зависимости:

 ```bash
npm install
```

## Запуск проекта

Чтобы запустить проект в режиме разработки:

 ```bash
npm start
```

Проект запустится на сервере по умолчанию на http://localhost:3000.

## Сборка проекта

Для создания оптимизированной сборки для продакшена:

 ```bash
npm run build
```

Готовая сборка будет находиться в папке build. Эта сборка оптимизирована для лучшей производительности и готова к деплою.

## Линтинг и форматирование

Проект использует ESLint и Prettier для обеспечения качества кода.

Для проверки на ошибки линтинга:

 ```bash
npx eslint . --ext .ts,.tsx
```

Для автоматического исправления ошибок линтинга:

 ```bash
npx eslint . --ext .ts,.tsx --fix
```

Для форматирования кода с использованием Prettier:

 ```bash
npx prettier --write .
```

Используемые технологии

- React: JavaScript-библиотека для создания пользовательских интерфейсов.
- TypeScript: Надстройка над JavaScript с поддержкой статической типизации.
- SCSS: препроцессор для CSS.
- ESLint: Инструмент для проверки и исправления проблем в коде JavaScript/TypeScript.
- Prettier: Инструмент для автоматического форматирования кода.
- Swiper: Современный мобильный слайдер для создания каруселей.
- GSAP: JavaScript-библиотека для создания высокопроизводительных анимаций.

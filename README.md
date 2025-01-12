# Shopify Featured Products Section

## Опис проєкту

Цей проєкт додає секцію **Featured Products** до головної сторінки Shopify магазину, використовуючи стандартну тему **Dawn**. Секція виводить список рекомендованих продуктів із заданої колекції, з можливістю додавання товару в кошик без перезавантаження сторінки.

---

## Функціонал

- Виведення рекомендованих продуктів із вибраної колекції через кастомайз теми.
- Якщо товар із колекції вже є в кошику — він не відображається в секції.
- Додавання товару до кошика відбувається через AJAX без перезавантаження сторінки.
- Додавання товару оновлює попап кошика та список товарів у секції (через Section Rendering API).
- Адаптивна верстка за принципом **Mobile First**.
- Весь код написаний без використання CSS фреймворків чи jQuery.

---

## Використані технології

- **Shopify Dawn Theme** як базова тема.
- **Gulp** для автоматизації задач.
- **SCSS** для стилів з використанням методології **BEM**.
- **Vanilla JavaScript** для динамічного функціоналу (додавання до кошика, Section Rendering API).
- Компонентний підхід до верстки, як у темі Dawn.

---

## Інструкція з розгортання

1. **Клонування репозиторію**  
   ```bash
   git clone https://github.com/dokrod/refactor-test-task
   cd refactor-test-task
   ```

2. **Встановлення залежностей**  
   Переконайтесь, що у вас встановлений Node.js.  
   ```bash
   npm install
   ```

3. **Запуск локального середовища розробки**  
   Використовуйте Shopify CLI для запуску середовища:
   ```bash
   shopify theme dev
   ```

---

## Особливості

- **Section Rendering API**: Використовується для оновлення списку продуктів після додавання до кошика.
- **AJAX**: Додавання товарів до кошика та оновлення попапу виконується без перезавантаження сторінки.
- **BEM**: Методологія для іменування CSS класів, що робить код структурованим і легко підтримуваним.

---

## Посилання

- **Демонстрація магазину**: [Shopify Test Store](https://2cim3e-73.myshopify.com/)  
  **Пароль до магазину**: `skeant`

- **GitHub Репозиторій**: [GitHub](https://github.com/dokrod/refactor-test-task)
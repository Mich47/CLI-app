# CLI-app

Консольний застосунок для роботи зі списком контактів.

## Usage/Examples

#### Отримуємо і виводимо весь список контактів у вигляді таблиці

```javascript
node index.js --action="list"
```

![App Screenshot](https://i.ibb.co/YD39hfk/1.jpg)

#### Отримуємо контакт по id

```javascript
node index.js --action="get" --id=7
```

![App Screenshot](https://i.ibb.co/0fFc2Jf/2.jpg)

#### Додаємо контакт

```javascript
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
```

![App Screenshot](https://i.ibb.co/x7QLNYC/3.jpg)

#### Видаляємо контакт

```javascript
node index.js --action="remove" --id=6
```

![App Screenshot](https://i.ibb.co/bJc0fMc/4.jpg)

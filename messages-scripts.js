const commands = `
/start - Перезапустить бота
/congrats - Выслушать поздравления
/kick - Получить мотивацию
/card - Получить открытку
/help - Помощь
`

const welcome = (name) => `Ну привет, ${name}! Кажется, настал твой день. Этот бот создан специально по этому случаю. Приготовься выслушивать поздравления :)`;

const replyToHi = 'Приветулики, жопка';

const congrats = `Ну что ж, Антон Сергеевич. Вот и настал момент, когда 30 лет уже ближе, чем 20. Это хороший рубеж, чтобы подвести промежуточные итоги и продолжить наслаждаться
молодостью. Я очень рад, что мы дружим и рад, что ты постоянно развиваешься как личность и как специалист. Очень круто, что ты нашёл своё дело себе по душе и упорно добиваешься
успеха, растёшь и повышаешь свою ценность как специалиста. Всего за год ты сменил сферу деятельности, не побоялся и начал всё с нуля, перевернул свою жизнь и отправился в новое, 
неизведанное доселе путешествие, трудн ости в котором ты преодолеваешь с высоко поднятой головой. Ты делаешь очень стремительную карьеру, но я этому не удивлён, потому что ты всегда 
был упорным и настырным в своихначинаниях. Продолжай в том же духе и уже к 30 (а это уже скоро, хих) ты достигнешь всего того, к чему идёшь. Желаю тебе отлично провести свой день 
рождения, продуктивного наступивщего года и друзей рядом! Уверен, уже к следующему дню рождения ты подойдёшь с гораздо большим количеством жизненных итогов и нам опять же будет что 
вспомнить. С днём рождения тебя, дружище!`;

const kick = 'Не понял, ты ещё не начал делать ботов? Давай быро начинай, их кстати можно делать и на свифте ;)';

const help = `Для выслушивания поздравлений нажми "Выслушать поздравления". Если ты ещё не начал писать ботов и хочешь пинок под жопу нажми "Порция мотивации". Ну а для получения
открытки нажми наконец "Получить открытку"!`;

const commandError = 'Произошла ошибка загрузки команды :( попробуйте позже';

exports.commands = commands;
exports.welcome = welcome;
exports.replyToHi = replyToHi;
exports.congrats = congrats;
exports.kick = kick;
exports.help = help;
exports.commandError = commandError;
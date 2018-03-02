// Обробка та інтерпретація результатів
// Підрахуйте суму балів. Коли ви дали відповіді А на запитання 2, 5, 7, 8, 10 і В на
// запитання 1, 3, 4, 6, 9, то порахуйте по 2 бали; коли є відповіді Б, то рахуйте по 1
// балу.
// > 5
// > 6 < 13
// > 13 < 20
// > 20

export const answerTest = {
  5: 'Ви лагідні, не схильні до заздрощів, легко ладнаєте з людьми, не прагнете будь – що перевершити оточуючих. Ви ставите перед собою' +
    ' складні перспективні цілі. Якщо не обмежують і не прищеплюють перспективних цілей, задач, ви спокійно працюєте в групі. Про людей, ' +
    'як відсутніх, так і присутніх, ви висловлюєтеся добре, більше схильні їх захищати, ніж засуджувати. Негативні емоції швидко хникають' +
    ' і ви спокійно, без образи встановлюєте контакт із людиною, яка образила вас.',
  6: 'Ви достатньо гнучкі у стосунках з іншими людьми, але змінюєте думку про людину важко, не дивлячись на очевидні для всіх факти. ' +
    'Ви готові змінити думку про людину швидше в кращу сторону, ніж негативно. Перш ніж перейти на дружні відносини, ви якийсь час ' +
    'вивчаєте людину. Ви відкриті для спілкування, компромісних рішень, не любите конфліктувати',
  13: 'Ви обережна людина, у всьому бачите таємницю, повні сумнівів у своїй безпеці, схильні до недовірливості й підозріливості. Ваша ' +
    'гордість не допускає можливості бути беззахисним. Ви завжди готові до боротьби, живете в очікуванні конфлікту і тим самим ' +
    'провокуєте його. Ви знаєте прийоми супротивників, умієте управляти оточуючими, добиватися своїх цілей за допомогою певного набору ' +
    'універсальних дій. Проте ви погано орієнтуєтеся у глибинних знаннях психології людей, не враховуєте внутрішній світ людини, ' +
    'вступаючи з ними у ділові стосунки',
  20: 'Для вас конфлікт – спосіб життя. Вам важко встановлювати позитивні взаємини з людьми'
};
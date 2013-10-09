var APP = {};
(function () {
    var APPDATA = "AppData",
        appData = store.get(APPDATA);

    APP.Data = {};
    APP.Data.Raw = [
        {
            "Timestamp": "9/28/2013 2:51:14",
            "first_name": "Никита",
            "last_name": "Попов",
            "city": "Санкт-Петербург",
            "about": "О себе о себе о себе",
            "link_photo": "http://cs408530.vk.me/v408530792/1e45/XISCuQa83W4.jpg",
            "link_facebook": "facebook.com/popov.nikita",
            "link_vk": "vk.com/nikita.v.popov",
            "link_gihub": "github.com/losnikitos",
            "link_yaru": "losnikitos123.ya.ru",
            "photos": {
                "s": "app/img/students/s/00.jpg",
                "m": "app/img/students/m/00.jpg",
                "b": "app/img/students/b/00.jpg"
            }
        },
        {
            "Timestamp": "9/28/2013 15:13:05",
            "first_name": "Роман",
            "last_name": "Орловский",
            "city": "Нижний Новгород",
            "about": "Обо мне, обо мне, обо мне",
            "link_photo": "http://cs14115.vk.me/c315820/v315820751/33bf/zID6ILpd6L0.jpg",
            "link_facebook": "",
            "link_vk": "http://vk.com/id3776751",
            "link_gihub": "https://github.com/Romanaldo/",
            "link_yaru": "http://ctuxu-r.ya.ru/",
            "photos": {
                "s": "app/img/students/s/01.jpg",
                "m": "app/img/students/m/01.jpg",
                "b": "app/img/students/b/01.jpg"
            }
        },
        {
            "Timestamp": "9/28/2013 19:10:29",
            "first_name": "Андрей",
            "last_name": "Морозов",
            "city": "Ставрополь",
            "about": "Учусь на 3-ем курсе в МАТИ - РГТУ им. К.Э. Циолковского по специальности \"Информатика и вычислительная техника\". Впервые столкнулся с версткой на 2-ом курсе. Нам преподавали курс под названием \"WEB-технологии\", в рамках которого были HTML и CSS. Мне безумно понравилось верстать. И я точно решил, что моя будущая работа будет связана с вебом.",
            "link_photo": "http://i.imgur.com/byyMclh.jpg",
            "link_facebook": "https://www.facebook.com/1uckytrue",
            "link_vk": "https://vk.com/luckytrue",
            "link_gihub": "https://github.com/LuckyTrue",
            "link_yaru": "http://luckytrue.ya.ru/",
            "photos": {
                "s": "app/img/students/s/02.jpg",
                "m": "app/img/students/m/02.jpg",
                "b": "app/img/students/b/02.jpg"
            }
        },
        {
            "Timestamp": "9/28/2013 19:37:30",
            "first_name": "Максим",
            "last_name": "Попков",
            "city": "Балашиха",
            "about": "С детства вожусь с техникой, слежу за прогрессом и познаю новое. Мне нравятся веб-технологии, возможность увидеть результат работы и показать его другим. Школа стала для меня вектором в саморазвитии, направляет и помогает пробиться в джунглях front-end`а.",
            "link_photo": "http://img-fotki.yandex.ru/get/9301/35759599.0/0_9b1ec_264822bf_L.jpg",
            "link_facebook": "",
            "link_vk": "http://vk.com/dales3d",
            "link_gihub": "https://github.com/maxim-popkov/",
            "link_yaru": "http://dales3d.ya.ru/",
            "photos": {
                "s": "app/img/students/s/03.jpg",
                "m": "app/img/students/m/03.jpg",
                "b": "app/img/students/b/03.jpg"
            }
        },
        {
            "Timestamp": "9/28/2013 19:46:14",
            "first_name": "Алексей",
            "last_name": "Кондратов",
            "city": "Москва",
            "about": "После школы поступил в Московский инженерно-физический институт, но потом его переименовали, и закончил в 2012 году я уже Национальный исследовательский ядерный университет \"МИФИ\", став магистром прикладной математики и физики. Потом я поступил в аспирантуру одного из институтов физического отделения РАН, где и учусь в настоящее время.\n\nЧто касается веб-разработки, то первый сайт я сделал в школе для какого-то местного конкурса, а делал я его в страшной штуке под названием Microsoft FrontPage. Затем я забыл о вебе очень надолго, в институте достаточно много программировал на Pascal, Fortran + MPI/OpenMP, Python, MATLAB, Wolfram Mathematica, но в основном это сводилось к решению разных математических/физических задач.\n\nВ конце 5-го курса института друзья позвали в маленький \"стартап\" по поиску и продаже туров онлайн. Там я и работаю уже больше 2-х лет, программирую на Ruby/RoR, JS. Учуствовал как в фронтенд так и в бэкенд разработке различных проектов: сайт-знакомств, интернет-магазин, игру для Вконтакте, просто разные сайты, даже писал свою CMS для интернет-магазина.",
            "link_photo": "https://dl.dropboxusercontent.com/u/1122837/photo-for-shri.jpg",
            "link_facebook": "https://www.facebook.com/ololobus",
            "link_vk": "https://vk.com/ololoshkiiii",
            "link_gihub": "https://github.com/ololobus",
            "link_yaru": "http://alex-ololo.ya.ru/",
            "photos": {
                "s": "app/img/students/s/04.jpg",
                "m": "app/img/students/m/04.jpg",
                "b": "app/img/students/b/04.jpg"
            }
        },
        {
            "Timestamp": "9/28/2013 19:56:02",
            "first_name": "Михаил",
            "last_name": "Шустов",
            "city": "Санкт-Петербург",
            "about": "Пожил по всей стране, влюбился в Питер, там и живу последние 2 года.\nОкончил МЭИ по специальности Автоматизация технологических процессов и производств.  Собственно и работал программистом АСУТП. Писал на ассемблеро-подобных языках и C системы автоматического управления , как правило целых заводов.  Собственно хотелось хардкора и  расти дальше, но скорее как разработчик, а не как руководитель .  Так что год назад просто уволился и открыл книгу Флэнагана и тут понеслось... порадовала необычность асинхронного подхода и широкий спектр решаемых задач, так начал экспериментировать начиная от node.jsи заканчивая мобильными приложениями, подтянул верстку и сделал первые заказы по фрилансу . \nВ ШРИ пошел чтобы учиться у лучших спецов. Да и сама атмосфера и формат школы дико заряжает -смотришь на окружающих людей и понимаешь какой еще тебе предстоит путь. И это скорее не пугает, а мотивирует.  Так что успехов все нам, пасаны))  ",
            "link_photo": "http://cs411121.vk.me/v411121849/4e8f/RK29XcJBwXA.jpg",
            "link_facebook": "https://www.facebook.com/mikhail.shust.5",
            "link_vk": "http://vk.com/saintpchav",
            "link_gihub": "https://github.com/restrry",
            "link_yaru": "http://restrry.ya.ru/",
            "photos": {
                "s": "app/img/students/s/05.jpg",
                "m": "app/img/students/m/05.jpg",
                "b": "app/img/students/b/05.jpg"
            }
        },
        {
            "Timestamp": "9/28/2013 20:07:32",
            "first_name": "Михаил",
            "last_name": "Коциевский",
            "city": "Одесса",
            "about": "Начал щупать верстку очень давно, но дальше сверстать шаблончик в ЖЖ таблицами однокурсницам за чашку кофе дело не заходило. По этому поводу я работал в далеких от IT сферах. Чуть меньше года назад прочел несколько книжек и устроился QA в аутсорсинговую компанию. Несколько месяцев назад меня перевили на должность разработчика на подхвате - сверстать чего, скриптик какой написать и т.п. \n\nЭту работу мне пришлось бросить ради ШРИ, но я совершенно ни о чем не жалею. За эти 10 дней в Москве я узнал больше, чем за 2 последних месяца на работе, у меня появилось время читать техническую литературу и вообще с классными ребятами познакомился.\n\nНадеюсь, удастся получить от этой авантюры еще больше.\n\nОчень сложно выбрать, направление, которое мне больше всего нравится в Яндексе. Лекторы как на подбор просто. До сегодня лидировал Поиск, но теперь хочу и в Маркет и в Оптимизацию.\n\nЯ решил всех поразить своим умением сверстать в HTML-режиме, но парсер все равно внес свои коррективы. Всем добра.",
            "link_photo": "http://cs406.vk.me/u3659839/66194715/x_eb7b3905.jpg",
            "link_facebook": "https://www.facebook.com/maxvektor",
            "link_vk": "http://vk.com/kotsievsky",
            "link_gihub": "https://github.com/Kocijevsky",
            "link_yaru": "http://m-kocijevsky.ya.ru/",
            "photos": {
                "s": "app/img/students/s/06.jpg",
                "m": "app/img/students/m/06.jpg",
                "b": "app/img/students/b/06.jpg"
            }
        },
        {
            "Timestamp": "9/28/2013 21:34:50",
            "first_name": "Мария",
            "last_name": "Метелёва",
            "city": "Киров",
            "about": "Всем привет!\n\n \n\nМеня зовут Маша.\n\nЯ приехала в Москву из города Кирова, в 2008 году поступила в Московский Физико-Технический Институт(в народе Физтех), и моя жизнь резко изменилась.\n\nК началу второго курса я начала испытывать нежные чувства к С++(что до сих пор не изменилось, потому что первая любовь, как известно, не забывается).\n\nСейчас учусь в магистратуре(6 курс) на кафедре \"Компьютерная лингвистика\" и в связи с этим работаю в отделе Semantic Search компании Abbyy(онтологии, InfoExtraction, все дела...).\n\n \n\nПро ШРИ я узнала давно, случайно наткнувшись на прошлогодние лекции. Посмотрела немного - понравилось. И забылось.\n\nНо сейчас я здесь и..ок, обо всем по порядку.\n\nТак получилось, что год назад я пошла на дополнительный курс на Физтехе \"Современные методы коллективной разработки ПО\", который должен был иметь логическое завершение в форме проекта, говорящего \"я не зря каждую неделю прогуливала свои пары и слушала эти лекции\".\n\nПроект все еще разрабатывается, но, что важно, в процессе было решено реализовать некоторый веб-интерфейс. На протяжении ~полугода я занималась изучением HTML/CSS/JS/etc., что мне очень нравилось, но не хватало систематизации знаний. И в один прекрасный день я вспомнила про ШРИ, увидев пост на хабре.\n\nМеня всегда тянуло к людям, которые знают больше чем я, и у которых можно многому научиться. Поэтому я очень рада, что поступила в ШРИ. \n\n \n\nБольшое спасибо преподавателям школы за замечательные лекции и всем удачи : )",
            "link_photo": "http://cs309418.vk.me/v309418752/cc67/cjxo9lnG7cw.jpg",
            "link_facebook": "https://www.facebook.com/prosto42",
            "link_vk": "http://vk.com/prosto_koshka",
            "link_gihub": "https://github.com/koshka",
            "link_yaru": "http://kotia292007.ya.ru/",
            "photos": {
                "s": "app/img/students/s/07.jpg",
                "m": "app/img/students/m/07.jpg",
                "b": "app/img/students/b/07.jpg"
            }
        },
        {
            "Timestamp": "9/28/2013 21:47:18",
            "first_name": "Сергей ",
            "last_name": "Максимов",
            "city": "Москва",
            "about": "Три года назад я получил диплом инженера в РХТУ им. Менделеева. Уже с 4 курса начал заниматься разработкой приложений. Первоначально это были \"толстые\" клиенты. Со временем удалось получить опыт работы с различными СУБД, а также написания своих и интеграции чужих веб-сервисов. Параллельно основной работе в качестве хобби изучал администрирование ОС Linux. На данном этапе мои рабочие задачи включают в себя разработку интерфейса для ряда заказных систем.\n\nВ рамках школы хотел бы заполнить пробелы в знаниях технологии разработки хороших пользовательских интерфейсов.",
            "link_photo": "http://img-fotki.yandex.ru/get/9265/25524525.0/0_aa625_da21f6b4_L.jpg",
            "link_facebook": "",
            "link_vk": "",
            "link_gihub": "https://github.com/Unlocker",
            "link_yaru": "http://hakerxnet.ya.ru/",
            "photos": {
                "s": "app/img/students/s/08.jpg",
                "m": "app/img/students/m/08.jpg",
                "b": "app/img/students/b/08.jpg"
            }
        },
        {
            "Timestamp": "9/29/2013 0:57:50",
            "first_name": "София",
            "last_name": "Павленко",
            "city": "Москва",
            "about": "Я родилась и выросла в Москве. В школе любила информатику и математику, а в 9-м классе подружка позвала сходить на экзамен в лицей при МИФИ, в результате вопрос куда поступать сам собой отпал:) К сожалению, в институте было много теории и очень мало практики(и то Delphi). После защиты диплома я несколько лет работала не по специальности, но мне постоянно хотелось там что-то автоматизировать и я решила \"вернуться\", о чем совсем не жалею. \n\nСейчас у меня достаточно разнообразная работа: участвую в разработке десктопных приложений обработки информации(QT), работаю с картографическим материалом, геоинформационными системами, с недавнего времени пишу небольшие библиотеки на JS.  \n\nВ ШРИ я пришла, потому что мне очень интересна web-разработка, хочется учиться и развиваться в этой области, систематизировать отрывочные знания и попрактиковаться.",
            "link_photo": "http://img-fotki.yandex.ru/get/9114/225957471.0/0_10832e_fc57d136_XL.jpg",
            "link_facebook": "https://www.facebook.com/sofiushko",
            "link_vk": "http://vk.com/sonja",
            "link_gihub": "https://github.com/sofiushko",
            "link_yaru": "http://artsonja.ya.ru/",
            "photos": {
                "s": "app/img/students/s/09.jpg",
                "m": "app/img/students/m/09.jpg",
                "b": "app/img/students/b/09.jpg"
            }
        },
        {
            "Timestamp": "9/29/2013 12:57:50",
            "first_name": "Наталия",
            "last_name": "Смирнова",
            "city": "Иркутск",
            "about": "Всем привет. Я из семьи военного, дольше всего жила в Иркутске. В Москве с 2008 г. Закончила матфак Иркутского государственного университета. Программистом начала работать с 3 курса. Пошла в 1С-программирование. Но...тяжела и неказиста жизнь 1С-программиста. В основном потому, что часто приходится читать правовые базы типа Гаранта, вкапываться в тонкости ведения не только белого, но и черного учета, а это весьма богомерзкие занятия. Захотелось более абстрактной работы. И тут меня позвали в аспирантуру. В аспирантуре первые полтора года все равно пришлось заниматься 1С - внедряла в институте \"1С: Зарплата и кадры\". Тут приходилось быть не только программистом, но и дипломатом, потому что одновременно с этим в институте происходила реструктуризация бизнес-процессов в бухгалтерии и прочих околоуправленческих отделах. Довела программу до такого состояния, чтобы в ней можно было вести учет, и ушла в науку.\n \nНаучно-популярно часть своих научных изысканий описала тут: \nhttp://habrahabr.ru/post/194240/ Написала диссертацию. Теперь еще нужно выловить научного руководителя, чтобы он ее прочитал. Ну а пока разрабатываю подсистему проверки решений для обучающих программ: https://github.com/indra-uolles/solution_tracer. Хочу ее сделать в виде отдельного open-source компонента, а также попробовать его проинтегрировать с платформой EdX.\n \nШРИ привлекла прежде всего возможностью попасть на практику в Яндекс. Ну а если и не попаду туда, то в любом случае это будет хороший старт - после того, как допопуляризирую свои научные результаты, хочу пойти работать веб-разработчиком (в ближайшие 2-3 года хочется отдохнуть от алгоритмов и прокачать культуру разработки программного кода).",
            "link_photo": "http://img-fotki.yandex.ru/get/9252/75423989.0/0_c583e_4d74f0e_L",
            "link_facebook": "https://www.facebook.com/nataliasmirnova.natalia",
            "link_vk": "http://vk.com/id24213991",
            "link_gihub": "https://github.com/indra-uolles",
            "link_yaru": "http://indra-uolles.ya.ru/",
            "photos": {
                "s": "app/img/students/s/10.jpg",
                "m": "app/img/students/m/10.jpg",
                "b": "app/img/students/b/10.jpg"
            }
        },
        {
            "Timestamp": "9/29/2013 15:48:22",
            "first_name": "Павел",
            "last_name": "Мягков",
            "city": "Москва",
            "about": "",
            "link_photo": "http://cs408419.vk.me/v408419238/132b/p9dNxZto-Ok.jpg",
            "link_facebook": "https://www.facebook.com/pmyagkov",
            "link_vk": "http://vk.com/muelle",
            "link_gihub": "https://github.com/pmyagkov",
            "link_yaru": "http://p-a-myagkov.ya.ru/",
            "photos": {
                "s": "app/img/students/s/11.jpg",
                "m": "app/img/students/m/11.jpg",
                "b": "app/img/students/b/11.jpg"
            }
        },
        {
            "Timestamp": "9/29/2013 18:22:32",
            "first_name": "Сергей",
            "last_name": "Борончиев",
            "city": "Санкт-Петербург",
            "about": "Меня зовут Сергей Борончиев (профиль на moikrug.ru). Я из Санкт-Петербурга, последние полтора года живу и работаю в Москве.\n\nВ 2007 году, когда я только начинал интересоваться веб-разработкой, побывал на третьей открытой встрече сообщества «Веб-стандарты» и решил, что хочу развиваться во фронтэнд-направлении. Читал много книг и тематических блогов, верстал свои первые сайты. Не застал IE5.5, но на поддержке IE6 закалился. Сделал настольной книгу с рыбами, книгу с носорогом откладывал до недавнего времени.\n\nС '09 по '12 годы я работал в небольших петербургских веб-студиях: верстал несложные сайты и программировал модули для популярных CMS, параллельно попробовал себя во всех смежных областях – от аналитики до интернет-рекламы.\n\nВ 2012 меня пригласили работать в LiveJournal (SUP Media) в качестве верстальщика. Я занимался версткой новых нежурнальных сервисов и поддержкой существующих. Последние полгода я руковожу одной из групп разработки ЖЖ.\n\nПоставил цель – развиться в комплексного фронтендера – разбираюсь с JS, интересуюсь методами повышения эффективности командной работы и управлением проектами. Коллеги, выпускники прошлого года, рекомендовали ШРИ, как отличный интенсив, охватывающий все аспекты разработки.",
            "link_photo": "https://dl.dropboxusercontent.com/u/1544597/boronchiev.jpg",
            "link_facebook": "",
            "link_vk": "",
            "link_gihub": "",
            "link_yaru": "",
            "photos": {
                "s": "app/img/students/s/12.jpg",
                "m": "app/img/students/m/12.jpg",
                "b": "app/img/students/b/12.jpg"
            }
        },
        {
            "Timestamp": "9/29/2013 19:18:30",
            "first_name": "Александр",
            "last_name": "Нефедов",
            "city": "Ярославль",
            "about": "Родился и вырос в Ярославле. В этом году окончил ЯрГУ на факультете ИВТ.\nКакое-то время писал на c++, немного участвовал в ACM.\nБольше двух лет работаю в \"Тензоре\" веб-программистом. Начинал с каких-то простых страничек ещё во времена Netscape Navigator. Когда-то писал на php, немного на java, сейчас предпочитаю node.js. По работе в основном пишу/отлаживаю клиентский javascript.",
            "link_photo": "http://cs9255.vk.me/u1079690/105302838/x_5d23974b.jpg",
            "link_facebook": "https://www.facebook.com/garret.rus",
            "link_vk": "http://vk.com/id3157005",
            "link_gihub": "https://github.com/4eb0da",
            "link_yaru": "https://garret-rus.ya.ru/",
            "photos": {
                "s": "app/img/students/s/13.jpg",
                "m": "app/img/students/m/13.jpg",
                "b": "app/img/students/b/13.jpg"
            }
        },
        {
            "Timestamp": "9/29/2013 22:26:22",
            "first_name": "Дмитрий",
            "last_name": "Душкин",
            "city": "Электросталь",
            "about": "Родился и рос в г. Электросталь Московской области. Поступил в МТУСИ на факультет ИТ. Пару месяцев назад окончил аспирантуру Института проблем управления. Готовлюсь к защите, которая состоится в конце октября. Про диссертацию можно посмотреть тут и почитать тут.\nИТ увлекаюсь с детства. Интерес к веб-технологиям начался в школе с Flash, потом плавно перерос к HTML, JS, PHP и понеслась. Сейчас из фаворитов это Erlang для серверов, Python для веб-приложений и AngularJS для клиента. Недавно приступил к технологиям, облегчающим быт фронт-эндера: Yeoman, Grunt, Bower.\nВ институте начинал с фриланса, потом со знакомым открыли небольшую веб-студию. К диплому надо было выбирать: бизнес или хороший диплом (далее аспирантура). Выбрал второе, о чем до сих по не жалею.) Сейчас работаю научным сотрудником в лаборатории №17 ИПУ РАН. Повезло с начальством – часто научные задачи предполагают практическую реализацию, в т.ч. с веб-интерфейсом, поэтому была возможность поизучать что-нибудь новенькое.\nВ школе интересует тема разработки крупных и сложных веб-проектов. Архитектурные и социальные решения в компаниях уровня Яндекс. Также надеюсь попасть на практику и потом работать в Яндекс.",
            "link_photo": "http://img-fotki.yandex.ru/get/9250/43146692.0/0_fdbcf_ac23f232_L",
            "link_facebook": "",
            "link_vk": "",
            "link_gihub": "https://github.com/DimitryDushkin",
            "link_yaru": "http://legato-di.ya.ru/",
            "photos": {
                "s": "app/img/students/s/14.jpg",
                "m": "app/img/students/m/14.jpg",
                "b": "app/img/students/b/14.jpg"
            }
        },
        {
            "Timestamp": "9/30/2013 14:21:34",
            "first_name": "Анна",
            "last_name": "Минаева",
            "city": "Москва",
            "about": "Веб-разработкой заинтересовалась еще в далекие школьные годы, самостоятельно начала изучать HTML, помогала друзьям делать сайты.\nПосле окончания института пробовала себя в разных областях, попутно перевела с английского несколько книг, в том числе по CSS и проектированию интерфейсов. И все больше хотелось применить теорию на практике в серьезных проектах.Так хобби стало моей работой - на данный момент я занимаюсь разработкой и поддержкой сайтов крупной телекоммуникационной компании, больше всего пишу на XSLT и JavaScript.\n\nШРИ для меня прежде всего замечательная возможность узнать много нового, систематизировать свои знания и, конечно, познакомиться с интересными людьми, увлеченными своим делом.",
            "link_photo": "http://img-fotki.yandex.ru/get/9557/225755747.0/0_f4b79_54a022b5_L.jpg",
            "link_facebook": "https://www.facebook.com/rainybowls",
            "link_vk": "",
            "link_gihub": "https://github.com/rainybowl",
            "link_yaru": "http://rainybowl.ya.ru/",
            "photos": {
                "s": "app/img/students/s/15.jpg",
                "m": "app/img/students/m/15.jpg",
                "b": "app/img/students/b/15.jpg"
            }
        },
        {
            "Timestamp": "9/30/2013 15:35:23",
            "first_name": "Евгения",
            "last_name": "Костенко",
            "city": "Москва",
            "about": "Родилась на Украине, выросла в подмосковном Фрязино, затем поступила в МГУ на факультет вычислительной математики и кибернетики и окончательно перебралась в Москву.\nНадеюсь, что ШРИ станет мощным стартом на моем пути разработчика.",
            "link_photo": "http://cs402119.vk.me/v402119174/5a5/O3C6sv2KgPM.jpg",
            "link_facebook": "http://www.facebook.com/eugeshko",
            "link_vk": "http://vk.com/eugeshko",
            "link_gihub": "https://github.com/eugeshko",
            "link_yaru": "http://eugeshko.ya.ru/",
            "photos": {
                "s": "app/img/students/s/16.jpg",
                "m": "app/img/students/m/16.jpg",
                "b": "app/img/students/b/16.jpg"
            }
        },
        {
            "Timestamp": "9/30/2013 15:45:35",
            "first_name": "Марина",
            "last_name": "Акимова",
            "city": "Москва",
            "about": "Родилась и живу в Москве. После школы закончила колледж по направлению менеджмент и о карьере в области IT как-то совсем не задумывалась=)\nНедолго проучилась в негосударственном Вузе по направлению психологии, но быстро поняла, что предлагаемое образование мне и даром не нужно)\nПоэтому взяла школьные книжки по математике и поучив ненавистную мне математику поступила в НИУ МЭИ на кафедру ММ:)\nИнтересоваться веб-разработкой начала совсем недавно. Мне кинули ссылочку на описание первой школы, я загорелась идеей попасть сюда и к моей радости  - я тут)\nЗдорово, что в ШРИ постоянно узнаешь что-то новое, и тем более от людей, которые являются фанатами своего дела=)",
            "link_photo": "http://img-fotki.yandex.ru/get/9265/93452933.0/0_f4f56_95ad678b_M.jpg",
            "link_facebook": "",
            "link_vk": "http://vk.com/id209848299",
            "link_gihub": "https://github.com/MaHTuCCa",
            "link_yaru": "http://akimovamp.ya.ru/",
            "photos": {
                "s": "app/img/students/s/17.jpg",
                "m": "app/img/students/m/17.jpg",
                "b": "app/img/students/b/17.jpg"
            }
        },
        {
            "Timestamp": "9/30/2013 16:07:48",
            "first_name": "Асхат",
            "last_name": "Нуриддинов",
            "city": "Москва",
            "about": "Привет.\nЯ учусь на третьем курсе мехмата МГУ. Люблю математику и естественные науки, увлекаюсь промышленным дизайном, урбанистикой.\nПознакомился с веб-технологиями в школе. Недоумевал, почему все не любят ИЕ6, даже после выхода 7-ой и 8-ой версии я оставался на 6-ой, потому что она была гораздо быстрее и новые окна в ней открывались гораздо быстрее, чем новые вкладки в 7-ой. До уровня, на котором начинают понимать, в чём плох ИЕ6 тогда не дорос.\nНа втором курсе захотелось кушать, начал что-то почитывать про JS, PHP, MySQL.\nСейчас ощущаю себя в обществе людей, гораздо более продвинутых в этой области, чем я. Это мотивирует меня развиваться.\nНадеюсь, что в ШРИ я превращусь из любителя в профессионала.",
            "link_photo": "http://cs316125.vk.me/v316125448/2b1a/Oc1vP_ex1Kk.jpg",
            "link_facebook": "",
            "link_vk": "https://vk.com/askhat",
            "link_gihub": "https://github.com/geromond",
            "link_yaru": "http://geromond.ya.ru/",
            "photos": {
                "s": "app/img/students/s/18.jpg",
                "m": "app/img/students/m/18.jpg",
                "b": "app/img/students/b/18.jpg"
            }
        },
        {
            "Timestamp": "9/30/2013 16:30:00",
            "first_name": "Иван",
            "last_name": "Полюхович",
            "city": "Ярославль",
            "about": "Меня зовут Иван, 23 года, родился в Ярославле, последние лет 10 живу в Москве. \nВыпускник МГТУ им. Н.Э.Баумана. \nСерьёзного опыта веб-разработки не имею, в Школу попал скорее от большого желания. В ШРИ надеюсь систематизировать знания, шире взглянуть на фронтенд-разработку и перенять опыт профессионалов. Спасибо Яндексу за предоставленную возможность.\n",
            "link_photo": "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-prn2/1235040_10202050873057445_1771012697_n.jpg",
            "link_facebook": "https://www.facebook.com/iamfoont",
            "link_vk": "http://vk.com/merzavcev",
            "link_gihub": "https://github.com/merzavcev",
            "link_yaru": "http://iamfoont.ya.ru/",
            "photos": {
                "s": "app/img/students/s/19.jpg",
                "m": "app/img/students/m/19.jpg",
                "b": "app/img/students/b/19.jpg"
            }
        },
        {
            "Timestamp": "9/30/2013 20:20:56",
            "first_name": "Яна",
            "last_name": "Манухина",
            "city": "Москва",
            "about": "Всем привет! :) \nЯ учусь на 4 курсе МГТУ им. Н.Э. Баумана, на кафедре \"Информационные системы и телекоммуникации\". \n\nО том, что существуют такие волшебные штуки как html и css, я узнала лет в 11 и примерно тогда же поняла, что мне может быть интересно развиваться в этой области. Затем появился интерес к интерфейсам (любым), а также желание делать их максимально удобными и красивыми. А пару лет назад пришло понимание, что можно объединить эти два направления.\n\nВ сентябре прошлого года я увидела раздел ШРИ на Яндекс.событиях и подумала: \"Ага! Вот оно!\". Но оказалось, что я опоздала, и набор закончился 2 дня назад. Оставалось только ждать следующего, сделать вступительные задания и надеяться :)\n\nДля меня ШРИ — это возможность развиваться в области фронтенд-разработки. Очень хочу попасть на практику, чтобы получить hands-on experience, и остаться работать в Яндексе.",
            "link_photo": "http://www.birdie.ru/photo/miscellaneous/yanka-300x450px.jpg",
            "link_facebook": "https://www.facebook.com/yana.manukhina",
            "link_vk": "http://vk.com/id1868886",
            "link_gihub": "https://github.com/yanenok/",
            "link_yaru": "http://yanenok.ya.ru/",
            "photos": {
                "s": "app/img/students/s/20.jpg",
                "m": "app/img/students/m/20.jpg",
                "b": "app/img/students/b/20.jpg"
            }
        },
        {
            "Timestamp": "10/1/2013 13:38:29",
            "first_name": "Максим",
            "last_name": "Мялин",
            "city": "Зеленоград",
            "about": "Привет!\n\nМеня зовут Максим, мне 21 год. Родился и живу в г. Зеленоград.\n\nУчусь на 4 курсе НИУ МИЭТ на кафедре Вычислительных систем. \n\nПрограммировать начал ещё в школе на Pascal. Потом был C++ и C#. На последний подсел основательно, писал всякие штуки для комьюнити Lockerz.\n\nПараллельно с этим начал щупать web. Первым \"шагом\" была Боталка - сайт с учебными материалами для студентов. Работает на CMS Livestreet, которая крутится на облачном сервере. Да, тогда ещё пришлось покурить маны по LAMP, а потом ещё и по nginx. Зато теперь всё стабильно и шустро.\n\nБыло и много фриланса. Писал и под OS X, и под iOS, но \"осел\" именно в web-разработке. То, что не стыдно показать, можно посмотреть на Brainstorage.\n\nПомимо Боталки пошли и другие собственные проекты. Например, MyBoxes - сервис по отслеживанию посылок. Над ним я работаю вместе с другом дизайнером (подробнее можно почитать у него).\n\nБуквально на днях мы запустили сайт с расписанием пар для нашего ВУЗа - http://shaddy.ru/. Пока что там всего один курс одного факультета, но всё ещё впереди :)\n\nПро ШРИ узнал из статьи на Хабре. Пришёл с целью отшлифовать уже имеющиеся знания, получить новые и попытаться попасть в Яндекс.\n\nВ школе особенно нравится \"здоровая IT атмосфера\".\n \nStay tuned!",
            "link_photo": "http://img-fotki.yandex.ru/get/5006/159040040.0/0_c98cf_4367914d_L.jpg",
            "link_facebook": "",
            "link_vk": "http://vk.com/maxim.myalin",
            "link_gihub": "https://github.com/hungrymarvin",
            "link_yaru": "http://maximmyalin.ya.ru/",
            "photos": {
                "s": "app/img/students/s/21.jpg",
                "m": "app/img/students/m/21.jpg",
                "b": "app/img/students/b/21.jpg"
            }
        },
        {
            "Timestamp": "10/2/2013 1:29:39",
            "first_name": "Сергей",
            "last_name": "Попов",
            "city": "Москва",
            "about": "Родился и вырос в Москве.\nПрограммировать начал в детском клубе \"Компьютер\"http://www.child.ru/about.html мы там выполняли разные задания на языках Basic, Logo, Z-80 Assembler. От преподавателей перенял увлечение программированием. Работал компьютерным лаборантом в школе.\nПервый опыт с веб-разработкой в 2004 году, страничка показывала дерево Ethernet-сети и вероятные проблемные узлы.\n\nВ какой-то момент JavaScript внезапно впечатлил выразительностью кода, для меня это первый язык основанный на прототипах.\n\nДля своевременного осваивания JavaScript (CSS, UI) разрабатываю SPA-проект, связанный с параметрическими расчетами, как смог обобщил предмет и интерфейс, пример можно посмотреть здесь http://acidome.ru/lab/calc/next.html#1/2_Class_II_Cone_4V_R4.2_beams_100x100 \nЕсть сообщество, для которого затеен данный проект, приятно осознавать, что твоя программа может быть полезной. Еще фишка в том, что данные расчеты сложно произвести самому и не каждому под силу. Вспоминается случай, письмо из Бразилии от учителя, который жаловался что программа не работает если страницу закачать себе на комп, он хотел показать детям где-то в сельской местности, где нет инета. Со временем появился такой функционал.\n\nПолтора года работал над порталом http://www.gosuslugi.ru/, из интересного двухстронняя шаблонизация и обобщение для форм, научили их работать по декларативному описанию, без кода. Сейчас работаю JavaScript-разработчиком на http://www.rabota.ru/ тут много чего нужно улучшать.\n\nЧлен Пиратской партии России.\n\nКоллега на работе показал форму с задачками, потом пришло письмо с приглашением в ШРИ.\nПришел для получения знаний и опыта, решать задачки. Затея со школой мне нравится.",
            "link_photo": "http://img-fotki.yandex.ru/get/9360/38786.0/0_9aeef_251f458a_L",
            "link_facebook": "https://www.facebook.com/profile.php?id=100001345209443",
            "link_vk": "http://vk.com/popitch",
            "link_gihub": "https://github.com/popitch",
            "link_yaru": "http://popitch.ya.ru/",
            "photos": {
                "s": "app/img/students/s/22.jpg",
                "m": "app/img/students/m/22.jpg",
                "b": "app/img/students/b/22.jpg"
            }
        },
        {
            "Timestamp": "10/3/2013 4:05:21",
            "first_name": "Василий",
            "last_name": "Логиневский",
            "city": "Москва",
            "about": "Всем привет, меня зовут Вася. Родился и живу в Москве. В школе вебом, версткой и даже программированием не увлекался, просто мне нравилось ходить на олимпиады по математике и лингвистике. Потом поступил в МИФИ, где любовь к математике мне отбили. С третьего курса работаю. Занимался вебом и ios. В школу пришел чтобы восполнить пробелы в знаниях, узнать как изнутри работает такая большая организация и конечно познакомиться с новыми интересными людьми.",
            "link_photo": "http://img-fotki.yandex.ru/get/9110/29991134.0/0_d32e8_fc889efd_L.jpg",
            "link_facebook": "https://www.facebook.com/yeti.or",
            "link_vk": "http://vk.com/yeti_or",
            "link_gihub": "https://github.com/YetiOr",
            "link_yaru": "http://my.yandex.ru/Yeti-or/",
            "photos": {
                "s": "app/img/students/s/23.jpg",
                "m": "app/img/students/m/23.jpg",
                "b": "app/img/students/b/23.jpg"
            }
        }
    ];
    APP.Data.Tables = {
        roles: [
            {
                id: 1,
                name: "student"
            },
            {
                id: 2,
                name: "teacher"
            }
        ],
        country: [
            {
                id: 1,
                name: "Russia"
            },
            {
                id: 2,
                name: "Ukraine"
            }
        ],
        city: [
            {
                id: 1,
                countryId: 1,
                name: "Москва"
            },
            {
                id: 2,
                countryId: 2,
                name: "Одесса"
            },
            {
                id: 3,
                countryId: 1,
                name: "Санкт-Петербург"
            },
            {
                id: 4,
                countryId: 2,
                name: "Донецк"
            }
        ],
        people: [

        ]
    };
    APP.Data.rawStudentsToNormal = function (rawArr) {
        var newStudent,
            student,
            i,
            l = rawArr.length,
            d = APP.Data;
        for (i = 0; i < l; i++) {
            student = rawArr[i];
            newStudent = {};
            newStudent.fName = student.first_name;
            newStudent.lName = student.last_name;
            newStudent.about = student.about;
            newStudent.id = d.getMaxHumanId();
            newStudent.roleId = 2;
            newStudent.city = d.getCityId(student.city);
            newStudent.social = {
                vk: student.link_vk,
                fb: student.link_facebook,
                ya: student.link_yaru,
                git: student.link_gihub
            };
            if (student.photos) {
                newStudent.photos = student.photos
            } else
                newStudent.photos = {
                    s: student.link_photo,
                    m: student.link_photo,
                    b: student.link_photo
                };

            d.Tables.people.push(newStudent);
        }
    };
    APP.Data.getMaxHumanId = function () {
        var maxId, people, i, l, human;
        maxId = 0;
        people = APP.Data.Tables.people;
        l = people.length;
        for (i = 0; i < l; i++) {
            human = people[i];
            maxId = human.id > maxId ? human.id : maxId;
        }
        APP.Data.getMaxHumanId = function () {
            ++maxId;
            return maxId;
        };
        return maxId;
    };
    APP.Data.getCityId = function (name) {
        var cityArr = APP.Data.Tables.city,
            i,
            city,
            maxId;
        maxId = cityArr.length;
        for (i = 0; i < maxId; i++) {
            city = cityArr[i];
            if (city.name == name) return city.id;
        }
        ++maxId;
        cityArr.push(
            {
                id: maxId,
                countryId: 1,
                name: name
            }
        );
        return maxId
    };
    APP.Data.getStudent = function (id) {
        var data = APP.Data,
            people = data.Tables.people,
            student,
            l,
            i;
        l = people.length;
        for (i = 0; i < l; i++) {
            student = people[i];
            if (student.id == id) {
                student.city = data.getCity(student.city);
                return student;
            }
        }
        return false;
    };
    APP.Data.getCity = function (id) {
        var cityArr = APP.Data.Tables.city,
            i, l, city;
        l = cityArr.length;
        for (i = 0; i < l; i++) {
            city = cityArr[i];
            if (city.id == id) {
                return city.name;
            }
        }
        return false;
    };
    APP.Data.setStorage = function () {
        store.set(APPDATA, APP.Data.Tables);
    };
    APP.Data.getStorage = function () {
        APP.Data.Tables = store.set(APPDATA);
    };

    APP.Data.rawStudentsToNormal(APP.Data.Raw);
        if (appData) {
            APP.Data.getStorage();
        } else {
            APP.Data.setStorage();
        }



})();

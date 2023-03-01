import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  categories: string[] = [
    'monitor', 'mouse', 'keyboard', 'gpu', 'cpu'
  ]
  products: Product[] = [
    {
      name: 'Sanc M2453 черный',
      type: 'monitor',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hff/h43/50923832639518/sanc-m2453-cernyj-104949523-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/hfc/50923832934430/sanc-m2453-cernyj-104949523-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3e/h4f/50923833393182/sanc-m2453-cernyj-104949523-3.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h37/50923833851934/sanc-m2453-cernyj-104949523-4.jpg',
      ],
      description:
        'Монитор 23.8" Sanc M2453. Привлекательный дизайн и практически безрамочный дисплей, встроенные динамики для комфортного просмотра, обладает хорошей контрастностью 4000:1, цветовая гамма 72% NTSC, FHD экран 75Hz подключение через HDMI.',
      rating: 4.4,
      url: 'https://kaspi.kz/shop/p/sanc-m2453-chernyi-104949523/?c=750000000#!/item',
    },
    {
      name: 'Монитор Samsung Odyssey G3',
      type: 'monitor',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h32/50919545274398/samsung-odyssey-g3-ls24ag300nixci-cernyj-104946920-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/hfc/50919545733150/samsung-odyssey-g3-ls24ag300nixci-cernyj-104946920-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/hb4/50919546191902/samsung-odyssey-g3-ls24ag300nixci-cernyj-104946920-3.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h38/50919546650654/samsung-odyssey-g3-ls24ag300nixci-cernyj-104946920-4.jpg',
      ],
      description:
        'Отсутствие задержки ввода и размытия изображения гарантируют вам победу в любой игре. Увеличенная скорость обновления экрана обеспечивает более плавное отображение игровых сцен и позволяет Вам не уступать даже самым быстрым игрокам. При частоте обновления 144 Гц полностью устраняется задержка ввода и размытие движения, благодаря чему игровой сеанс отличается исключительной плавностью в самых динамичных сценах.',
      rating: 5,
      url: 'https://kaspi.kz/shop/p/samsung-odyssey-g3-ls24ag300nixci-chernyi-104946920/?c=750000000#!/item',
    },

    {
      name: 'Мышь X-Game XM-770OUB',
      type: 'mouse',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/h11/50458052591646/x-game-xm-770oub-black-9101354-1-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hd3/50458052821022/x-game-xm-770oub-cernyj-9101354-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h52/49870295564318/x-game-xm-770oub-cernyj-9101354-3.jpg',
      ],
      description:
        'Мышь X-Game XM-770UB Игровая мышь для начинающих геймеров с подсветкой и оптическим сенсором на 1000dpi. Просто подключите мышь к компьютеру и наслаждайтесь эффектной игрой света. Продуманный форм-фактор позволяет с удобством играть в любимые игры, не напрягая руки, а футуристичный дизайн достойно украсит рабочий стол начинающего киберспортсмена.',
      rating: 4.8,
      url: 'https://kaspi.kz/shop/p/x-game-xm-770oub-chernyi-9101354/?c=750000000#!/item',
    },
    {
      name: 'Мышь Xiaomi Mi Wireless Mouse Lite',
      type: 'mouse',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h9c/34407024394270/xiaomi-mi-wireless-mouse-lite-cernyj-101302962-1-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/hf5/34407030423582/xiaomi-mi-wireless-mouse-lite-cernyj-101302962-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h25/34407036420126/xiaomi-mi-wireless-mouse-lite-cernyj-101302962-3-Container.jpg',
      ],
      description:
        'Беспроводная мышь Xiaomi Wireless Mouse Lite – компактная по размеру с простым и лаконичным дизайном, который является отличительной чертой многих устройств компании. Её размер составляет всего 113 x 60 x 36 миллиметров, а вес – 60 грамм, поэтому вы всегда можете носить ее с собой или с ноутбуком.',
      rating: 4.7,
      url: 'https://kaspi.kz/shop/p/xiaomi-mi-wireless-mouse-lite-chernyi-101302962/?c=750000000#!/item',
    },

    {
      name: 'Клавиатура Ajazz STK61',
      type: 'keyboard',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hb8/62121952903198/ajazz-stk61-belyj-106268306-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/hfd/62121953361950/ajazz-stk61-belyj-106268306-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h37/62121953820702/ajazz-stk61-belyj-106268306-3.jpg',
      ],
      description:
        'Компактная клавиатура с раскладкой 60% Добавляя еще одну компактную клавиатуру к семейству jazz, здесь вас привлечет клавиатура jazz STICKS 61. Минимизируя размер, мы сохраняем функции, необходимые вам для общего использования.',
      rating: 5,
      url: 'https://kaspi.kz/shop/p/ajazz-stk61-belyi-106268306/?c=750000000#!/item',
    },
    {
      name: 'Клавиатура Rapoo V500 Alloy',
      type: 'keyboard',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h0a/67323843510302/rapoo-v500-alloy-chernyi-103515036-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/hd1/67323843772446/rapoo-v500-alloy-chernyi-103515036-2.jpg',
      ],
      description:
        'Почувствуйте максимум комфорта в ходе игровых жарких баталий – используйте клавиатуру Rapoo V500 Alloy. Механический механизм клавиш Rapoo Blue – свидетельство того, что вы получает максимально быстрый отклик на свои манипуляции, такие клавиши отличаются лаконичным коротким ходом. Всего же в устройстве предусмотрено 87 клавиш, что и не удивительно, ведь это компактная клавиатура специально для тех, кто предпочитает сэкономить место на рабочем столе. Rapoo V500 Alloy выглядит стильно и изящно, по функционалу она ничуть не уступает полноразмерным устройствам.',
      rating: 4.2,
      url: 'https://kaspi.kz/shop/p/rapoo-v500-alloy-chernyi-103515036/?c=750000000#!/item',
    },


    {
      name: 'Видеокарта Palit GeForce RTX 3060 Dual',
      type: 'gpu',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h7d/33720830722078/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-1-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/he6/33720834555934/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/hbc/33720839045150/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-3-Container.jpg'
      ],
      description:
        'Видеокарта Palit GeForce RTX 3060 DUAL (LHR) [NE63060019K9-190AD] отличается высокой производительностью и станет отличным выбором для профессиональных рабочих станций и игровых систем. Благодаря технологиям Ampere, мощному видеопроцессору и 12 ГБ встроенной памяти данная модель позволяет с легкостью решать любые задачи – будь то работа с графикой, моделирование или запуск игр.',
      rating: 5,
      url: 'https://kaspi.kz/shop/p/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928/?c=750000000#!/item',
    },
    {
      name: 'Видеокарта Palit GTX1660 SUPER GP 6GB',
      type: 'gpu',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/he9/51499326210078/palit-gtx1660-super-gp-6g-6-gb-104155730-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/h41/51499326668830/palit-gtx1660-super-gp-6g-ne6166s018j9-1160a-1-6-gb-104155730-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h6f/51499329421342/palit-gtx1660-super-gp-6g-ne6166s018j9-1160a-1-6-gb-104155730-8.jpg'
      ],
      description:
        'Видеокарта GTX 1660 SUPER до 20% производительнее оригинальной GTX 1660 и до 75% производительнее видеокарты предыдущего поколения GTX 1060 6 Гб. Архитектура NVIDIA Turing и ультраскоростная память GDDR6 делают видеокарту мощной платформой для самых популярных игр.',
      rating: 4.8,
      url: 'https://kaspi.kz/shop/p/palit-gtx1660-super-gp-6g-ne6166s018j9-1160a-1-6-gb-104155730/?c=750000000#!/item',
    },


    {
      name: 'Процессор AMD Ryzen 5 5600G BOX',
      type: 'cpu',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hef/44927200395294/amd-ryzen-5-5600g-box-102150332-1-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h64/44928544866334/amd-ryzen-5-5600g-box-102150332-2-Container.jpg',
      ],
      description:
        'Процессор AMD Ryzen ™ 5 5600G имеет 6 процессорных ядер, базовую тактовую частоту 3,9 ГГц и 7 графических ядер. Узнайте о технических характеристиках, деталях памяти и других ключевых функциях!',
      rating: 4.7,
      url: 'https://kaspi.kz/shop/p/amd-ryzen-5-5600g-box-102150332/?c=750000000#!/item',
    },
    {
      name: 'Процессор Intel Core i5-10400F OEM',
      type: 'cpu',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/h19/32961747091486/intel-core-i5-10400f-oem-100422560-1-Container.jpg',
      ],
      description:
        'Процессор Intel Core i5-10400F OEM способен проявить свою эффективность в составе игровых систем и мощных рабочих станций. Графическое ядро отсутствует: вам будет нужно позаботиться о выборе видеокарты. Базовая частота процессора равна 2900 МГц. Пиковая частота в турборежиме намного выше – 4300 МГц.',
      rating: 4.5,
      url: 'https://kaspi.kz/shop/p/intel-core-i5-10400f-oem-100422560/?c=750000000#!/item',
    },


  ];
}

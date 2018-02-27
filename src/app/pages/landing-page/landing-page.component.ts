import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  currentnews = 0;
  newslist = [
    {
      image: 'https://tctechcrunch2011.files.wordpress.com/2018/02/hyperlooptt-system-front-view.jpg?w=738',
      text:
        'Hyperloop Transportation Technologies on Thursday announced an agreement with an Ohio agency to launch a study on creating its ' +
        'first interstate hyperloop project in the U.S., connecting Chicago and Cleveland.\n\n' +
        'The agreement with the Northern Ohio Area Coordinating Committee puts in motion a regional feasibility study, to be carried out ' +
        'in conjunction with the Illinois Department of Transportation. Various routes have been identified for the Hyperloop service, ' +
        'which would operate a super high-speed system to accommodate transport at more than 700 miles per hour.\n' +
        'The deal with Hyperloop Transportation Technologies (HTT) includes agreements with both the North Ohio Areawide Coordinating ' +
        'Agency (NOACA) and the Illinois’ Department of Transportation (IDOT) to start work on a feasibility study, the first step of ' +
        'determining whether it’s even possible to build a route before beginning work in earnest. The study will focus on determining ' +
        'the viability of a number of different corridors, all the with the goal of connecting Cleveland and Chicago.',
      link:
        'https://techcrunch.com/2018/02/15/hyperloop-transportation-technologies-signs-first-cross-state-deal-in-the-u-s/'
    },
    {
      image: 'https://tokar.ua/img/upl/2018/02/c95c8589c3faa52daeaf128f2defd1f4.jpg',
      text:
        'Поки прихильники і противники дня Святого Валентина ведуть щорічну священну війну у соцмережах, я вирішив взяти ситуацію в свої ' +
        'руки і з допомогою гугла та двох вказівних пальців розставити всі крапки над «і», щоб припинити цю безглузду ментальну боротьбу.',
      link: 'https://tokar.ua/read/22455'
    },
    {
      image: 'https://tokar.ua/img/upl/2018/02/8d9c17400b0a7ed47d2cb5c590983bf2.jpg',
      text:
        'У кожному тижні є 168 годин. Як знайти серед цих годин час для відпочинку, хобі або хоча б виспатись?\n\n' +
        'Експерт з тайм-менеджменту Лора Вендеркам досліджує, як живуть зайняті люди. Вона виявила, що багато з нас значно переоцінюють' +
        ' свої обов’язки і недооцінюють час, що у нас є.\nВона пропонує декілька практичних стратегій, які б допомогли нам знаходити ' +
        'більше часу на важливі справи, щоб ми могли «збудувати таке життя, яке захочемо, за той час, який маємо».',
      link: 'https://tokar.ua/read/22259'
    }
  ];

  photos = [
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/20246023_323680684750842_2129828290979272220_n.jpg?' +
      'oh=2fb30ad85d74e758d37efd8da44a7723&oe=5B110CB4',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/20108361_320445475074363_8187853797667695862_n.jpg' +
      '?oh=bd4f51506bab659a171ba366dde8a30a&oe=5B1EAF0F',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/20139663_320445295074381_8033589891415104251_n.jpg' +
      '?oh=216565a680d9c0a445fdb734ed5b5bb0&oe=5B16B89C',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/23172567_362709054181338_4869276777183638224_n.jpg' +
      '?oh=fce175707002b07d51fcc1ce3a25fddd&oe=5B154444',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/21743309_344424946009749_5473424926914253016_n.jpg' +
      '?oh=8ba658c3ca0eb02e79a72eef410b7070&oe=5B190F5F',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/20620879_329158964203014_3420407433726412152_n.jpg' +
      '?oh=269725a5d00c12d78f06c6ffe36484af&oe=5B2224C3'
  ];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  previewNews() {
    this.currentnews--;
    this.cd.detectChanges();
  }

  nextNews() {
    this.currentnews++;
    this.cd.detectChanges();
  }
}

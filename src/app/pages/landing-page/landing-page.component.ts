import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ml-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  currentnews = 0;
  newslist = [
    {
      image: '../../../assets/photogalery/4.jpg',
      text: 'Hyperloop Transportation Technologies on Thursday announced an agreement with an Ohio agency to launch a study on creating its ' +
      'first interstate hyperloop project in the U.S., connecting Chicago and Cleveland.\n\n' +
      'The agreement with the Northern Ohio Area Coordinating Committee puts in motion a regional feasibility study, to be carried out in ' +
      'conjunction with the Illinois Department of Transportation. Various routes have been identified for the Hyperloop service, ' +
      'which would operate a super high-speed system to accommodate transport at more than 700 miles per hour.'
    },
    {
      image: '../../../assets/photogalery/5.jpg',
      text: 'SentinelOne will integrate its Endpoint Protection Platform with Microsoft\'s Windows Defender Advanced Threat Protection ' +
      'service to cover Mac and Linux device platforms.\n\n' +
      'SentinelOne\'s EPP technology will feed all threats and detections from Mac and Linux endpoints seamlessly into the Windows ' +
      'Defender ATP console, enabling security teams to see and remediate threats across Windows, Mac and Linux platforms.'
    },
    {
      image: '../../../assets/photogalery/8.png',
      text: 'In our new series Getting It, we’ll give you all you need to know to get started with and excel at a wide range of technology,' +
      ' both on and offline. Here, we’re arming you with everything you need to know to master the world of IFTTT.\n\n' +
      'If you think back to your high school geometry class, you might remember that “If/Then” statements were used in solving mathematical' +
      ' proofs. But even if math wasn’t your thing, you actually use If/Then statements every day: “If it’s raining outside, then ' +
      'I will bring an umbrella.” Or, “If I eat this donut, then I will be very guilt- um, happy.”'
    }
  ];

  photos = [
    '../../../assets/photogalery/1.jpg',
    '../../../assets/photogalery/2.jpg',
    '../../../assets/photogalery/3.jpg',
    '../../../assets/photogalery/4.jpg',
    '../../../assets/photogalery/5.jpg',
    '../../../assets/photogalery/6.jpg',
    '../../../assets/photogalery/7.jpg',
    '../../../assets/photogalery/8.png'
  ];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  previewNews() {
    this.currentnews--;
    this.cd.detectChanges();
  }

  nextNews() {
    this.currentnews++;
    this.cd.detectChanges();
  }

}

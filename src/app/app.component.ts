import { Component } from '@angular/core';
import { YaEvent } from 'angular8-yandex-maps/public-api';

interface GeoObjectConstructor {
  feature: ymaps.IGeoObjectFeature;
  options: ymaps.IGeoObjectOptions;
}

interface PlacemarkConstructor {
  geometry: number[];
  properties: ymaps.IPlacemarkProperties;
  options: ymaps.IPlacemarkOptions;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options: ymaps.IMapOptions = {
    copyrightLogoVisible: false,
    copyrightProvidersVisible: false,
    copyrightUaVisible: false,
    nativeFullscreen: true,
  };

  placemarks: PlacemarkConstructor[] = [
    {
      geometry: [55.684758, 37.738521],
      properties: {},
      options: {
        preset: 'islands#icon',
        iconColor: '#0095b6',
      },
    },
  ];

  asd(event: YaEvent) {
    this.placemarks = [
      {
        geometry: event.event.get('coords') as [],
        properties: {},
        options: {
          preset: 'islands#icon',
          iconColor: '#0095b6',
        },
      },
    ];
    console.log(event.event.get('coords'));
  }
}

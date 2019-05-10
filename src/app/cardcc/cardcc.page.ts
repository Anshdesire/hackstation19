import { Component } from '@angular/core';

@Component({
  selector: 'app-cc',
  templateUrl: 'cardcc.page.html',
  styleUrls: ['cardcc.page.scss'],
})
export class ccPage {

  dataCc = [
    [
      {
        name: "Credit card 1",
        image: "https://www.visa.ca/en_CA/pay-with-visa/cards/credit-cards/_jcr_content/par/cardstack/cardStackColumn1/image.img.jpg/1529504445888.jpg",
        limit: 100000,
        features: [
          {
            name: ''
          },
          {
            name: ''
          }
        ]
      },
      {
        name: "Credit card 1",
        image: "https://www.visa.ca/en_CA/pay-with-visa/cards/credit-cards/_jcr_content/par/cardstack/cardStackColumn1/image.img.jpg/1529504445888.jpg",
        limit: 102000,
        features: [
          {
            name: ''
          },
          {
            name: ''
          }
        ]
      },
      {
        type: 'cc',
        name: "Credit card 2",
        image: "https://www.visa.ca/en_CA/pay-with-visa/cards/credit-cards/_jcr_content/par/cardstack/cardStackColumn1/image.img.jpg/1529504445888.jpg",
        limit: 100080,
        features: [
          {
            name: ''
          },
          {
            name: ''
          }
        ]
      }
    ],
    [
      {
        type: 'pl',
        name: "Credit card 3",
        image: "https://www.visa.ca/en_CA/pay-with-visa/cards/credit-cards/_jcr_content/par/cardstack/cardStackColumn1/image.img.jpg/1529504445888.jpg",
        limit: 100000,
        features: [
          {
            name: ''
          },
          {
            name: ''
          }
        ]
      }
    ]
  ];


}

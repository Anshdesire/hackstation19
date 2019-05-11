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


  datacc = [
    {
      current: {
        bank: "SBI",
        interest: 14,
        balance: 40000,
        interestPaid: 1000
      },
      recommended: [{
        type: 'Personal Loan',
        interest: 12,
        balance: 100000,
        interestTobePaid: 120000,
        saving: 500
      },
      {
        type: 'Personal Loan',
        interest: 11,
        balance: 105000,
        interestTobePaid: 120500,
        saving: 550
      }]
    },
    {
      current: {
        bank: "CITI",
        interest: 13,
        balance: 60000,
        interestPaid: 1500
      },
      recommended: [{
        type: 'Personal Loan',
        interest: 11,
        balance: 103000,
        interestTobePaid: 120000,
        saving: 1000
      },
      {
        type: 'Personal Loan',
        interest: 12,
        balance: 105800,
        interestTobePaid: 120510,
        saving: 800
      }]
    }
  ]
}

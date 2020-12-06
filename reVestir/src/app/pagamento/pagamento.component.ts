import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})

export class PagamentoComponent implements OnInit {

  @ViewChild('paypal', {static: true}) paypalElement: ElementRef

  product = {
    price: 19.97,
    description: 'Headset gamer', 
  }

  paidFor = false

  constructor() { }

  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            description: this.product.description,
            amount: {
              currency_code: 'BRL',
              value: this.product.price
            }
          }]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        this.paidFor = true,
        console.log(order)
      },
      onError: err => {
        console.log(err)
      }
    })
    .render(this.paypalElement.nativeElement)
  }
  
  
}

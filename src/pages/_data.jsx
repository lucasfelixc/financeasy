export const users = [
  {
    name: 'Lucas Felix',
    balance: [
      {
        name: 'Salário',
        infoSecondary: 'Fixo',
        value: '5300'
      },
      {
        name: 'Paypal',
        infoSecondary: 'Freelance',
        value: '950'
      },
      {
        name: 'Paypal',
        infoSecondary: 'Freelance',
        value: '150'
      },
      {
        name: 'Paypal',
        infoSecondary: 'Freelance',
        value: '450'
      }
    ],
    spending: [
      {
        name: 'Comida',
        description: 'Lanches do mês',
        value: '145',
        category: 'food'
      },
      {
        name: 'Uber',
        description: 'Corridas de uber do mês',
        value: '230',
        category: 'travel'
      },
      {
        name: 'Netflix',
        description: 'Mensalidade netflix',
        value: '25',
        category: 'entertainment'
      },
      {
        name: 'Aluguel',
        description: 'Pagamento de aluguel',
        value: '1200',
        category: 'fixedCost'
      }
    ]
  }
]

export const cards = [
  {
    name: 'Nubank',
    number: '4465 1122 3562 8751',
    type: 'Mastercard',
    background: '#8A05BE'
  },
  {
    name: 'Inter',
    number: '4465 1122 3562 6524',
    type: 'Mastercard',
    background: '#FF7A00'
  },
  {
    name: 'Pag',
    number: '4465 1122 4572 3211',
    type: 'Mastercard',
    background: '#132D46'
  }
]

export const payments = [
  {
    name: 'Salário',
    infoSecondary: 'Fixo',
    value: '5300'
  },
  {
    name: 'Paypal',
    infoSecondary: 'Freelance',
    value: '950'
  },
  {
    name: 'Paypal',
    infoSecondary: 'Freelance',
    value: '150'
  },
  {
    name: 'Paypal',
    infoSecondary: 'Freelance',
    value: '450'
  }
]

export const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Gastos',
      fill: false,
      lineTension: 0.4,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(71, 51, 166, 1)',
      borderWidth: 5,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.1,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(71, 51, 166, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(71, 51, 166, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}

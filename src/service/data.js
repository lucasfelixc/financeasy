import sumDetails from '../utils/details'
import totalSum from '../utils/totalSum'

export const users = [
  {
    name: 'Lucas Felix',
    balance: [
      {
        jan: [
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
        fev: [
          {
            name: 'Salário',
            infoSecondary: 'Fixo',
            value: '10000'
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
        mar: [
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
        abr: [
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
        mai: [
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
        jun: [
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
        jul: [
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
        ago: [
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
        set: [
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
        out: [
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
        nov: [
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
        dez: [
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
      }
    ],
    spending: [
      {
        jan: [
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
        ],
        fev: [
          {
            name: 'Comida',
            description: 'Lanches do mês',
            value: '500',
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
        ],
        mar: [
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
        ],
        abr: [
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
        ],
        mai: [
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
        ],
        jun: [
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
        ],
        jul: [
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
        ],
        ago: [
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
        ],
        set: [
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
        ],
        out: [
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
        ],
        nov: [
          {
            name: 'Comida',
            description: 'Lanches do mês',
            value: '145',
            category: 'food'
          },
          {
            name: 'Uber',
            description: 'Corridas de uber do mês',
            value: '350',
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
            value: '1500',
            category: 'fixedCost'
          }
        ],
        dez: [
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
  }
]

const infoBalance = users[0].balance
const infoSpending = users[0].spending

export const monthlyEarningsDetail = []
export const monthlyEarningsTotal = []

export const monthlySpendingDetail = []
export const monthlySpendingTotal = []

sumDetails(infoBalance, monthlyEarningsDetail)
sumDetails(infoSpending, monthlySpendingDetail)

totalSum(monthlyEarningsDetail, monthlyEarningsTotal)
totalSum(monthlySpendingDetail, monthlySpendingTotal)

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

export const data = {
  labels: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ],
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
      data: monthlySpendingTotal
    }
  ]
}

export const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
}

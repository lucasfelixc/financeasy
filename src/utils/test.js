const users = [
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

const spendingTest = users[0].spending
const spending2020 = []

function easyPush(array) {
  const valueStringMonth = []
  const valueNumberMonth = []
  const reducer = (acumulator, currentValue) => acumulator + currentValue

  array.map(value => {
    return valueStringMonth.push(value.value)
  })

  valueStringMonth.map(value => {
    return valueNumberMonth.push(parseFloat(value))
  })

  valueNumberMonth.reduce(reducer)

  return spending2020.push(valueNumberMonth.reduce(reducer))
}

function testCap(array) {
  return array.forEach(value => {
    const jan = value.jan
    const fev = value.fev
    const mar = value.mar
    const abr = value.abr
    const mai = value.mai
    const jun = value.jun
    const jul = value.jul
    const ago = value.ago
    const set = value.set
    const out = value.out
    const nov = value.nov
    const dez = value.dez

    easyPush(jan)
    easyPush(fev)
    easyPush(mar)
    easyPush(abr)
    easyPush(mai)
    easyPush(jun)
    easyPush(jul)
    easyPush(ago)
    easyPush(set)
    easyPush(out)
    easyPush(nov)
    easyPush(dez)
  })
}

testCap(spendingTest)
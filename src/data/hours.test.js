import { generate24HourOptions } from './hours'

describe('hours tests', () => {
  const expected24HourOptionsOutput = [
    {
      "display": "-- select --",
      "value": ""
    },
    {
      "display": "0h ",
      "value": 0
    },
    {
      "display": "0h  30min",
      "value": 0.5
    },
    {
      "display": "1h ",
      "value": 1
    },
    {
      "display": "1h  30min",
      "value": 1.5
    },
    {
      "display": "2h ",
      "value": 2
    },
    {
      "display": "2h  30min",
      "value": 2.5
    },
    {
      "display": "3h ",
      "value": 3
    },
    {
      "display": "3h  30min",
      "value": 3.5
    },
    {
      "display": "4h ",
      "value": 4
    },
    {
      "display": "4h  30min",
      "value": 4.5
    },
    {
      "display": "5h ",
      "value": 5
    },
    {
      "display": "5h  30min",
      "value": 5.5
    },
    {
      "display": "6h ",
      "value": 6
    },
    {
      "display": "6h  30min",
      "value": 6.5
    },
    {
      "display": "7h ",
      "value": 7
    },
    {
      "display": "7h  30min",
      "value": 7.5
    },
    {
      "display": "8h ",
      "value": 8
    },
    {
      "display": "8h  30min",
      "value": 8.5
    },
    {
      "display": "9h ",
      "value": 9
    },
    {
      "display": "9h  30min",
      "value": 9.5
    },
    {
      "display": "10h ",
      "value": 10
    },
    {
      "display": "10h  30min",
      "value": 10.5
    },
    {
      "display": "11h ",
      "value": 11
    },
    {
      "display": "11h  30min",
      "value": 11.5
    },
    {
      "display": "12h ",
      "value": 12
    },
    {
      "display": "12h  30min",
      "value": 12.5
    },
    {
      "display": "13h ",
      "value": 13
    },
    {
      "display": "13h  30min",
      "value": 13.5
    },
    {
      "display": "14h ",
      "value": 14
    },
    {
      "display": "14h  30min",
      "value": 14.5
    },
    {
      "display": "15h ",
      "value": 15
    },
    {
      "display": "15h  30min",
      "value": 15.5
    },
    {
      "display": "16h ",
      "value": 16
    },
    {
      "display": "16h  30min",
      "value": 16.5
    },
    {
      "display": "17h ",
      "value": 17
    },
    {
      "display": "17h  30min",
      "value": 17.5
    },
    {
      "display": "18h ",
      "value": 18
    },
    {
      "display": "18h  30min",
      "value": 18.5
    },
    {
      "display": "19h ",
      "value": 19
    },
    {
      "display": "19h  30min",
      "value": 19.5
    },
    {
      "display": "20h ",
      "value": 20
    },
    {
      "display": "20h  30min",
      "value": 20.5
    },
    {
      "display": "21h ",
      "value": 21
    },
    {
      "display": "21h  30min",
      "value": 21.5
    },
    {
      "display": "22h ",
      "value": 22
    },
    {
      "display": "22h  30min",
      "value": 22.5
    },
    {
      "display": "23h ",
      "value": 23
    },
    {
      "display": "23h  30min",
      "value": 23.5
    },
    {
      "display": "24h ",
      "value": 24
    }
  ]

  it('generate24HourOptions to return the correct output', () => {
    const options = generate24HourOptions()
    expect(options).toEqual(expected24HourOptionsOutput)
  })
})

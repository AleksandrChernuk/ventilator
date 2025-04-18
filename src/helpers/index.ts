export const filterconfig = {
  sliderList: [
    {
      title: "Потужність двигуна, кВт:",
      min: 750,
      max: 110000,
      dispalyValue: (value: number) => {
        return `${(value / 1000).toFixed(2)} кВт`;
      },
    },
    {
      title: "Продуктивність, м³/год:",
      min: 850,
      max: 160000,
      dispalyValue: (value: number) => {
        return `${value} м³/год`;
      },
    },
    {
      title: "Тиск, Па:",
      min: 165,
      max: 1780,
      dispalyValue: (value: number) => {
        return `${value} Па`;
      },
    },
  ],
  numberslist: {
    title: "Оберти двигуна, об/хв:",
    items: [
      "№2",
      "№2,5",
      "№3,15",
      "№4",
      "№5",
      "№6,3",
      "№8",
      "№10",
      "№20",
      "№16",
      "№12,5",
      "№14",
    ],
  },
  materials: {
    title: "Матеріал виконання:",
    items: ["Вуглецева сталь", "Нержавіюча сталь", "Алюміній"],
  },
  rmp: { title: "Оберти двигуна, об/хв:", items: [750, 1000, 1500, 3000] },
};

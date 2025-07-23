
export const dashboardDummyResponse = {
  stats: [
    {
      iconType: "thumbsUp",
      label: "Finished",
      value: "18",
      delta: { value: "+8", type: "increase", unit: "tasks" },
    },
    {
      iconType: "clock",
      label: "Tracked",
      value: "31h",
      delta: { value: "-6", type: "decrease", unit: "hours" },
    },
    {
      iconType: "insights",
      label: "Efficiency",
      value: "93%",
      delta: { value: "+12%", type: "increase" },
    },
  ],
  performance: {
    month: "July 2025",
    data: [
      { date: "01", thisMonth: 8, lastMonth: 7 },
      { date: "02", thisMonth: 6, lastMonth: 8 },
      { date: "03", thisMonth: 7, lastMonth: 6 },
      { date: "04", thisMonth: 6, lastMonth: 6 },
      { date: "05", thisMonth: 9, lastMonth: 5 },
      { date: "06", thisMonth: 7, lastMonth: 4 },
      { date: "07", thisMonth: 8, lastMonth: 5 },
    ],
  },
  tasks: [
    {
      id: 1,
      iconType: "troubleshoot",
      title: "Product Review for UI8 Market",
      status: { label: "In progress", color: "bg-orange-500" },
      time: "4h",
    },
    {
      id: 2,
      iconType: "search",
      title: "UX Research for Product",
      status: { label: "On hold", color: "bg-blue-500" },
      time: "8h",
    },
    {
      id: 3,
      iconType: "terminal",
      title: "App design and development",
      status: { label: "Done", color: "bg-green-500" },
      time: "32h",
    },
  ],
};

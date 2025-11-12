interface developer<T,X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    publishDate: string;
  };
  smartWatch: T;
  bike?: X
}

interface smartWatch {
  heartRate: string;
  stopWatch?: boolean;
  callSupport?: boolean;
  ai?: boolean;
}

const poorDeveloper: developer<smartWatch> = {
  name: "John Doe",
  salary: 50000,
  device: {
    brand: "Dell",
    model: "XPS 13",
    publishDate: "2020-01-15",
  },
  smartWatch: {
    heartRate: "72 bpm",
    stopWatch: true,
  },
};

interface advancedSmartWatch {
  heartRate: string;
  stopWatch: boolean;
  callSupport: boolean;
  ai: boolean;
  gps: boolean;
}

const richDeveloper: developer<advancedSmartWatch> = {
  name: "Mintu Sikder",
  salary: 90000,
  device: {
    brand: "Hp",
    model: "XPS 13",
    publishDate: "2020-01-15",
  },
  smartWatch: {
    heartRate: "72 bpm",
    callSupport: true,
    ai: true,
    stopWatch: true,
    gps: true,
  },
};

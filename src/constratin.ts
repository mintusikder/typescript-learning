type RichPeopleCar = {
  car: string;
  bike: string;
  cng: string;
};

type MyCar = "car" | "bike" | "cng";
type MyCar2 = keyof RichPeopleCar; 


// const myVar: MyCar = "ship";



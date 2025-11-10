let anything: any;
anything = "hello";

(anything as string).length; // using 'as' syntax

const kgTOGmConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    const result = input * 1000;
    return `The converted value is : ${result} gm`;
  } else if (typeof input === "string") {
    const value = parseFloat(input);
    const result = value * 1000;
    return `The converted value is : ${result} gm`;
  } else {
    return "Invalid input type";
  }
};

const result1 = kgTOGmConverter(2) as number;
const result2 = kgTOGmConverter("2 kg") as string;

console.log(result1);

console.log(result2);

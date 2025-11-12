const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithGeneric = (value: { id: number; name: string }) => {
  return [value];
};

const arrayWithGeneric = <T>(value: T) => [value];

const arrayString = arrayWithGeneric("Hello");
const arrayNumber = arrayWithGeneric(42);
const arrayGeneric = arrayWithGeneric({ id: 1, name: "Generic" });

//tuple

const createTuple = (value1: string, value2: string) => {
  return [value1, value2];
};

const createTupleGeneric = <T, U>(value1: T, value2: U) => {
  return [value1, value2] ;
}

const resultTuple = createTupleGeneric<string, number>("Age", 30);

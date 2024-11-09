## The significance of union

The union type is a type where we can give more than one type. and it is symbol is "|" this sign.
An intersection type in TypeScript allows you to combine multiple types into a single type. It represents
a type that has all the properties and methods of each individual type being intersected. Intersection types
are denoted by the & symbol.

## The significance of intersection types in Typescript.

An intersection type in TypeScript allows you to combine multiple types into a single type. It represents
a type that has all the properties and methods of each individual type being intersected. Intersection types are denoted by the & symbol.

```
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type EmployeeRecord = Person & Employee;

const newEmployee: EmployeeRecord = {
  name: "sumon",
  age: 24,
  employeeId: 105,
  department: "HR",
};
```

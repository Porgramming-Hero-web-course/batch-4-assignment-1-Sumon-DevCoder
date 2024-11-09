// Problem 4:
type TCircle = {
  shape: "circle";
  radius: number;
};

type TRectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type TShape = TCircle | TRectangle;

const calculateShapeArea = (shape: TShape) => {
  if (shape.shape === "rectangle") {
    return shape.height * shape.width;
  } else if (shape.shape === "circle") {
    return Math.PI * shape.radius * shape.radius;
  }
};

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// console.log(rectangleArea);

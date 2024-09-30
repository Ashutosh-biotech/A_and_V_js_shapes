const shapes = [
	// Area of a rectangle
	{
		name: "Area of a rectangle",
		formula: "length * width",
		form: {
			elements: {
				Length: "length",
				Width: "width",
			},
		},
		eventListener: () => {
			const length = Number(document.getElementById("length").value);
			const width = Number(document.getElementById("width").value);
			const area = length * width;
			document.getElementById("result").innerHTML = area.toFixed(2) + " m<sup>2</sup>";
		}
	},
	// Area of a triangle
	{
		name: "Area of a triangle",
		formula: "0.5 * base * height",
		form: {
			elements: {
				Base: "base",
				Height: "height",
			},
		},
		eventListener: () => {
			const base = Number(document.getElementById("base").value);
			const height = Number(document.getElementById("height").value);
			const area = 0.5 * base * height;
			document.getElementById("result").innerHTML = area.toFixed(2) + " m<sup>2</sup>";
		}
	},
	// Area of a circle
	{
		name: "Area of a circle",
		formula: "πr<sup>2</sup>",
		form: {
			elements: {
				Radius: "radius",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const area = Math.PI * radius * radius;
			document.getElementById("result").innerHTML = area.toFixed(2) + " m<sup>2</sup>";
		}
	},
	// Area of a trapezoid
	{
		name: "Area of a trapezoid",
		formula: "0.5 * (base1 + base2) * height",
		form: {
			elements: {
				Base1: "base1",
				Base2: "base2",
				Height: "height",
			},
		},
		eventListener: () => {
			const base1 = Number(document.getElementById("base1").value);
			const base2 = Number(document.getElementById("base2").value);
			const height = Number(document.getElementById("height").value);
			const area = 0.5 * (base1 + base2) * height;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Area of a parallelogram
	{
		name: "Area of a parallelogram",
		formula: "base * height",
		form: {
			elements: {
				Base: "base",
				Height: "height",
			},
		},
		eventListener: () => {
			const base = Number(document.getElementById("base").value);
			const height = Number(document.getElementById("height").value);
			const area = base * height;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Area of a rhombus
	{
		name: "Area of a rhombus",
		formula: "0.5 * d1 * d2",
		form: {
			elements: {
				D1: "d1",
				D2: "d2",
			},
		},
		eventListener: () => {
			const d1 = Number(document.getElementById("d1").value);
			const d2 = Number(document.getElementById("d2").value);
			const area = 0.5 * d1 * d2;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Area of a kite
	{
		name: "Area of a kite",
		formula: "0.5 * d1 * d2",
		form: {
			elements: {
				D1: "d1",
				D2: "d2",
			},
		},
		eventListener: () => {
			const d1 = Number(document.getElementById("d1").value);
			const d2 = Number(document.getElementById("d2").value);
			const area = 0.5 * d1 * d2;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Area of a polygon
	{
		name: "Area of a polygon",
		formula: "0.5 * n * s<sup>2</sup> * cot(π/n)",
		form: {
			elements: {
				N: "n",
				Side: "s",
			},
		},
		eventListener: () => {
			const n = Number(document.getElementById("n").value);
			const s = Number(document.getElementById("s").value);
			const area = 0.5 * n * s * s * Math.cot(Math.PI / n);
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Area of a sector
	{
		name: "Area of a sector",
		formula: "(θ/360) * πr<sup>2</sup>",
		form: {
			elements: {
				Angle: "angle",
				Radius: "radius",
			},
		},
		eventListener: () => {
			const angle = Number(document.getElementById("angle").value);
			const radius = Number(document.getElementById("radius").value);
			const area = (angle / 360) * Math.PI * radius * radius;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Area of a segment
	{
		name: "Area of a segment",
		formula: "0.5 * r<sup>2</sup> * (θ - sin(θ))",
		form: {
			elements: {
				Radius: "radius",
				Angle: "angle",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const angle = Number(document.getElementById("angle").value);
			const area = 0.5 * radius * radius * (angle - Math.sin(angle));
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},

	// Perimeter of a rectangle
	{
		name: "Perimeter of a rectangle",
		formula: "2 * (length + width)",
		form: {
			elements: {
				Length: "length",
				Width: "width",
			},
		},
		eventListener: () => {
			const length = Number(document.getElementById("length").value);
			const width = Number(document.getElementById("width").value);
			const perimeter = 2 * (length + width);
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},
	// Perimeter of a triangle
	{
		name: "Perimeter of a triangle",
		formula: "a + b + c",
		form: {
			elements: {
				A: "a",
				B: "b",
				C: "c",
			},
		},
		eventListener: () => {
			const a = Number(document.getElementById("a").value);
			const b = Number(document.getElementById("b").value);
			const c = Number(document.getElementById("c").value);
			const perimeter = a + b + c;
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},
	// Perimeter of a circle
	{
		name: "Perimeter of a circle",
		formula: "2πr",
		form: {
			elements: {
				Radius: "radius",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const perimeter = 2 * Math.PI * radius;
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},
	// Perimeter of a trapezoid
	{
		name: "Perimeter of a trapezoid",
		formula: "a + b + c + d",
		form: {
			elements: {
				A: "a",
				B: "b",
				C: "c",
				D: "d",
			},
		},
		eventListener: () => {
			const a = Number(document.getElementById("a").value);
			const b = Number(document.getElementById("b").value);
			const c = Number(document.getElementById("c").value);
			const d = Number(document.getElementById("d").value);
			const perimeter = a + b + c + d;
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},
	// Perimeter of a parallelogram
	{
		name: "Perimeter of a parallelogram",
		formula: "2 * (length + width)",
		form: {
			elements: {
				Length: "length",
				Width: "width",
			},
		},
		eventListener: () => {
			const length = Number(document.getElementById("length").value);
			const width = Number(document.getElementById("width").value);
			const perimeter = 2 * (length + width);
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},
	// Perimeter of a rhombus
	{
		name: "Perimeter of a rhombus",
		formula: "4 * side",
		form: {
			elements: {
				Side: "side",
			},
		},
		eventListener: () => {
			const side = Number(document.getElementById("side").value);
			const perimeter = 4 * side;
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},
	// Perimeter of a kite
	{
		name: "Perimeter of a kite",
		formula: "2 * (side1 + side2)",
		form: {
			elements: {
				Side1: "side1",
				Side2: "side2",
			},
		},
		eventListener: () => {
			const side1 = Number(document.getElementById("side1").value);
			const side2 = Number(document.getElementById("side2").value);
			const perimeter = 2 * (side1 + side2);
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},
	// Perimeter of a polygon
	{
		name: "Perimeter of a polygon",
		formula: "n * side",
		form: {
			elements: {
				N: "n",
				Side: "side",
			},
		},
		eventListener: () => {
			const n = Number(document.getElementById("n").value);
			const side = Number(document.getElementById("side").value);
			const perimeter = n * side;
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},
	// Perimeter of a sector
	{
		name: "Perimeter of a sector",
		formula: "r * (θ + 2)",
		form: {
			elements: {
				Radius: "radius",
				Angle: "angle",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const angle = Number(document.getElementById("angle").value);
			const perimeter = radius * (angle + 2);
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},
	// Perimeter of a segment
	{
		name: "Perimeter of a segment",
		formula: "r * (θ + 2)",
		form: {
			elements: {
				Radius: "radius",
				Angle: "angle",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const angle = Number(document.getElementById("angle").value);
			const perimeter = radius * (angle + 2);
			document.getElementById("result").innerHTML = perimeter.toFixed(2) + "m";
		}
	},

	// Volume of a cube
	{
		name: "Volume of a cube",
		formula: "a<sup>3</sup>",
		form: {
			elements: {
				Side: "side",
			},
		},
		eventListener: () => {
			const side = Number(document.getElementById("side").value);
			const volume = side * side * side;
			document.getElementById("result").innerHTML = volume.toFixed(2) + "m<sup>3</sup>";
		}
	},
	// Volume of a rectangular prism
	{
		name: "Volume of a rectangular prism",
		formula: "length * width * height",
		form: {
			elements: {
				Length: "length",
				Width: "width",
				Height: "height",
			},
		},
		eventListener: () => {
			const length = Number(document.getElementById("length").value);
			const width = Number(document.getElementById("width").value);
			const height = Number(document.getElementById("height").value);
			const volume = length * width * height;
			document.getElementById("result").innerHTML = volume.toFixed(2) + "m<sup>3</sup>";
		}
	},
	// Volume of a sphere
	{
		name: "Volume of a sphere",
		formula: "(4/3)πr<sup>3</sup>",
		form: {
			elements: {
				Radius: "radius",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const volume = (4 / 3) * Math.PI * radius * radius * radius;
			document.getElementById("result").innerHTML = volume.toFixed(2) + "m<sup>3</sup>";
		}
	},
	// Volume of a cylinder
	{
		name: "Volume of a cylinder",
		formula: "πr<sup>2</sup>h",
		form: {
			elements: {
				Radius: "radius",
				Height: "height",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const height = Number(document.getElementById("height").value);
			const volume = Math.PI * radius * radius * height;
			document.getElementById("result").innerHTML = volume.toFixed(2) + "m<sup>3</sup>";
		}
	},
	// Volume of a cone
	{
		name: "Volume of a cone",
		formula: "(1/3)πr<sup>2</sup>h",
		form: {
			elements: {
				Radius: "radius",
				Height: "height",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const height = Number(document.getElementById("height").value);
			const volume = (1 / 3) * Math.PI * radius * radius * height;
			document.getElementById("result").innerHTML = volume.toFixed(2) + "m<sup>3</sup>";
		}
	},
	// Volume of a pyramid
	{
		name: "Volume of a pyramid",
		formula: "(1/3) * base_area * height",
		form: {
			elements: {
				BaseArea: "base_area",
				Height: "height",
			},
		},
		eventListener: () => {
			const base_area = Number(document.getElementById("base_area").value);
			const height = Number(document.getElementById("height").value);
			const volume = (1 / 3) * base_area * height;
			document.getElementById("result").innerHTML = volume.toFixed(2) + "m<sup>3</sup>";
		}
	},
	// Volume of a toroid
	{
		name: "Volume of a toroid",
		formula: "π<sup>2</sup> * (R<sup>2</sup> - r<sup>2</sup>) * h",
		form: {
			elements: {
				MajorRadius: "major_radius",
				MinorRadius: "minor_radius",
				Height: "height",
			},
		},
		eventListener: () => {
			const major_radius = Number(document.getElementById("major_radius").value);
			const minor_radius = Number(document.getElementById("minor_radius").value);
			const height = Number(document.getElementById("height").value);
			const volume = Math.pow(Math.PI, 2) * (Math.pow(major_radius, 2) - Math.pow(minor_radius, 2)) * height;
			document.getElementById("result").innerHTML = volume.toFixed(2) + "m<sup>3</sup>";
		}
	},

	// Total Surface Area of a Cube
	{
		name: "Total Surface Area of a Cube",
		formula: "6a<sup>2</sup>",
		form: {
			elements: {
				Side: "a",
			},
		},
		eventListener: () => {
			const side = Number(document.getElementById("side").value);
			const area = 6 * side * side;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Total Surface Area of a Rectangular Prism
	{
		name: "Total Surface Area of a Rectangular Prism",
		formula: "2(lw + lh + wh)",
		form: {
			elements: {
				Length: "length",
				Width: "width",
				Height: "height",
			},
		},
		eventListener: () => {
			const length = Number(document.getElementById("length").value);
			const width = Number(document.getElementById("width").value);
			const height = Number(document.getElementById("height").value);
			const area = 2 * (length * width + length * height + width * height);
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Total Surface Area of a Sphere
	{
		name: "Total Surface Area of a Sphere",
		formula: "4πr<sup>2</sup>",
		form: {
			elements: {
				Radius: "radius",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const area = 4 * Math.PI * radius * radius;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Total Surface Area of a Cylinder
	{
		name: "Total Surface Area of a Cylinder",
		formula: "2πr(r + h)",
		form: {
			elements: {
				Radius: "radius",
				Height: "height",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const height = Number(document.getElementById("height").value);
			const area = 2 * Math.PI * radius * (radius + height);
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Total Surface Area of a Cone
	{
		name: "Total Surface Area of a Cone",
		formula: "πr(r + l)",
		form: {
			elements: {
				Radius: "radius",
				SlantHeight: "slant_height",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const slant_height = Number(document.getElementById("slant_height").value);
			const area = Math.PI * radius * (radius + slant_height);
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Total Surface Area of a Pyramid
	{
		name: "Total Surface Area of a Pyramid",
		formula: "b + pl",
		form: {
			elements: {
				BaseArea: "base_area",
				Perimeter: "perimeter",
			},
		},
		eventListener: () => {
			const base_area = Number(document.getElementById("base_area").value);
			const perimeter = Number(document.getElementById("perimeter").value);
			const area = base_area + perimeter.toFixed(2) + "m";
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},

	// Lateral Surface Area of a Cube
	{
		name: "Lateral Surface Area of a Cube",
		formula: "4a<sup>2</sup>",
		form: {
			elements: {
				Side: "a",
			},
		},
		eventListener: () => {
			const side = Number(document.getElementById("side").value);
			const area = 4 * side * side;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Lateral Surface Area of a Rectangular Prism
	{
		name: "Lateral Surface Area of a Rectangular Prism",
		formula: "2h(l + w)",
		form: {
			elements: {
				Length: "length",
				Width: "width",
				Height: "height",
			},
		},
		eventListener: () => {
			const length = Number(document.getElementById("length").value);
			const width = Number(document.getElementById("width").value);
			const height = Number(document.getElementById("height").value);
			const area = 2 * height * (length + width);
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Lateral Surface Area of a Sphere
	{
		name: "Lateral Surface Area of a Sphere",
		formula: "4πr<sup>2</sup>",
		form: {
			elements: {
				Radius: "radius",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const area = 4 * Math.PI * radius * radius;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Lateral Surface Area of a Cylinder
	{
		name: "Lateral Surface Area of a Cylinder",
		formula: "2πrh",
		form: {
			elements: {
				Radius: "radius",
				Height: "height",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const height = Number(document.getElementById("height").value);
			const area = 2 * Math.PI * radius * height;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Lateral Surface Area of a Cone
	{
		name: "Lateral Surface Area of a Cone",
		formula: "πrl",
		form: {
			elements: {
				Radius: "radius",
				SlantHeight: "slant_height",
			},
		},
		eventListener: () => {
			const radius = Number(document.getElementById("radius").value);
			const slant_height = Number(document.getElementById("slant_height").value);
			const area = Math.PI * radius * slant_height;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
	// Lateral Surface Area of a Pyramid
	{
		name: "Lateral Surface Area of a Pyramid",
		formula: "pl",
		form: {
			elements: {
				Perimeter: "perimeter",
				SlantHeight: "slant_height",
			},
		},
		eventListener: () => {
			const perimeter = Number(document.getElementById("perimeter").value);
			const slant_height = Number(document.getElementById("slant_height").value);
			const area = perimeter * slant_height;
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
];

const calculate = (call) => {
	let shape = shapes[call];
	const card = document.querySelector(".card");
	document.getElementById("title").innerHTML = shape.name;
	document.getElementById("formula").innerHTML = shape.formula;
	document.getElementById("result").innerHTML = "";
	card.querySelector(".card-body").innerHTML = `
		<form onsubmit="event.preventDefault(); shapes[${call}].eventListener();">
				${Object.entries(shape.form.elements).map(([key, value]) => `
					<div class="form-group">
						<label for="${value}">${key}</label>
						<input type="number" id="${value}" name="${value}" required>
					</div>
				`).join("")}
				<div class="form-group">
					<input type="submit" value="Calculate">
				</div>
			</form>
	`;
}

calculate(0);

const menu = document.querySelector(".menu ul");
let count = 0;

for (const shape of shapes) {
	const name = shape.name;
	const li = document.createElement("li");
	const button = document.createElement("button");
	button.innerHTML = name;
	button.setAttribute("call", count);
	button.addEventListener("click", (e) => {
		calculate(e.target.getAttribute("call"));
	});
	li.appendChild(button);
	menu.appendChild(li);
	count++;
}

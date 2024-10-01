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
			const area = Number(length.value) * Number(width.value);
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
			const area = 0.5 * Number(base.value) * Number(height.value);
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
			const area = Math.PI * Math.pow(Number(radius.value));
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
			const area = 0.5 * (Number(base1.value) + Number(base2.value)) * Number(height.value);
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
			const area = Number(base.value) * Number(height.value);
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
			const area = 0.5 * Number(d1.value) * Number(d2.value);
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
			const area = 0.5 * Number(d1.value) * Number(d2.value);
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
			const area = 0.5 * Number(n.value) * Math.pow(Number(s.value), 2) * Math.cot(Math.PI / Number(n.value));
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
			const area = (Number(angle.value) / 360) * Math.PI * Math.pow(Number(radius.value), 2);
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
			const area = 0.5 * Math.pow(Number(radius.value), 2) * (Number(angle.value) - Math.sin(Number(angle.value)));
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
			const perimeter = 2 * (Number(length.value) + Number(width.value));
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
			const perimeter = Number(a.value) + Number(b.value) + Number(c.value);
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
			const perimeter = 2 * Math.PI * Number(radius.value);
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
			const perimeter = Number(a.value) + Number(b.value) + Number(c.value) + Number(d.value);
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
			const perimeter = 2 * (Number(length.value) + Number(width.value));
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
			const perimeter = 4 * Number(side.value);
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
			const perimeter = 2 * (side1 + Number(side2.value));
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
			const perimeter = Number(n.value) * Number(side.value);
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
			const perimeter = Number(radius.value) * (Number(angle.value) + 2);
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
			const perimeter = Number(radius.value) * (Number(angle.value) + 2);
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
			const volume = Math.pow(Number(side.value), 3);
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
			const volume = Number(length.value) * Number(width.value) * Number(height.value);
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
			const volume = (4 / 3) * Math.PI * Math.pow(Number(radius.value), 3);
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
			const volume = Math.PI * Math.pow(Number(radius.value), 2) * Number(height.value);
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
			const volume = (1 / 3) * Math.PI * Math.pow(Number(radius.value), 2) * Number(height.value);
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
			const volume = (1 / 3) * Number(base_area.value) * Number(height.value);
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
			const volume = Math.pow(Math.PI, 2) * (Math.pow(Number(major_radius.value), 2) - Math.pow(Number(minor_radius.value), 2)) * Number(height.value);
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
			const area = 6 * Math.pow(Number(side.value), 2);
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
			const area = 2 * (Number(length.value) * Number(width.value) + Number(length.value) * Number(height.value) + Number(width.value) * Number(height.value));
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
			const area = 4 * Math.PI * Math.pow(Number(radius.value), 2);
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
			const area = 2 * Math.PI * Number(radius.value) * (Number(radius.value) + Number(height.value));
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
			const area = Math.PI * Number(radius.value) * (Number(radius.value) + Number(slant_height.value));
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
			const area = Number(base_area.value) + Number(perimeter.value);
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
			const area = 4 * Math.pow(Number(side.value), 2);
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
			const area = 2 * Number(height.value) * (Number(length.value) + Number(width.value));
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
			const area = 4 * Math.PI * Math.pow(Number(radius.value), 2);
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
			const area = 2 * Math.PI * Number(radius.value) * Number(height.value);
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
			const area = Math.PI * Number(radius.value) * Number(slant_height.value);
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
			const area = Number(perimeter.value) * Number(slant_height.value);
			document.getElementById("result").innerHTML = area.toFixed(2) + "m<sup>2</sup>";
		}
	},
];

const calculate = (call) => {
	let shape = shapes[call];
	const card = document.querySelector(".card");
	title.innerHTML = shape.name;
	formula.innerHTML = shape.formula;
	result.innerHTML = "";
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

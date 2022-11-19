/*var constraints = {
    nombre: {
        presence: true,
        length: {
            minimum: 5,
            maximum: 30,
            message:'^Nombre debe poseer entre 5 y 30 caracteres'
        }
    },
    descripcion: {
        presence: true
    },
    preciocosto: {
        presence: { message: '^Precio costo no puede estar vacío' },
        numericality: {
            greaterThanOrEqualTo: 0,
            notGreaterThanOrEqualTo: '^Precio costo no puede ser menor que cero'
        }
    },
    precioventa: {
        presence: { message: '^Precio venta no puede estar vacío' },
        numericality: {
            greaterThanOrEqualTo: 0,
            notGreaterThanOrEqualTo: '^Precio venta no puede ser menor que cero'
        }
    },
    stock: {
        presence: { message: '^Stock no puede estar vacío' },
        numericality: {
            greaterThanOrEqualTo: 0,
            notGreaterThanOrEqualTo: '^Stock no puede ser menor que cero'
        }
    },
    stockminimo: {
        presence: { message: '^Stock Minimo no puede estar vacío' },
        numericality: {
            greaterThanOrEqualTo: 0,
            notGreaterThanOrEqualTo: '^Stock Minimo no puede ser menor que cero'
        }
    }
}*/


$(document).ready(function () {
    $("#basic-form").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            age: {
                required: true,
                number: true,
                min: 18
            },
            email: {
                required: true,
                email: true
            },
            weight: {
                required: {
                    depends: function (elem) {
                        return $("#age").val() > 50
                    }
                },
                number: true,
                min: 0
            }
        },
        messages: {
            name: {
                minlength: "Name should be at least 3 characters"
            },
            age: {
                required: "Please enter your age",
                number: "Please enter your age as a numerical value",
                min: "You must be at least 18 years old"
            },
            email: {
                email: "The email should be in the format: abc@domain.tld"
            },
            weight: {
                required: "People with age over 50 have to enter their weight",
                number: "Please enter your weight as a numerical value"
            }
        }
    });
});
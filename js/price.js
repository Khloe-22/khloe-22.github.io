const planes = [
    {
        nombre: "Flexbox",
        precio: "$120/mes",
        caracteristicas: ["FlexBox", "Layouts", "Responsive"],
        claseEspecial: "price__element--best-2"
    },
    {
        nombre: "Grid",
        precio: "$130/mes",
        caracteristicas: ["Grid", "Implicit Grid", "Responsive"],
        claseEspecial: "price__element--best"
    },
    {
        nombre: "Animation",
        precio: "$140/mes",
        caracteristicas: ["Animation", "Transition", "Render Web"],
        claseEspecial: ""
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const contenedorPlanes = document.querySelector('.price__table');

    planes.forEach(plan => {
        // Crear el div contenedor de la tarjeta
        const planElement = document.createElement('div');
        planElement.classList.add('price__element');
        if (plan.claseEspecial) {
            planElement.classList.add(plan.claseEspecial);
        }

        // Añadir el nombre del plan
        const planName = document.createElement('p');
        planName.classList.add('price__name');
        planName.textContent = plan.nombre;
        planElement.appendChild(planName);

        // Añadir el precio
        const planPrice = document.createElement('h3');
        planPrice.classList.add('price__price');
        planPrice.textContent = plan.precio;
        planElement.appendChild(planPrice);

        // Crear la lista de características
        const planItems = document.createElement('div');
        planItems.classList.add('price__items');
        
        plan.caracteristicas.forEach(caracteristica => {
            const item = document.createElement('p');
            item.classList.add('price__features');
            item.textContent = caracteristica;
            planItems.appendChild(item);
        });

        planElement.appendChild(planItems);

        // Añadir el botón de CTA
        const ctaButton = document.createElement('a');
        ctaButton.href = "#";
        ctaButton.classList.add('price__cta');
        ctaButton.textContent = "Precio Estándar";
        planElement.appendChild(ctaButton);

        // Añadir la tarjeta al contenedor principal
        contenedorPlanes.appendChild(planElement);
    });
});

const { z } = window.Zod;

const registerSchema = z.object({
    nombre: z
        .string()
        .min(1, "El nombre es obligatorio"),

    correo: z
        .string()
        .email("Correo inválido"),

    password: z
        .string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
});

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        password: document.getElementById("password").value
    };

    try {
        registerSchema.parse(formData);

        alert("Registro exitoso");

    } catch (error) {
        alert(
            error.errors.map(e => e.message).join("\n")
        );
    }
});
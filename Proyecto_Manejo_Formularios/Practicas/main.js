const form1 = document.getElementById('form1');

form1.addEventListener('submit', (event)=>{
    event.preventDefault();

    const input1 = document.getElementById('input1').value;

    console.log(input1);
});

const form2 = document.getElementById('form2');

form2.addEventListener('submit', (event)=>{
    event.preventDefault();

    const input2 = document.getElementById('input2').value;

    const salida2 = document.getElementById('salida2');

    salida2.textContent = input2;
});

const form3 = document.getElementById('form3');

form3.addEventListener('submit', (event)=>{
    event.preventDefault();

    const input3 = document.getElementById('input3').value;

    const error3 = document.getElementById('error3');

    if(input3 === ""){
        error3.textContent = "Campo obligatorio";
    }else{
        error3.textContent = "";
    }
});

const form4 = document.getElementById('form4');

form4.addEventListener('submit', (event)=>{
    event.preventDefault();

    const input4 = document.getElementById('input4').value;

    const error4 = document.getElementById('error4');

    if(!input4.includes("@") || !input4.includes(".")){
        error4.textContent = "El email no es valido";
    }else{
        error4.textContent = "Correo correcto";
    }
});

const form5 = document.getElementById('form5');

form5.addEventListener('submit', (event)=>{
    event.preventDefault();

    const input5 = document.getElementById('input5').value;
    const lista5 = document.getElementById('lista5');
    const li = document.createElement('li');
    li.textContent = input5;
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "x";
    botonEliminar.addEventListener('click', ()=>{
        li.remove();
    });

    li.appendChild(botonEliminar);

    lista5.appendChild(li);
});
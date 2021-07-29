import Swal from 'sweetalert2';

export const AlertError = ({ title = 'Error', text = 'Descricao do erro', textButton1 = "OK", textButton2 = "Cancelar" }) => {

    Swal.fire({
        title: title,
        text: text,
        confirmButtonText: textButton1,
        showCancelButton: true,
        cancelButtonText: textButton2,
        icon: 'error',
    })
}

export const AlertSuccess = ({ title = 'Sucesso', text = 'Descricao', textButton1 = "OK!", textButton2 = "Cancelar" }) => {

    Swal.fire({
        title: title,
        text: text,
        confirmButtonText: textButton1,
        showCancelButton: true,
        cancelButtonText: textButton2,
        icon: 'success',
    })
}

export const AlertWarning = ({ title = 'Warning', text = 'Descricao do alerta', textButton1 = "Ok!", textButton2 = "Cancelar" }) => {

    Swal.fire({
        title: title,
        text: text,
        confirmButtonText: textButton1,
        showCancelButton: true,
        cancelButtonText: textButton2,
        icon: 'warning',
    })
}


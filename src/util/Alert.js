import Swal from 'sweetalert2';

export function successAlert(value, value2) {
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: value + ' has been ' + value2,
        showConfirmButton: false,
        timer: 2000
    });
}

export function errorAlert(value, value2) {
    Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: value + ' ' + value2,
        showConfirmButton: false,
        timer: 2000
    });
}

export function emptyMessage(value) {
    let timerInterval;
    Swal.fire({
        title: value + ' Empty Result...!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            let b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer...!');
        }
    });
}

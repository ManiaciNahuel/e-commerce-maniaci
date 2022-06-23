/* Importations */
import Swal from "sweetalert2"

function swalFire(icon, tittle, text, time) {
    Swal.fire({
        icon: icon,
        title: tittle,
        text: text,
        showConfirmButton: false,
        timer: time,
        position: 'top-end' 
      })
}

export default swalFire
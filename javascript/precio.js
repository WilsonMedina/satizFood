const d = document

export default function precio(btn, btntwo){
          
    d.addEventListener('click', e => {

        const $father = e.target.parentElement,
              $hiden = $father.querySelector('.hidden'),
              $precio = $father.nextElementSibling

        if(e.target.matches(btn)){
            let valor = $hiden.value / 2
            $precio.textContent = `${valor} $`
           
        }

        if(e.target.matches(btntwo)){
            let valor = $hiden.value
            $precio.textContent = `${valor} $`
        }
    }) 
}
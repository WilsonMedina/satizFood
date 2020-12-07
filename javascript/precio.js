const d = document

export default function precio(btnOne, btn, btntwo){
          
    d.addEventListener('click', e => {

        const $father = e.target.parentElement,
              $hiden = $father.querySelector('.hidden'),
              $hidenOne = $father.querySelector('.hiddenOne'),
              $precio = $father.nextElementSibling

        if(e.target.matches(btnOne)){
            let valor = $hidenOne.value
            $precio.textContent = `$${valor}`
        }
        if(e.target.matches(btn)){
            let valor = $hiden.value / 2 + 5
            $precio.textContent = `$${valor}`
           
        }

        if(e.target.matches(btntwo)){
            let valor = $hiden.value
            $precio.textContent = `$${valor}`
        }
    }) 
}
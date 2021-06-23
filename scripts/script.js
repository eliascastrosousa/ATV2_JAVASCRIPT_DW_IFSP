// Mudar a Figura (Redes Sociais)

const obj_sel_rede_social = document.querySelector('#sel_rede_social')
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

obj_sel_rede_social.addEventListener('change', FunMudaFigura)

function  FunMudaFigura() {
    obj_img_rede_social.setAttribute('src', 'imagens/' + obj_sel_rede_social.value + '.png' ) // ok
    obj_img_rede_social.setAttribute('alt','Logo ' + obj_sel_rede_social.value ) // 
    obj_img_rede_social.setAttribute('title','Logo ' + obj_sel_rede_social.value )
    obj_p_rede_social.innerText = 'Logo ' + obj_sel_rede_social.value
}

// Adicionar Figuras

const obj_figuras_array = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')

for (obj_img of obj_figuras_array){
    obj_img.addEventListener('click', function() { FunAdicionaFigura(this.src, this.alt) } )
}

function  FunAdicionaFigura(par_src, par_alt) { //par = parametro
    obj_img_nova.setAttribute('src', par_src)
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt)
    obj_div_adiciona_figura.appendChild(obj_img_nova) 

    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('desabled', 'true')
    obj_input_novo.setAttribute('value', par_alt)
    obj_input_novo.setAttribute('class','novo_input')
    obj_div_adiciona_figura.appendChild(obj_input_novo) 

}





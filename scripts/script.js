// Mudar a Figura (Redes Sociais)

const obj_sel_rede_social = document.querySelector('#sel_rede_social')
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

obj_sel_rede_social.addEventListener('change', FunMudaFigura)

function FunMudaFigura() {
    obj_img_rede_social.setAttribute('src', 'imagens/' + obj_sel_rede_social.value + '.png') // ok
    obj_img_rede_social.setAttribute('alt', 'Logo ' + obj_sel_rede_social.value) // 
    obj_img_rede_social.setAttribute('title', 'Logo ' + obj_sel_rede_social.value)
    obj_p_rede_social.innerText = 'Logo ' + obj_sel_rede_social.value
}

// Adicionar Figuras

const obj_figuras_array = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')

for (obj_img of obj_figuras_array) {
    obj_img.addEventListener('click', function () { FunAdicionaFigura(this.src, this.alt) })
}

function FunAdicionaFigura(par_src, par_alt) { //par = parametro
    obj_img_nova.setAttribute('src', par_src)
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt)
    obj_div_adiciona_figura.appendChild(obj_img_nova)

    // input

    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('desabled', 'true')
    obj_input_novo.setAttribute('value', par_alt)
    obj_input_novo.setAttribute('class', 'novo_input')
    obj_div_adiciona_figura.appendChild(obj_input_novo)
}

// Preencher Tabela
const obj_td_array = document.querySelectorAll('#tab_principal td')
const obj_tab_vazia = document.querySelector('#tab_vazia')
const obj_caption_vazia = document.querySelector('#tab_vazia caption')
const obj_prog_tab_vazia = document.querySelector('#prog_tab_vazia')

let contador_linhas = 0

for (obj_td of obj_td_array) {
    obj_td.addEventListener('click', function () { FunPreencheTabela(this.innerText) })
}

function FunPreencheTabela(par_text) {
    if (contador_linhas < 5) {
        const obj_tr_novo = document.createElement('tr')
        const obj_td_novo = document.createElement('td')
        obj_td_novo.innerText = par_text
        obj_tr_novo.appendChild(obj_td_novo)
        obj_tab_vazia.appendChild(obj_tr_novo)
        contador_linhas++
        obj_caption_vazia.innerHTML = `Tabela com ${contador_linhas} Linha(s)`
        obj_prog_tab_vazia.value = contador_linhas
    } else {
        alert('Tabela Cheia!')
    }
}
// Segunda parte - Mudar a Figura

const obj_rb_array = document.querySelectorAll('[name="redessociais"]')
const obj_img_code = document.querySelector('#img_code')
const obj_pre = document.querySelector('#predefinido')

for (obj_rb of obj_rb_array) {
    obj_rb.addEventListener('click', FunMudaImgLingProg)
}


function FunMudaImgLingProg() {
    for (obj_rb of obj_rb_array) {
        if (obj_rb.checked) {
            obj_img_code.setAttribute('src', 'imagens/' + obj_rb.value + '.png')
            obj_img_code.setAttribute('alt', 'Logo ' + obj_rb.value)
            obj_img_code.setAttribute('title', 'Logo ' + obj_rb.value)
            obj_pre.innerText = 'Logo ' + obj_rb.value
        }
    }
}

// Preencher Lista 

/* em comentario pois está com erro

const obj_li_array = document.querySelectorAll('#lista_principal li')
const obj_lista_vazia = document.querySelector('li')
const obj_paragrafo = document.querySelector('p')
const obj_prog_lista_vazia = document.querySelector(#prog_lista_vazia)

let contador_lista = 0

for (obj_li of obj_li_array){
    obj_li.addEventListener('click', function () { FunPreencheLista(this.innerText) })
}

function FunPreencheLista(par_TextLista) {
    if(contador_lista <6) {
        const obj_ul_novo = document.createElement('ul')
        const obj_li_novo = document.createElement('li')
        obj_li_novo.innerText = par_TextLista
        obj_ul_novo.appendChild(obj_li_novo)
        obj_lista_vazia.appendChild(obj_ul_novo) 
        contador_lista++
        obj_paragrafo.innerHTML = `Lista com ${contador_lista} Linha(s).`
        obj_prog_lista_vazia.value = contador_lista 
    }else {
        window.alert('Lista Cheia!')
    }
}
*/
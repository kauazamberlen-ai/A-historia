const avanca = document .querySelectorAll('.btn-proximo')

avanca.forEach(button=>{ 
    button .addEventListener('click', function() {
    const atual=document.querySelector('ative')
    const proximoPasso ='passo-'+ this.getAtribute('data-proximo')

    atual.classList.remove('ativo')
    document.getElementById(proximoPASSO). classList.add('ativo')
    })
})  



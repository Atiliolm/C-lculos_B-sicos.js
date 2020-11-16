//batidas
nome=prompt("digite seu nome")
idade=prompt("digite sua idade")
batidas=idade*(365*(24*(75*60)))
document.write("Olá meu nome é " , nome , ", e ao longo de minha vida meu coração bateu cerca de " , batidas , " vezes")

valorpago=prompt("quanto pagou pelas galinhas(em reais)")
numGalinhas=prompt("quantas galinhas comprou?")
precoGalinha=valorpago/numGalinhas
document.write("<br> O criador de galinhas pagou " , precoGalinha , " reais em cada galinha")

//2 + km * 1.4 + min * .26
min=prompt("Qual o tempo de viagem?(min)")
km=prompt("Qual a distância percorrida?(km)")
valor=2+km*1.4+min*0.26
document.write("<br> Tempo de viagem: " , min, "<br>Distância: " , km, "<br>Valor Total: R$" , valor.toFixed(2))
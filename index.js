let sal = prompt("Qual o salário do colaborador?")
let old = sal
let reajuste = 0
if (sal<=280)
{
    sal = parseInt(sal) + (0.2*sal)
    reajuste = 20
}
else if (sal>280 && sal<=700)
{
    sal = parseInt(sal) + (0.15*sal)
    reajuste = 15
}
else if (sal>700 && sal <=1500)
{
    sal = parseInt(sal) + (0.1*sal)
    reajuste = 10
}
else if (sal>1500)
{
    sal = parseInt(sal) + (0.05*sal)
    reajuste = 5
}
alert("Salário antes do reajuste era de " + old + " reais. O percentual de aumento aplicado é de " + reajuste + " %. O valor do aumento é de " + (sal-old) + " reais. O novo salário após o aumento é de " + sal + " reais.")

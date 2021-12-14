
var genFunction = () => {
    let ta,tb,tc,func,p,q,delta,a,b,c,tp,tq,tx1,tx2,x1,x2
    let type = Math.floor(Math.random() * 5)
    var genVars = () => {
    a = Math.floor(Math.random() * 6) + 1
    b = Math.floor(Math.random() * 6) + 1
    c = Math.floor(Math.random() * 6) + 1
    Math.random() < 0.5 ? a *= -1 : a *= 1
    Math.random() < 0.5 ? b *= -1 : b *= 1
    Math.random() < 0.5 ? c *= -1 : c *= 1
    a > 0 ? ta=`${a}`:ta=`${a}`
    b > 0 ? tb=` + ${b}`:tb=` ${b}`
    c > 0 ? tc=` + ${c}`:tc=` ${c}`
    delta = (b**2) - (4*a*c)
    while(delta<0 && type == 4){
        type = Math.floor(Math.random() * 5)
    }
    }
    genVars()
    p = -(b/(2*a))
    q = -(delta/(4*a))
    p > 0 ? tp=` ${p}`:tp=`+ ${p}`
    q > 0 ? tq=` + ${q}`:tq=` ${q}`
    tx1 = tx2 = " "
    switch (true) {
        case (delta>0):
            x1=(-b-Math.sqrt(delta))/(2*a)
            x2=(-b+Math.sqrt(delta))/(2*a)
            x1 > 0 ? tx1=`+ ${x1}`:tx1=` ${x1}`
            x2 > 0 ? tx2=`+ ${x2}`:tx1=` ${x2}`
            break;
        case (delta=0):
            x=p.toString()
            x1 > 0 ? tx1=`+ ${x1}`:tx1=` ${x1}`
            tx2=" "
            break;
        case (delta<0):
            tx1=" "
            tx2=" "
        break;
        default:
            break;
    }
    
    console.log(a,b,c, type);
    switch (type) {
        case 0:
            func = `f(x) = ${ta}x²${tb}x${tc}`
            break;
        case 1:
            func = `f(x) = x(${ta}x${tb})`
            break;
        case 2:
            func = `f(x) = ${ta}x²${tc}`
            break;
        case 3:
            func = `f(x) = (x${tp})²${tq}`
            break;
        case 4:
            func = `f(x) = (x ${tx1})(x ${tx2})`
            break;
    
        default:
            break;
    }
    
    return func.replace("²","^2")
}
var eqs = []
for(i=0;i<5;i++){
eqs[i] = genFunction()
}
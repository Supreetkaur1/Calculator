function display(val) {
    document.getElementById('ip').value += val;
    return val;
}
function clearInput() {
    document.getElementById('ip').value = '';
}
function backspace() { 
    var size = document.getElementById('ip').value.length
    var v = document.getElementById('ip').value.substring(0, size - 1)
    document.getElementById('ip').value = v
}
function solve() {
    let x = document.getElementById('ip').value;
    let y = eval(x);
    document.getElementById('ip').value = y;
    return y;

}
function percent() {
    let p = document.getElementById('ip').value;
    document.getElementById('ip').value = p/100;
}
function fact() {
    var number=1;
    var f = document.getElementById('ip');
    if(f.value === 0){
        f.value="1";
    }
    else if (f.value<0) {
        f.value ="undefined";    
    }
    else{
        var number =1;
        for(var i=f.value;i>0;i--)
        {
            number*=i;
        }
        document.getElementById('ip').value=number;
    }
}
function square(){
    var s= document.getElementById('ip').value;
    document.getElementById('ip').value = s*s;
}
function cos() {
    var c= document.getElementById('ip').value;
    document.getElementById('ip').value = Math.cos(c);
}
function sin() {
    var s= document.getElementById('ip').value;
    document.getElementById('ip').value = Math.sin(s);
}
function tan() {
    var t= document.getElementById('ip').value;
    document.getElementById('ip').value = Math.tan(t);
}
function log(){
    var l=document.getElementById('ip').value;
    document.getElementById('ip').value = Math.log10(l);
    
}
function sqr_root(){
    var r= document.getElementById('ip').value;
    document.getElementById('ip').value = Math.sqrt(r);
}



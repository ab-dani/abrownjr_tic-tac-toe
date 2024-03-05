let a =
  "\
 XXXX\
 XXXX\
 XXXX\
 XXXX\
 ";
let b = Array.from(a);

if (a[4] === 4) {
  a[4] = "D";
}

a.onclick();
{
    a[1] = "S";
    
}

a.dblclick();
{
    a[2] = "D";
}

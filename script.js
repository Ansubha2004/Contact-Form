let fn=document.querySelector("#firstname");
let ln=document.querySelector("#lastname");
let email=document.querySelector("#email");
let g=document.querySelector("#gender");
let cn=document.querySelector("#contactnumber");
let msg=document.querySelector("#message");
//media query ussing js
var x=window.matchMedia("(max-width:485px)");
textbox(x);//will show change in box shape at first 
const textbox=(x)=>{
if(x.matches==true)
    msg.children[2].setAttribute("style","height:100px; padding:8px 8px 8px 8px;");
else
    msg.children[2].setAttribute("style","height:70px; padding:8px 8px 8px 8px;");
}
x.addEventListener("change",()=>{textbox(x)});

let con=document.querySelector("#consent");
let submit=document.querySelector("button");
const fn1=(value)=>{
    if(value.length!=0)
        {
            for(let ch of value)
            {
                if(ch==" " || isNaN(ch)==false){
                    error(fn);
                    return false;
                }
                else
                continue;
            }
            errorfree(fn)
            return true;
        }
        else{
            error(fn);
            return false;
        }
};
const nam=(n,value)=>{
    if(value.length!=0)
        {
            for(let ch of value)
            {
                if(ch==" " || isNaN(ch)==false){
                    error(n);
                    return false;
                }
                else
                continue;
            }
            errorfree(n)
            return true;
        }
        else{
            error(n);
            return false;
        }
};
const mail=(e)=>{
    let l=e.length;
    if(l!=0 && l>10)
        {
            for(let ch in e)
                {
                    if(ch==" ")
                        {
                            error(email);
                            return false;
                        }
                }
                if(e.slice(l-10,l)!="@gmail.com" || isNaN(e.charAt(0))==false)
                {
                    error(email);
                    return false;
                }
                else{
                    errorfree(email);
                    return true;
                }
        }
        else
        {
            error(email);
            return false;
        }
};
const gender=(gen)=>{
    if(gen=="")
        {
            error(g);
            return false;
        }
    else{
        errorfree(g);
        return true;
    }
};
const number=(n)=>{
    if(n.length==10)
        {
            errorfree(cn);
            return true;
        }
        else
        {
            error(cn);
            return false;
        }
}
const error=(x)=>{
    x.children[2].setAttribute("class","input redborder");
    x.children[3].setAttribute("style","");
    x.children[2].value="";
}
const errorfree=(x)=>{
    x.children[2].setAttribute("class","input");
    x.children[3].setAttribute("style","visibility:hidden");
}
const message=(m)=>{
    if(m.length!=0)
        {
            errorfree(msg);
            return true;
        }
        else{
            error(msg);
            return false;
        }
}
const consent=(c)=>{
    if(c.checked==true)
        {
            con.children[3].setAttribute("style","visibility:hidden");
            return true;
        }
        else{
            con.children[3].setAttribute("style","");
            return false;
        }
}
const yes=()=>{
    if(nam(fn,fn.children[2].value)==true && nam(ln,ln.children[2].value)==true && mail(email.children[2].value)==true && gender(g.children[2].value)==true && number(cn.children[2].value)==true && message(msg.children[2].value)==true && consent(con.children[0])==true)
    return true;
}
const resetform=()=>{
    fn.children[2].value="";
    ln.children[2].value="";
    email.children[2].value="";
    g.children[2].value="";
    cn.children[2].value="";
    msg.children[2].value="";
    con.children[0].checked=false;
}
submit.addEventListener("click",()=>{
    if(yes()==true){
        let t;
        setTimeout(()=>{t=confirm("✔ Message Sent!\n\nThanks "+fn.children[2].value+" "+ln.children[2].value+" for completing the form. We will be in touch soon!\nDo you want another form?");
        if(t==true)
            resetform();
    },"1000");
    
    }   
});
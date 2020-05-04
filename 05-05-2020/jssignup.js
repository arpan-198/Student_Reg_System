var fiel=["name","guard","rela","gmob","m","f","o","dob","addr","dist","pin","ps","state","mob","email"];

enb=(id1,id2)=>{

    var i;

    if(document.getElementById(id1).value!="")
    {
        
        i=0;
        while(fiel[i]!=id2)
        {
            i++;
        }
        //alert(i);
        while(i<fie1.length && document.getElementById(fiel[i]).value!="")
        {
            document.getElementById(fiel[i]).disabled=false;
            i++;
            //alert(i);
        }
        if(i<fie1.length)
        document.getElementById(fiel[i]).disabled=false;
       
    }
    else
    {
        i=0;
        while(fiel[i]!=id1)
        {
            i++;
        }
        for(;i<fiel.length;i++)
        {
             if(id1==fiel[i])
             continue;
             else
             document.getElementById(fiel[i]).disabled=true;
        }
    }
}

validnum=(evnt)=>{
    var ievent=(evnt.which) ? evnt.which : evnt.keyCode;
    if(ievent>=48 && ievent<=57)
    return true;
    else
    return false;
}


validalpha=(evnt)=>{
    var ievent=(evnt.which) ? evnt.which : evnt.keyCode;
    if((ievent>=65 && ievent<=90) || (ievent>=97 && ievent<=122) || ievent==32 || ievent==8 || ievent==9 || ievent==45)
    return true;
    else
    return false;
}

validalpha1=()=>{
    var ievent=(event.which) ? event.which : event.keyCode;
    if(validalpha(event) || validnum(event) || ievent==44 || ievent==47 || ievent==40 || ievent==41 || ievent==91  || ievent==93)
    return true;
    else
    return false;
}


emailvalid=()=>{
    var mail=document.getElementById("email").value;
    err=document.getElementById("er");
    su=document.getElementById("suc");
    var vmail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,5})+$/;
    if(!vmail.test(mail))
    {
            if(mail=="")
            {
                 err.innerHTML="";
                 su.innerHTML="";  
            }
            else{
        err.innerHTML="INVALID";
        su.innerHTML="";
                }
    return false;
    }
    else
    {
        su.innerHTML="OK";
        err.innerHTML="";
        return true;
    }
    

}

enbe=(id1,id2,fun1,fun2=null)=>{

    var i;

    if(fun1() && document.getElementById(id1).value!="")
    {
        
        i=0;
        while(fiel[i]!=id2)
        {
            i++;

        }

        while(i<fiel.length && document.getElementById(fiel[i]).value!="")
        {
            document.getElementById(fiel[i]).disabled=false;
            i++;
        }

       if(fun2() && i<fiel.length)
       document.getElementById(fiel[i]).disabled=false;
       
       

       if(i>i<fiel.length)
       {
        document.getElementById(id2).disabled=false;
       }
    }
    else
    {
        i=0;
        while(fiel[i]!=id1)
        {
            i++;
        }
        for(;i<fiel.length;i++)
        {
             if(id1==fiel[i])
             continue;
             else
             document.getElementById(fiel[i]).disabled=true;
        }
    }
}


final=()=>{
    if(passmatch())
    {
        document.getElementById("chkb").disabled=false;
        document.getElementById("submi1").disabled=false;
    }
    else
    {
        document.getElementById("chkb").disabled=true;
        document.getElementById("submi1").disabled=true;
    }
    document.getElementById("chkb").checked=false;
}

final1=()=>{
    if(document.getElementById("chkb").checked=true)
    {
        document.getElementById("submi1").disabled=false;
    }
    else
    {
        document.getElementById("submi1").disabled=true;
    }
}


enbN=(id1,id2,id3=null,id4=null)=>{
    var i;

    if(document.getElementById(id1).value.length==10)
    {
        
        i=0;
        while(fiel[i]!=id2)
        {
            i++;
        }
       
        while(i<fie1.length && document.getElementById(fiel[i]).value!="")
        {
            document.getElementById(fiel[i]).disabled=false;
            i++;
        }

        if(i<fie1.length && id3==null && id4==null)
        document.getElementById(fiel[i]).disabled=false;
    }
    else
    {

        i=0;
        while(fiel[i]!=id1)
        {
            i++;
        }
        for(;i<fiel.length;i++)
        {
             if(id1==fiel[i])
             continue;
             else
             document.getElementById(fiel[i]).disabled=true;
        }

        if(id3!=null && id4!=null)
       {
            document.getElementById(id3).disabled=true;
            document.getElementById(id4).disabled=true;
       }
    }
}



function subm()
{
    if(f2.name.value!="" && f2.guard.value!="" && f2.rela.value!="" && f2.gmob.value!="" && f2.gen.value!="" && f2.dob.value!="" && f2.addr.value!="" && f2.dist.value!="" && f2.pin.value!="" && f2.ps.value!="" && f2.state.value!="" && f2.mob.value!="" && f2.email.value!="")
    {
        alert("Submitted successfully");
        return true;
        
    }
    else
    {
        alert("Wrong");
        return false;
    }
}
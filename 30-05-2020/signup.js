function passformat()
         {
        var l=0,N=0,sp=0,U=0,S=0;     
        var ch1,ch,er,s;
        ch1=document.getElementById("passw").value;
        er=document.getElementById("error1");
        s=document.getElementById("suc1");
        l=ch1.length;
        for(var i=0;i<l;i++)
        {
        ch=ch1.charAt(i);
        if(ch>='a' && ch<='z')
        S++;
        else if(ch>='A' && ch<='Z')
        U++;
        else if(ch>='0' && ch<='9')
        N++;
        else if(ch=='&' || ch=='#' || ch=='@' || ch=='*' || ch=='%' || ch=='~' || ch=='$' || ch=='^'  || ch=='_')
        sp++;
        }
        if(N>0 && sp>0 && U>0 && S>0 && l>8)
        {
            er.innerHTML="";
            s.innerHTML="OK";
            return true;
        }
        else if(l==0)
        {
            er.innerHTML="";
            s.innerHTML="";
            return true;
        }
        else
        {
            er.innerHTML="INVALID";
            s.innerHTML="";
            return false;
        }
        
         }


function passmatch()
{
    var ch1,st1,st2,er,s,ch2;
    var flag=1,l2=0,l1=0;
    ch1=document.getElementById("rpassw").value;
    ch2=document.getElementById("passw").value;
    er=document.getElementById("error2");
    s=document.getElementById("suc2");
    l1=ch2.length;
    l2=ch1.length;
    if(l1==l2){
    for(var i=0;i<l2;i++)
    {
        st1=ch1.charAt(i);
        st2=ch2.charAt(i);
        if(st1!=st2)
        {
            flag=0;
            break;
        }
    }
    }
    else
        flag=0;

    if(flag==1)
        {
            er.innerHTML="";
            s.innerHTML="OK";
            return true;
        }
        else if(l2==0)
        {
            er.innerHTML="";
            s.innerHTML="";
            return false;
        }
        else if(flag==0)
        {
            er.innerHTML="INVALID";
            s.innerHTML="";
            return false;
        }

}


chng=()=>{
    if(document.getElementById('text1').value.length>=8)
    {
        document.getElementById('passw').disabled=false;
    }
    else
    {
        document.getElementById('passw').disabled=true;
    }
}

enbe=(id1,id2,fun1)=>{

    if(fun1() && document.getElementById(id1).value!="")
    {
        document.getElementById(id2).disabled=false;
        
    }
    else
    {
        document.getElementById(id2).disabled=true;
    }
}


final=()=>{
    if(passmatch())
    {
        document.getElementById("sup").disabled=false;
    }
    else
    {
        document.getElementById("sup").disabled=true;
    }
}

re_set=()=>{
    document.getElementById('uploadImage').value="";
    img=document.getElementById('uploadPreview');
    img.src='img/prof.png';
    img.alt="";
    document.getElementById('text1').value="";
    document.getElementById('passw').value="";
    document.getElementById('rpassw').value="";
    document.getElementById('text1').disabled=true;
    document.getElementById('passw').disabled=true;
    document.getElementById('rpassw').disabled=true;
}

signup=()=>{
    user=document.getElementById("text1").value;
    ch1=document.getElementById("rpassw").value;
    ch2=document.getElementById("passw").value;
    var flag=0;

    l1=ch2.length;
    l2=ch1.length;
    if(l1==l2){
        flag=1;
    for(var i=0;i<l2;i++)
    {
        st1=ch1.charAt(i);
        st2=ch2.charAt(i);
        if(st1!=st2)
        {
            flag=0;
            break;
        }
    }
  }

    if(flag==1 && user.length<=10)
    {
        alert("Submition succussful");
        return true;
    }
 
    else
    {
        alert("Submition Unsuccussful");
        if(flag==0)
        {
            alert("Password Not Match");
        }
        else
        {
            alert("user-Id too long");
        }
        
        return false;

    }
}

load=()=>{
    document.getElementById('f2').style.display='block';
    re_set();
}
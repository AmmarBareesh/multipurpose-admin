export function getFormValue(form,CheckValue:boolean){
    var arrForm={};
    var error=0;
    form.forEach((value)=>{
      if(CheckValue)
      {
        if((<any>value).getAttribute("required") != null)
        {
          if((<any>value).getAttribute("type")=="text")
          {
            if((<any>value).getAttribute("minLength"))
            {
              if((<any>value).getAttribute("minLength") > (<any>value).value.length)
              {
                if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
                {
                  document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML=(<any>value).getAttribute("kerror");
                }
                (<any>value).classList.add("ErrorRequired");
                error++;
              }
              else{
                (<any>value).classList.remove("ErrorRequired");
                if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
                {
                  document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML="";
                }
                
              }
            }
            else{
              if((<any>value).value=="")
              {
                if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
                {
                  document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML=(<any>value).getAttribute("kerror");
                }
                (<any>value).classList.add("ErrorRequired");
                error++;
              }
              else{
                (<any>value).classList.remove("ErrorRequired");
                if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
                {
                  document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML="";
                }
              }
            }
          }
          else if((<any>value).getAttribute("type")=="email"){
            if(!ValidateEmail((<any>value).value)){
              if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
              {
                document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML=(<any>value).getAttribute("kerror");
              }
                (<any>value).classList.add("ErrorRequired");
                error++;
            }
            else{
              (<any>value).classList.remove("ErrorRequired");
              if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
              {
                document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML="";
              }
            }
          }
          else if((<any>value).getAttribute("type")=="date"){
            if(!(<any>value).value)
            {
              if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
              {
                document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML=(<any>value).getAttribute("kerror");
              }
                (<any>value).classList.add("ErrorRequired");
                error++;
            }
            else{
              (<any>value).classList.remove("ErrorRequired");
              if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
              {
                document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML="";
              }
            }
          }
          else if((<any>value).getAttribute("type")=="time"){
            if(!(<any>value).value)
            {
              if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
              {
                document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML=(<any>value).getAttribute("kerror");
              }
                (<any>value).classList.add("ErrorRequired");
                error++;
            }
            else{
              (<any>value).classList.remove("ErrorRequired");
              if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
              {
                document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML="";
              }
            }
          }
          else if((<any>value).getAttribute("type")=="password"){
            if(VPassword((<any>value).value)<40)
            {
              if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
              {
                document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML=(<any>value).getAttribute("kerror");
              }
                (<any>value).classList.add("ErrorRequired");
                error++;
            }
            else{
              (<any>value).classList.remove("ErrorRequired");
              if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
              {
                document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML="";
              }
            }
          }
          else if((<any>value).getAttribute("type")=="tel")
          {
            if((<any>value).getAttribute("minLength"))
            {
              if((<any>value).getAttribute("minLength") > (<any>value).value.length)
              {
                if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
                {
                  document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML=(<any>value).getAttribute("kerror");
                }
                (<any>value).classList.add("ErrorRequired");
                error++;
              }
              else{
                (<any>value).classList.remove("ErrorRequired");
                if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
                {
                  document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML="";
                }
                
              }
            }
            else{
              if((<any>value).value=="")
              {
                if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
                {
                  document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML=(<any>value).getAttribute("kerror");
                }
                (<any>value).classList.add("ErrorRequired");
                error++;
              }
              else{
                (<any>value).classList.remove("ErrorRequired");
                if(document.querySelector('[id="'+(<any>value).getAttribute("name")+'"'))
                {
                  document.querySelector('[id="'+(<any>value).getAttribute("name")+'"').innerHTML="";
                }
              }
            }
          }
          
        }

      }
      if((<any>value).getAttribute("type")=="checkbox")
      {
        arrForm[(<any>value).getAttribute("name")]=(<any>value).checked;
      }
      else{
        arrForm[(<any>value).getAttribute("name")]=(<any>value).value;
      }

    }); 
    if(error == 0)
    {
      return arrForm;
    }
    else{
      return false;
    }
  }
   function ValidateEmail(mail): boolean 
    {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
        return true;
        }
        return false;
    }
    function VPassword(password:string):number{
      if (password.length == 0) {
        return 0;
       }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }


    //Validate for length of Password.
    if (passed > 2 && password.length > 8) {
        passed++;
    }

    //Display status.
    var valueString = 0;
    var strength = "";
    switch (passed) {
        case 0:
        case 1:
          valueString=25;
            break;
        case 2:
          valueString=50;
            break;
        case 3:
        case 4:
          valueString=75;
            break;
        case 5:
          valueString=100;
            break;
    }
    return valueString;
  }

  export function putFormValue(form,data){
    form.forEach((value)=>{
      let date=null;
      if((<any>value).getAttribute("type")=="date")
      {
        if(data[(<any>value).getAttribute("name")]){
          date=new Date(data[(<any>value).getAttribute("name")]).toISOString().substring(0,10);
        }

        (<any>value).value=date;
      }
      else if((<any>value).getAttribute("type")=="checkbox")
      {
        (<any>value).checked=data[(<any>value).getAttribute("name")];
      }
      else{
        (<any>value).value=data[(<any>value).getAttribute("name")];
      }

    }); 
  }

  export function hideElment(hideElament:[any]){
    for(var i=0;i<hideElament.length;i++)
    {
      if(document.querySelector('[name="'+hideElament[i]+'"]'))
      {
        document.querySelector('[name="'+hideElament[i]+'"]').parentElement.remove();
      }
    }
  }


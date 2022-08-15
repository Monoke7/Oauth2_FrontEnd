import { useSearchParams,useNavigate } from "react-router-dom";
import {ConnectionProcess2} from "../helpers/InitiateOauth2"

export default function AuthUser(){
    let [searchParams] = useSearchParams();
    let navigate = useNavigate();

    let code = searchParams.get("code");

    return(<>       
        <div className="form-inline">
  <div className="form-group mb-2 mx-2">
    <label htmlFor="staticEmail2" className="sr-only">Email</label>
    <input type="email" className="form-control" id="staticEmail2" placeholder="email@example.com"/>    
  </div>
  <button onClick={async()=>{
    let email = document.getElementById("staticEmail2");
    if(email.value){
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        let resp = await ConnectionProcess2(email.value,code);
        if(resp.status && resp.status === 200){            
        navigate("/TestImapConnection");
        }

    }else{
        email.classList.add("is-invalid");
    }
  }} className="btn btn-primary mb-2">Continue</button>
    
</div>
<small className="form-text text-muted text-sm-center">Please enter the email used to authenticate.</small>
</>
    )
}
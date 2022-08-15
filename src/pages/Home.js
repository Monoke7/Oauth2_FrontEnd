import {InitiateConnection} from "../helpers/InitiateOauth2"

export default function Home(){
    return(
        <>
        <p>
        <button className="btn btn-warning"
          onClick={() => {
            InitiateConnection();
          }}
        >
          Initiate Oauth2 Connection
        </button>
      </p>
        </>
    )
}
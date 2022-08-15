import {RunImap} from "../helpers/InitiateOauth2"

export default function TestImapConnection(){
    return(
        <>
        <p>
        <button className="btn btn-warning"
          onClick={() => {
            RunImap();
          }}
        >
          Run Imap
        </button>
      </p>
        </>
    )
}
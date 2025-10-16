import harwin from './assets/Screenshot 2025-06-17 130219.png'

export const UserProfile = () => {

   return (
    <div className="card">
        <div className="img">

            <img src={harwin} alt="" width='100px'/>
        </div>

        <div className="info">
            <h1 className="text-danger">Harwin</h1>
            <p>Lorem</p>
            <img src='./a.jpg' alt='' width={"100%"}></img>
        </div>
    </div>
   );
};
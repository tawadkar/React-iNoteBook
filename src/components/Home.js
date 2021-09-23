

import Notes from "./Notes"

const Home = (props) => {
     const  {showAlert} = props; //Fetching showAlert from props
    return (
        <div>
           
            <Notes showAlert={showAlert}/>
        </div>
    );
};

export default Home;

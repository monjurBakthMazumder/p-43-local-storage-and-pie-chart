import PropTypes from 'prop-types';
import { SavedData, have } from '../../Utility/localStorage';
import swal from 'sweetalert';
const HomeCard = ({data}) => {
    const {id, exam, color} = data || {}
    const handleClick = e => {
        e.preventDefault();
        SavedData(id)
        if(!have){
            swal("congratulation!!", `Successfully Complete ${exam}`, "success");
        }
        else{
            swal("Oops", `Already Complete ${exam}`, "error");
        }
        console.log(id);
    }
    return (
        <div className="card card-compact border-2">
        <div className="card-body">
            <h2 className="card-title mx-auto text-7xl"   style={{color: color}}>{exam}</h2>
            <button 
                onClick={handleClick}
                className="btn text-white"
                style={{backgroundColor: color}}
            >Completed</button>
        </div>
        </div>
    );
};

HomeCard.propTypes = {
    data: PropTypes.object,
};

export default HomeCard;
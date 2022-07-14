import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from 'react-router-dom';
const Questionform = ({addQuestion}) => {
  return ( 
<div className="questionContainer">
<form onSubmit={addQuestion} className="questionForm">
<h2>Suggest a new question here!</h2>
<textarea type="text" name="question" id="" cols="80" rows="15" required>
</textarea>
<input className="answerBtn" type="submit" value="Ask !" />
</form>
<Link className="cardBack" to="/home">Go back<ReplyIcon></ReplyIcon></Link>
    </div>
   );
}
 
export default Questionform;
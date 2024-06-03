import classes from "./ExamBoxSlide.module.css";

const OneExamCard = (props) => {


   const redirectHandler=()=>{
      window.open(props.card.link,"__blank");      
   }

  

  return (
    <div className={classes.card} onClick={redirectHandler}>
      <img src={props.card.image} className={classes.img} />
      <div className={classes.description1}>{props.card.description}</div>

      
      <div className={classes.title}>{props.card.title}</div>
      <div className={classes.ViewToppersBtn}>{props.card.viewDetails}</div>
    </div>
  );
};

export default OneExamCard;

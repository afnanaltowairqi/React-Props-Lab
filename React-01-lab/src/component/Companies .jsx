import Programers from './Programers'
import Services from './Services'

function Companies(props){
    return(
        <>
        <div className="card">
            <h2> Company Name: {props.companyname} </h2>
            <p> worker Number: {props.workernumber}</p>
            <p> years of founded: {props.yearsofounded}</p>
            <Services 
                services={props.service}
                prices={props.price} />
        </div>
        </>
    );
}
export default Companies 
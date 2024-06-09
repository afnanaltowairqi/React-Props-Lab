function Programers(props){
    return(
        <div className="card">
            <h2> {props.name} </h2>
            <p>languages: {props.languages}</p>
            <p>years of Work: {props.yearsofWork}</p>
            <p>comapany: {props.comapany}</p>
        </div>
    );
}
export default Programers

{/* <Programers name="Fahad" languages="JS - TS - C#" yearsofWork={2} comapany="Aramco"/>
        <Programers name="Khalid" languages="JS - C++" yearsofWork={4} comapany="Aramco"/>
        <Programers name="Hamed" languages="JS" yearsofWork={4} comapany="Aramco"/>
        <Programers name="Dimah" languages="All Languages" yearsofWork={+100} comapany="Aramco"/> */}
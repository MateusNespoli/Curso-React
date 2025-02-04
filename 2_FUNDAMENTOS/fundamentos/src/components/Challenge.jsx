const Challenge = () => {
    const i = 9;
    const j = 50;

    const handletMyEvent = (e) => {
        console.log (e);
        console.log (i+j);
    };

    return (
        <div>
            <div>
                <h2>{i}, {j}</h2> 
            </div>

            <div>
                <button onClick={handletMyEvent}>Some os numeros</button>
            </div>
            

        </div>

        
    );

}

export default Challenge;
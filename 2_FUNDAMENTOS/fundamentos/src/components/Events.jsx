const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

    const renderSomenthing = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
       <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>
                    Clique aqui também!
                </button>
            </div>
            {renderSomenthing(true)}
            {renderSomenthing(false)}
        </div>
 
    );
    
};

export default Events;
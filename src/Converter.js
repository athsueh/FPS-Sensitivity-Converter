import React, { useState } from 'react';
import Select from 'react-select';

function Converter() {
    const sensitivities = {
        'csgo': 1.0,
        'ow': 3.3331,
    };
    //const csgo = 1.0, ow = 3.3331;
    const options = [
        { value: 'csgo', label: 'Counter-Strike: Global Offensive' },
        { value: 'ow', label: 'Overwatch' },
    ];
    const [sens, setSens] = useState(1);
    const [game, setGame] = useState(options[0]);
    console.log(game);

    return(
        <div>            
            <Select 
                options={options}
                value={game}
                onChange={value => setGame(value)}
            />
            <br/>
            <label>Number (between 1 and 100):</label>
            <input type="number" min="1" max="100" value={sens} onChange={e => setSens(e.target.value)} />
            <p>Current Default sensitivity is: {sens}</p>
            <p>{game.label} sensitivity is: {sens * sensitivities[game.value]}</p>
        </div>
    );
}

export default Converter;
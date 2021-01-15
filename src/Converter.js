import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
    slider: {
        width: 500,
        margin: '0 auto',
    },
    input: {
        width: 60,
    },
});

function Converter() {
    const classes = useStyles();
    const [sens, setSens] = useState(1);
    
    const sensitivities = {
        'csgo': 1.0,
        'ow': 3.3331,
        'valo': 0.3145,
    };
    const options = [
        { value: 'csgo', label: 'Counter-Strike: Global Offensive' },
        { value: 'ow', label: 'Overwatch' },
        { value: 'valo', label: 'Valorant' },
    ];    
    const [game, setGame] = useState(options[0]);
    const [game2, setGame2] = useState(options[0]);

    const handleSliderChange = (event, newSens) => {
        setSens(newSens);
    };
    const handleInputChange = (event) => {
        setSens(event.target.value === '' ? '' : Number(event.target.value));
    };

    return (
        <div>
            <div style={{ "width": "50%", "margin": "0 auto" }}>
                <h1>FPS Mouse Sensitivity Converter</h1>
                <h3>Select original and desired games: </h3>
                <Select
                    options={options}
                    value={game}
                    onChange={value => setGame(value)}
                />
            </div>
            <br/>   
            <div style={{ "width": "50%", "margin": "0 auto" }}>
                
                <Select
                    options={options}
                    value={game2}
                    onChange={value => setGame2(value)}
                />
            </div>
            <br/>  
            <div className={classes.slider}>
                <label>Mouse Sensitivity</label>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={typeof sens === 'number' ? sens : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                            step={0.01}
                            marks
                            min={0}
                            max={30}
                            valueLabelDisplay="auto"
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            className={classes.input}
                            value={sens}
                            margin="dense"
                            onChange={handleInputChange}
                            inputProps={{
                                step: 0.01,
                                min: 0,
                                max: 30,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
            <p>{game2.label} sensitivity is: {(sens * sensitivities[game2.value]/sensitivities[game.value]).toFixed(2)}</p>
            <br/>
        </div>
    );
}

export default Converter;
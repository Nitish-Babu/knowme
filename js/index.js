import Highway from '@dogstudio/highway';
import Fad from './transition';


const H = new Highway.Core({
    transitions:{
        default: Fade
    }
}) 
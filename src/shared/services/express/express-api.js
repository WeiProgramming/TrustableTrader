import {devBaseURL} from '../../../config';
import axios from 'axios';


export const tryGetCardsByFuzzyName = (fname) => {
    return axios.get(`${devBaseURL}/api/getCardsByFuzzyName?fname=${fname}`);
}
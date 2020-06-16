import axios from 'axios';

const apiIBGEUFs = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
});

const apiIBGECITYs = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
});

export {apiIBGEUFs,apiIBGECITYs};
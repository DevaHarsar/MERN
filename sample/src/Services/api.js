import axios from 'axios'
const API = "https://66e526e65cc7f9b6273c6bc8.mockapi.io";
const getProjects = ()=>axios(`${API}/project`)

export{getProjects}

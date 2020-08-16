import Axios from "axios"

export const getProfile = async () => {
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/details/`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.usertoken,
            'Content-Type': 'application/json'
        }
    })
    return await api.get("/")
}



export const EditProfile = async (data) => {
    const formData = new FormData();
    formData.set("name", data.name);
    formData.set("nom", data.nom);
    formData.set('prenom', data.prenom);
    formData.set('sexe', data.sexe);
    formData.set('age', data.age);
    formData.set("taille", data.taille);
    formData.set('poids', data.poids);
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/profile`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.usertoken,
            'Content-Type': 'application/json'
        }
    })
    return await api.post("/", formData)
}


export const EditAvatar = async (data) => {
    const formData = new FormData();
    formData.append("image", data);
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/avatar`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.usertoken,
            'Content-Type': 'application/json'
        }
    })
    return await api.post("/", formData)
}

export const PostComment = async (data) => {
    const formData = new FormData();
    formData.set("recette_id", data.recetteId);
    formData.set('comment', data.comment);
    formData.set('rating', data.rating);
    return (await Axios({
        method: 'post',
        url: `http://localhost:1000/api/comment/${data.recetteId}`,
        data: formData,
        headers: {
            'Authorization': 'Bearer ' + localStorage.usertoken,
            'Content-Type': 'application/json'
        }
    })
    )
}
export const GetComment = async (IdRecipe) => {
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/comment/${IdRecipe}`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.usertoken,
            'Content-Type': 'application/json'
        }
    })
    return await api.get("/")
}

export const GetEditComment = async (commentId) => {
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/comment/edit/${commentId}`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.usertoken,
            'Content-Type': 'application/json'
        }
    })
    return await api.get("/")
}
export const EditComment = async (data) => {
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/comment/${data.commentId}`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.usertoken,
            'Content-Type': 'application/json'
        }
    })
    return await api.put("/", { comment: data.comment })
}
export const deleteComment = async (CommentId) => {
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/comment/${CommentId}`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.usertoken,
            'Content-Type': 'application/json'
        }
    })
    return await api.delete("/")
}
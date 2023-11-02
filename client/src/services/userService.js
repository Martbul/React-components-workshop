const baseUrl ='http://localhost:3030/jsonstore/users'

export const getAll = async()=>{
    
        const responce = await fetch(baseUrl)
    const result = await responce.json()
        const data = Object.values(result)
    //console.log(data);
    return data;
   
}

export const getOne = async (userId) =>{
    const responce = await fetch(`${baseUrl}/${userId}`)
    const result = await responce.json()

    return result
}

export const create = async (data)=>{
    const body = {
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        imageUrl:data.imageUrl,
        phoneNumber:data.phoneNumber,
        cratedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address:{
            country:data.country,
            city:data.city,
            street:data.street,
            streetNumber:data.streetNumber
        }

    }
    const responce = await fetch(baseUrl,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify(body),
    })

    const result = await responce.json()

        return result;
}
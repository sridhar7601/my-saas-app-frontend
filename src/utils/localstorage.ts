export async function setLoaclStorage(key:string,value:any){
  try{
    if(typeof value !== 'string'){
      value = JSON.stringify(value);
    }

    await localStorage.setItem(key,value)

    return "success"
  }catch{
    throw error ("Can't able to add the data to localstorage!");
  }
}

export async function getLocalstrage(key:string){
  try{
    const data = await localStorage.getItem(key);

    if(!data){
      throw error ("No data found on this key!")
    }

    return JSON.parse(data)
  }catch{
    throw error ("Error while retriving the data!")
  }
}

// userSecret = {"passcode":"fghjk",id:"fdghjk"}
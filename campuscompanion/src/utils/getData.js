import {ref, get, child, database} from './firebaseConfig'

export async function getData(){
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, 'data'));
  if(snapshot.exists()){
    const data = snapshot.val();
    console.log(data);
    return data;
  }
}
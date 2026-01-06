import {ref, get,set, child, database} from './firebaseConfig'


export async function getData(){

  set(ref(database, "users/" + uid), profile)
}
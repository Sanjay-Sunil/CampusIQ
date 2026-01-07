import {ref, get, child, database, push} from './firebaseConfig'


export async function getUserChatHistory(userId){
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `users/${userId}/chat`));
  if (snapshot.exists()) {
    return Object.values(snapshot.val());
  } else {
    console.log("No chat History available");
    return [];
  }
}


export async function setUserChatHistory(userId, query, answer) {
  const chatRef = ref(database, `users/${userId}/chat`);
  await push(chatRef, { query, answer });
}
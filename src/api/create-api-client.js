/*import Firebase from 'firebase/app'
import 'firebase/database'*/
import LRU from "lru-cache";


export function createAPI () {
    /*Firebase.initializeApp(config)
    return Firebase.database().ref(version)*/
    return process.__API__={
        onServer:true,
        cachedItems:LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15 // 15 min cache
        })
    }
}

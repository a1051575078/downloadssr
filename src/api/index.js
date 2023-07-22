// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'
import axios from 'axios';
import {createRouter} from '../router';
import Router from "vue-router";
import {createApp} from "../app";
import request from '../util/request.js';
import Vue from "vue";
const logRequests = !!process.env.DEBUG_API
const api = createAPI();
/*const api = createAPI({
    version: '/v0',
    config: {
        databaseURL: 'http://localhost:8080/'
    }
})*/
// warm the front page cache every 15 min
// make sure to do this only once across all requests
if (api.onServer) {
    warmCache()
}
//const apiUrl = 'http://127.0.0.1:3000/api/';
const apiUrl = 'http://127.0.0.1/api/';
export function fetchData(params,data='') {
    const cache = api.cachedItems
    if (cache && cache.has(apiUrl+params+data.path)) {
        return Promise.resolve(cache.get(apiUrl+params+data.path))
    }else{
        return axios.get(apiUrl+params,
            {params:{
                    data:data.path,
                    page:data
                }
            })
        .then(response =>{
            cache && cache.set(apiUrl+params+data.path, response.data);
            return response.data
        })
        .catch(error => console.error(error));
    }
}
export function search(data) {
    return axios.post(apiUrl+'search',data)
    .then(response =>response.data.data)
    .catch(error => console.error(error));
}
export function goodornot(data) {
    return axios.post(apiUrl+'goodornot',data)
    .then(response =>response.data)
    .catch(error => console.error(error));
}
/*export function fetchData(sql) {
    return axios.get(apiUrl, { params: { sql } })
    .then(response => response.data)
    .catch(error => console.error(error));
}*/
function warmCache () {
    //fetchItems((api.cachedIds.top || []).slice(0, 30))
    setTimeout(warmCache, 1000 * 60 * 15)
}

/*function fetch (child) {
    logRequests && console.log(`fetching ${child}...`)
    const cache = api.cachedItems
    if (cache && cache.has(child)) {
        logRequests && console.log(`cache hit for ${child}.`)
        return Promise.resolve(cache.get(child))
    } else {
        return new Promise((resolve, reject) => {
            api.child(child).once('value', snapshot => {
                const val = snapshot.val()
                // mark the timestamp when this item is cached
                if (val) val.__lastUpdated = Date.now()
                cache && cache.set(child, val)
                logRequests && console.log(`fetched ${child}.`)
                resolve(val)
            }, reject)
        })
    }
}
export function fetchIdsByType (type) {
  return api.cachedIds && api.cachedIds[type]
    ? Promise.resolve(api.cachedIds[type])
    : fetch(`${type}stories`)
}

export function fetchItem (id) {
  return fetch(`item/${id}`)
}

export function fetchItems (ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}
export function fetchUser (id) {
  return fetch(`user/${id}`)
}

export function watchList (type, cb) {
    let first = true
    const ref = api.child(`${type}stories`)
    const handler = snapshot => {
        if (first) {
            first = false
        } else {
            cb(snapshot.val())
        }
    }
    ref.on('value', handler)
    return () => {
        ref.off('value', handler)
    }
}*/

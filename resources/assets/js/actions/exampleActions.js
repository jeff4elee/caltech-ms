import axios from "axios";

export function changeUrl(url){
    return {
        type: 'CHANGE_URL',
        payload: url
    }
}

export function changeKey(categoryKey){
    return {
        type: 'CHANGE_KEY',
        payload: categoryKey
    }
}

export function sendExampleAction(){
    return {
        type: 'EXAMPLE_ACTION',
        payload: 'axios.get("/api/example")'
    }
}

export function resetStore(){
    return {
        type: 'STORE::RESET'
    }
}

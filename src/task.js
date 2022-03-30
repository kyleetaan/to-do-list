import { isThisWeek, isToday, parseISO } from 'date-fns'

function createTask(title, desc, priority, date, project, uniqid) {

    const obj = {
        "title": title,
        "description": desc,
        "priority": priority,
        "date": date,
        "project": project
    }

    if(uniqid){
        const stringObj = JSON.stringify(obj);
        localStorage.setItem(uniqid, stringObj);
        return;
    }else {
        const unique = 'id' + Date.now(); //set unique
        const stringObj = JSON.stringify(obj);
        localStorage.setItem(unique, stringObj);
        return unique;
    }
}

function deleteTask(uniqid){
    localStorage.removeItem(uniqid);
}

function returnTodayTask() {
    // loop inside localstorage to get all dates
    // if today pack id inside array
    // return array of ids
    const keys = Object.keys(localStorage);
    const todayArr = [];

    for(let i = 0; i < keys.length; i++){
        // get key, store to object, parse then pass to createtaskdisplay
        const stringObj = localStorage.getItem(keys[i]);
        const tempObj = JSON.parse(stringObj);
        if(isToday(parseISO(tempObj.date))){
           todayArr.push(keys[i]) 
        }
    }

    return todayArr;
}

function returnWeekTask() {
    const keys = Object.keys(localStorage);
    const weekArr = [];

    for(let i = 0; i < keys.length; i++){
        // get key, store to object, parse then pass to createtaskdisplay
        const stringObj = localStorage.getItem(keys[i]);
        const tempObj = JSON.parse(stringObj);
        if(isThisWeek(parseISO(tempObj.date))){
           weekArr.push(keys[i]) 
        }
    }

    return weekArr;
}

export  {createTask,deleteTask, returnTodayTask, returnWeekTask}
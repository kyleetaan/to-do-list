function createTask(title, desc, priority, date, uniqid) {

    const obj = {
        "title": title,
        "description": desc,
        "priority": priority,
        "date": date
    }

    if(uniqid){
        const stringObj = JSON.stringify(obj);
        localStorage.setItem(uniqid, stringObj);
        return uniqid;
    }else {
        const unique = 'id' + Date.now(); //set unique
        const stringObj = JSON.stringify(obj);
        localStorage.setItem(unique, stringObj);
        return unique;
    }
}


export default createTask
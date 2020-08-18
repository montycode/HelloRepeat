const getDate = () =>{
    let today = new Date();
    let location = today.getDate() + '-' +(today.getMonth() + 1) + '-' + today.getFullYear();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var date = location + ' ' + time; 

    return date;
}
export default getDate;
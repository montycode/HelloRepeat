import { saveAs } from 'file-saver';

const button = () =>{
    var FileSaver = require('file-saver');

    for(i=0; i<5; i++){var i = 0;
        var hello = ["Buenos Días", "Bom Dia", "Miremengjes", "Aloha kakahiaka", "早上好", 
                    "Guten Morgen", "Goedemorgen", "Доброе утро", "Maidin mhaith", "Dzień dobry"];
        var n = Math.floor(Math.random() * 11);
        var today = new Date();
        var location = today.getDate() + '-' +(today.getMonth() + 1) + '-' + today.getFullYear();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var date = location + ' ' + time; 
        var blob = new Blob([date + hello[n] ], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "testfile1.txt");
        setInterval(1000);
    }
}
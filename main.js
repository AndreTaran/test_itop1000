let data = {
    "columns": [
        {
            "code":"Острів",
            "name":"Острів",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"Text"
        },
        {
            "code":"Локація",
            "name":"Локація",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"Text"
        },
        {
            "code":"Текст",
            "name":"Текст",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"Text"
        },
        {
            "code":"Дата",
            "name":"Дата",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"DateTime"
        },
        {
            "code":"Коментар",
            "name":"Коментар",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"Text"
        }
    ],
    "rows": [
        {
            "values": [
                "Труханов",
                "Київ",
                " столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема адміністративно-територіальна одиниця в складі України й адміністративний центр Київської області. Адміністративно до складу Київської області не входить. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.",
                "2020-12-12T00:00:00",
                "Тестове"
            ]
        }
    ]
}

app = document.getElementById('main');

function createBlock(title, content, titleStyles=[], contentStyles=[]) {
    let block = document.createElement('div');

    let heading = document.createElement('div');
    heading.innerHTML = `${title}`;
    if (titleStyles.length) {
        titleStyles.forEach(style => heading.classList.add(style));
    }

    let text = document.createElement('div');
    text.innerHTML = `${content}`;
    if (contentStyles.length) {
        contentStyles.forEach(style => text.classList.add(style));
    }

    block.appendChild(heading);
    block.appendChild(text);
    
    return block;
}

function fillBlocks(mainApp, data, styles=[], titleStyles=[], contentStyles=[]) {
    let columns = data['columns'];
    let rows = data['rows'][0];

    columns.forEach((elem, ind) => {
        let block;

        if (elem.dataType === 'DateTime') {
            let date = formateDate(rows.values[ind]);
            block = createBlock(elem.name, date, titleStyles, contentStyles);
        } else {
            block = createBlock(elem.name, rows.values[ind], titleStyles, contentStyles);
        }
        
        if (styles.length) {
            styles.forEach(style => block.classList.add(style));
        }
        mainApp.appendChild(block);
    })
}

function formateDate(dateString) {
    let date = new Date(dateString);

    let dd = date.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    var mm = date.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    var yy = date.getFullYear() % 100;
    if (yy < 10) {
        yy = '0' + yy;
    }
    
    return dd + '.' + mm + '.' + yy;
}

function main () {
    styles = ['block'];
    titleStyles = ['title'];
    contentStyles = ['content'];

    fillBlocks(app, data, styles, titleStyles, contentStyles);
}

main();
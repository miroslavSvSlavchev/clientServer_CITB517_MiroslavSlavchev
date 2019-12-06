var mainInfoCardLocator = '#mainInfoCard div div.card-body';

function removeMainInfoCard() {
    var mainElement = document.getElementById('mainInfoCard');
    if (mainElement != null) {
        mainElement.remove();
    }
}

function initEmptyMain() {
    var main = document.createElement("main");
    main.setAttribute('id', 'mainInfoCard');
    main.setAttribute('class', 'container');
    main.setAttribute('role', 'main');

    var div = document.createElement("div");
    div.setAttribute('class', 'card border-0 shadow my-5');

    var divBody = document.createElement("div");
    divBody.setAttribute('class', 'card-body p-5');

    div.appendChild(divBody);
    main.appendChild(div);
    document.body.appendChild(main);
}

function addNewLineToInfoCard(main, data) {
    Object.keys(data).forEach(function (key) {
        main.appendChild(addPersonalInfoField(key, data[key]));
    })
}

function addPersonalInfoField(key, value) {
    var p = document.createElement('p');
    p.setAttribute('class', 'lead');
    var text = document.createTextNode(key.concat(": ", value));
    p.appendChild(text);
    return p;
}

function addNewRow(value) {
    var p = document.createElement('p');
    p.setAttribute('class', 'lead');
    var text = document.createTextNode(value);
    p.appendChild(text);
    return p;
}


function showPageMessage(message) {
    var main = document.querySelector(mainInfoCardLocator);
    var h1 = document.createElement('h1');
    h1.setAttribute('class', 'font-weight-light');
    h1.appendChild(document.createTextNode(message));
    main.appendChild(h1);
    main.appendChild(document.createElement('p'));
}



function initHomePageInfo() {
    removeMainInfoCard();
    initEmptyMain();
    
    var main = document.querySelector(mainInfoCardLocator);
    showPageMessage('Miroslav Slavchev Profile');
    
    main.appendChild(addNewRow('Welcome to my profile'));
    main.appendChild(addNewRow('Личният сайт трябва да има главна страница със снимка и описание, страница с галерия от снимки, страница за оставяне на коментари (да св вижда добавения коментар). Може и контактна форма на страница Контакти / изпращане на съобщение до адрес.'));
}

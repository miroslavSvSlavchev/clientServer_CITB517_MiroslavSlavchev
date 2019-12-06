function openComments() {
    removeMainInfoCard();
    showCommentsSection();
}

function showCommentsSection() {
    initEmptyMain();
    showPageMessage('This is the section where you can leave some comments.');
    addCommentInput();
}

function addCommentInput() {
    var main = document.querySelector(mainInfoCardLocator);

    var form = document.createElement('form');
    form.setAttribute('id', 'commentForm');

    var div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    var label = document.createElement('label');
    label.setAttribute('for', 'comment');
    label.append(document.createTextNode('Comment:'));

    var textArea = document.createElement('textarea');
    textArea.setAttribute('class', 'form-control');
    textArea.setAttribute('rows', '3');
    textArea.setAttribute('id', 'comment');

    var submit = document.createElement('button');
    submit.setAttribute('type', 'button');
    submit.setAttribute('class', 'btn-default');
    submit.setAttribute('id', 'submitComment');
    submit.setAttribute('onclick', 'saveComment()');
    submit.setAttribute('style', 'width:60px; height:25px;');
    submit.appendChild(document.createTextNode('Add'));
    main.appendChild(form);
    form.appendChild(div);
    div.appendChild(label);
    div.appendChild(textArea);
    div.appendChild(submit);
}

function saveComment() {
    textInput = 'User at ' + getCurrentDate() + ':' + document.getElementById('comment').value;

    var main = document.querySelector(mainInfoCardLocator);
    var form = document.getElementById('commentForm');
    form.remove();

    var p = document.createElement('p');
    var textNode = document.createTextNode(textInput);
    p.appendChild(textNode);
    main.appendChild(p);

    addCommentInput();
}

function getCurrentDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}

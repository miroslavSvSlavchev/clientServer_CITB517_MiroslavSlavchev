/*
$('#personalProfileNav').click(function () {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'js/json/profile.json',
        success: function (data) {
            removeMainInfoCard();
            console.log('success' + data, toString());
        }
    });
});
*/
var profileData = {
    'Name': 'Miroslav',
    'SurName': 'Slavchev',
    'Age': '23',
    'About me': 'This summary is well-written, short, sharp and gives recruiters a high-level explanation of the candidate’s core offerings in a persuasive and punchy style. A quick scan of this profile tells you the exact type of social media platforms the candidate is expert in, as well as the campaigns they have experience of running and types of organisations they have worked for. Most importantly, the summary is rounded off by showing the results that this person achieves for their employers, such as increased web traffic and conversions.'
};


function openProfile() {
    removeMainInfoCard();
    showProfile();
}

function showProfile() {
    initEmptyMain();
    /*showPageMessage('This is the profile page');*/
    var main = document.querySelector(mainInfoCardLocator);

    var avatar = document.createElement('img');
    avatar.setAttribute('src', '../img/avatar.png');
    avatar.setAttribute('style', 'heigh:250px; width:250px;display: block;margin-left:auto; margin-right: auto;');

    main.appendChild(avatar);
    addNewLineToInfoCard(main, profileData);
}

var contactsData = {
    'Phone': '123-123-123',
    'Addres': 'Test adres 123 st. A 12 ss.',
    'Working time': '12:00 - 18:00'
};

function openContacts() {
    removeMainInfoCard();
    showContactsSection();
}

function showContactsSection() {
    initEmptyMain();
    showPageMessage('This is the Contacts Page');
    var main = document.querySelector(mainInfoCardLocator);
    addNewLineToInfoCard(main, contactsData);
}

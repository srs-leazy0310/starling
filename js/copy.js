function copy(text)
{
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert('Adresse copiée dans le presse-papier avec succès 😎')
}

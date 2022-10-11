const getP = function(div) {
    const projectTitle = div.querySelector('p');
    return projectTitle.textContent;
}

export default getP;
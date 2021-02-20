


/**
 * @param {array of links} links 
 */
export function RenderLinkToImage(links, meta="others"){
    return links.map((link, index) => (<img key={meta+"_"+index} scr={link} alt=""/>));
}
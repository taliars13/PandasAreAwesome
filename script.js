let i=0; 
function newpanda(){
    const pandaimages = ["https://crosstalk.cell.com/hs-fs/hubfs/Images/Jennifer%20Levine/New%20Insights%20into%20pandas,/6990634-panda-hug.jpg?width=2560&height=1600&name=6990634-panda-hug.jpg", "https://d1jyxxz9imt9yb.cloudfront.net/animal/283/meta_image/regular/panda_1.jpg", "https://i.guim.co.uk/img/media/40271914aa99fa1dc08ab3d01d3069af8d07c6d1/0_186_4500_2698/master/4500.jpg?width=1200&quality=85&auto=format&fit=max&s=8656dcc2f2dc6267a3ba2142a3c4ab32", "https://static01.nyt.com/images/2024/02/22/multimedia/22xp-pandas-01-fpzb/22xp-pandas-01-fpzb-superJumbo.jpg", "https://sdzwildlifeexplorers.org/sites/default/files/2017-07/stories-hero-preciouspandas.jpg", "https://www.georgetown.edu/wp-content/uploads/2023/11/DSC_7947-scaled.jpg"]
    const randompanda = pandaimages[i];
    document.getElementById("pandaheading").style.backgroundImage = 'url('+ randompanda + ')';
    if(i==(pandaimages.length-1)){
        i = 0;
    }else{
        i++; 
    }
}
function totop(){
    scroll(0,0);
}
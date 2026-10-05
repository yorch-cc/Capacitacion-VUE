const web = {
    nombre: 'yorchsite',
    links: {
        enlace: 'www.yorchsite.com'
    },
    redesSociales: {
        tiktok: {
        enlace: 'tiktok.com/yorchsite',
        nombre: 'yorchsitez'
    },
  }
}
const enlaceTK = web.redesSociales.tiktok.enlace
console.log(enlaceTK)

const {enlace,nombre} = web.redesSociales.tiktok
console.log(enlace , nombre);

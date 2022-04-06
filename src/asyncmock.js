const listaDeProductos = [
    {
        nombre : "Escalador",
        descripcion_breve : "Escalador para gatos",
        precio : 5334,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_603206-MLA31674679180_082019-O.webp',
        stock : 10
    },
    {
        nombre : "Litera",
        descripcion_breve : "Litera para gatos",
        precio : 6050,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_663751-MLA45703529042_042021-O.webp',
        stock : 15
    },
    {
        nombre : "Transportadora",
        descripcion_breve : "Transportadora para gatos",
        precio : 10400,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_818325-MLA49133405501_022022-O.webp',
        stock : 5
    }
];

export const getProductos = () => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(listaDeProductos)
                },2000
            )
        }
    )
}
const listaDeProductos = [
    {
        id: '001',
        nombre : "Escalador",
        descripcion_breve : "Escalador para gatos",
        precio : 5334,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_603206-MLA31674679180_082019-O.webp',
        stock : 10,
        categoria: 'entretenimiento'
    },
    {
        id: '002',
        nombre : "Litera",
        descripcion_breve : "Litera para gatos",
        precio : 6050,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_663751-MLA45703529042_042021-O.webp',
        stock : 15,
        categoria: 'higiene'
    },
    {
        id: '003',
        nombre : "Transportadora",
        descripcion_breve : "Transportadora para gatos",
        precio : 10400,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_818325-MLA49133405501_022022-O.webp',
        stock : 5,
        categoria: 'cuidado'
    },
    {
        id: '004',
        nombre : "Isla",
        descripcion_breve : "Isla de juego",
        precio : 1600,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_847887-MLA49542548115_042022-O.webp',
        stock : 11,
        categoria: 'entretenimiento'
    },
    {
        id: '005',
        nombre : "Litera",
        descripcion_breve : "Litera para gatos",
        precio : 6050,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_663751-MLA45703529042_042021-O.webp',
        stock : 15,
        categoria: 'entretenimiento'
    },
    {
        id: '006',
        nombre : "Transportadora",
        descripcion_breve : "Transportadora para gatos",
        precio : 10400,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_818325-MLA49133405501_022022-O.webp',
        stock : 5,
        categoria: 'cuidado'
    },
    {
        id: '007',
        nombre : "Escalador",
        descripcion_breve : "Escalador para gatos",
        precio : 5334,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_603206-MLA31674679180_082019-O.webp',
        stock : 10,
        categoria: 'cuidado'
    },
    {
        id: '008',
        nombre : "Litera",
        descripcion_breve : "Litera para gatos",
        precio : 6050,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_663751-MLA45703529042_042021-O.webp',
        stock : 15,
        categoria: 'higiene'
    },
    {
        id: '009',
        nombre : "Transportadora",
        descripcion_breve : "Transportadora para gatos",
        precio : 10400,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_818325-MLA49133405501_022022-O.webp',
        stock : 5,
        categoria: 'higiene'
    },
    {
        id: '010',
        nombre : "Escalador",
        descripcion_breve : "Escalador para gatos",
        precio : 5334,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_603206-MLA31674679180_082019-O.webp',
        stock : 10,
        categoria: 'entretenimiento'
    },
    {
        id: '011',
        nombre : "Litera",
        descripcion_breve : "Litera para gatos",
        precio : 6050,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_663751-MLA45703529042_042021-O.webp',
        stock : 15,
        categoria: 'entretenimiento'
    },
    {
        id: '012',
        nombre : "Transportadora",
        descripcion_breve : "Transportadora para gatos",
        precio : 10400,
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_818325-MLA49133405501_022022-O.webp',
        stock : 5,
        categoria: 'cuidado'
    }
];

export const getProductos = () => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(listaDeProductos)
                },4000
            )
        }
    )
}
export const getProductoById = (idProducto) => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(
                        listaDeProductos.find(
                            producto => producto.id === idProducto
                        )
                    )
                },2000
            )
        }
    )
}
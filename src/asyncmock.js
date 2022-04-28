const listaDeProductos = [
    {
        id: '001',
        nombre : "FF327 Challenger GP",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "Casco integral, línea premium, doble visor y pinlock.",
        precio : "105.000",
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_2X_953407-MLA49388153248_032022-F.webp',
        imagenes : [
            "https://http2.mlstatic.com/D_Q_NP_2X_686522-MLA49388121410_032022-R.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_689454-MLA49388060866_032022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_678798-MLA49388152219_032022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_601464-MLA49388163169_032022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_931531-MLA49388122456_032022-F.webp"
        ],
        stock : 5,
        categoria: 'CASCO',
        precioOferta : ''
    },
    {
        id: '002',
        nombre : "FF324 Metro Evo",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "Casco rebatible, línea premium, doble visor, pinlock y vicera.",
        precio : "70.000",
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_807509-MLA27528893606_062018-O.webp',
        imagenes : [
            "https://http2.mlstatic.com/D_NQ_NP_680430-MLA27528893253_062018-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_807509-MLA27528893606_062018-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_809832-MLA27528865354_062018-O.webp"
        ],
        stock : 10,
        categoria: 'CASCO',
        precioOferta : ''
    },
    {
        id: '003',
        nombre : "Wolf Roadrunner B2",
        marca : 'AXXIS',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "Casco integral, línea medium, doble visor, pinlock y vicera.",
        precio : "35.000",
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_745614-MLA49293801582_032022-O.webp',
        imagenes : [
            "https://http2.mlstatic.com/D_NQ_NP_990278-MLA49293801579_032022-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_811373-MLA49293801583_032022-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_610651-MLA49293801580_032022-O.webp"
        ],
        stock : 10,
        categoria: 'CASCO',
        precioOferta : '33.000'
    },
    {
        id: '004',
        nombre : "Roc Blow A3",
        marca : 'AXXIS',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "Casco rebatible, línea medium, doble visor y pinlock.",
        precio : "30.000",
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_707673-MLA45511476880_042021-O.webp',
        imagenes : [
            "https://http2.mlstatic.com/D_NQ_NP_867858-MLA45511476867_042021-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_708616-MLA45511519216_042021-O.webp"
        ],
        stock : 10,
        categoria: 'CASCO',
        precioOferta : '28.000'
    },
    {
        id: '005',
        nombre : "Cordura Gallant",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "LA CAMPERA 4X4.",
        precio : "68.000",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/918098-mla26815142320_022018-o-f6ee24e0bc70d6787315512014163604-640-0.jpg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/879432-mla26815142319_022018-o-e417376178693ce82d15512014207428-640-0.jpg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/646488-mla26820496684_022018-o-9164cc80bd019bb58115512014296253-640-0.jpg"
        ],
        stock : 10,
        categoria: 'CAMPERA',
        precioOferta : '60.000'
    },
    {
        id: '006',
        nombre : "Shadow",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "La nueva Campera Shadow de LS2 es de Cordura para uso Touring - Urbano. Ideal para primavera, otoño e invierno.",
        precio : "63.000",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/whatsapp-image-2022-03-17-at-1-02-32-pm1-ca72bcfada83e9211516475341237447-640-0.jpeg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/whatsapp-image-2022-03-17-at-1-02-32-pm-11-91a6237c05d062619e16475341236635-640-0.jpeg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/whatsapp-image-2022-03-17-at-1-02-32-pm-21-0102eced81e43c11e416475341237107-640-0.jpeg"
        ],
        stock : 10,
        categoria: 'CAMPERA',
        precioOferta : '60.000'
    },
    {
        id: '007',
        nombre : "Serra Mujer",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "La nueva Campera Serra de LS2 es de Cordura para uso Touring - Urbano.",
        precio : "59.000",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/whatsapp-image-2022-03-17-at-10-28-26-am1-5312ade2f8642b875316475362467195-640-0.jpeg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/whatsapp-image-2022-03-17-at-10-28-27-am1-ead8cdb0fbef9b0c4c16475362466590-640-0.jpeg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/whatsapp-image-2022-03-17-at-10-28-27-am1-ead8cdb0fbef9b0c4c16475362466590-640-0.jpeg"
        ],
        stock : 10,
        categoria: 'CAMPERA',
        precioOferta : ''
    },
    {
        id: '008',
        nombre : "Touch Explorer",
        marca : 'LS2',
        talle : ['XS', 'S', 'M'],
        descripcion_breve : "Guantes Largos Invierno para uso Touring - Urbano.",
        precio : "17.000",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/explorer-usar-0ea77a1e66d0c59bfa16213626948756-640-0.jpg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/guante-explorer-21-58023cf652d3c262da15755675902035-640-0.jpg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/guante-explorer-21-58023cf652d3c262da15755675902035-640-0.jpg"
        ],
        stock : 10,
        categoria: 'GUANTES',
        precioOferta : '15.000'
    },
    {
        id: '009',
        nombre : "Dart H",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "Los guantes mas moderno y cómodos.",
        precio : "11.000",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/guante-dart-hi-vis-amarillo-11-fea928a498642c375416051240121626-640-0.jpg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/guante-dart-hi-vis-amarillo-21-5f1b8cc09c748978f616051240122263-640-0.jpg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/guante-dart-hi-vis-amarillo-3-ea83195a2704f90e7c16051240120955-640-0.jpg"
        ],
        stock : 10,
        categoria: 'GUANTES',
        precioOferta : ''
    },
    {
        id: '010',
        nombre : "MX Thunder",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "Los guantes mas moderno y cómodos.",
        precio : "8.500",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/guante_mx_thunder_11-f10a930d919570c51f15858427333154-640-0.jpg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/guante_mx_thunder_21-25bb19a0fe286537f715858427332775-640-0.jpg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/guante_mx_thunder_31-93732ea65b45de482015858427334977-640-0.jpg"
        ],
        stock : 10,
        categoria: 'GUANTES',
        precioOferta : ''
    },
    {
        id: '011',
        nombre : "Chart Mujer",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "Pantalon de cordura con protecciones ideal turismo.",
        precio : "42.000",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/chart-m-011-8691dd2b61eb8e9c6315651215348063-640-0.jpg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/chart-m-021-81edf3d7be3369cd2e15651215349052-640-0.jpg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/chart-m-041-48535b4cc4b9873b4515651215352767-640-0.jpg"
        ],
        stock : 10,
        categoria: 'PANTALON',
        precioOferta : '40.000'
    },
    {
        id: '012',
        nombre : "Chart Hombre",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "Pantalon de cordura con protecciones ideal turismo.",
        precio : "42.000",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/chart-h-011-7d83ab97a6307c47bf15651214059666-640-0.jpg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/chart-h-021-bafa05ca7bdd29694f15651214059355-640-0.jpg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/chart-h-051-40a6be4d12ab9c518115651214064274-640-0.jpg"
        ],
        stock : 10,
        categoria: 'PANTALON',
        precioOferta : '40.000'
    },
    {
        id: '013',
        nombre : "Racing Altas Br01",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "Botas de protección con estilo.",
        precio : "36.000",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/938830-mla25714184212_062017-o-acb96a2f1f3b2911de15511993746441-640-0.jpg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/938830-mla25714184212_062017-o-acb96a2f1f3b2911de15511993746441-640-0.jpg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/938830-mla25714184212_062017-o-acb96a2f1f3b2911de15511993746441-640-0.jpg"
        ],
        stock : 10,
        categoria: 'CALZADO',
        precioOferta : ''
    },
    {
        id: '014',
        nombre : "Airtech Cuero Mesh",
        marca : 'LS2',
        talle : ['XS', 'S', 'M', 'L', 'XL'],
        descripcion_breve : "BOTAS RACING ALTAS BR01",
        precio : "35.000",
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/airtech-11-f51a7c2bf50dd59a1715589202532202-640-0.jpg',
        imagenes : [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/airtech-21-67bf7c992519b4bd2515589202547323-640-0.jpg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/airtech-31-2ff13fca1ce468cac015589202537484-640-0.jpg",
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/airtech-41-a3a930621f6c12751115589202538409-640-0.jpg"
        ],
        stock : 10,
        categoria: 'CALZADO',
        precioOferta : ''
    }
];

const listCategorias = [
    {
        categoriaId : 'CASCO',
        link_imagen : 'https://http2.mlstatic.com/D_NQ_NP_2X_953407-MLA49388153248_032022-F.webp',
        descripcion : 'Los mejores Cascos de motocicleta.'
    },
    {
        categoriaId : 'CAMPERA',
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/whatsapp-image-2022-03-17-at-1-02-32-pm1-ca72bcfada83e9211516475341237447-640-0.jpeg',
        descripcion : 'Las mas cómodas Camperas de motocicleta para protección.'
    },
    {
        categoriaId : 'CALZADO',
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/airtech-11-f51a7c2bf50dd59a1715589202532202-640-0.jpg',
        descripcion : 'El calzado de motocicleta mas fachero y suma protección.'
    },
    {
        categoriaId : 'PANTALONES',
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/chart-h-011-7d83ab97a6307c47bf15651214059666-640-0.jpg',
        descripcion : 'Pantalones de motocicleta para protección.'
    },
    {
        categoriaId  : 'GUANTES',
        link_imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/guante_mx_thunder_11-f10a930d919570c51f15858427333154-640-0.jpg',
        descripcion : 'Las manos no pueden no ir protegidas, Guantes de motocicleta.'
    }
]


export const getProductos = (categoriaId) => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(
                        categoriaId ?
                        listaDeProductos.filter(
                            producto => producto.categoria === categoriaId
                        ) : listaDeProductos
                    )
                }, 2000
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
                }, 2000
            )
        }
    )
}

export const getCategorias = () => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(
                        listCategorias
                    )
                }, 2000
            )
        }
    )
}

export const getOfertas = () => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(
                        listaDeProductos.filter(producto => producto.precioOferta !== '')
                    )
                }, 2000
            )
        }
    )
}

export const getCarritoListPrueba = () => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(
                        carritoListPrueba
                    )
                }, 2000
            )
        }
    )
}
import p_img_about from './p_img_about.png';
import p_img_about2 from './p_img_about2.png';
import p_img_home from './p_img_home.png';
import p_img_home2 from './p_img_home2.png';
import p_img1_1 from './p_img1_1.png';
import p_img1_2 from './p_img1_2.png';
import p_img1_3 from './p_img1_3.png';
import p_img1_4 from './p_img1_4.png';
import p_img2_1 from './p_img2_1.png';
import p_img2_2 from './p_img2_2.png';
import p_img2_3 from './p_img2_3.png';
import p_img2_4 from './p_img2_4.png';
import p_img3_1 from './p_img3_1.png';
import p_img3_2 from './p_img3_2.png';
import p_img3_3 from './p_img3_3.png';
import p_img3_4 from './p_img3_4.png';
import p_img4_1 from './p_img4_1.png';
import p_img4_2 from './p_img4_2.png';
import p_img4_3 from './p_img4_3.png';
import p_img4_4 from './p_img4_4.png';
import p_img5_1 from './p_img5_1.png';
import p_img5_2 from './p_img5_2.png';
import p_img5_3 from './p_img5_3.png';
import p_img6_1 from './p_img6_1.png';
import p_img6_2 from './p_img6_2.png';
import p_img7_1 from './p_img7_1.png';
import p_img7_2 from './p_img7_2.png';
import p_img8_1 from './p_img8_1.png';
import p_img9_1 from './p_img9_1.png';
import p_img10_1 from './p_img10_1.png';
import p_img11_1 from './p_img11_1.png';
import p_img12_1 from './p_img12_1.png';

// Icons
import bin_icon from './bin_icon.png';
import cart_icon from './cart_icon.png';
import credit_card_logo from './credit_card_logo.png';
import cross_icon from './cross_icon.png';
import dropdown_icon from './dropdown_icon.png';
import exchange_icon from './exchange_icon.png';
import logo from './logo.png';
import logo_jpg from './logo_jpg.jpg';
import menu_icon from './menu_icon.png';
import paypal_logo from './paypal_logo.png';
import profile_icon from './profile_icon.png';
import quality_icon from './quality_icon.png';
import search_bar from './search_bar.png';
import search_icon from './search_icon.png';
import star_icon from './star_icon.png';
import star_dull_icon from './star_dull_icon.png';
import support_img from './support_img.png';

export const assets = {
  bin_icon,
  cart_icon,
  credit_card_logo,
  cross_icon,
  dropdown_icon,
  exchange_icon,
  logo,
  logo_jpg,
  menu_icon,
  paypal_logo,
  p_img_about,
  p_img_about2,
  p_img_home,
  p_img_home2,
  profile_icon,
  quality_icon,
  search_bar,
  search_icon,
  star_icon, star_dull_icon,
  support_img
};

export const products = [
    {
        _id: "p_img1_a",
        name: "Pantalón",
        description: "Pantalón de algodón 100%",
        price: 80,
        image: [p_img1_1, p_img1_2, p_img1_3, p_img1_4],
        category: "Pantalón",
        subCategory: "Casual",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true,
    },
    {
        _id: "p_img2_a",
        name: "Camisa",
        description: "Una camisa 50% lino y 50% algodón",
        price: 100,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Camisa",
        subCategory: "Formal",
        sizes: ["M", "L", "XL"],
        date: 1716634345449,
        bestseller: true,
    },
    {
        _id: "p_img3_a",
        name: "Camisa",
        description: "Camisa casual de algodón",
        price: 90,
        image: [p_img3_1, p_img3_2, p_img3_3, p_img3_4],
        category: "Camisa",
        subCategory: "Formal",
        sizes: ["S", "M", "L"],
        date: 1716634345450,
        bestseller: false,
    },
    {
        _id: "p_img4_a",
        name: "Polo",
        description: "Polo clásico 100% algodón",
        price: 60,
        image: [p_img4_1, p_img4_2, p_img4_3, p_img4_4],
        category: "Polo",
        subCategory: "Clásico",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345451,
        bestseller: false,
    },
    {
        _id: "p_img5_a",
        name: "Pantalón Corto",
        description: "Pantalón corto de algodón",
        price: 50,
        image: [p_img5_1, p_img5_2, p_img5_3],
        category: "Pantalón Corto",
        subCategory: "Verano",
        sizes: ["M", "L", "XL"],
        date: 1716634345452,
        bestseller: true,
    },
    {
        _id: "p_img6_a",
        name: "Camiseta",
        description: "Camiseta de algodón suave",
        price: 40,
        image: [p_img6_1, p_img6_2],
        category: "Camiseta",
        subCategory: "Casual",
        sizes: ["S", "M", "L"],
        date: 1716634345453,
        bestseller: false,
    },
    {
        _id: "p_img7_a",
        name: "Camisa",
        description: "Camisa elegante de lino",
        price: 110,
        image: [p_img7_1, p_img7_2],
        category: "Camisa",
        subCategory: "Elegante",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345454,
        bestseller: true,
    },
    {
        _id: "p_img8_a",
        name: "Camisa",
        description: "Camisa de manga larga, ESTA DESCRIPCION QUIERO QUE OCUPE MUCHO TEXTO PARA VER COMO SE DIFERENCIA AL RESTO DE IMAGENES (QUEREMOS QUE SEA SIMETRICO) VER SI PONER 4 LINEAS",
        price: 95,
        image: [p_img8_1],
        category: "Camisa",
        subCategory: "Manga Larga",
        sizes: ["M", "L"],
        date: 1716634345455,
        bestseller: false,
    },
    {
        _id: "p_img9_a",
        name: "Camisa",
        description: "Camisa a cuadros",
        price: 85,
        image: [p_img9_1],
        category: "Camisa",
        subCategory: "Casual",
        sizes: ["S", "M", "L"],
        date: 1716634345456,
        bestseller: false,
    },
    {
        _id: "p_img10_a",
        name: "Camisa",
        description: "Camisa de rayas",
        price: 90,
        image: [p_img10_1],
        category: "Camisa",
        subCategory: "Formal",
        sizes: ["M", "L", "XL"],
        date: 1716634345457,
        bestseller: false,
    },
    {
        _id: "p_img11_a",
        name: "Camisa",
        description: "Camisa básica de algodón",
        price: 70,
        image: [p_img11_1],
        category: "Camisa",
        subCategory: "Casual",
        sizes: ["S", "M", "L"],
        date: 1716634345458,
        bestseller: false,
    },
    {
        _id: "p_img12_a",
        name: "Camisa",
        description: "Camisa de vestir, ESTA DESCRIPCION QUIERO QUE OCUPE MUCHO TEXTO PARA VER COMO SE DIFERENCIA AL RESTO DE IMAGENES (QUEREMOS QUE SEA SIMETRICO Y QUE NO SE MUEVAN LOS BOTONES HACIA ARRIBA O ABAJO POR LA LONGITU DE LA DESCRIPCION",
        price: 120,
        image: [p_img12_1],
        category: "Camisa",
        subCategory: "Elegante",
        sizes: ["M", "L", "XL"],
        date: 1716634345459,
        bestseller: true,
    },
];



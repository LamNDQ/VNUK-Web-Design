const products = [
    { id: 1, name: "Laptop", price: 1500, img: "https://i.pcmag.com/imagery/articles/05gYYpq2gwWk8ADSgQ9zuCR-4.jpg" },
    { id: 2, name: "Điện thoại", price: 800, img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/5_dien_thoai_samsung_gia_duoi_5_trieu_tot_nhat_2025_thumb_72a7a89c76.jpg" },
    { id: 3, name: "Tai nghe", price: 100, img: "https://img.lazcdn.com/g/p/576b2093a12005b7957b1fa1b5646a0e.jpg_720x720q80.jpg" }
];

exports.getAll = () => products;

exports.getById = (id) => products.find(p => p.id == id);

exports.add = (product) => {
    products.push(product)
}
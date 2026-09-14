function searchProducts(keyword) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users?username=${keyword}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể tìm kiếm sản phẩm');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

const searchForm = document.getElementById('searchForm');
const productCards = document.getElementById('productCards');

searchForm.addEventListener('submit', function (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const keyword = searchInput.value.trim();
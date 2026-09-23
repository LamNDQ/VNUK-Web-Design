const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const modal = document.getElementById("movieModal");
const form = document.getElementById("movieForm");
const formTitle = document.getElementById("formTitle");

async function loadMovies() {
    loadingEl.style.display = "block";
    errorEl.textContent = "";

    try {
        const phim = new Phim();
        const movies = await phim.show();

        loadingEl.style.display = "none";

        const movieList = document.getElementById("movieList");
        movieList.innerHTML = "";

        movies.forEach(movie => {
            movieList.innerHTML += `
                <div class="movie-card">
                    <img
                        src="${movie.anhPoster}"
                        alt="${movie.tenPhim}"
                    >
                    <div class="movie-info">
                        <h3>${movie.tenPhim}</h3>
                        <div class="movie-meta">
                            Thời lượng: ${movie.thoiLuong} phút | Năm phát hành: ${movie.namPhatHanh}
                        </div>
                        <p class="desc">${movie.moTa}</p>
                        <p class="rating">
                            Đánh giá: ${movie.danhGia}/100 | Lượt xem: ${movie.luotXem}
                        </p>
                        <div class="movie-buttons">
                            <button class="edit-btn" onclick="editMovie('${movie.id}')">Sửa</button>
                            <button class="delete-btn" onclick="deleteMovie('${movie.id}')">Xóa</button>
                        </div>
                        <button class="watch-btn" onclick="watchMovie('${movie.id}')">Xem Ngay</button>
                    </div>
                </div>
            `;
        });
    } catch (err) {
        loadingEl.style.display = "none";
        errorEl.textContent = err.message;
    }
}

function openAddForm() {
    form.reset();
    document.getElementById("movieId").value = "";
    formTitle.textContent = "Thêm Phim";
    modal.classList.add("show");
}

function closeForm() {
    modal.classList.remove("show");
}

async function editMovie(id) {
    try {
        const phim = new Phim();
        const movies = await phim.show();
        const movie = movies.find(m => m.id === id);

        if (!movie) {
            alert("Không tìm thấy phim");
            return;
        }

        document.getElementById("movieId").value = movie.id;
        document.getElementById("tenPhim").value = movie.tenPhim;
        document.getElementById("thoiLuong").value = movie.thoiLuong;
        document.getElementById("namPhatHanh").value = movie.namPhatHanh;
        document.getElementById("danhGia").value = movie.danhGia;
        document.getElementById("luotXem").value = movie.luotXem;
        document.getElementById("anhPoster").value = movie.anhPoster;
        document.getElementById("moTa").value = movie.moTa || "";

        formTitle.textContent = "Sửa Phim";
        modal.classList.add("show");
    } catch (err) {
        alert(err.message);
    }
}

async function watchMovie(id) {
    alert(`Chưa có video xem ngay cho phim ID: ${id}`);
}

async function deleteMovie(id) {
    if (!confirm("Bạn có chắc muốn xóa phim này?")) {
        return;
    }

    try {
        const phim = new Phim();
        phim.id = id;
        await phim.xoaPhim();
        loadMovies();
    } catch (err) {
        alert(err.message);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = document.getElementById("movieId").value;
    const data = {
        tenPhim: document.getElementById("tenPhim").value,
        thoiLuong: document.getElementById("thoiLuong").value,
        namPhatHanh: document.getElementById("namPhatHanh").value,
        danhGia: document.getElementById("danhGia").value,
        luotXem: document.getElementById("luotXem").value,
        anhPoster: document.getElementById("anhPoster").value,
        moTa: document.getElementById("moTa").value,
    };

    try {
        const phim = new Phim(
            id,
            data.tenPhim,
            data.thoiLuong,
            data.namPhatHanh,
            data.danhGia,
            data.luotXem,
            data.anhPoster,
            data.moTa
        );

        if (id) {
            await phim.capNhatPhim();
        } else {
            await phim.themPhim();
        }

        closeForm();
        loadMovies();
    } catch (err) {
        alert(err.message);
    }
});

document.getElementById("searchInput").addEventListener("input", async (e) => {
    const keyword = e.target.value.toLowerCase().trim();

    if (!keyword) {
        loadMovies();
        return;
    }

    try {
        const phim = new Phim();
        const movies = await phim.show();
        const filtered = movies.filter(m =>
            m.tenPhim.toLowerCase().includes(keyword)
        );

        const movieList = document.getElementById("movieList");
        movieList.innerHTML = "";

        filtered.forEach(movie => {
            movieList.innerHTML += `
                <div class="movie-card">
                    <img
                        src="${movie.anhPoster}"
                        alt="${movie.tenPhim}"
                    >
                    <div class="movie-info">
                        <h3>${movie.tenPhim}</h3>
                        <div class="movie-meta">
                            Thời lượng: ${movie.thoiLuong} phút | Năm phát hành: ${movie.namPhatHanh}
                        </div>
                        <p class="desc">${movie.moTa}</p>
                        <p class="rating">
                            Đánh giá: ${movie.danhGia}/100 | Lượt xem: ${movie.luotXem}
                        </p>
                        <div class="movie-buttons">
                            <button class="edit-btn" onclick="editMovie('${movie.id}')">Sửa</button>
                            <button class="delete-btn" onclick="deleteMovie('${movie.id}')">Xóa</button>
                        </div>
                        <button class="watch-btn" onclick="watchMovie('${movie.id}')">Xem Ngay</button>
                    </div>
                </div>
            `;
        });
    } catch (err) {
        errorEl.textContent = err.message;
    }
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeForm();
    }
});

loadMovies();

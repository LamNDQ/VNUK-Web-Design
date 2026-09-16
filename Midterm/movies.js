const API_URL = 'https://6aa51f721397053d42bb7937.mockapi.io/movies';

class Phim {
    constructor(
        id,
        tenPhim,
        thoiLuong,
        namPhatHanh,
        danhGia,
        luotXem,
        anhPoster,
        moTa
    ) {
        this.id = id;
        this.tenPhim = tenPhim;
        this.thoiLuong = thoiLuong;
        this.namPhatHanh = namPhatHanh;
        this.danhGia = danhGia;
        this.luotXem = luotXem;
        this.anhPoster = anhPoster;
        this.moTa = moTa;
    }

    // READ
    async show() {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Không thể lấy danh sách phim");
        }

        return await response.json();
    }

    // CREATE
    async themPhim() {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tenPhim: this.tenPhim,
                thoiLuong: this.thoiLuong,
                namPhatHanh: this.namPhatHanh,
                danhGia: this.danhGia,
                luotXem: this.luotXem,
                anhPoster: this.anhPoster,
                moTa: this.moTa
            })
        });

        if (!response.ok) {
            throw new Error("Không thể thêm phim");
        }

        return await response.json();
    }

    // UPDATE
    async capNhatPhim() {
        const response = await fetch(
            `${API_URL}/${this.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tenPhim: this.tenPhim,
                    thoiLuong: this.thoiLuong,
                    namPhatHanh: this.namPhatHanh,
                    danhGia: this.danhGia,
                    luotXem: this.luotXem,
                    anhPoster: this.anhPoster,
                    moTa: this.moTa
                })
            }
        );

        if (!response.ok) {
            throw new Error("Không thể cập nhật phim");
        }

        return await response.json();
    }

    // DELETE
    async xoaPhim() {
        const response = await fetch(
            `${API_URL}/${this.id}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("Không thể xóa phim");
        }

        return await response.json();
    }
}


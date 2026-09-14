function getUser() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể lấy dữ liệu từ API');
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

getUser()
    .then(data => {
        // for (let index = 0; index < users.length; index++) {
        //      cosnt element = users[index];
        //  } 
        //  console.log ('Danh sach người dùng:', users[1].username);
        console.log('Tên người dùng:', data);
        console.log('Tổng số người dùng:', data.length);
    })
    .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
    })

function addUser(newUser) {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể thêm người dùng');
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

const newUser = {
    name: 'John Doe VTC_ Mr Dinh',
    username: 'johndoe',
    email: 'johndoe@example.com',
};

addUser(newUser)
    .then(data => {
        console.log('Người dùng mới đã được thêm:', data);
    })
    .catch(error => {
        console.error('Đã xảy ra lỗi khi thêm người dùng:', error);
    });
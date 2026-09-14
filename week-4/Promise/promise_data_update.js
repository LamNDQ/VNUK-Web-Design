function updateUser(userId, newData) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(newData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể cập nhật người dùng');
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
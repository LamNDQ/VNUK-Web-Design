function deleteUser(userId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể xóa người dùng');
                }
                resolve("Người dùng đã được xóa thành công");
            })
            .catch(error => {
                reject(error);
            });
    });
}

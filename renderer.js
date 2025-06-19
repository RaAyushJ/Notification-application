window.api.getNotifications().then(data => {
    const container = document.getElementById('notifications');
    data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<b>${item.TimeCreated}</b><br>${item.Message}<hr>`;
        container.appendChild(div);
    });
}).catch(err => {
    console.error("Error fetching notifications:", err);
});
window.api.getNotifications().then(data => {
    const container = document.getElementById('notifications');
    data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<b>${item.TimeCreated}</b><br>${item.Message}<hr>`;
        container.appendChild(div);
    });
}).catch(err => {
    console.error("Error fetching notifications:", err);
});

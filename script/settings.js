document.getElementById('wifi-toggle').addEventListener('change', (event) => {
    if (event.target.checked) {
        console.log('Wi-Fi is ON');
    } else {
        console.log('Wi-Fi is OFF');
    }
});

document.getElementById('bluetooth-toggle').addEventListener('change', (event) => {
    if (event.target.checked) {
        console.log('Bluetooth is ON');
    } else {
        console.log('Bluetooth is OFF');
    }
});

document.getElementById('darkmode-toggle').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        console.log('Dark Mode is ON');
    } else {
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#333';
        console.log('Dark Mode is OFF');
    }
});

// fetch('http://128.199.196.16:8004/users/', {
//     headers: {
//         'Origin': '192.168.254.47'
//     }
// })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Network response was not ok');
//         }
//     })
//     .then(data => {
//         console.log('Response data:', data);
//     })
//     .catch(error => {
//         console.error('There was an error:', error);
//     });


const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('origin', 'https://facebook.com');
fetch('http://128.199.196.16:8004/users/', {
    headers: headers
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
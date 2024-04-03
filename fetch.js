fetch('http://128.199.196.16:8004/users/')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    console.log('Response data:', data);
  })
  .catch(error => {
    console.error('There was an error:', error);
  });
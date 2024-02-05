const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

function getCookies() {
  setTimeout(() => {
    let output = '';
    cookies.forEach((cookie) => {
      output += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createCookie(newCookie, callback) {
  setTimeout(() => {
    cookies.push(newCookie);
    callback();
  }, 2000);
}

// Progression 5: calling function
createCookie(newCookie, getCookies);